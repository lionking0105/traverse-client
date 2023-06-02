import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Account } from "appwrite";
import appwriteClient from "./utils/appwriteClient";

// importing stles
import "./App.css"
import "@arco-design/web-react/dist/css/arco.css"

// importing components
import Home from "./pages/Home/Home.route.jsx";
import Login from "./pages/Login/login.route.jsx";
import Signup from "./pages/Signup/signup.route.jsx";
import Dashboard from "./pages/Dashboard/About/Dashboard.route.jsx";
import Favourites from "./pages/Dashboard/Favourites/Favourites.route.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import Changepassword from "./pages/Dashboard/Actions/ChangePassword/Changepassword.jsx";
import ListReviews from "./pages/Dashboard/Reviews/ListReviews";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user_details, setUserDetails] = useState({
    uid: "Loading...",
    username: "Loading...",
    full_name: "Loading...",
    email: "Loading...",
  });

  const account = new Account(appwriteClient);

  useEffect(() => {
    (async () => {
      let uid = localStorage.getItem("userId");
      let userData = await account.get(uid);
      let { $id, name, email } = userData;
      setUserDetails({ uid, username: $id, full_name: name, email });
    })();
  }, []);
  
  useEffect(() => {
    const token = localStorage.getItem("cookieFallback");
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  console.log(loggedIn);

  return (
    <div className="App">
      <div className="app-wrapper">
        {loggedIn === true ? (
          <BrowserRouter>
            <Outlet />
            <QueryClientProvider client={queryClient}>
              <div className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard data={user_details} />} />
                  <Route path="/favourites" element={<Favourites data={user_details} />} />
                  <Route path="/reviews" element={<ListReviews data={user_details} />} />
                  <Route path="/changePassword" element={<Changepassword data={user_details} />} />

                  {/* 👇️ only match this when no other routes match */}
                  <Route path="*" element={<PageNotFound />} logStatus={{ loggedIn }} />
                </Routes>
              </div>
            </QueryClientProvider>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login logStatus={{ loggedIn, setLoggedIn }} />} />
              <Route path="/signup" element={<Signup />} />

              {/* 👇️ only match this when no other routes match */}
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
};

export default App;
