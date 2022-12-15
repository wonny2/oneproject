import * as L from './bestUsedItemList.styles'
import {IBestBoardsPropsUI} from './bestUsedItemList.types'
import { getDate } from '../../../../commons/utils/utils'



export default function BestUsedItemPresenter(props: IBestBoardsPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <L.TopFour>Best UsedItem</L.TopFour>
                <L.CardWrap>
                    {props.usedItems?.fetchUseditemsOfTheBest.map((item:any, index:number) => (
                        <L.Card key={index} onClick={props.onClickDetail} id={item._id}>
                                <img src={`https://storage.googleapis.com/${item.images[0]}`} />
                                <div id={item._id}>{item.name}</div>
                                <div id={item._id} dangerouslySetInnerHTML={{__html: String(item.contents) }} />
                                <div id={item._id}>{getDate(item.createdAt)}</div>
                        </L.Card>
                    ))}
                </L.CardWrap>
            </L.ContentsWrap>
                <L.MenuBar>
                    <L.TextWrap>
                        <div onClick={props.MoveToWrite}>글쓰기</div>
                    </L.TextWrap>
                </L.MenuBar>
        </L.Wrapper>
        
    )
}0