import React from "react";

import { Databases, ID } from "appwrite";
import appwriteClient from "../../../../Services/appwriteClient";

//importing styles
import "./searchResults.css";
import { databaseId } from "../../../../Services/config";
import { Notification } from "@arco-design/web-react";

function capitalizeFirstCharacter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SearchResult = ({ title, searchResultData }) => {
  const db = new Databases(appwriteClient);

  console.log(searchResultData)

  const handleAddFavourites = async (obj) => {
    try {
      await db.createDocument(databaseId, "favourites", ID.unique(), obj);
      Notification.success({
        title: "Success",
        content: "Added to favourites.",
      });
    } catch (error) {
      Notification.error({
        title: "Error",
        content: error.message,
      });
    }
  };

  return (
    <>
      <h5 className="text-bold mt-4">{title} places</h5>
      <div className="recommended-places">
        <div className="places-list">
          {searchResultData &&
            searchResultData.map((item, index) => {
              return (
                <div className="place-item" key={item.$id}>
                  <div className="image">
                    <img src={item.image[0]} alt="img" />
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="description text-muted">
                    {item.location_description}
                  </div>
                  <div className="keyword">{capitalizeFirstCharacter(item.keyword)}</div>
                  <div
                    className="favourites"
                    onClick={() =>
                      handleAddFavourites({
                        user_id: localStorage.getItem("userId"),
                        place_id: item.$id,
                      })
                    }
                  >
                    <i className="bi bi-bookmark"></i>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
