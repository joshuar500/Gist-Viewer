// @flow
import React from "react";
import values from "lodash.values";
import { useGistItem, useSessionStorage } from "../hooks";

function GistDetailComponent(props) {
  const { gistId, setGistId } = props;
  const gistItem = useGistItem(gistId);
  const [favorite, setFavorite] = useSessionStorage(gistId);

  if (!gistItem) {
    return null;
  }

  function favoriteGist() {
    if (!favorite) {
      // could be undefined OR false
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }

  return (
    <React.Fragment>
      <button type="button" onClick={() => setGistId(null)}>
        Go Back To List
      </button>
      <div className="item-detail">
        <h1>
          {gistItem.description}{" "}
          <span>
            <button type="button" onClick={favoriteGist}>
              {favorite ? "FAVORITED!" : "Favorite?"}
            </button>
          </span>
        </h1>
        <h2>owner: {gistItem.owner.login}</h2>
        {values(gistItem.files).map(file => (
          <div key={file.filename} className="item-detail--file">
            <h2>{file.filename}</h2>
            <div>raw url: {file.raw_url}</div>
            <pre className="pre-code" key="file.filename">
              <code>{file.content}</code>
            </pre>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default GistDetailComponent;
