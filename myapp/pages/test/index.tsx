import { Button, Modal } from 'antd';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DaumPostcodeEmbed} from 'react-daum-postcode';
import Script from 'next/script';

declare const window: typeof globalThis & {
    kakao: any;
  };


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



    useEffect(() => {
          // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!
          const script = document.createElement("script"); // html에 script라는 태그(Element)를 만든다.
          script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?appkey='키입력22'&autoload=false";
          document.head.appendChild(script);
        
          script.onload = () => {
                window.kakao.maps.load(function () {
                    const container = document.getElementById("map");
              const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
              };
              const map = new window.kakao.maps.Map(container, options);
                })
            }
    },[])

    return(
        <>
            <div>지도</div>
            <div id="map" style={{width:"500px", height: "400px"}}></div>

                <Script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=02d08b860a5e9190e50c1d066917609a"></Script>

            
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