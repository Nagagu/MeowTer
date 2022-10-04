import { PostType } from "../../Types/Types";
import "./Post.css";

export const Post = (props: PostType) => {
  return (
    <section className="postSection">
      <div className="headline">
        <h3>{props.authorName}</h3>
        <span>{props.date.toDateString()}</span>
      </div>

      <div className="content">{props.content}</div>
    </section>
  );
};
