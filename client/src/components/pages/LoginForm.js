import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form } from "semantic-ui-react";

import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";

// TODO: Error handling

export default function LoginForm() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
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
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      Auth.loginUser(data.addUser.token);
      // props.history.push("/cocktails");
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
    <div>
      <h1>LOG IN PAGE</h1>
      <Form onSubmit={handleFormSubmit} noValidate>
        <Form.Input>
          <label>Email</label>
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
          <label>Password</label>
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

// import React, { useState } from "react";
// import { Button, Form } from "semantic-ui-react";
// import { useMutation } from "@apollo/client";
// import Auth from "../../utils/auth";
// import { LOGIN_USER } from "../../utils/mutations";

// export default function LoginForm() {
//   const [userFormData, setUserFormData] = useState({ email: "", password: "" });
//   const [login, { error, data }] = useMutation(LOGIN_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div className="container">
//       <Form onSubmit={handleFormSubmit}>
//         <Form.Field>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Name"
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//             name="email"
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//             name="password"
//           />
//         </Form.Field>

//         <Button type="submit">Submit</Button>
//       </Form>
//     </div>
//   );
// }
