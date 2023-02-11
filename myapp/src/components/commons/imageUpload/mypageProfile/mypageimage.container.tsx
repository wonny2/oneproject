import { useMutation } from "@apollo/client"
import { UPLOAD_FILE } from "./mypageimage.queries"

export default function MyPageImageContainer() {

    const [uploadFile] = useMutation(UPLOAD_FILE);

    return(

    )
}