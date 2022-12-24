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
    console.log(baskets)

    // 뒤에 [0]붙이면 undefined나옴
    // console.log(baskets.filter(item => item).map((el) => el[0]))
    // 하아,, 왜냐하면 el얘는 객체쟈나!!!!!! 안경까지 쓰고 뭘 보는 거니...? 당연히 undefined지!!!
    // 그리고 filter를 굳이 붙일 이유가 없음,,하아,,

    

    return(
        <B.Wrapper>
            <B.Title>장바구니</B.Title>
            {baskets.map((el:any ,index:number) => (
                    <>
                    <div>{el.title}</div>
                    {/* <img src={"https://storage.googleapis.com/codecamp-file-storage/2022/12/22/영국사진1.jpeg"} /> */}
                    <B.Item src={`https://storage.googleapis.com/${el.images.filter(item => item)}`} />
                    </>
            ))}
        </B.Wrapper>
    )
};