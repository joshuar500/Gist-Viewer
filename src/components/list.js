// @flow
import React from "react";
import GistListItem from "./list-item";

function GistListComponent(props: { props: { list: Array } }) {
  const { list, goToDetailScreen } = props;
  return (
    <div id="gist-list-component">
      {list.length > 0 &&
        list.map(listItem => {
          return (
            <GistListItem
              gistId={listItem.id}
              goToDetailScreen={goToDetailScreen}
              key={listItem.id}
              description={listItem.description}
              createdDate={listItem.created_at}
            />
          );
        })}
    </div>
  );
}

export default GistListComponent;
