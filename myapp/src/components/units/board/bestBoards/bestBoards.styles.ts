import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Wrap = styled.div`
    width:100%;
    border:2px solid black;
`

// export const Slide = styled(Slider)`
//     width: 1000px;
//     border:1px solid black;
// `

export const ContentsWrap = styled.div`
    width:75rem;
`

export const CardWrap = styled.div`
    width:100%;
    border: 1px solid black;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom:30px;
`

export const Card = styled.div`
    width: 12rem;
    height: 13rem;
    border: 2px solid lightcoral;
    background-color: lightblue;
    display:flex;
    flex-direction: column;
    align-items:center; 
    justify-content: space-around;
    text-align:center;
    border-radius:15px;
    transition: all 0.3s ease-out;

    > div:first-child {
        width: 100%;
        height: 3rem;
        text-overflow: ellipsis;
	    overflow : hidden;
        white-space: nowrap;
    }

    > div:nth-child(2) {
      
    } 

    > div:nth-child(3) {
        
    }

    :hover{
        transform: translateY(-30px);
    }
`

export const MenuBar = styled.div`
    width:100%;
    height: 3.75rem;
    background-color: lightblue;
    display:flex;
    justify-content:end;
    align-items:center;
`

export const TextWrap = styled.div`
    color: white;
    font-size: 1.2rem;
    width: 10rem;
    display:flex;
    justify-content: space-between;

    > div:hover {
        cursor: pointer;
        border-bottom: 2px solid white;
    }
`
