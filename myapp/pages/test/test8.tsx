import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react";

const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page: Int) {
        fetchUseditems(page: $page) {
            name
            # remarks
            # contents
            # price
            # pickedCount
            # images
            # seller{
            #     name
            # }
    }
}
`

export default function Test8() {
    const [add, setAdd] = useState(0);
    const [page, setPage] = useState(1)

    const {data, fetchMore} = useQuery(FETCH_USED_ITEMS,{
        variables: {page}
    });

    const onClickItemsLength = () => {

        if(add === 5) {
            setPage(prev => prev + 1)
            setAdd(0)
        };

        console.log(add)

        setAdd(prev => prev + 1)
    };

    const onFetchMore = () => {
        if(!data) return;

        fetchMore({
            variables: {page: Math.ceil(data.fetchUseditems.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.fetchUseditems) 
                    return {fetchUseditems : [...prev.fetchUseditems]}

                    return {fetchUseditems : [...prev.fetchUseditems, fetchMoreResult]}
            }
        })
    }


    return(
        <>

                <>
                    {/* <div>{i+1 + " "}{el.name}</div> */}

                    {data?.fetchUseditems
                        .filter((_:any, i:number) => i < add * 2)
                        .map((el:any,i:number) => (
                            <div key={i}>
                                <div>{i+1}</div>
                                <div>{el.name}</div>
                            </div>
                        ))
                    }
                    {}

                    
                </>

            {/* <button onClick={onFetchMore}>더보기</button> */}
            {add === 5 
                ? <button onClick={onClickItemsLength}>다음 페이지</button> 
                : <button onClick={onClickItemsLength}>더보기</button> }
        </>
    )
}