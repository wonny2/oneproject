import styled from '@emotion/styled'
import BestUsedItemContainer from '../src/components/units/bestUsedItems/list/bestUsedItemList.container';
import Pagination from '../src/components/commons/pagination/pagination.container';
import Slick from '../src/components/commons/slick';

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