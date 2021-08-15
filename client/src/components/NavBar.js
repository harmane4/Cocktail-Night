import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavBar() {
  // Sets the initial state to home link
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu tabular>
      {Auth.loggedIn() ? (
        <>
          <Menu.Item
            name="home"
            // If the activeItem is true this link will be highlighted
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name="choose cocktail"
            active={activeItem === "choose cocktail"}
            onClick={handleItemClick}
            as={Link}
            to="/cocktails"
          />
          <Menu.Item onClick={Auth.logout}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Menu position="right">
            <Menu.Item
              name="LOGIN"
              active={activeItem === "LOGIN"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="SIGN UP"
              active={activeItem === "SIGN UP"}
              onClick={handleItemClick}
              as={Link}
              to="/signup"
            />
            <Menu.Item
              name="home"
              // If the activeItem is true this link will be highlighted
              active={activeItem === "home"}
              onClick={handleItemClick}
              as={Link}
              to="/"
            />
          </Menu.Menu>
        </>
      )}
    </Menu>
  );
}
