import { Color } from "./../../../commons/utils/utils";
import styled from "@emotion/styled";
import { secondWrapWidth } from "../../../commons/utils/utils";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Color.colors.blue};
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 0px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* padding-bottom: 20px; */
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 130px;
  height: 100px;
  margin: 0 13px;
  object-fit: contain;
`;

export const Nickname = styled.div`
  font-weight: 700px;
  font-size: 18px;
  font-weight: 900;
  padding-top: 5px;
  color: white;
`;

export const NicknameWrap = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 10px;
    color: gray;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
`;

export const MenuTitle = styled.div`
  font-size: 13px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  color: white;
`;

export const ContentsWrap = styled.div`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #fff;
`;

export const SubContainerWrap = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  > span {
    font-size: 20px;
    font-weight: 800;
    color: ${Color.colors.blue};
  }

  > div {
    width: 100%;
    padding: 15px 10px;
    letter-spacing: 1.5px;
    border-bottom: 1px solid ${Color.colors.blue};
    display: flex;
    justify-content: space-between;

    > img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;

export const Password = styled.div`
  color: ${Color.colors.blue};
  width: 100%;
  text-align: center;
  padding: 30px;
  cursor: pointer;

  :hover {
    letter-spacing: 2px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding-left: 14px;
`;

export const HiddenImgButton = styled.input`
  display: none;
`;
