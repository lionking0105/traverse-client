import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Favourites.route.css";
import "../css/dashboardGeneric.css";
import Header from "../../../components/Header/Header";

import { Account } from "appwrite";
import appwriteClient from "../../../utils/appwriteClient";

const Favourites = () => {
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

  return (
    <div className="main-body">
      <Header />

      <div className="dashboard-content favourites">
        <Sidebar data={user_details} />
        <div className="content">
          <div className="url-path">Dashboard / Favourites</div>
          <div className="favourites-section">
            <p className="favourites-header">My Favourites</p>
            <div className="favourites-content">
              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="travel place"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="img"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="img"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="img"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="img"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="favourites-item">
                <div className="image">
                  <img
                    src="https://lp-cms-production.imgix.net/2019-06/813869da84003e9ab623499ae2465723-bodhnath-stupa.jpg?q=40&w=2000&auto=format"
                    alt="img"
                  />
                </div>
                <div className="text-container">
                  <div className="title">Bouddhanath Stupa</div>
                  <div className="description text-muted">
                    One of the most lightseeing place in Kathmandu. Many
                    visitors comes to visit this place.
                  </div>
                  <div className="keyword">Tourist</div>

                  <div className="button-container">
                    <button
                      className="btn btn-dark shadow-sm"
                      id="view-favourites-btn"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
