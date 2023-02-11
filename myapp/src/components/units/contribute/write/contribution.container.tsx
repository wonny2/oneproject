import { useMutation } from "@apollo/client";
import { useState, useRef, ChangeEvent } from "react";
import { set, useForm } from "react-hook-form";
import ContributionPresenter from "./contribution.presenter";
import { CREATE_USED_ITEM } from "./contribution.queries";
import { checkFile } from "../../../../commons/utils/utils";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { withAuth } from "../../../../commons/hocs/withAuth";

const ContributionContainer = () => {
  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [openModal, setOpenModal] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [priceError, setPriceError] = useState("");
  const [addressError, setAddressError] = useState("");

  const addressInfo = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    console.log(data);
  };

  const onChangePrice = (event: number) => {
    setPrice(event);
    console.log(price);
  };

  const onModalOnOff = () => {
    setOpenModal((prev) => !prev);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(1, "1자리 이상 입력해주세요")
      .max(10, "최대 10자리 입니다.")
      .required("필수 입력값 입니다."),
    remarks: yup
      .string()
      .min(5, "5자리 이상 입력해주세요")
      .max(20, "최대 20자리 입니다.")
      .required("필수 입력값 입니다."),
    addressDetail: yup.string().required("나머지 주소를 입력해주세요"),
  });

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const MoveToBack = () => {
    router.push("/boards");
  };

  // 등록하기
  const onCreateContribution = async (data: any) => {
    if (price === 0) {
      setPriceError("가격을 입력해주세요");
    } else {
      setPriceError("");
    }

    if (!address) {
      setAddressError("주소를 입력해주세요");
    } else {
      setAddressError("");
    }

    if (!fileUrls[0] && !fileUrls[1] && !fileUrls[2]) {
      return alert("최소 이미지 1장 등록해주세요");
    }

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: "123",
            price: Number(price),
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      alert("등록되었습니다.");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <ContributionPresenter
      handleSubmit={handleSubmit}
      register={register}
      onChangePrice={onChangePrice}
      price={price}
      fileUrls={fileUrls}
      onClickFileUrls={onClickFileUrls}
      openModal={openModal}
      onModalOnOff={onModalOnOff}
      addressInfo={addressInfo}
      zipcode={zipcode}
      address={address}
      formState={formState}
      onCreateContribution={onCreateContribution}
      priceError={priceError}
      addressError={addressError}
      MoveToBack={MoveToBack}
    />
  );
};

export default withAuth(ContributionContainer);
