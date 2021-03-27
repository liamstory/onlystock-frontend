import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import BoardPresenter from "./BoardPresenter";
import { haveStock } from "./BoardQuery";

export default withRouter(
  ({
    match: {
      params: { code },
    },
  }) => {
    const { data } = useQuery(haveStock, { variables: { code } });

    return <BoardPresenter data={data} code={code} />;
  }
);
