import React from "react";

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>ID:</strong>
          {user.id} - <strong>Name:</strong>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
