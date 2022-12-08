import styled from '@emotion/styled'
import BestUsedItemContainer from '../../units/bestUsedItems/list/bestUsedItemList.container';
import Pagination from '../pagination/pagination.container';
import Slick from "../slick";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`

export default function Main() {
    return(
        <Wrapper>
            <Slick />
            <BestUsedItemContainer />
            <Pagination />
        </Wrapper>
    )
}