import * as C from "./commentWrite.styles";
import { ICommentWriteUI } from "./commentWrite.types";
import { Rate } from "antd";

export default function CommentPresenter(props: ICommentWriteUI) {
  return (
    <C.Wrapper>
      <form
        onSubmit={props.handleSubmit(
          props.isBoard
            ? props.onClickCreateComment
            : props.onClickUsedItemQuestion
        )}
      >
        <C.Title>
          {props.isBoard ? "게시글 댓글 작성하기" : "긴급 후원 댓글 작성하기"}
        </C.Title>
        {props.isBoard && (
          <>
            {/* <C.ColumnWrap> */}
            <C.InputWraps>
              <C.ColumnWrap>
                <C.Text>작성자</C.Text>
                <C.Input type="text" {...props.register("writer")} />
              </C.ColumnWrap>

              <C.ColumnWrap>
                <C.Text>비밀번호</C.Text>
                <C.Input type="password" {...props.register("password")} />
              </C.ColumnWrap>
            </C.InputWraps>

            <C.Text>별점</C.Text>
            <Rate allowHalf onChange={props.onChangeRate} defaultValue={0} />
            {/* <C.Input type='number' {...props.register("rating")}/> */}

            {/* </C.ColumnWrap> */}
          </>
        )}

        <C.ColumnWrap>
          <C.Text>내용</C.Text>
          <C.Contents {...props.register("contents")} />
          <C.ButtonWrap>
            <C.SubmitBtn>등 록 하 기</C.SubmitBtn>
          </C.ButtonWrap>
        </C.ColumnWrap>
        {/* react-hook-form으로 할 땐 div로 버튼 만들면 작동이 안 된다. 꼭 button으로 해야함! 잊지말긔!! */}
      </form>
    </C.Wrapper>
  );
}
