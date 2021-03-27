import { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { useHistory } from "react-router-dom";
import { Table, Container, Loader } from "semantic-ui-react";
import Header from "../Header";
import { getPost } from "./BoardQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, code }) => {
  const history = useHistory();
  const { data: postData, loading: postLoading } = useQuery(getPost, {
    variables: { code },
  });

  useEffect(() => {
    if (data && !data.havestock) history.push("/");
  }, [data]);

  if (postLoading === true) {
    return <Loader></Loader>;
  }
  return (
    <Container style={{ marginTop: "7em" }}>
      <Header code={code} stockname={data.havestock.stockname} />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>번호</Table.HeaderCell>
            <Table.HeaderCell>제목</Table.HeaderCell>
            <Table.HeaderCell>글쓴이</Table.HeaderCell>
            <Table.HeaderCell>보유 수량</Table.HeaderCell>
            <Table.HeaderCell>등록일</Table.HeaderCell>
            <Table.HeaderCell>조회수</Table.HeaderCell>
            <Table.HeaderCell>추천</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!postLoading &&
            postData &&
            postData.post &&
            postData.post.map((post, index) => (
              <Table.Row key={index}>
                <Table.Cell>{post.id}</Table.Cell>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>{post.user.username}</Table.Cell>
                <Table.Cell>{post.amount}</Table.Cell>
                <Table.Cell>{post.createdAt}</Table.Cell>
                <Table.Cell>조회수</Table.Cell>
                <Table.Cell>추천</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Container>
  );
};
