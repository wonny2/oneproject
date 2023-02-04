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

    const {data: iPicked} = useQuery(FETCH_USED_ITEMS_I_PICKED, {
        variables: {page: 1, search: ""}
    });

    // console.log(iPicked?.fetchUseditemsIPicked.map(el => el._id))


    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

    const onClickPicked = async () => {

        if(!accessToken) {
            return message.warning('로그인 후 이용 가능합니다');
        };

        try{
            await toggleUseditemPick({
                variables: {useditemId: String(router.query.useditemId),},
                refetchQueries: [{
                    query: FETCH_USED_ITEM,
                    variables: { useditemId: router.query.useditemId}}
                ],
            });
                if(!pickedColor) {
                    setPickedColor(true)
                } else {
                    setPickedColor(false)
                };
                // message.success('찜 등록 되었습니다.');
        } catch(err) {
            if (err instanceof Error) {
                console.log(err.message)
            };
        };
    };


    const MoveToList = () => {
        router.push('/boards')
    };


    const length = iPicked?.fetchUseditemsIPicked.filter((el:any) => el._id)
    // console.log(length)

    useEffect(() => {
        iPicked?.fetchUseditemsIPicked.filter((el:any) => (
            el._id === String(router.query.useditemId))).length === 1 
        ? setPickedColor(true)
        : setPickedColor(false)
        // length ? setPickedColor(true) : setPickedColor(false)
    },[]);

    return(
        <BestItemDetailPresenter 
            data={data}
            MoveToList={MoveToList}
            pickedColor={pickedColor}
            onClickPicked={onClickPicked}
        />
    )
}
