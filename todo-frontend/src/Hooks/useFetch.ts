import { useEffect, useState } from "react";

type RequestProps = {
    url: RequestInfo;
    init?: RequestInit;
}

export const useFetch = <T>({ url, init }: RequestProps) => {
    
    // Response state
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();

    // Stringifying objects
    const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

    useEffect(() => {
        const fetchApi = async () => {
            try {
                // Fetch data
                setLoading(true);
                const response = await fetch(url, init);

                if (response.status === 200) {
                    // Extract response in JSON
                    const rawData: any = await response.json();
                    setData(rawData as T);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setError(`Error ${response.status}: ${response.statusText}`);
                }
            } catch (error){
                setLoading(false);
                setError(error);
            }
        };

        // Call async function
        fetchApi();
    }, [stringifiedUrl, stringifiedInit]);

    return {data, loading, error};
};