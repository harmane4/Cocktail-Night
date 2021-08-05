import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function LoginForm() {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
