import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useDaumPostcodePopup , DaumPostcodeEmbed} from 'react-daum-postcode';


export default function TestPage() {

    const [openModal, setOpenModal] = useState(false)
    const [address, setAddress] = useState('')

    const onClickOpenModal = () => {
        setOpenModal(prev => !prev)
    };

    const addressInfo = (data:any) => {
        setAddress(data.address)
        console.log(data)
    }
    return(
        <>
            <Button onClick={onClickOpenModal}>주소검색</Button>
            {openModal
            ?   <Modal open={openModal} onCancel={onClickOpenModal} onOk={onClickOpenModal}>
                    <DaumPostcodeEmbed onClose={onClickOpenModal} style={{padding: "0px 15px"}} onComplete={addressInfo} />
                </Modal>
            : <></>
        }
            <div>{address}</div>
        </>
    )
}