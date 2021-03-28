const {
      data: { socialAuth: token },
    } = kakaoLoginMutation();
    if (token !== "" && token !== undefined) {
      localLogInMutation({ variables: { token } });
    }