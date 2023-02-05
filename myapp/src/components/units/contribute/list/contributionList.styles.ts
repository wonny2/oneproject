import styled from "@emotion/styled";
import { secondWrapWidth,Color } from "../../../../commons/utils/utils";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const BackImg = styled.div`
    width:100%;
    height: 200px;
    line-height: 200px;
    text-align:center;
    position: relative;
	z-index: 1;

    > div {
        font-size: 57px;
        font-weight: 700;
        font-style: italic;
        letter-spacing: 3px;
        color: ${Color.colors.blue};
    };
	
	::after {
		content: "";
		width:100%;
		height:100%;
		background: url('/images/hope2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
        background-position: 0 50%;
		opacity: 0.5;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	};
`

export const SecondWrap = styled.div`
    width: ${secondWrapWidth.width};
    /* border: 1px solid black; */
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top: 50px;
`

export const Icon = styled.div`
    width: 900px;
    padding: 20px 0;
    > img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

export const AddBtn = styled.div`
    position: relative;
    border: none;
    display: inline-block;
    width: 200px;
    padding: 15px 30px;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    text-align:center;
    font-size: 20px;
    font-weight: 600;
    transition: 0.25s;
    background-color: ${Color.colors.blue};
    color: #d7fff1;
    margin: 10px 0;

    :hover {
        letter-spacing: 2px;
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const Card = styled.div`
    width: 100%;
    padding: 15px 70px;
    box-shadow: 5px 4px 4px 1px rgba(0, 0, 0, 0.1);
    border: 0.1px solid lightgray;
    border-radius: 8px;
    display:flex;
    flex-direction: row;
    /* justify-content: space-between; */
    margin-bottom: 30px;
    background-color: #FAFAFA;
    cursor: pointer;
`

export const Img = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 4px;
    flex:1;
`

export const TextWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
    padding: 0 30px;
    flex:4;
`
export const BigText = styled.div`
    font-size: 25px;
    font-weight: 900;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 27px;
`

export const MiddleText = styled.div`
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const PriceTimeWrap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 130px;
    flex:4;
`

export const CreatedAt = styled.div`
    font-size: 14px;
    color: gray;
`

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    padding: 60px 0;
`