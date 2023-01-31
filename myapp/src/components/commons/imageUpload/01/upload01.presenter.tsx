import * as W from './upload01.styles'
import {IUpload01Props} from './upload01.types'


export default function UploadPresenter(props: IUpload01Props) {
    return(
        <W.RowWrap>
            {/* {props.fileUrl ? ( 
                <W.Imgs
                        onClick={props.onClickUpload}
                        src={`https://storage.googleapis.com/${props.fileUrl}`} />
        ) : (
                <W.UploadBtn
                    onClick={props.onClickUpload}>
                    <span style={{color : "lightgray",fontSize: "28px"}}>+</span>
                </W.UploadBtn>
        )} */}

        {props.fileUrl &&
            <W.Imgs
                onClick={props.onClickUpload}
                src={`https://storage.googleapis.com/${props.fileUrl}`} />
        }

        <W.UploadHidden 
            ref={props.imgRef}
            type="file"
            onChange={props.onChangFile}
        />
        </W.RowWrap>

    )
}