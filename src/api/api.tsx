import { Dispatch, SetStateAction } from "react";
import { PostType, UserType } from "../Types/Types";

export const getPosts = (setData: Dispatch<SetStateAction<PostType[]>>) => {
  fetch("http://localhost:3001/posts.json")
    .then((o) => o.json())
    .then((o) => o.map((p: PostType) => ({ ...p, date: new Date(p.date) })))
    .then((o) => setData(o));
};

export const getUsers = (setUsers: Dispatch<SetStateAction<UserType[]>>) => {
  fetch("http://localhost:3001/users.json")
    .then((o) => o.json())
    .then((o) => setUsers(o));
};
