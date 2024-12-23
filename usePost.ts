import { useEffect, useState } from "react";

function usePost<T>(url: string, body: any): [T | null, boolean, string | null] {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!body) return;

        let isMounted = true;
        const postData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result: T = await response.json();
                if (isMounted) {
                    setData(result);
                }
            } catch (err: any) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        postData();

        return () => {
            isMounted = false;
        };
    }, [url, body]);

    return [data, loading, error];
}

export default usePost;
