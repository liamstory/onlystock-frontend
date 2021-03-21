import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Modal, Form } from "semantic-ui-react";
import { Body, Wrapper, Content, Article } from "../../Styles/Wrapper";

// eslint-disable-next-line import/no-anonymous-default-export
export default (company_id, company_secret, onSubmit) => {
  const [open, setOpen] = useState(false);

  return (
    <Body>
      <Wrapper>
        <Helmet>
          <title>Log In | For 주주</title>
        </Helmet>
        <Content>
          <Article>
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Button
                  style={{ marginBottom: 10, backgroundColor: "#FEE500" }}
                  size="large"
                  fluid
                >
                  <span style={{ fontSize: 15 }}>카카오톡으로 시작하기</span>
                </Button>
              }
            >
              <Modal.Header>자산 추가</Modal.Header>
              <Modal.Content>
                <Form onSubmit={onSubmit}>
                  <Form.Group>
                    <Form.Input
                      placeholder="아이디를 입력하세요"
                      name="id"
                      {...company_id}
                    />
                    <Form.Input
                      placeholder="비밀번호를 입력하세요"
                      name="secret"
                      {...company_secret}
                    />
                    <Form.Button content="Submit" />
                  </Form.Group>
                </Form>
              </Modal.Content>
            </Modal>
          </Article>
        </Content>
      </Wrapper>
    </Body>
  );
};
