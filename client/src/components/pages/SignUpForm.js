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

  const [addUser, { error }] = useMutation(ADD_USER);

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
      <h1>SIGN UP PAGE</h1>
      <Form onSubmit={handleFormSubmit} noValidate>
        <Form.Input>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            value={userFormData.username}
            required
            name="username"
            label="Name"
          />
        </Form.Input>
        <Form.Input>
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
            name="email"
            label="Email"
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
            label="Password"
          />
        </Form.Input>
        <Button type="submit">Submit</Button>
      </Form>
      <Message type="invalid"> Error with signup. Please try again</Message>

      <p>Log In here</p>
      <a></a>
    </div>
  );
}
