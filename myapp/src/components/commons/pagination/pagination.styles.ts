import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { Color } from "../../../commons/utils/utils";
import { Pagination } from 'antd';

export interface PaginationNum {
    backColor: boolean;
}

// export const HeartIcon = styled(HeartTwoTone)`
//     color: ${(props:PaginationNum) => props.isActive ? "#eb2f96" : "#D3D3D3"};
// `

export const Wrapper = styled.div`    /* max-width:1200px; */
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media ${breakPoints.mobile} {
        /* max-width: 47.938rem; */
        width: 23.438rem;
    }

    @media ${breakPoints.tablet} {
        /* max-width: 62rem; */
        max-width: 62rem;
    }
`

export const QnAImgWrap = styled.div`
    width: 100%;
    height: 250px;
    line-height: 250px;
    text-align:center;
    position: relative;
	z-index: 1;
    margin-bottom: 90px;

	::after {
		content: "";
		width:100%;
		height:100%;
        background-image: url('/images/qnaimg.jpg');
        background-repeat:no-repeat;
        background-size: cover;
        background-position: 0 58%;
		opacity: 0.6;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	};
`

export const QnA = styled.div`
    font-size: 77px;
    font-weight: 800;
    font-style: italic;
    color: ${Color.colors.blue};
    letter-spacing: 10px;
`

export const SearchWrap = styled.div`
    width: 1220px;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-bottom:30px;

    @media ${breakPoints.mobile} {
        width: 22.438rem ;
    }
    
`

export const Input = styled.input`
    width: 30rem;
    height: 4vh;
    border: 1px solid gray;
    border-radius:5px;
    font-size:13px;
    padding-left: 10px;

    :focus {
        border-color: ${Color.colors.blue};
        outline:none;
    }

    ::-webkit-input-placeholder{
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png) ;
    background-size: contain;
    background-position: 2px center;
    background-repeat: no-repeat;
    text-indent: 0;
    text-align: start;
    padding-left:23px;
}
`

export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:row;
    width: 1200px;
    text-align: center;
    justify-content: space-between;
    padding:0 80px;
    height: 50px;
    line-height: 50px;
    border-top: 2px solid ${Color.colors.blue};
    border-bottom: 2px solid ${Color.colors.blue};
    cursor: pointer;
    margin: 0.5px 0;
`

export const TitleWords = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 10%;
`

export const TitleTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 40%;
`

export const TitleContents = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 10%;
`

export const TitleDate = styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 10%;
`

export const MapContents = styled.div`
    display:flex;
    flex-direction:row;
    width: 1200px;
    text-align: center;
    justify-content: space-between;
    padding:0 80px;
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid ${Color.colors.blue};
    cursor: pointer;
`

export const Words = styled.div`
    font-size: 12px;
    font-weight: 600;
    width: 10%;
    text-align:center;
`

export const Title = styled.div`
    width: 40%;
    font-size: 12px;
    font-weight: 700;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`

export const Contents = styled.div`
    font-size:12px;
    width: 10%;
`

export const Date = styled.div`
    width: 10%;
    font-size: 12px;
`

export const MapWrap = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(5, 13.75rem);
    gap: 20px 30px;
    justify-content:center;
    margin-bottom: 30px;

    @media ${breakPoints.mobile} {
        width: 23.438rem;
        grid-template-columns: repeat(2, 10rem);
    }

    @media ${breakPoints.tablet} {
        max-width: 62rem;
        grid-template-columns: repeat(2, 13.75rem);
    }

`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 8px;
    /* dow: .3px .3px 3px gray; */
    cursor: pointer;
`

export const PageNumWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    height: 130px;
`

export const Pagi = styled(Pagination)`
    width: 100%;
`

// export const PageNumWrap = styled.div`
//     display:flex;
//     flex-direction:row;
//     justify-content:center;
//     margin-bottom:20px;

//     @media ${breakPoints.mobile} {
//         width: 23.438rem;
//     }

//     @media ${breakPoints.tablet} {
//         max-width: 62rem;
//     }
// `


export const PageNum = styled.div`
    margin:0 10px;
    font-size: 13px;
    width:20px;
    text-align:center;
    line-height:20px;
    background-color: ${(props:PaginationNum) => props.backColor ?  "blue" : "none"};
    color: ${(props:PaginationNum) => props.backColor ?  "white" : "black"};
    border-radius:15px;
    cursor: pointer;
`