import { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import PostListPresenter from "./PostListPresenter";
import { CREATE_POST } from "./PostListQuery";
import _ from "lodash";

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
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (code !== "" && contents !== "" && title !== "") {
      try {
        const { data } = await creatPostMutation();
        console.log(data);
        if (!_.isEmpty(data.createPost.errors)) return;

        const code = _.get(data, "createPost.post.code");
        history.push(`/stock/${code}`);
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error("내용을 적어주세요.");
    }
  };

  return (
    <PostListPresenter
      code={code}
      contents={contents}
      title={title}
      setContents={setContents}
      setTitle={setTitle}
      onSubmit={onSubmit}
    ></PostListPresenter>
  );
};
