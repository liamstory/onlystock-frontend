const {
      data: { socialAuth: token },
    } = kakaoLoginMutation();
    console.log(token);
    if (token !== "" && token !== undefined) {
      localLogInMutation({ variables: { token } });
    }