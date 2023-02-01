import { useRouter } from 'next/router'
import * as H from './header.styles'
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN , LOG_OUT_USER} from './header.queries';
import { useEffect, useState} from 'react';
import { Badge } from 'antd';
import { basketsLength } from '../../../../commons/atom';
import { useRecoilState } from 'recoil';




export default function Header() {


    const {data} = useQuery(FETCH_USER_LOGGED_IN)
    const [logoutUser] = useMutation(LOG_OUT_USER)


    const [basketLength, setBasketLength] = useRecoilState(basketsLength)

    const router = useRouter();

    const MoveToHome = () => {
        router.push('/boards')
    }

    const MoveToLogin = () => {
        router.push(`/boards/login`)
    }

    const MoveToSignUp = () => {
        router.push('/boards/signup')
    }
    
    const MoveToBaskets = () => {
        router.push('/boards/baskets')
    }

    const MoveToMemberShip = () => {
        router.push('/memberships')
    }

    const Logout = async () => {
        try{
            await logoutUser()
            router.push('/boards')
            location.reload()
        } catch(error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    };

    const [show, setShow] = useState(true);

    const [count,setCount] = useRecoilState(basketsLength)


    return(
        <H.Wrapper>
            <H.TitleWrap>
                <H.LogoIcon src= '/images/icon.png' onClick={MoveToHome}/>
                <H.LogPart>
                    {!data
                        ? <H.Title onClick={MoveToLogin}>로그인</H.Title>
                        : <H.Title onClick={Logout}>{data.fetchUserLoggedIn.name}님 <br/>로그아웃</H.Title>
                    }
                    {!data
                        ? <H.Title onClick={MoveToSignUp}>회원가입</H.Title>
                        :
                        <>
                            {/* <H.Title onClick={props.onClickPayment}>포인트충전</H.Title> */}
                            <H.Title onClick={MoveToBaskets}>장바구니</H.Title>
                            <Badge count={count} />
                        </>
                    }
                    <H.Title onClick={MoveToMemberShip}>멤버십</H.Title>
                </H.LogPart>
            </H.TitleWrap>
        </H.Wrapper>
    )
};
