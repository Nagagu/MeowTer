import { useContext } from "react";
import UserContext from "../../context/usersContext";
import { UserType } from "../../Types/Types";
import "./User.css";

export const User = (props: UserType) => {
  const { users, setUsers } = useContext(UserContext);
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  const handlePostsByUser = () => {
    props.id === selectedUser?.id
      ? setSelectedUser(undefined)
      : setSelectedUser({ ...props });
  };

  const handleChangeFollowedUsers = () => {
    const currentUser = users.find((o) => o.id === props.id);
    if (currentUser) {
      currentUser.isFollowed = !currentUser.isFollowed;
      setUsers([...users]);
    }
  };

  return (
    <div className="userContainer">
      
      <button
        className={
          props.id === selectedUser?.id ? "selectedUserButton" : "userButton"
        }
        onClick={() => handlePostsByUser()}
        disabled={!props.isFollowed}
      >
        <h3>{props.userName}</h3>
      </button>
      <button
        className="followButton"
        onClick={() => handleChangeFollowedUsers()}
      >
        {props.isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};
