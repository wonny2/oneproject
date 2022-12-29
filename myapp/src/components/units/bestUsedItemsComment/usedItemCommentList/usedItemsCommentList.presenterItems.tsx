import {IPresenterItemsProps} from './usedItemsCommentList.types'
import * as C from './usedItemsCommentList.styles'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_USED_ITEM_QUESTION_ANSWER, FETCH_USED_ITEM_QUESTION_ANSWERS } from './usedItemsCommentList.queries'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { getDate } from '../../../../commons/utils/utils'

export default function UsedItemsCommentPresenterItems(props:IPresenterItemsProps) {

    const router = useRouter();
    
    const [contents, setContents] = useState("")
    const [commentOpen, setCommentOpen] = useState(false);

    const onClickOpen = () => {
        setCommentOpen(prev => !prev)
        // console.log(props.el._id)
    };

    const onChangeContents = (event:ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    };

    // 대댓글
    const [createUseditemQuestionAnswer] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER);

    const {data} = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
        variables: {useditemQuestionId: props.el._id}
    });

    const answers = data?.fetchUseditemQuestionAnswers.map((i:any) => i.contents);
    const names = data?.fetchUseditemQuestionAnswers.map((i:any) => i.user.name)
    const createdAt = data?.fetchUseditemQuestionAnswers.map((i:any) => i.createdAt)
    
    // console.log(data?.fetchUseditemQuestionAnswers[0]?.user.name);
    // console.log(data?.fetchUseditemQuestionAnswers)
    // console.log(data?.fetchUseditemQuestionAnswers[1]?.contents)

    // 대댓글입력
    const onClickAnswer = async () => {
        if(!contents) return alert("댓글을 입력해주세요");

        try{
            const result = await createUseditemQuestionAnswer({
                variables : { createUseditemQuestionAnswerInput : {
                    contents
                }, useditemQuestionId: String(props.el._id)}
            })
            console.log(result.data)
            alert("대댓글이 입력되었습니다.")
            location.reload()
        }catch(error){
            if(error instanceof Error) {
                alert(error.message)
            }
        };
    };

    
    return(
        <C.Wrapper>
            <C.ContentsWrap id={props.el._id}>
                    <C.UserWrap>
                        <C.RowWrap>
                            <Avatar icon={<UserOutlined />} />
                            <C.Name>{props.el.user.name[0]}</C.Name>
                        </C.RowWrap>
                            <C.Date>{getDate(props.el.createdAt)}</C.Date>
                        
                    </C.UserWrap>
                    <C.Contents>{props.el.contents}</C.Contents>
                <C.CommentOpenWrap>
                    <div style={{color: "gray"}}>{data?.fetchUseditemQuestionAnswers.length}개의 댓글</div>
                    <C.CommentOpen onClick={onClickOpen}>{commentOpen ? "댓 글 닫 기" : "댓 글 보 기"}</C.CommentOpen>
                </C.CommentOpenWrap>
                {commentOpen
                    ?
                    <C.AnswerWrap>
                        {answers.map((i:any, index:number) => (
                            <C.ColumnWrap key={index}>
                                <C.UserWrap>
                                    <C.RowWrap>
                                        <Avatar icon={<UserOutlined />} />
                                        <C.Name>{names[index]}</C.Name>
                                    </C.RowWrap>
                                    <C.Date>{getDate(createdAt[index])}</C.Date>
                                </C.UserWrap>
                                <C.AnswerContents>{i}</C.AnswerContents>
                            </C.ColumnWrap>
                        ))}
                        <C.UserWrap>
                            <C.AnswerInput type='text' onChange={onChangeContents}/>
                            <C.AnswerBtn onClick={onClickAnswer}>댓글등록</C.AnswerBtn>
                        </C.UserWrap>
                    </C.AnswerWrap>
                    :
                    <></>
                }
            </C.ContentsWrap>
            <C.Line />
        </C.Wrapper>
    )
}