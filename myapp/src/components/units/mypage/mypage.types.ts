import { ChangeEvent } from "react";

export interface MyInfoProps {
  data: any;
  openModal: boolean;
  onOpenNickModal: () => void;
  onChangeNickName: (event: ChangeEvent<HTMLInputElement>) => void;
  //   onClickNickName: () => void;
  onUpdateNickName: () => void;
  nickName: string;
  password: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickResetPassword: () => Promise<void>;
  onClickPasswordModal: () => void;
  passwordModal: boolean;
}

export interface MyInfoContainerProps {
  onUpdateNickName: () => void;
  onOpenNickModal: () => void;
  openModal: boolean;
  nickName: string;
  onChangeNickName: (event: ChangeEvent<HTMLInputElement>) => void;
}
