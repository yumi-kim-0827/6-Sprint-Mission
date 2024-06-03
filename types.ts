// types.ts
export interface List {
  id: number;
  title: string;
  content: string;
  image: null | string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface Writer {
  id: number;
  nickname: string;
}

export interface BoardsProps {
  PostsData: List[];
}

export interface DropdownProps {
  onChange: (order: "recent" | "like") => void;
}

export interface PostsProps {
  posts: List;
}

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
