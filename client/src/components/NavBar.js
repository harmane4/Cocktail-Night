import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu tabular>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
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
        {Auth.loggedIn() ? (
          <>
            <Menu.Item as={Link} to="/cocktails"></Menu.Item>
            <Menu.Item onClick={Auth.logout}>Logout</Menu.Item>
          </>
        ) : (
          <Menu.Item onClick={Auth.logout}>Logout</Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}
