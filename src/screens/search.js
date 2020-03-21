// @flow
import React, { useState } from "react";
import get from "lodash.get";
import GistListComponent from "../components/list";
import GistDetailComponent from "../components/item-detail";
import { useGistList } from "../hooks";

function SearchScreen() {
  const [selectedGistId, setSelectedGist] = useState(null);
  const [query, setQuery] = useState("");
  const [gists, setHasSearched] = useGistList(query);

  const handleInputChange = (e) => {
    setQuery(get(e, ["target", "value"], ""));
  }

  const handleSearchForm = (e) => {
    e.preventDefault();
    setHasSearched(true);
  }

  const setGistId = (gistId) => {
    setSelectedGist(gistId);
  }

  if (selectedGistId !== null) {
    return (
      <GistDetailComponent gistId={selectedGistId} setGistId={setGistId} />
    );
  }

  return (
    <div id="search">
      <form onSubmit={handleSearchForm}>
        <label>Enter Github Username:&nbsp;</label>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <GistListComponent goToDetailScreen={setGistId} list={gists} />
    </div>
  );
}

export default SearchScreen;
