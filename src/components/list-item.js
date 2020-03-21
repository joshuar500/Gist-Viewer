// @flow
import React from "react";
import { useSessionStorage } from "../hooks";

// TODO: does this need to be more generalized?
function GistListItem(props) {
  const { description, createdDate, goToDetailScreen, gistId } = props;
  const [favorite] = useSessionStorage(gistId);

  function setDescription() {
    const favorited = favorite ? "FAVORITED!!" : "";
    return description
      ? `${description} ${favorited}`
      : `[no description] ${favorited}`;
  }

  return (
    <div className="list-item" onClick={() => goToDetailScreen(gistId)}>
      <div className="list-item--description">{setDescription()}</div>
      <div className="list-item--date">{createdDate}</div>
    </div>
  );
}

export default GistListItem;
