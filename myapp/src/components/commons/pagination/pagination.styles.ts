import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import {  HeartTwoTone } from '@ant-design/icons';
import { Color } from "../../../commons/utils/utils";


export interface PaginationNum {
    backColor: boolean;
}

// export const HeartIcon = styled(HeartTwoTone)`
//     color: ${(props:PaginationNum) => props.isActive ? "#eb2f96" : "#D3D3D3"};
// `

export const Wrapper = styled.div`
    margin-top:60px;
    /* max-width:1200px; */
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media ${breakPoints.mobile} {
        max-width: 47.938rem;
    }

    @media ${breakPoints.tablet} {
        max-width: 62rem;
    }
`

export const RowWrap = styled.div`
    width: 1220px;
    display:flex;
    flex-direction:row;
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

    :focus {
        border-color: ${Color.colors.green};
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
    dow: .3px .3px 3px gray;
    cursor: pointer;
`



export const Image = styled.img`
    height: 11rem;
    object-fit: cover;
    margin-bottom:10px;
    
`

export const ContentsWrap = styled.div`
    padding: 0 10px;
    cursor: pointer;
`

export const Title = styled.div`
    font-size: 20px;
    color: ${Color.colors.green};
    font-weight: 700;
    margin-bottom: 15px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

`

export const Writer = styled.div`
    font-size:15px;
`
export const Date = styled.div`
    font-size: 12px;
    color: gray;
    text-align:end;
`

export const PageNumWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-bottom:20px;

    @media ${breakPoints.mobile} {
        width: 23.438rem;
    }

    @media ${breakPoints.tablet} {
        max-width: 62rem;
    }
`


export const PageNum = styled.div`
    margin:0 10px;
    font-size: 13px;
    width:20px;
    text-align:center;
    line-height:20px;
    background-color: ${(props:PaginationNum) => props.backColor ?  "green" : "none"};
    color: ${(props:PaginationNum) => props.backColor ?  "white" : "black"};
    border-radius:15px;
    cursor: pointer;
`