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
              name="choose cocktail"
              active={activeItem === "choose cocktail"}
              onClick={handleItemClick}
              as={Link}
              to="/cocktails"
            />
            <Menu.Item
              name="view saved cocktail"
              active={activeItem === "view saved cocktail"}
              onClick={handleItemClick}
              as={Link}
              to="/saved"
            />
            <Menu.Item onClick={Auth.logout}>
              <Link to="/">Logout</Link>
            </Menu.Item>
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
}
