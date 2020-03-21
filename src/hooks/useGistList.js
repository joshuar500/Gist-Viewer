// @flow
import { useEffect, useState } from "react";
import { useGithubApi } from "../api/contexts/githubapi-context";


export function useGistList(query: string) {
  const githubApi = useGithubApi();
  const [gists, setGists] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!hasSearched) {
      return;
    }
    const fetchData = async () => {
      // TODO: wrap in try/catch?
      const result = await githubApi.getUserGists(query);
      setHasSearched(false);
      setGists(result.data);
    };
    fetchData();
  }, [query, hasSearched, githubApi]);

  return [gists, setHasSearched];
}
