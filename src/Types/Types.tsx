export type UserType = {
  id: number;
  userName: string;
  isFollowed: boolean;
};

export type PostType = {
  id: number;
  userId: number;
  authorName: string;
  content: string;
  date: Date;
};
