import styled from "@emotion/styled"
import { Color } from "../../../commons/utils/utils"

const AddBtn = styled.div`
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

export default function ButtonComPonent(props: any) {
    return(
        <AddBtn onClick={props.onClick}>{props.children}</AddBtn>
    )
}