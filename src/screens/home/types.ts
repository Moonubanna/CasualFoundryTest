
export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
      likes: number;
      dislikes: number;
  };
  views: number;
  userId: number;
}

export interface HomeProps {
  navigation: {
    navigate: (screen: string, params?: { postId: number }) => void;
  };
}