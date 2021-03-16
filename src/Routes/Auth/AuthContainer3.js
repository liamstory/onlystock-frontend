import { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { KAKAO_LOGIN, LOCAL_LOG_IN } from "./AuthQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const localLogInMutation = useMutation(LOCAL_LOG_IN);
  const kakaoLoginMutation = useMutation(KAKAO_LOGIN, {
    variables: { provider: "kakao", accessToken: access_token },
  });

  const kakaoLogin = async (e) => {
    e.preventDefault();
    window.Kakao.Auth.login({
      success: function (authObj) {},
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
