import { IQuery } from "../../../../commons/types/generated/types"
import { IBoardComment } from "../../../../commons/types/generated/types";


//presenter에 있는 type
export interface ICommentListPropsUI {
    data?: Pick<IQuery, "fetchBoardComments">;
    onLoadMore: () => void;
    isBoard:boolean;
};

// items에 있는 type
export interface ICommentItemProps {
    el: IBoardComment
    isBoard: boolean
    createdAt: any
}