import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, options = { method: "GET", body: null }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (options.method === "GET") {
          response = await axios.get(url, {
            params: options.body,
          });
        } else if (options.method === "POST") {
          response = await axios.post(url, options.body);
        }

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options.method, JSON.stringify(options.body)]); // add body as a dependency if it changes

  return { data, loading, error };
};

export default useFetch;
