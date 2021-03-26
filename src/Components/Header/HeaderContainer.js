import { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { getStock } from "./HeaderQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { data, loading } = useQuery(getStock);
  const history = useHistory();
  useEffect(() => {
    if (data && !data.stock) history.push("/getAccount");
  }, [data]);

  return (
    <>
      {!loading &&
        data &&
        data.stock &&
        data.stock.map((stock, index) => (
          <Link key={index} to={`/stock/${stock.code}`}>
            <Dropdown.Item text={stock.stockname} />
          </Link>
        ))}
    </>
  );
};
