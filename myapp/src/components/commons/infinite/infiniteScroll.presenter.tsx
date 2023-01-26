import * as L from './infiniteScroll.styles'
import { IInfiniteScrollPropsUI } from './infiniteScroll.types'
import InfiniteScroll from 'react-infinite-scroller'
import { getDate } from '../../../commons/utils/utils'
import {v4 as uuidv4} from 'uuid'

export default function Infinite(props: IInfiniteScrollPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
                    <L.CardWrap>
                        {props.data?.fetchUseditems.map((item:any) => (
                            <L.Card key={uuidv4()} id={item._id} onClick={props.moveToDetail}>
                                <L.Img src={item.images.length === 0
                                    ? 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg' 
                                    : `https://storage.googleapis.com/${item.images.filter((i:any) => i)[0]}`
                                } />
                                <L.Title>{item.name}</L.Title>
                                <L.Time>{getDate(item.createdAt)}</L.Time>
                            </L.Card>
                        ))}
                    </L.CardWrap>
                </InfiniteScroll>
            </L.ContentsWrap>
        </L.Wrapper>
    )
};

// 소문자, 대문자 조심!
// 받아올 값들 이름 확인!