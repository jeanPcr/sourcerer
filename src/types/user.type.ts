export type User = {
  id: string;
  login: string;
  bio: string;
  avatarUrl: string;
  company: string;
  organization: { location: string };
  commits: { totalCount: Number };
  followers: { totalCount: Number };
  following: { totalCount: Number };
  location: string;
  name: string;
  repositories: {
    totalCount: Number;
  };
};
