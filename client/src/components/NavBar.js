import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu tabular>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
              as={Link}
              to="/"
            />
            <Menu.Item
              name="cocktails"
              active={activeItem === "cocktails"}
              onClick={handleItemClick}
              as={Link}
              to="/cocktails"
            />
            <Menu.Item onClick={Auth.logout}>Logout</Menu.Item>
          </>
        ) : (
          <>
            <Menu.Menu position="right">
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                onClick={handleItemClick}
                as={Link}
                to="/login"
              />
              <Menu.Item
                name="signup"
                active={activeItem === "signup"}
                onClick={handleItemClick}
                as={Link}
                to="/signup"
              />
            </Menu.Menu>
          </>
        )}
      </div>
    </Menu>
  );

  // return (
  //   <Menu tabular>
  //     <Menu.Item
  //       name="home"
  //       active={activeItem === "home"}
  //       onClick={handleItemClick}
  //       as={Link}
  //       to="/"
  //     />
  //     <Menu.Item
  //       name="cocktails"
  //       active={activeItem === "cocktails"}
  //       onClick={handleItemClick}
  //       as={Link}
  //       to="/cocktails"
  //     />
  //     <Menu.Menu position="right">
  //       <Menu.Item
  //         name="login"
  //         active={activeItem === "login"}
  //         onClick={handleItemClick}
  //         as={Link}
  //         to="/login"
  //       />
  //       <Menu.Item
  //         name="signup"
  //         active={activeItem === "signup"}
  //         onClick={handleItemClick}
  //         as={Link}
  //         to="/signup"
  //       />
  //     </Menu.Menu>
  //   </Menu>
  // );
}
