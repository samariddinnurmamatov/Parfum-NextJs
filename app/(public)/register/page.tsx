"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from 'next/navigation';
import './register.css';
import { request } from '@/server/request';

const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      username,
      phoneNumber,
      password,
      confirmPassword,
    } = formData;

    const form = {
      firstName,
      lastName,
      username,
      phoneNumber,
      password,
      confirmPassword,
    };

    try {
      setLoading(true);
      const res = await request.post("auth/register", form);
      console.log(res);
      router.push("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center m">
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="FirstName"
          className="w-1/2 border mb-3"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          className="w-1/2 border mb-3"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          className="w-1/2 border mb-3"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="PhoneNumber"
          className="w-1/2 border mb-3"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className="w-1/2 border mb-3"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-1/2 border mb-3"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <br />
        <button
          type="submit"
          disabled={loading}
          className="bg-white mx-auto w-1/3 my-3 h-10 text-lg"
        >
          {loading ? "...loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
