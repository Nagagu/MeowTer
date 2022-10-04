import { useContext, useEffect, useState } from "react";
import "./App.css";
import { UsersList } from "./components/UsersList/UsersList";
import { NewPost } from "./components/NewPost/NewPost";
import { PostsList } from "./components/PostsList/PostsList";
import { PostType } from "./Types/Types";
import UserContext from "./context/usersContext";
import { useAuthContext } from "./context/authenticationContext";
import { getPosts, getUsers } from "./api/api";
import { useFilterPosts } from "./components/UsersList/hooks/useFilterPosts";

function App(): JSX.Element {
  const { users, setUsers } = useContext(UserContext);
  const { selectedUser} = useContext(UserContext);
  const { loggedUser } = useAuthContext();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts(setPosts);
    getUsers(setUsers);
  }, []);

  const filteredPosts = useFilterPosts(posts, users, selectedUser);

  return (
    <div className="App">
      <div className= "apptitle" >Welcome to <span className="meowter">MeowTer!</span></div>
      <div className="main">
      <div className="postsSection">
      <NewPost setPosts={setPosts} />
        <PostsList posts={filteredPosts} />
        
      </div>
      <div className="usersSection">
        <UsersList
          usersList={users.filter(
            (o) => o.id !== loggedUser.id && o.isFollowed
          )} title="Followed"
        />
        <UsersList usersList={users.filter((o) => !o.isFollowed)} title="You might like" />
      </div>
      </div>
    </div>
  );
}

export default App;
