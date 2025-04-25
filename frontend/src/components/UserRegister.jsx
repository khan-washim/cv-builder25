import React, { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', user);
      alert('User registered!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register User</h2>
      <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegister;
