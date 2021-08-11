import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form, Message } from "semantic-ui-react";
import "./SignUpForm.css";

import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

// TODO: Error handling

export default function SignUpForm() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <h1>SIGN UP </h1>
      <Form onSubmit={handleFormSubmit} noValidate>
        <Form.Field>
          <label>Name</label>
          <Form.Input>
            <input
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
              value={userFormData.username}
              required
              name="username"
            />
          </Form.Input>
        </Form.Field>
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
          Submit
        </button>
      </Form>
      {/* <Message type="invalid"> Error with signup. Please try again</Message> */}
    </div>
  );
}
