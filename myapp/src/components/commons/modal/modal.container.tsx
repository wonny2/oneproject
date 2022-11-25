import { IModalProps } from "./modal.types";
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Button,Modal} from 'semantic-ui-react'

export default function ModalContainer(props: IModalProps) {

    return(
        <div>
            <Button onClick={props.onClickOpen}>삭제하기</Button>
                <Modal open={props.open}>
                    <Modal.Header>삭제하시겠습니까??</Modal.Header>
                    <Modal.Content>
                        삭제하시려면 댓글 비밀번호를 입력해주세요
                        <br />
                        <input type="password" onChange={props.onChangePassword}/>
                    </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={props.onClickDeleteComment}>삭제하기</Button>
                    <Button positive onClick={props.onClickOpen}>취소하기</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}