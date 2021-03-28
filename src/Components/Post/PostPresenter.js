import { useEffect } from "react";
import { useHistory } from "react-router";
import {
  Container,
  Form,
  Segment,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import Header from "../Header";
import { haveStock } from "./PostQuery";
import { useQuery } from "react-apollo-hooks";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  code,
  data,
  onSubmit,
  title,
  setTitle,
  setContents,
  contents,
}) => {
  const history = useHistory();
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );

  useEffect(() => {
    if (data && !data.code) history.push("/");
  }, [data]);

  if (haveStockLoading) {
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
    <Container>
      <Header code={code} stockname={haveStockData.havestock.stockname} />
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
