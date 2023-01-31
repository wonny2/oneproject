import * as P from './pagination.styles'
import {PaginationPropsUI} from './pagination.types'
import {v4 as uuidv4} from 'uuid'
import { getDate } from '../../../commons/utils/utils'



export default function PaginationPresenter(props:PaginationPropsUI) {

    const titleArray = ["번 호","제 목","내 용","날 짜"]

    return(
        <P.Wrapper>
            <P.QnAImgWrap>
                <P.QnA>Q&A</P.QnA>
            </P.QnAImgWrap>

            <P.SearchWrap>
                <P.Input type="text" placeholder="찾는 제목을 입력해주세요" onChange={props.onChangeInput}/>
            </P.SearchWrap>

            <P.ContentsWrap>
                <P.TitleWords>번 호</P.TitleWords>
                <P.TitleTitle>제 목</P.TitleTitle>
                <P.TitleContents>이 름</P.TitleContents>
                <P.TitleDate>날 짜</P.TitleDate>
            </P.ContentsWrap>
                
            {props.data?.fetchBoards?.map((el:any, i:number) => (
                <P.MapContents key={uuidv4()} onClick={props.MoveToPage} id={el._id}>
                        <P.Words>{i+1}</P.Words>
                        <P.Title>{el.title}</P.Title>
                        <P.Contents>{el.writer}</P.Contents>
                        <P.Date>{getDate(el.createdAt)}</P.Date>
                </P.MapContents>
            ))}
                {/* <P.MapWrap>    
                {props.data?.fetchBoards?.map((el:any) => (
                        <P.ColumnWrap key={uuidv4()} onClick={props.MoveToPage} id={el._id}>
                            <P.Image src={el.images.length === 0 || el.images.includes("https://storage.googleapis.com/")? "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" : `https://storage.googleapis.com/${el.images.filter((i:any) => i)[0]}`} />
                                <P.ContentsWrap>
                                    <P.Title>{el.title}</P.Title>
                                    <P.Writer>{el.writer}</P.Writer>
                                    <P.Date>{getDate(el.createdAt)}</P.Date>
                            </P.ContentsWrap>
                        </P.ColumnWrap>
                ))}
                </P.MapWrap> */}

                <P.PageNumWrap>
                    <P.Pagi 
                        defaultCurrent={props.startPage} 
                        total={props.lastPage * 10}
                        onChange={props.onClickPage}
                        showSizeChanger={false}
                    />
                    {/* <div style={{cursor: "pointer"}} onClick={props.onClickPrev}>{" < "}</div>
                    {new Array(10).fill(1).map((_, index) => (
                        (index+props.startPage <= props.lastPage &&  
                            <P.PageNum onClick={props.onClickPage} id={String(index+props.startPage)} key={index+props.startPage} backColor={props.startPage+index === props.activedPage}>
                                {index+props.startPage}
                            </P.PageNum>)
                    ))}
                    <div style={{cursor: "pointer"}} onClick={props.onClickNext}>{" > "}</div> */}
                </P.PageNumWrap>
            </P.Wrapper>
    )
}