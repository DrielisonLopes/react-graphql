export interface User {
  id: string;
  name: string;
  age: number;
  isMarried: boolean;
}

export interface GetUsersData {
  getUsers: User[];
}

export interface GetUserByIdData {
  getUserById: User | null;
}

export interface GetUserByIdVars {
  id: string;
}
