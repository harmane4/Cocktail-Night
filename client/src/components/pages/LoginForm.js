import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.css";

import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";

// TODO: Error handling

export default function LoginForm() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: {
          loginUser: { token },
        },
      } = await loginUser({
        variables: { ...userFormData },
      });
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="loginContainer">
      <h1>LOG IN</h1>
      <Form onSubmit={handleFormSubmit} noValidate>
        <Form.Input>
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
            name="email"
          />
        </Form.Input>
        <Form.Input>
          <input
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
            name="password"
          />
        </Form.Input>

        <Button type="submit">Log In</Button>
      </Form>

      <p>Sign In Here</p>
      <a></a>
    </div>
  );
}
