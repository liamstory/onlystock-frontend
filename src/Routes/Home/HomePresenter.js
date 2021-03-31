import {
  Container,
  Dropdown,
  Menu,
  Loader,
  Segment,
  Dimmer,
  Image,
} from "semantic-ui-react";
import { allStock } from "./HomeQuery";
import { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { Link, useHistory } from "react-router-dom";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ code, stockname }) => {
  const { data, loading } = useQuery(allStock);
  const history = useHistory();

  useEffect(() => {
    if (data && !data.allstock) history.push("/getAccount");
  }, [data]);

  if (loading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }

  return (
    <Menu secondary style={menuStyle}>
      <Container>
        <Menu.Item header>Home</Menu.Item>
        <Menu.Menu position="right">
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
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
