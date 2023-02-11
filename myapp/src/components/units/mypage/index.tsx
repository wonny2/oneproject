import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";
import * as M from "./mypage.styles";
import { getDate } from "../../../commons/utils/utils";
import { MouseEvent, useState } from "react";
import MyInfoContainer from "./myinfo/myinfo.container";
import MyBoardsContainer from "./myboards/myboards.container";
import MyPickedContainer from "./mypicked/mypicked.container";

export default function MyPageMain() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const InfoArr = ["내 정보", "후원등록글", "찜한 게시글"];

  const [componentNum, setComponentNum] = useState(1);

  const onClickId = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    setComponentNum(Number(event.target.id));
  };

  return (
    <M.Wrapper>
      <M.ProfileWrap>
        <M.InfoWrap>
          {!data?.fetchUserLoggedIn.picture ? (
            <M.Img src="/images/user.png" />
          ) : (
            <M.Img
              src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
            />
          )}
          <M.NicknameWrap>
            <M.Nickname>{data?.fetchUserLoggedIn.name}</M.Nickname>
            <span>{data?.fetchUserLoggedIn.email}</span>
            <span>{getDate(data?.fetchUserLoggedIn.createdAt)}</span>
          </M.NicknameWrap>
        </M.InfoWrap>

        <M.MenuWrap>
          {InfoArr.map((el, index) => (
            <M.MenuTitle key={index} id={String(index + 1)} onClick={onClickId}>
              {el}
            </M.MenuTitle>
          ))}
        </M.MenuWrap>
      </M.ProfileWrap>

      <M.ContentsWrap>
        {componentNum === 1 ? (
          <MyInfoContainer />
        ) : componentNum === 2 ? (
          <MyBoardsContainer />
        ) : (
          <MyPickedContainer />
        )}
      </M.ContentsWrap>
    </M.Wrapper>
  );
}

{
  /* <M.MenuTitle>내 정보</M.MenuTitle>
<M.MenuTitle>후원 등록 글</M.MenuTitle>
<M.MenuTitle>찜한 게시글</M.MenuTitle> */
}
