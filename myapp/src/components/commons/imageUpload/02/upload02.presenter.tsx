import * as W from './upload02.styles'
import { IUploadPresenterProps } from './upload02.types'

export default function Upload02Presenter(props: IUploadPresenterProps) {
    return(
        <>
            {props.fileUrl ? ( 
                <W.Imgs
                        onClick={props.onClickUpload}
                        src={`https://storage.googleapis.com/${props.fileUrl}`} />
        ) : (
                <W.UploadBtn
                    onClick={props.onClickUpload}>
                    <W.ICamera src='/images/camera.png'/>
                </W.UploadBtn>
        )}
            <W.UploadHidden 
                ref={props.imgRef}
                type="file" 
                onChange={props.onChangeFile}
            />
        </>
    )
}