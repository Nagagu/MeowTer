import { PostType } from "../../Types/Types";
import { Post } from "../Post/Post";

import "../PostsList/PostsList.css";

export type PostsListProps = {
  posts: PostType[];
};

export const PostsList = (props: PostsListProps) => {
  return (
    <div className="postsContainer">
      {props.posts.map((o) => (
        <Post
          key={o.id}
          id={o.id}
          userId={o.userId}
          authorName={o.authorName}
          content={o.content}
          date={o.date}
        />
      ))}
    </div>
  );
};
