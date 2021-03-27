import { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import PostPresenter from "./PostPresenter";
import { CREATE_POST } from "./PostQuery";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  match: {
    params: { code },
  },
}) => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [creatPostMutation] = useMutation(CREATE_POST, {
    variables: { code: code, contents: contents, title: title },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (code !== "" && contents !== "" && title !== "") {
      try {
        await creatPostMutation();
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("내용을 적어주세요.");
    }
  };

  return (
    <PostPresenter
      code={code}
      contents={contents}
      title={title}
      setContents={setContents}
      setTitle={setTitle}
      onSubmit={onSubmit}
    ></PostPresenter>
  );
};
