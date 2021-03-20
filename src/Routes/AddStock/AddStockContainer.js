import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import AddStockPresenter from "./AddStockPresenter";
import { get_Stock } from "./AddStockQuery";
import { toast } from "react-toastify";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const id = useInput("");
  const secret = useInput("");
  const getStockMutation = useMutation(get_Stock, {
    variables: { id: id.value, secret: secret.value },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (id.value !== "" && secret.value !== "") {
      try {
        const {
          data: { getStcok },
        } = await getStockMutation();
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("정보를 입력하시오");
    }
  };
  return (
    <AddStockPresenter
      id={id}
      secret={secret}
      onSubmit={onSubmit}
    ></AddStockPresenter>
  );
};
