import * as P from './pagination.styles'
import {PaginationPropsUI} from './pagination.types'
import {v4 as uuidv4} from 'uuid'
import { getDate } from '../../../commons/utils/utils'
import Filter from '../filter/filter'

export default function PaginationPresenter(props:PaginationPropsUI) {
    return(
        <P.ColumnWrap>
            
                <P.RowWrap>
                    <input type="text" onChange={props.onChangeInput}/>
                </P.RowWrap>
                {/* {} */}
                {props.data?.fetchBoards?.map((el:any, index:number) => (
                        <P.ColumnWrap key={uuidv4()} onClick={props.MoveToPage}>
                            <P.Title id={el._id} title={el.title} keyword={props.keyword}>{el.title}</P.Title>
                            <P.Writer id={el._id}>{el.writer}</P.Writer>
                            <P.Date id={el._id}>{getDate(el.createdAt)}</P.Date>
                        </P.ColumnWrap>
                ))}
                <br />
                <P.RowWrap>
                    <div onClick={props.onClickPrev}>이전페이지</div>
                    {new Array(10).fill(1).map((_, index) => (
                        (index+props.startPage <= props.lastPage &&  
                            <P.PageNum onClick={props.onClickPage} id={String(index+props.startPage)} key={index+props.startPage} backColor={props.startPage+index === props.activedPage}>
                                {index+props.startPage}
                            </P.PageNum>)
                    ))}
                    <div onClick={props.onClickNext}>다음페이지</div>
                </P.RowWrap>
            </P.ColumnWrap>
    )
}