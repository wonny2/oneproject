import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { CREATE_USER } from './signup.queries'
import * as S from './signup.styles'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SignUpPage() {

    // const inputRef = useRef<HTMLInputElement>(null);
    
    // useEffect(() => {
    //     inputRef.current.focus()
    //     // console.log(inputRef)
    // },[])
    
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER)

    const schema = yup.object().shape({
        email: yup.string()
                    .email("이메일 형식이 적합하지 않습니다.")
                    .matches(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/, "@를 포함해주세요")
                    .required("필수 입력부분입니다."),
        password: yup.string()
                    // .min(8, "8자리 이상 비밀번호를 입력해주세요")
                    .matches(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/, "숫자 + 문자 8자리 이상 비밀번호를 입력해주세요")
                    .required("필수 입력부분입니다."),
        name: yup.string()
                    .max(10, "10자리 이하 닉네임을 입력해주세요")
                    .required("필수 입력부분입니다.")
    });

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onClickSignUp = async (data:any) => {
        try {
            const result = await createUser({
                variables: {createUserInput:{
                    email : data.email,
                    password: data.password,
                    name: data.name
                }}
            })
            alert(`${result.data?.createUser.name}님 회원가입 되셨습니다.`)
            router.push('/boards')
        } catch(error) {
            if(error instanceof Error){
                alert(error.message)
            }
        }
    }

    
    return(
        <S.Wrapper>
            <form onSubmit={handleSubmit(onClickSignUp)}>
                <S.ContentsWrap>
                    <S.Belt>회원가입</S.Belt>
                    <S.ColumnWrap>
                        <S.RowWrap>
                            <div style={{color: "red"}}>*</div>
                            <S.Title>아이디</S.Title>
                        </S.RowWrap>
                        <S.ErrorMsg>{formState.errors.email?.message}</S.ErrorMsg>
                        <S.Inputs
                            type='text'
                            placeholder='@를 포함한 이메일을 입력해주세요'
                            {...register("email")}
                            // ref={inputRef}
                            />
                    </S.ColumnWrap>

                    <S.ColumnWrap>
                        <S.RowWrap>
                            <div style={{color: "red"}}>*</div>
                            <S.Title>비밀번호</S.Title>
                        </S.RowWrap>

                        <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
                        <S.Inputs
                         type='password' 
                         placeholder='8자리 이상 비밀번호를 입력해주세요'
                         {...register("password")}
                         />
                    </S.ColumnWrap>

                    <S.ColumnWrap>
                        <S.RowWrap>
                            <div style={{color: "red"}}>*</div>
                            <S.Title>닉네임</S.Title>
                        </S.RowWrap>

                        <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
                        <S.Inputs 
                            type='text' 
                            placeholder='닉네임을 입력해주세요'
                            {...register("name")}
                            />
                    </S.ColumnWrap>
                    <S.SignUpBtn isActive={formState.isValid}>회 원 가 입</S.SignUpBtn>
                </S.ContentsWrap>
            </form>
        </S.Wrapper>
    )
}