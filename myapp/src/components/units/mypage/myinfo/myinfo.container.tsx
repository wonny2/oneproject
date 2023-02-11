import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../mypage.queries";
import MyInfoPresenter from "./myinfo.presenter";

export default function MyInfoContainer() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <MyInfoPresenter data={data} />;
}
