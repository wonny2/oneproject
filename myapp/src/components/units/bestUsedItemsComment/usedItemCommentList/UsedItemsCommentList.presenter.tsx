import InfiniteScroll from "react-infinite-scroller";
import { IUseditemCommentProps } from "./usedItemsCommentList.types";
import UsedItemsCommentPresenterItems from "./usedItemsCommentList.presenterItems";
import { v4 as uuidv4 } from "uuid";
import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Color, secondWrapWidth } from "../../../../commons/utils/utils";

const Co = styled.div`
    width: ${secondWrapWidth.width};
    font-size: 25px;
    font-weight: 900;
    background-color: ${Color.colors.blue};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    /* display:flex; */
`;

export default function BestUsedItemsCommentPresenter(
    props: IUseditemCommentProps
) {
    return (
        // 무한스크롤
        <>
            <Co>댓 글</Co>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={true}
            >
                {props.data?.fetchUseditemQuestions ? (
                    props.data?.fetchUseditemQuestions.map((el: any) => (
                        <UsedItemsCommentPresenterItems
                            key={uuidv4()}
                            el={el}
                        />
                    ))
                ) : (
                    <></>
                )}
            </InfiniteScroll>
        </>
    );
}
