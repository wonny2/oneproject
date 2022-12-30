import styled from '@emotion/styled'
import BestUsedItemContainer from '../src/components/units/bestUsedItems/list/bestUsedItemList.container';
import Pagination from '../src/components/commons/pagination/pagination.container';
import Slick from '../src/components/commons/slick';
import { css } from '@emotion/react'; 
import { useState } from 'react';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    /* background-color: black; */

    @media (prefers-color-scheme: dark) {

        body {
            background-color: black;
        }
    }
`

const darkMode = css`
    body {
        background-color: black;
    }
`


export default function Main() {

    const [toggle, setToggle] = useState(false)

    const onClick = () => {
        setToggle(prev => !prev)
    }

    return(
        <Wrapper>
            <Slick />
            <BestUsedItemContainer />
            <Pagination />
        </Wrapper>
    )
}