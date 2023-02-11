import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, UPDATE_USER } from "../mypage.queries";
import MyInfoPresenter from "./myinfo.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { MyInfoContainerProps } from "../mypage.types";

export default function MyInfoContainer(props: MyInfoContainerProps) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (!(event.target instanceof HTMLInputElement)) return;
  //   setNickName(event.target.value);
  // };

  // const onClickNickName = () => {
  //   if (!nickName) return alert("변경할 닉네임을 입력해주세요");

  //   try {
  //     const result = updateUser({
  //       variables: {
  //         updateUserInput: {
  //           name: nickName,
  //         },
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USER_LOGGED_IN,
  //         },
  //       ],
  //     });
  //     setOpenModal(false);
  //     setNickName("");
  //     alert("닉네임 변경 완료되었습니다.");
  //     console.log(result);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       alert(err.message);
  //     }
  //   }
  // };

  return (
    <MyInfoPresenter
      data={data}
      onOpenNickModal={props.onOpenNickModal}
      onChangeNickName={props.onChangeNickName}
      // onClickNickName={props.onClickNickName}
      openModal={props.openModal}
      onUpdateNickName={props.onUpdateNickName}
      nickName={props.nickName}
    />
  );
}
