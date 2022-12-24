import { useEffect, useState } from 'react'
import * as B from './basketList.styles'

export default function BasketList() {

    const [baskets, setBaskets] = useState([] as any); 

    useEffect(() => {
        // 장바구니에 들어가 있는 객체들(값들)
        const result = JSON.parse(localStorage.getItem("baskets") || "[]")
        setBaskets(result)
    },[])

    // const num = {};
    // const num = baskets.filter((item,index) => console.log(item.images.filter(item => item), index))
    // console.log(num)

    // 이건 값이 뜨는데
    // console.log(baskets.filter(item => item).map((el,index) => el)[0].images)

    // 뒤에 [0]붙이면 undefined나옴
    // console.log(baskets.filter(item => item).map((el) => el[0]))

    // console.log(`https://storage.googleapis.com/${baskets[0].images.filter(item => item)}`)

    return(
        <B.Wrapper>
            <B.Title>장바구니</B.Title>
            {baskets.filter((item:any) => item).map((el:any ,index:number) => (
                    <>
                    <div>{el._id}</div>
                    <div>{el.title}</div>
                    <div>{el.contents}</div>
                    {/* <img src={"https://storage.googleapis.com/codecamp-file-storage/2022/12/22/영국사진1.jpeg"} /> */}
                    <img src={`https://storage.googleapis.com/${el.images}`} />
                    </>
            ))}
        </B.Wrapper>
    )
};