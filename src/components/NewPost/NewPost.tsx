import "./NewPost.css";

import { Dispatch, SetStateAction, useState } from "react";
import { PostType } from "../../Types/Types";
import { PawIcon } from "../../icons/icons";
import { useAuthContext } from "../../context/authenticationContext";

type NewPostProps = {
  setPosts: Dispatch<SetStateAction<PostType[]>>;
};

export const NewPost = (props: NewPostProps) => {
  const [inputValue, setInputValue] = useState("");
  const { loggedUser } = useAuthContext();

  const handlePublishPost = () => {
    const newPost: PostType = {
      userId: loggedUser.id,
      authorName: loggedUser.userName,
      content: inputValue,
      date: new Date(Date.now()),
      id: Date.now(),
    };
    newPost.content !== "" &&
      props.setPosts((currentPostArray) => [...currentPostArray, newPost]);
  };

  return (
    <div className="newPostContainer">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="newPostInput"
        placeholder="Write here whatever you meow"
      />
      <button onClick={handlePublishPost} className="sendButton">
        <PawIcon />
      </button>
    </div>
  );
};
