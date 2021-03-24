import { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Header, Loader } from "semantic-ui-react";
import { getStock } from "./MenuQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { data, loading } = useQuery(getStock);
  const history = useHistory();
  useEffect(() => {
    if (data && !data.stock) history.push("/getAccount");
  }, [data]);

  return (
    <>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.stock &&
        data.stock.map((stock, index) => (
          <Link key={index} to={`/${stock.code}`}>
            <Dropdown.Item>
              <Header as="h5">{stock.stockname}</Header>
            </Dropdown.Item>
          </Link>
        ))}
    </>
  );
};