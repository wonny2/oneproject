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
`;

const NoneWrap = styled.div`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  color: gray;
`;

export default function BestUsedItemsCommentPresenter(
  props: IUseditemCommentProps
) {
  console.log(props.data?.fetchUseditemQuestions.length);
  return (
    // 무한스크롤
    <>
      <Co>댓 글</Co>
      {/* <NoneWrap>아직 등록된 댓글이 없습니다.</NoneWrap> */}
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.length === 0 ? (
          <NoneWrap>아직 등록된 댓글이 없습니다.</NoneWrap>
        ) : (
          props.data?.fetchUseditemQuestions.map((el: any) => (
            <UsedItemsCommentPresenterItems key={uuidv4()} el={el} />
          ))
        )}
      </InfiniteScroll>
    </>
  );
}
