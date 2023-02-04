import * as L from './bestUsedItemList.styles'
import {IBestBoardsPropsUI} from './bestUsedItemList.types'
import { getDate } from '../../../commons/utils/utils'



export default function BestUsedItemPresenter(props: IBestBoardsPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                {/* <L.TopFour>Best UsedItem</L.TopFour> */}
                
                    <L.SubTitle>
                        <span>지금 바로 후원 가능한</span>
                        <span>긴급 후원</span>
                        <L.Button>바로가기 {'>'}</L.Button>
                    </L.SubTitle>

                    {props.usedItems?.fetchUseditemsOfTheBest.map((item:any, index:number) => (
                        <L.Card key={index} id={item._id} onClick={props.onClickDetail}> 
                                <L.Image src={`https://storage.googleapis.com/${item.images[0]}`} />
                                {/* <L.Name>{item.name}</L.Name> */}
                                <L.CardContentsWrap>
                                    <L.Contents dangerouslySetInnerHTML={{__html: String(item.contents) }} />
                                    <L.Time>{getDate(item.createdAt)}</L.Time>
                                </L.CardContentsWrap>
                        </L.Card>
                    ))}
                
            </L.ContentsWrap>
                {/* <L.MenuBar>
                    <L.TextWrap>
                        <div onClick={props.MoveToWrite}>글쓰기</div>
                    </L.TextWrap>
                </L.MenuBar> */}
        </L.Wrapper>
        
    )
}0