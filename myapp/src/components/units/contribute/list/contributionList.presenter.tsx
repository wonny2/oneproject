import * as L from './contributionList.styles'
import { ContributionListProps } from './contributionList.types'
import { priceTag , getDate, timeForToday} from '../../../../commons/utils/utils'
import {v4 as uuidv4} from 'uuid'

export default function ContributionListPresenter(props: ContributionListProps) {
    return (
        <L.Wrapper>
            <L.BackImg>
                <div>긴급 후원 목록</div>
            </L.BackImg>

            <L.SecondWrap>
                <L.Icon>
                    <img src='/images/backarrow.png' onClick={props.MoveToBack} />
                </L.Icon>
                {props.data?.fetchUseditems
                    .filter((_: any, i: number) => i < props.add * 2)
                    .map((el:any, i:number) => (
                            <L.Card key={uuidv4()} onClick={props.onClickDetail} id={el._id}>
                                <L.Img src={`https://storage.googleapis.com/${el.images.filter((el:any) => el)[0]}`}/>
                                <L.TextWrap>
                                    <L.BigText>{el.remarks}</L.BigText>
                                    <L.MiddleText>{el.name}</L.MiddleText>
                                </L.TextWrap>

                                <L.PriceTimeWrap>
                                    <L.BigText>{priceTag(el.price ) + "원"}</L.BigText>
                                    <L.CreatedAt>{timeForToday(el.createdAt)}</L.CreatedAt>
                                </L.PriceTimeWrap>
                                
                            </L.Card>
                    ))
                }
                <L.BtnWrap>  
                    {props.page === 1 
                        ? <></>
                        : <L.AddBtn onClick={props.onClickPrevPage}>이 전 페 이 지</L.AddBtn>
                    }
                    {props.add === 5 
                        ? <L.AddBtn onClick={props.onClickItemsLength}>다 음 페 이 지</L.AddBtn>
                        : <L.AddBtn onClick={props.onClickItemsLength}>더 보 기</L.AddBtn>
                    }
                </L.BtnWrap>
            </L.SecondWrap>
        </L.Wrapper>
    )
};