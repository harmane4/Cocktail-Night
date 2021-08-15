import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Message } from "semantic-ui-react";
import "./LoginForm.css";

import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";

export default function LoginForm() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  // Mutation to login a user
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  // Handles input change in the log in form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Handles the submit in the log in form
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
    // Clears form
    setUserFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="loginContainer">
      <h1>LOG IN</h1>
      <Form
        onSubmit={handleFormSubmit}
        noValidate
        className={loading ? "loading" : ""}
      >
        <Form.Field>
          <label>Email</label>
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
        </Form.Field>
        <Form.Field>
          <label>Password</label>
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
        </Form.Field>

        <button className="btn41-43 btn-43" type="submit">
          Log In
        </button>

        {error && <Message>Login unsuccessful</Message>}
      </Form>
    </div>
  );
}
