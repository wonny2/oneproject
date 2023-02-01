import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import BestItemDetailPresenter from "./bestUsedItemDetail.presenter"
import { FETCH_USED_ITEM, FETCH_USED_ITEMS_I_PICKED, TOGGLE_USED_ITEM_PICK } from "./bestUsedItemDetail.queries"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/atom";
import { message } from 'antd';


export default function BestItemDetailContainer() {
    

    const router = useRouter();
    const [pickedColor, setPickedColor] = useState(false);
    const [accessToken] = useRecoilState(accessTokenState);

    const {data} = useQuery(FETCH_USED_ITEM, {
        variables : {useditemId : String(router.query.useditemId)}
    });

    const {data: Ipicked} = useQuery(FETCH_USED_ITEMS_I_PICKED, {
        variables: {page: 1, search: ""}
    });


    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

    const onClickPicked = async () => {

        if(!accessToken) {
            return message.warning('로그인 후 이용 가능합니다');
        };

        try{
            await toggleUseditemPick({
                variables: {useditemId: String(router.query.useditemId)}
            });
            if(!pickedColor) {
                setPickedColor(true)
                message.success('찜 등록 되었습니다.');
            } else {
                setPickedColor(false)
            };
        } catch(err) {
            if (err instanceof Error) {
                console.log(err.message)
            };
        };
    };


    const MoveToList = () => {
        router.push('/boards')
    }; 

    useEffect(() => {
        // if(Ipicked?.fetchUseditemsIPicked.length === 0) {
        //     return setPickedColor(false);
        // };

        if(Ipicked?.fetchUseditemsIPicked.filter((el:any) => 
            (el._id === router.query.useditemId)).length === 1){
                setPickedColor(true)
            } else{
                setPickedColor(false)
            }
    },[]) 

    return(
        <BestItemDetailPresenter 
            data={data}
            MoveToList={MoveToList}
            pickedColor={pickedColor}
            onClickPicked={onClickPicked}
        />
    )
}
