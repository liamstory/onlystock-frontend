import { Container, Dropdown, Icon, Menu } from "semantic-ui-react";
import { allStock } from "./HeaderQuery";
import { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { Link, useHistory } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code, stockname }) => {
  const { data, loading } = useQuery(allStock);

  const history = useHistory();
  useEffect(() => {
    if (data && !data.allstock) history.push("/getAccount");
  }, [data]);

  return (
    <Menu secondary>
      <Container>
        <Menu.Item header>{stockname}</Menu.Item>
        <Menu.Item position="right">
          <Link to={`/post/${code}`}>
            <Icon name="edit outline" />
            글쓰기
          </Link>
        </Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            {!loading &&
              data &&
              data.allstock &&
              data.allstock.map((stock, index) => (
                <Link key={index} to={`/stock/${stock.code}`}>
                  <Dropdown.Item text={stock.stockname} />
                </Link>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};
