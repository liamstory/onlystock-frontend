import React, { useEffect } from "react";
import { KAKAO_LOGIN } from "./AuthQuery";
import { useMutation } from "react-apollo-hooks";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [kakaoLogin, { data }] = useMutation(KAKAO_LOGIN);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // 카카오 로그인 버튼을 생성합니다.
  const loginWithKakao = (e) => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        kakaoLogin({
          variables: { provider: "kakao", accessToken: authObj.access_token },
        });
        console.log(authObj.access_token);
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
