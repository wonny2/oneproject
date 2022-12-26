import { IModalProps } from "./modal.types";
import 'semantic-ui-css/semantic.min.css'
import {Button,Modal} from 'semantic-ui-react'
import styled from "@emotion/styled";

const Input = styled.input`
    outline:none;
    border: 1px solid green;
    height: 24px;
    width: 23%;
    border-radius: 8px;
    padding-left: 20px;
    margin-top: 10px;
    font-size: 12px;
`

export default function ModalContainer(props: IModalProps) {

    return(
        <div>
            <Button onClick={props.onClickOpen}>삭제하기</Button>
                <Modal open={props.open}>
                    <Modal.Header>삭제하시겠습니까??</Modal.Header>
                    <Modal.Content style={{fontSize:"17px"}}>
                        삭제하시려면 댓글 비밀번호를 입력해주세요
                        <br />
                        <Input type="password" onChange={props.onChangePassword}/>
                    </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={props.onClickDeleteComment}>삭제하기</Button>
                    <Button positive onClick={props.onClickOpen}>취소하기</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}