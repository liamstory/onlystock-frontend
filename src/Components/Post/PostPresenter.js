import { useEffect } from "react";
import { useHistory } from "react-router";
import { Container, Form } from "semantic-ui-react";
import Header from "../Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, onSubmit, title, setTitle, setContents, contents }) => {
  const history = useHistory();
  useEffect(() => {
    if (data && !data.code) history.push("/");
  }, [data]);

  return (
    <Container>
      <Header />
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Field
            name="title"
            type="text"
            label="제목"
            control="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field
            name="contents"
            type="textarea"
            label="내용"
            control="textarea"
            rows="3"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></Form.Field>
        </Form.Group>
        <Form.Button content="Submit" />
      </Form>
    </Container>
  );
};
