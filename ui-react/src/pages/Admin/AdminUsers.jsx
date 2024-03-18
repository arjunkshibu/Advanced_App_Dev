import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'User 1', email: 'user1@example.com', role: 'User' },
  { id: 2, name: 'User 2', email: 'user2@example.com', role: 'User' },
  { id: 3, name: 'User 3', email: 'user3@example.com', role: 'User' }
];

const UsersTable = () => {
  const [users, setUsers] = useState(initialUsers);

  const updateUser = (id) => {
    const newName = prompt('Enter new user name:');
    const newEmail = prompt('Enter new email:');

    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: newName || user.name,
          email: newEmail || user.email
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  const addUser = () => {
    const id = Math.max(...users.map(user => user.id)) + 1;
    const name = prompt('Enter user name:');
    const email = prompt('Enter email:');

    if (name && email) {
      const newUser = { id, name, email, role: 'User' };
      setUsers([...users, newUser]);
    }
  };

  return (
    <div className="container mx-auto font-Montserrat mt-8">
      <button className="bg-green-500 hover:bg-green-700 absolute top-[10%] right-[0.5%] text-white font-bold py-5 px-6 rounded mb-4" onClick={addUser}>Add User</button>
      <table className="table-auto border-collapse border border-black-800 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">ID</th>
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Email</th>
            <th className="border border-gray-800 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-gray-800 px-4 py-2">{user.id}</td>
              <td className="border border-gray-800 px-4 py-2">{user.name}</td>
              <td className="border border-gray-800 px-4 py-2">{user.email}</td>
              <td className="border border-gray-800 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateUser(user.id)}>Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
