import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Container, Loader } from "semantic-ui-react";
import Menu from "../Menu/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ loading, data }) => {
  const history = useHistory();
  useEffect(() => {
    if (data && !data.code) history.push("/");
  }, [data]);

  if (loading === true) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Menu></Menu>
      <Container style={{ marginTop: "7em" }}>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>번호</Table.HeaderCell>
              <Table.HeaderCell>제목</Table.HeaderCell>
              <Table.HeaderCell>글쓴이</Table.HeaderCell>
              <Table.HeaderCell>등록일</Table.HeaderCell>
              <Table.HeaderCell>조회수</Table.HeaderCell>
              <Table.HeaderCell>추천</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>123</Table.Cell>
              <Table.Cell>123888888888888888888</Table.Cell>
              <Table.Cell>123</Table.Cell>
              <Table.Cell>123</Table.Cell>
              <Table.Cell>123</Table.Cell>
              <Table.Cell>123</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};
