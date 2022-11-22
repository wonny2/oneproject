import * as L from './infiniteScroll.styles'
import { IInfiniteScrollPropsUI } from './infiniteScroll.types'
import InfiniteScroll from 'react-infinite-scroller'


export default function Infinite(props: IInfiniteScrollPropsUI) {
    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
                    <L.CardWrap>
                        {props.data?.fetchBoards.map((item:any ) => (
                            <L.Card>
                                <L.Title>{item.title}</L.Title>
                            </L.Card>
                        ))}
                    </L.CardWrap>
                </InfiniteScroll>
            </L.ContentsWrap>
        </L.Wrapper>
    )
}