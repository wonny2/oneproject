import { IQuery } from "../../../../commons/types/generated/types"
import { IBoardComment } from "../../../../commons/types/generated/types";
import { Maybe } from "../../../../commons/types/generated/types";

export interface ICommentListPropsUI {
    data?: Pick<IQuery, "fetchBoardComments">;
    onLoadMore: () => void;
    // onClickDeleteComment: () => void;
};

export interface ICommentItemProps {
    el: IBoardComment;
    // onClickDeleteComment: () => void
}