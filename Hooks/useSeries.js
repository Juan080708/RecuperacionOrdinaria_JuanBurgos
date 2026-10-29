import { useEffect, useState } from "react";
 
export default function useSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar");
        }
        return response.json();
      })
      .then(data => {
        setSeries(data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
 
  return { series, loading, error };
}