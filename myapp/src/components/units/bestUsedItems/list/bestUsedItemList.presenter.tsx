import * as L from './bestUsedItemList.styles'
import {IBestBoardsPropsUI} from './bestUsedItemList.types'
import {v4 as uuidv4} from 'uuid'



export default function BestUsedItemPresenter(props: IBestBoardsPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <L.CardWrap>
                    {props.usedItems?.fetchUseditemsOfTheBest.map((item:any, index:number) => (
                        <L.Card key={index} onClick={props.onClickDetail}>
                            <div id={item._id}>
                                <div id={item._id}> title <br /> {item.remarks}</div>
                                <div id={item._id}> contents <br /> {item.contents}</div>
                                <div id={item._id}> 상품이름 <br /> {item.name}</div>
                            </div>
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