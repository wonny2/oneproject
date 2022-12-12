import InfiniteScroll from 'react-infinite-scroller'
import {IUseditemCommentProps} from './UsedItemsCommentList.types'
import UsedItemsCommentPresenterItems from './usedItemsCommentList.presenterItems'


export default function BestUsedItemsCommentPresenter(props: IUseditemCommentProps) {
    
    return(
        // 무한스크롤
        <>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                {props.data?.fetchUseditemQuestions.map((el:any) => (
                    <UsedItemsCommentPresenterItems 
                        key={el._id}
                        el={el}
                    />
                ))}
            </InfiniteScroll>
        </>
    )
}