import { UserType } from "../../Types/Types";
import { User } from "./User";
import "./UsersList.css";

type UsersListProps = {
  title: string
  usersList: UserType[];
};

export const UsersList = (props: UsersListProps) => {
  return (
    <div className="users">
      <div className="title">{props.title}</div>
      {props.usersList.map((o) => (
        <User {...o} />
      ))}
    </div>
  );
};
