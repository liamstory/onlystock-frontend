import { useQuery } from "react-apollo-hooks";
import { Container, Segment, Dimmer, Loader, Image } from "semantic-ui-react";
import { getPost, haveStock } from "./ArticleQuery";
import Header from "../Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code, id },
  },
}) => {
  const { data, loading } = useQuery(getPost, {
    variables: { code: code, id: id },
  });
  const { data: haveStockData, loading: haveStockLoading } = useQuery(
    haveStock,
    { variables: { code } }
  );
  if (loading || haveStockLoading) {
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
      <div className="banner">
        <div className="container">
          <h1>{data.getpost.title}</h1>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">{data.getpost.contents}</div>
        </div>

        <hr />

        <div className="article-actions">하이</div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">방가</div>
        </div>
      </div>
    </Container>
  );
};
