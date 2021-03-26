import { Link } from "react-router-dom";
import { Container, Dropdown, Icon, Menu } from "semantic-ui-react";
import HeaderContainer from "./HeaderContainer";

export default ({ code }) => {
  return (
    <Menu secondary>
      <Container>
        <Menu.Item header>종목명</Menu.Item>
        <Menu.Item position="right">
          <Link to={`/post/${code}`}>
            <Icon name="edit outline" />
            글쓰기
          </Link>
        </Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            <HeaderContainer />
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};
