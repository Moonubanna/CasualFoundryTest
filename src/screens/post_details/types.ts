export interface User {
  username: string;
  email: string;
  phone: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  user?: User;
  userId: number;
}

export interface PostDetailsProps {
  route: {
    params: {
      postId: number; // Assuming postId is a number
    };
  };
}

export interface SingleUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
}