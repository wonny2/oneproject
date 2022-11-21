import * as L from './boardList.styles'
import { IBoardListUIProps } from './boardList.types'
import Slick from '../../../commons/slick'
import InfiniteScroll from 'react-infinite-scroller'


export default function BoardListPresenter(props: IBoardListUIProps) {
    return(
        <L.Wrapper>
            <Slick />
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