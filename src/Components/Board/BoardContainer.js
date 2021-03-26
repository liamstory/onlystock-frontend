import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import BoardPresenter from "./BoardPresenter";
import { getCode } from "./BoardQuery";

export default withRouter(
  ({
    match: {
      params: { code },
    },
  }) => {
    const { data, loading } = useQuery(getCode, { variables: { code } });
    return <BoardPresenter data={data} loading={loading} code={code} />;
  }
);
