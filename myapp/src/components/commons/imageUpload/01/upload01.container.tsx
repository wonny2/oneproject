import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import UploadPresenter from "./upload01.presenter";
import { UP_LOAD_FILE } from "./upload01.queries";
import { checkFile } from "../../../../commons/utils/utils";

export default function UploadContainer(props:any) {

    const imgRef = useRef<HTMLInputElement>(null);

    const onClickUpload = () => {
        imgRef.current?.click();
    }

    const [uploadFile] = useMutation(UP_LOAD_FILE);

    // 이미지 넣어지면 url만드는 api
    const onChangFile = async (event:ChangeEvent<HTMLInputElement>) => {
        // 이미지 검증함수를 적용해서 true인지 먼저 검사하기.
        const ImageFile = event.target.files?.[0]

        const isValid = checkFile(ImageFile)
            if(!isValid) return;

        try{
            // 우리가 선택한 사진을 ImageFile변수에 담은 것. 해당 변수를 variables에 넣어서 보내주면 된다.
               const result =  await uploadFile({ variables : {file : ImageFile }})
                    console.log(result.data?.uploadFile.url)
                    props.onClickFileUrls(result.data.uploadFile.url , props.index) // 중요한 부분: 얘를 해줘야 boardContainer에 있는 state에 값을 넣어주는 것이다.
        } catch(error) {
            if(error instanceof Error) {
                alert(error + "여기서 나는 에러입니다.")

            }
        }
    }


    return(
        <UploadPresenter 
            onChangFile={onChangFile} // 이미지 API
            onClickUpload={onClickUpload} // Ref
            imgRef={imgRef}
            fileUrl={props.fileUrl} // el
            index={props.index}
            onClickFileUrls={props.onClickFileUrls} // state값 바꿀 함수
        />
    )
}