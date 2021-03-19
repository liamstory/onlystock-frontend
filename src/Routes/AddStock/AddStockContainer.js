import { useQuery } from "react-apollo-hooks";
import { WhoamI } from "./AddStockQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { loading, error, data } = useQuery(WhoamI);
  if (loading) return <p>로딩중</p>;
  if (error) return <p>오류</p>;
  console.log(data);
  return <div>{data}</div>;
};
