import Home from "./home";
import About from "./about";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import User from "./user";
import Old from "./old";
import New from "./new";
import Login from "./login";
function Router() {
  return (
    <>
      <BrowserRouter>
        {/*this code for create link throw switch page */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/user/1">user1</Link>
          </li>
          <li>
            <Link to="/user/2">user2</Link>
          </li>
          <li>
            <Link to="/books/old_books">old book</Link>
          </li>
          <li>
            <Link to="/books/new_books">new book</Link>
          </li>
          <li>
            <Link to="login">login page</Link>
          </li>
        </ul>
        <Routes>
          {/*this code for  type the link name switch the page */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

          {/*this code for  react parameter */}
          <Route path="/user/:id" element={<User />} />
          {/*this code for  react parameter */}

          {/*this code for nested react */}
          <Route path="/books">
            <Route path="old_books" element={<Old />} />
            <Route path="new_books" element={<New />} />
          </Route>
          {/*this code for nested react */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
