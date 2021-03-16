import React, { useEffect } from "react";
import { KAKAO_LOGIN, LOCAL_LOG_IN } from "./AuthQuery";
import { useMutation } from "react-apollo-hooks";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [kakaoLogin, { data }] = useMutation(KAKAO_LOGIN);
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  useEffect(() => {
    if (data) {
      localLogInMutation({ variables: { token: data.socialAuth.token } });
    }
  });

  // 카카오 로그인 버튼을 생성합니다.
  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        kakaoLogin({
          variables: { provider: "kakao", accessToken: authObj.access_token },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <a href="#" onClick={loginWithKakao}>
      <h1>카카오로그인</h1>
    </a>
  );
};
