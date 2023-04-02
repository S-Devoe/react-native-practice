import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "9d933fa6f8msh5994cab91cb832dp164e4ajsncae7518f4492",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...params,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      // console.log(res?.data);
      setData(res?.data?.data);
      setIsLoading(false)
    } catch (error) {
      
      setError(error);
      alert(`${error}`);
    } finally {
      setIsLoading(false);
      setError(null)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
