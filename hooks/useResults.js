import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });
      setResult(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchApi("best_match");
  }, []);

  return [searchApi, result];
};
