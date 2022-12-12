import InfiniteScroll from 'react-infinite-scroller'
import { IUseditemCommentProps } from './usedItemsCommentList.types'
import UsedItemsCommentPresenterItems from './usedItemsCommentList.presenterItems'
import {v4 as uuidv4} from 'uuid'


export default function BestUsedItemsCommentPresenter(props: IUseditemCommentProps) {
    
    return(
        // 무한스크롤
        <>
            <div>댓글</div>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
                {props.data?.fetchUseditemQuestions ? 
                    (props.data?.fetchUseditemQuestions.map((el:any) => (
                            <UsedItemsCommentPresenterItems 
                                key={uuidv4()}
                                el={el}
                            />
                        )))
                : (<></>)}
            </InfiniteScroll>
        </>
    )
}