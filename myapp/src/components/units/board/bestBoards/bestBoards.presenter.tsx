import * as L from './bestBoards.styles'
import {IBestBoardsPropsUI} from './bestBoards.types'
import {v4 as uuidv4} from 'uuid'



export default function BestBoardsPresenter(props: IBestBoardsPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <L.CardWrap>
                    {props.data?.fetchBoardsOfTheBest.map((item:any, index:number) => (
                        <L.Card key={index} id={item._id} onClick={props.onClickDetail}>
                            <div> title <br /> {item.title}</div>
                            <div> contents <br /> {item.contents}</div>
                            <div> 좋아요 수 <br /> {item.likeCount}</div>
                        </L.Card>
                    ))}
                </L.CardWrap>
                
                <L.MenuBar>
                    <L.TextWrap>
                        <div onClick={props.MoveToList}>게시글 리스트</div>
                        <div onClick={props.MoveToWrite}>글쓰기</div>
                    </L.TextWrap>
                </L.MenuBar>

            </L.ContentsWrap>
        </L.Wrapper>
    )
}0