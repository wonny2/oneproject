import { useQuery } from "@apollo/client";
import {
  FETCH_USER_LOGGED_IN,
  RESET_USER_PASSWORD,
  UPDATE_USER,
} from "../mypage.queries";
import MyInfoPresenter from "./myinfo.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { MyInfoContainerProps } from "../mypage.types";

export default function MyInfoContainer(props: MyInfoContainerProps) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const [password, setPassword] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickPasswordModal = () => {
    setPasswordModal((prev) => !prev);
  };

  const onClickResetPassword = async () => {
    if (password.length < 8) return alert("최소 8자 이상 입력해주세요");

    try {
      const result = await resetUserPassword({
        variables: { password },
      });
      alert("비밀번호가 변경되었습니다.");
      setPassword("");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <MyInfoPresenter
      data={data}
      onOpenNickModal={props.onOpenNickModal}
      onChangeNickName={props.onChangeNickName}
      // onClickNickName={props.onClickNickName}
      openModal={props.openModal}
      onUpdateNickName={props.onUpdateNickName}
      nickName={props.nickName}
      password={password}
      passwordModal={passwordModal}
      onChangePassword={onChangePassword}
      onClickResetPassword={onClickResetPassword}
      onClickPasswordModal={onClickPasswordModal}
    />
  );
}
