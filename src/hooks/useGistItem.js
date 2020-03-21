// @flow
import { useState, useEffect } from "react";
import { useGithubApi } from "../api/contexts/githubapi-context";

export function useGistItem(gistId) {
  const githubApi = useGithubApi();
  const [gistItem, setGistItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // TODO: wrap in try/catch?
      const result = await githubApi.getGistById(gistId);
      setGistItem(result.data);
    };
    fetchData();
  }, [gistId, githubApi]);

  return gistItem;
}
