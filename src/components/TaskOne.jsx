import React, { useState } from "react";
import uuid from "react-uuid";
const TaskOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userLists, setUserLists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email) {
    } else {
      const newUser = {
        id: uuid(),
        name,
        email,
      };

      setUserLists([...userLists, newUser]);
      setName("");
      setEmail("");
    }
  };

  const removeUser = (id) => {
    const delUser = userLists.filter((user) => user.id !== id);
    setUserLists(delUser);
  };

  //   const removeUser = (id) => {
  //     const delUser = [...userLists];
  //     delUser.splice(id, 1);
  //     setUserLists(delUser);
  //   };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input
          type="text"
          id="name"
          className="input"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">Email: </label>
        <input
          type="text"
          id="email"
          className="input"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
      <div>
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {userLists.map((user, ind) => (
            <tr key={ind}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                {" "}
                <button className="removeBtn" onClick={() => removeUser(user?.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TaskOne;
