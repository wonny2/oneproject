import * as Info from "../mypage.styles";
import { MyInfoProps } from "../mypage.types";
import { getDate } from "../../../../commons/utils/utils";
import { Modal } from "antd";

export default function MyInfoPresenter(props: MyInfoProps) {
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
          <img onClick={props.onOpenNickModal} src="/images/pencil.png" />
        </div>
      </Info.SubWrap>

      <Info.SubWrap>
        <span>가 입 일</span>
        <div>{getDate(props.data?.fetchUserLoggedIn.createdAt)}</div>
      </Info.SubWrap>

      <Info.Password onClick={props.onClickPasswordModal}>
        비밀번호 변경
      </Info.Password>

      <Modal
        title="비밀번호 변경"
        open={props.passwordModal}
        onOk={props.onClickResetPassword}
        onCancel={props.onClickPasswordModal}
      >
        <Info.Input
          placeholder="변경할 비밀번호를 입력해주세요. (최소8자 이상)"
          minLength={8}
          value={props.password}
          onChange={props.onChangePassword}
          type="password"
        />
      </Modal>

      <Modal
        title="닉네임 변경"
        open={props.openModal}
        onCancel={props.onOpenNickModal}
        onOk={props.onUpdateNickName}
      >
        <Info.Input
          placeholder="변경할 닉네임을 입력해주세요 (최대 10자)"
          onChange={props.onChangeNickName}
          maxLength={10}
          value={props.nickName}
        />
      </Modal>
    </Info.SubContainerWrap>
  );
}
