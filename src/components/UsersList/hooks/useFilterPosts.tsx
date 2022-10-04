import { PostType, UserType } from "../../../Types/Types";

export const useFilterPosts = (
  posts: PostType[],
  users: UserType[],
  selectedUser: UserType | undefined
) => {
  let filteredPosts = posts;
  if (selectedUser) {
    filteredPosts = filteredPosts.filter((o) => o.userId === selectedUser.id);
  } else {
    filteredPosts = filteredPosts.filter((o) =>
      users.filter((o) => o.isFollowed).some((p) => p.id === o.userId)
    );
  }
  const filteredPostByDate = filteredPosts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
  return filteredPostByDate;
};
