import { useState, useEffect } from "react";
/* 
this code is for fetching data from url
mention type of data for better experience
it has 3 states it returns

data -> which returns the data(as a <T> type)
loading -> which returns true or false (true for fetching isn't done false for done)
error -> which return the error string

 */
function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result: T = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
