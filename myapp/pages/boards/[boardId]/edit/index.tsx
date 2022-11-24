import BoardWriteContainer from "../../../../src/components/units/board/write/boardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// 수정page()

// 수정할 때 defaultValue 값 불러올려고 fetchAPI가 필요한 것.
// 그리고 등록 때는 fetch할 게 없으니까 수정page에서만 필요함!
const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId){
            _id
            title
            writer
            contents
            createdAt
            images
        }
    }   
`
export default function BoardEditPage() {

    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: String(router.query.boardId) }
    });

    console.log("editPage의 data" + data?.fetchBoard.images)
    

    return(
        <BoardWriteContainer
            isEdit={true}
            data={data}
        />
    )
}