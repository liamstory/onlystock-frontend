import { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { KAKAO_LOGIN, LOCAL_LOG_IN } from "./AuthQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [access_token, setAccess_token] = useState("123");
  const localLogInMutation = useMutation(LOCAL_LOG_IN);
  const kakaoLoginMutation = useMutation(KAKAO_LOGIN, {
    variables: { provider: "kakao", accessToken: access_token },
  });

  const kakaoLogin = async (e) => {
    e.preventDefault();
    window.Kakao.Auth.login({
      success: function (authObj) {
        setAccess_token(authObj.access_token);
        console.log(authObj.access_token);
        console.log(access_token);
      },
    });

    const {
      data: { socialAuth: token },
    } = await kakaoLoginMutation();
    console.log(token);
    if (token !== "" && token !== undefined) {
      localLogInMutation({ variables: { token } });
    }
  };

  return (
    <a href="#" onClick={kakaoLogin}>
      <h1>카카오로그인</h1>
    </a>
  );
};
