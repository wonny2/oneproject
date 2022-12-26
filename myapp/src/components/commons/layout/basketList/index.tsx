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
                    {/* <img src={"https://storage.googleapis.com/codecamp-file-storage/2022/12/22/영국사진1.jpeg"} /> */}
                    <B.Item src={`https://storage.googleapis.com/${el.images.filter(item => item)[0]}`} /> 
                    {/* images배열 0번째 자리에 없을 수도 있으니 filter로 이미지가 있는 새로운 배열 생성한 것! */}
                    </>
            ))}
        </B.Wrapper>
    )
};

// 처음에 filter메서드를 쓴 것이 안되는 이유는
// 원래 하던 방식의 결과값은 처음부터 배열로 images를 받아볼 수 있었는데,
// 여기서는 배열 안에 객체가 들었고, 그 객체 안에 images가 배열로 들어가 있어서
// 한 번 더 분해하는 작업이 필요했었다.
// 처음부터 굳이 filter메서드를 쓰지 말고 map으로 일단 하나씩 나열한 다음,
// 그 후에 images에 접근해서 그 다음 filter를 쓰면 된 거임
// filter을 쓰도 배열로 나온다는 것을 잊지말기~!