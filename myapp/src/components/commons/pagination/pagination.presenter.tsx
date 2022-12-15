import * as P from './pagination.styles'
import {PaginationPropsUI} from './pagination.types'
import {v4 as uuidv4} from 'uuid'
import { getDate } from '../../../commons/utils/utils'
import {Row, Col} from 'antd'

export default function PaginationPresenter(props:PaginationPropsUI) {
    return(
        <P.Wrapper>
                <P.RowWrap>
                    <P.Input type="text" placeholder="찾는 제목을 입력해주세요" onChange={props.onChangeInput}/>
                </P.RowWrap>
                
                <P.MapWrap>    
                {props.data?.fetchBoards?.map((el:any, index:number) => (
                        <P.ColumnWrap key={uuidv4()} onClick={props.MoveToPage}>
                            <P.Image src={el.images.length === 0 || el.images.includes("https://storage.googleapis.com/")? "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" : `https://storage.googleapis.com/${el.images.filter((i:any) => i)[0]}`} />
                                <P.ContentsWrap  id={el._id}>
                                    <P.Title id={el._id}>{el.title}</P.Title>
                                    <P.Writer id={el._id}>{el.writer}</P.Writer>
                                    <P.Date id={el._id}>{getDate(el.createdAt)}</P.Date>
                            </P.ContentsWrap>
                        </P.ColumnWrap>
                ))}
                </P.MapWrap>

                <P.PageNumWrap>
                    <div style={{cursor: "pointer"}} onClick={props.onClickPrev}>{" < "}</div>
                    {new Array(10).fill(1).map((_, index) => (
                        (index+props.startPage <= props.lastPage &&  
                            <P.PageNum onClick={props.onClickPage} id={String(index+props.startPage)} key={index+props.startPage} backColor={props.startPage+index === props.activedPage}>
                                {index+props.startPage}
                            </P.PageNum>)
                    ))}
                    <div style={{cursor: "pointer"}} onClick={props.onClickNext}>{" > "}</div>
                </P.PageNumWrap>
            </P.Wrapper>
    )
}