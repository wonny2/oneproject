import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import BoardWritePresenter from "./boardWrite.presenter";
import {
  CREATE_BOARD,
  CREATE_USED_ITEM,
  UPDATE_BOARD,
} from "./boardWrite.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { IRegisterDataType, IUpdateInputValue } from "./boardWrite.types";
import { priceTag } from "../../../../commons/utils/utils";

export default function BoardWriteContainer(props: any) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [openModal, setOpenModal] = useState(false);
  const [price, setPrice] = useState(0);

  const onChangePrice = (event: number) => {
    setPrice(event);
  };

  // yup 에러조건, 에러메세지 생성
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, "최소 1자리 이상 입력해주세요")
      .max(100, "최대 100자리까지 입력 가능합니다."),
    contents: yup.string().min(2, "내용을 입력해주세요"),
    // writer : yup.string().required("작성자를 입력해주세요")
  });

  // 이미지 images
  // 이 부분이 01로 안 가고 여기에 있는 이유는
  // state값이 여기에 있기 때문이다.
  const onClickFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // react-hook-form
  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // quill + react-hook-form
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // 뜻: contents라는 state명으로 value값을 넣는다.
    // 추가로 조건부 렌더링을 이용해서 빈 값일 때 태그가 같이 나오는 것을 바꿔준다.
    trigger("contents");
    console.log(value);
  };

  // 게시글 등록
  const onClickCreateBoard = async (data: IRegisterDataType) => {
    if (!data.contents) {
      return alert("내용을 입력해주세요");
    }

    if (!fileUrls[0] && !fileUrls[1] && !fileUrls[2]) {
      return alert("최소 이미지 1장 등록해주세요");
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            images: fileUrls,
            writer: data.writer,
          },
        },
      });
      alert("등록되었습니다.");
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
  };

  // 상품 등록하기
  const onClickCreateUsedItem = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: fileUrls,
            useditemAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      alert("상품이 등록되었습니다.");
      // router.push(`/boards/${result.data?.createUesditem._id}`)
      console.log(result.data?.createUseditem);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 수정하기
  const onClickUpdate = async (data: any) => {
    // 꼭 들어가야 하는 부분을 넣어두고
    const updatedValue = {
      title: data.title,
      contents: "",
      writer: data.writer,
    };

    // 조건문을 이용해 state가 빈값이 아닌 경우에만 객체에 key,value값을 추가해준다.
    if (data.contents !== "") {
      updatedValue.contents = data.contents;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: updatedValue.title,
            contents: updatedValue.contents,
            images: fileUrls,
          },
          boardId: String(router.query.boardId),
        },
      });
      console.log(data.contents);
      alert("수정되었습니다.");
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 수정시 이미지 등록된 이미지 보이도록
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data.fetchBoard.images]);
    }
  }, [props.data]);

  const MoveToList = () => {
    router.push("/boards");
  };

  const onClickOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  const addressInfo = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    console.log(data);
  };

  return (
    <BoardWritePresenter
      onChangeContents={onChangeContents}
      onClickCreateBoard={onClickCreateBoard}
      fileUrls={fileUrls}
      onClickFileUrls={onClickFileUrls}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
      MoveToList={MoveToList}
      openModal={openModal}
      onClickOpenModal={onClickOpenModal}
      addressInfo={addressInfo}
      address={address}
      zipcode={zipcode}
      onClickCreateUsedItem={onClickCreateUsedItem}
      price={price}
      onChangePrice={onChangePrice}
    />
  );
}
