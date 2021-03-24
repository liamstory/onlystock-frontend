import { Container, Dropdown, Menu } from "semantic-ui-react";
import MainContainer from "./MenuContainer";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          For 주주
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
        <Dropdown item simple text="나의 회사">
          <Dropdown.Menu>
            <MainContainer />
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
);

export default FixedMenuLayout;
