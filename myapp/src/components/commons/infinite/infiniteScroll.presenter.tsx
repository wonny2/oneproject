import * as L from './infiniteScroll.styles'
import { IInfiniteScrollPropsUI } from './infiniteScroll.types'
import InfiniteScroll from 'react-infinite-scroller'
import { getDate } from '../../../commons/utils/utils'

export default function Infinite(props: IInfiniteScrollPropsUI) {

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
                    <L.CardWrap>
                        {props.data?.fetchBoards.map((item:any, index:number) => (
                            <L.Card key={index}>
                                <L.Title id={item._id} onClick={props.moveToDetail}>{item.title}</L.Title>
                                {/* <L.Img src={`https://storage.googleapis.com/${item.images[0]}`} /> */}
                                {item.images.filter((el:any) => el).length >= 1 
                                    ? <L.Img src={`https://storage.googleapis.com/${item.images.filter((el:any) => el)[0]}`} />
                                    : <L.Img src="https://4.bp.blogspot.com/-cSvXzzpivuk/WHooE5mM6QI/AAAAAAAAG-o/nMUgzKFu03QqKxsdQ6Ns78ye3v7DXH3KgCLcB/s1600/ms004.jpg" />
                                }
                                <L.Time>{getDate(item.createdAt)}</L.Time>
                            </L.Card>
                        ))}
                    </L.CardWrap>
                </InfiniteScroll>
            </L.ContentsWrap>
        </L.Wrapper>
    )
};