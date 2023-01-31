import styled from '@emotion/styled'
import BestUsedItemContainer from '../../src/components/units/contribute/list/bestUsedItemList.container';
import Pagination from '../../src/components/commons/pagination/pagination.container';
import Slick from '../../src/components/commons/slick';
import { FontList } from '../../src/commons/utils/utils';

const Wrapper = styled.div`
*{
    font-family: 'KyoboHandwriting2021sjy';
}
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

    ${FontList.fonts[0]}	
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