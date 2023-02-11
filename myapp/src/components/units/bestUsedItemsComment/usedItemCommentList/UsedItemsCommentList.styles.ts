import { Color, secondWrapWidth } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${secondWrapWidth.width};
  padding: 20px 0;
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CommentOpenWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.div`
  font-size: 12px;
  color: gray;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const Name = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const Contents = styled.div`
  /* width: 70%; */
  height: 130px;
  padding: 20px 38px;
  font-size: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CommentOpen = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: ${Color.colors.blue};
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const AnswerWrap = styled.div`
  /* height: 70px; */
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AnswerInput = styled.input`
  width: 38rem;
  height: 35px;
  border: none;
  border-bottom: 1px solid ${Color.colors.blue};
  outline: none;
  padding-left: 20px;
  font-size: 14px;

  :focus {
    border-bottom: 2px solid ${Color.colors.blue};
  }
`;

export const AnswerBtn = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: ${Color.colors.blue};
  border-radius: 10px;
  color: white;
  margin-left: 40px;
  cursor: pointer;
`;

export const AnswerContents = styled.div`
  width: 60%;
  height: 100px;
  padding-left: 37px;
  margin: 15px 0px;
`;

export const Line = styled.div`
  height: 2px;
  border-top: 1px solid ${Color.colors.blue};
  margin: 20px 0px;
`;
