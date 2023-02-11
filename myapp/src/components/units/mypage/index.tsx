import { useQuery } from "@apollo/client";
import {
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./mypage.queries";
import * as M from "./mypage.styles";
import { getDate } from "../../../commons/utils/utils";
import { MouseEvent, useState, ChangeEvent, useRef, useEffect } from "react";
import MyInfoContainer from "./myinfo/myinfo.container";
import MyBoardsContainer from "./myboards/myboards.container";
import MyPickedContainer from "./mypicked/mypicked.container";
import { useMutation } from "@apollo/client";
import { Modal, Tooltip } from "antd";
import { withAuth } from "../../../commons/hocs/withAuth";

const MyPageMain = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const InfoArr = ["내 정보", "후원등록글", "찜한 게시글"];

  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [componentNum, setComponentNum] = useState(1);
  const [picture, setPicture] = useState("");
  const [iconChange, setIconChange] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [nickName, setNickName] = useState("");

  const imgRef = useRef<HTMLInputElement>(null);

  const onClickImgRef = () => {
    imgRef.current?.click();
  };

  const onClickId = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    setComponentNum(Number(event.target.id));
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // imgRef.current?.click();
    const ImageFile = event.target.files?.[0];

    try {
      const result = await uploadFile({
        variables: { file: ImageFile },
      });
      console.log(result.data?.uploadFile.url);
      setPicture(result.data?.uploadFile.url);
      setIconChange(true);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const onUpdateProfileImg = async () => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            picture,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      alert("프로필 이미지 변경되었습니다.");
      setIconChange(false);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const onOpenNickModal = () => {
    setOpenModal((prev) => !prev);
    setNickName("");
  };

  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    setNickName(event.target.value);
  };

  const onUpdateNickName = async () => {
    if (!nickName) return alert("변경할 닉네임을 입력해주세요");

    if (data?.fetchUserLoggedIn.name === nickName)
      return alert("이전 닉네임과 동일합니다.");

    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name: nickName,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      setOpenModal(false);
      alert("닉네임 변경 완료되었습니다.");
      setNickName("");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  // 이미지 날라가는 게 있어서
  useEffect(() => {
    if (data?.fetchUserLoggedIn.picture) {
      setPicture(data?.fetchUserLoggedIn.picture);
    }
  }, [data]);

  return (
    <M.Wrapper>
      <M.ProfileWrap>
        <M.InfoWrap>
          {!data?.fetchUserLoggedIn.picture ? (
            <M.ImgWrap>
              {!picture ? (
                <M.Img src="/images/user.png" />
              ) : (
                <M.Img src={`https://storage.googleapis.com/${picture}`} />
              )}

              {!iconChange ? (
                <M.Icon src="/images/profileimg.png" onClick={onClickImgRef} />
              ) : (
                <Tooltip
                  open={iconChange}
                  placement="right"
                  title="클릭해주세요"
                >
                  <M.Icon
                    src="/images/checked.png"
                    onClick={onUpdateProfileImg}
                  />
                </Tooltip>
              )}
            </M.ImgWrap>
          ) : (
            <M.ImgWrap>
              {!picture ? (
                <M.Img src="/images/user.png" />
              ) : (
                <M.Img src={`https://storage.googleapis.com/${picture}`} />
              )}

              {!iconChange ? (
                <M.Icon src="/images/profileimg.png" onClick={onClickImgRef} />
              ) : (
                <Tooltip
                  open={iconChange}
                  placement="right"
                  title="클릭해주세요"
                >
                  <M.Icon
                    src="/images/checked.png"
                    onClick={onUpdateProfileImg}
                  />
                </Tooltip>
              )}
            </M.ImgWrap>
          )}

          <M.NicknameWrap>
            <M.Nickname>{data?.fetchUserLoggedIn.name}</M.Nickname>
            <span>{data?.fetchUserLoggedIn.email}</span>
            <span>{getDate(data?.fetchUserLoggedIn.createdAt)}</span>
          </M.NicknameWrap>
        </M.InfoWrap>

        <M.MenuWrap>
          {InfoArr.map((el, index) => (
            <M.MenuTitle key={index} id={String(index + 1)} onClick={onClickId}>
              {el}
            </M.MenuTitle>
          ))}
        </M.MenuWrap>
      </M.ProfileWrap>

      <M.ContentsWrap>
        {componentNum === 1 ? (
          <MyInfoContainer
            onUpdateNickName={onUpdateNickName}
            onChangeNickName={onChangeNickName}
            onOpenNickModal={onOpenNickModal}
            openModal={openModal}
            nickName={nickName}
          />
        ) : componentNum === 2 ? (
          <MyBoardsContainer />
        ) : (
          <MyPickedContainer />
        )}
      </M.ContentsWrap>
      <Modal></Modal>
      <M.HiddenImgButton type="file" ref={imgRef} onChange={onChangeFile} />
    </M.Wrapper>
  );
};

export default withAuth(MyPageMain);
