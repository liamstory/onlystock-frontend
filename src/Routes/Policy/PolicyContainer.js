import { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";
import { UpdateUser } from "./PolicyQuery";
import {
  Button,
  Form,
  Input,
  Grid,
  Header,
  Image,
  Divider,
  Icon,
  Responsive,
  Dropdown,
  Checkbox
} from "semantic-ui-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [agree, setAgree] = useState(false);
  const [updateUser, { data, error }] = useMutation(UpdateUser);

  const onClickAgree = (e) => {
    e.preventDefault();
    setAgree(!agree);
  };

  const onClickUpdateUser = () => {
    if (!agree) {
      alert("이용 약관에 동의해주셔야합니다.");
    } else {
      updateUser({
        variables: {
          agree: agree,
        },
      });
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
    return (
        
    )
};
