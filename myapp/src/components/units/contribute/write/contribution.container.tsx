import { useMutation } from "@apollo/client";
import ContributionPresenter from "./contribution.presenter";
import { CREATE_USED_ITEM } from "./contribution.queries";


export default function ContributionContainer() {

    const [createUseditem] = useMutation(CREATE_USED_ITEM);

    // 등록하기
    const onCreateContribution = () => {
        try{
            const result = createUseditem({
                variables: {
                    createUseditemInput: {
                        name: ,
                        remarks: ,
                        contents: ,
                        price: ,
                        useditemAddress: {
                            zipcode: ,
                            address: ,
                            addressDetail: ,
                        }
                        images: ,
                    }
                }
            })
        } catch(err) {
            if(err instanceof Error) {
                alert(err.message)
            }
        }
    }

    return(
        <ContributionPresenter />
    )
}