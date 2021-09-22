import { Button, Form, Input } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const imageInput = useRef();
  const [text, onChangeText, setText] = useInput("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="오늘 유저님이 무슨 일이 있으셨는 지 궁금합니다"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          Together
        </Button>
      </div>
      {imagePaths.map((v) => (
        <div key={v} style={{ display: "inline-block" }}>
          <img src={v} style={{ width: "200px" }} alt={v} />
        </div>
      ))}
      <Button>제거</Button>
    </Form>
  );
};
export default PostForm;
