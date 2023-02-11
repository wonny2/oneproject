import { UP_LOAD_FILE } from "./upload02.queries"
import { useMutation } from "@apollo/client"
import {useRef, ChangeEvent, useState } from "react";
import { IUpload02Props } from "./upload02.types";
import Upload02Presenter from "./upload02.presenter";


export default function Upload02Container(props:IUpload02Props) {

    const [uploadFile] = useMutation(UP_LOAD_FILE);
    
    const imgRef = useRef<HTMLInputElement>(null);

    const onClickUpload = () => {
        imgRef.current?.click();
    }

    const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) => {
        const ImageFile = event.target.files?.[0] // 파일이 있을 수도 없을 수도 있기 때문에 // FileList의 객체인 event.target.files에서 파일 목록을 엑세스 할 수 있다.
        try{
            const result = await uploadFile({
                variables: {file: ImageFile}
            });
            props.onClickFileUrls(result.data?.uploadFile.url, props.index)
        } catch (err) {
            if(err instanceof Error) {
                alert(err.message)
            };
        };
    };

    return (
        <>
            <Upload02Presenter 
                onClickUpload={onClickUpload}
                imgRef={imgRef}
                onChangeFile={onChangeFile}
                fileUrl={props.fileUrl}
            />
        </>
    )
};