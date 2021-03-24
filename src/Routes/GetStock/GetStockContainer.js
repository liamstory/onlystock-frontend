import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import GetStockPresenter from "./GetStockPresenter";
import { useEffect, useState } from "react";
import { getStock } from "./GetStockQuery";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [getStockMutation, { data }] = useMutation(getStock, {
    variables: { click: click },
  });

  const onClick = async (e) => {
    e.preventDefault();
    setClick(true);
    try {
      await getStockMutation();
    } catch (e) {
      toast.error("아이디와 비밀번호를 다시 확인 해 보세요.");
    }
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);

  return <GetStockPresenter onClick={onClick}></GetStockPresenter>;
};
