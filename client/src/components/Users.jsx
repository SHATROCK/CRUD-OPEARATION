import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then((result) => setusers(result.data))
      .catch((err) => console.log(err));
  }, []);

 const handledelete = (id) => {
    axios.delete(`http://localhost:5000/deleteUser/${id}`)
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err.response.data)); // Ithu backend-la irunthu vara exact error-ai kaatum
}
  return (
    <div className="flex h-screen justify-center content-center text-center items-center">
      <Link
        to="/create"
        className="bg-green-400 absolute top-5 left-5 px-8 py-2 font-extrabold rounded-t-xl text-white"
      >
        +add
      </Link>

      <div className="border rounded inline-block">
        <table className="border-collapse">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2 text-2xl px-10">Name</th>
              <th className="p-2 text-2xl px-5">Email</th>
              <th className="p-2 text-2xl px-5">Age</th>
              <th className="p-2 text-2xl px-15">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-[22px] font-serif">
                <td className="p-4 capitalize hover:shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                  {user.name}
                </td>
                <td className="hover:shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                  {user.email}
                </td>
                <td className="hover:shadow-[0_10px_10px_rgba(0,0,0,0.10)]">
                  {user.age}
                </td>
                <td className="space-x-2">
                  <Link
                    to={`/update/${user._id}`}
                    className="bg-green-500 px-4 py-2 rounded hover:bg-green-400"
                  >
                    Edit
                  </Link>
                  <button
                    className="capitalize cursor-pointer bg-red-500 px-3 py-1 rounded hover:bg-red-400"
                    onClick={() => handledelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </div>
  );
}

export default Users;
