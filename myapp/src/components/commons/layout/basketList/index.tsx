import { useEffect, useState } from 'react'
import * as B from './basketList.styles'

export default function BasketList() {

    const [baskets, setBaskets] = useState([]);

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("basket") || "[]")
        setBaskets(result)
    },[])

    console.log(baskets)


    return(
        <B.Wrapper>
            <B.Title>장바구니</B.Title>
            {baskets.map((el:any) => (
                <>
                    <B.Title>{el._id}112323</B.Title>       
                </>
            ))}
        </B.Wrapper>
    )
}