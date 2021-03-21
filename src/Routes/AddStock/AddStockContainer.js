import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { get_Stock } from "./AddStockQuery";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { Button } from "semantic-ui-react";
import { Body, Wrapper, Content, Article } from "../../Styles/Wrapper";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const company_id = useInput("");
  const company_secret = useInput("");
  const [getStockMutation, { loading, error }] = useMutation(get_Stock, {
    variables: {
      companyId: company_id.value,
      companySecret: company_secret.value,
      company: 1,
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (company_id.value !== "" && company_secret.value !== "") {
      try {
        const {
          data: { getStock },
        } = await getStockMutation();
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("정보를 입력하시오");
    }
  };
  return (
    <Body>
      <Wrapper>
        <Helmet>
          <title>Log In | For 주주</title>
        </Helmet>
        <Content>
          <Article>
            <form onSubmit={onSubmit}>
              <input placeholder="아이디를 입력하세요" {...company_id}></input>
              <input
                placeholder="비밀번호를 입력하세요"
                {...company_secret}
              ></input>
              <Button>
                <span>로그인</span>
              </Button>
            </form>
          </Article>
        </Content>
      </Wrapper>
    </Body>
  );
};
