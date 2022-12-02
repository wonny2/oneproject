import { Modal } from 'antd';
import { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import {Button} from './address.styles'



export default function Address() {

    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState("")

    const ShowModal = () => {
        setOpen(prev => !prev)
    }

    const handleComplete =(data: any) => {
        console.log(data)
        ShowModal()
        setAddress(data.address)
    }
                

    return(
        <>
            <Button onClick={ShowModal}>주소 찾기</Button>
            {/* onCancel={ShowModal} onOk={handleComplete} */}
            <Modal open={open} title="주소 입력" onCancel={ShowModal}> 
                {open && <DaumPostcodeEmbed onComplete={handleComplete} />}
            </Modal>
            <div>{address}</div>
        </>

    
    )
}