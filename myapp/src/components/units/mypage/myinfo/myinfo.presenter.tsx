import * as Info from "../mypage.styles";
import { MyInfoProps } from "../mypage.types";
import { getDate } from "../../../../commons/utils/utils";
import { Modal } from "antd";
import { ChangeEvent, useState, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, UPDATE_USER } from "../mypage.queries";

export default function MyInfoPresenter(props: MyInfoProps) {
  const [openModal, setOpenModal] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);
  const [nickName, setNickName] = useState("");

  const onOpenNickModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    setNickName(event.target.value);
  };

  const onClickNickName = () => {
    if (!nickName) return alert("변경할 닉네임을 입력해주세요");

    try {
      const result = updateUser({
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
      console.log(result);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <Info.SubContainerWrap>
      <Info.SubWrap>
        <span>계 정</span>
        <div>{props.data?.fetchUserLoggedIn.email}</div>
      </Info.SubWrap>

      <Info.SubWrap>
        <span>닉 네 임</span>
        <div>
          {props.data?.fetchUserLoggedIn.name}
          <img onClick={onOpenNickModal} src="/images/pencil.png" />
        </div>
      </Info.SubWrap>

      <Info.SubWrap>
        <span>가 입 일</span>
        <div>{getDate(props.data?.fetchUserLoggedIn.createdAt)}</div>
      </Info.SubWrap>
      <Info.Password>비밀번호 변경</Info.Password>
      <Modal
        title="닉네임 변경"
        open={openModal}
        onCancel={onOpenNickModal}
        onOk={onClickNickName}
      >
        <Info.Input
          placeholder="변경할 닉네임을 입력해주세요 (최대 10자)"
          onChange={onChangeNickName}
          maxLength={10}
        />
      </Modal>
    </Info.SubContainerWrap>
  );
}
