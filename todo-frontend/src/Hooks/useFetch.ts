import { useEffect, useState } from "react";

type RequestProps = {
    url: RequestInfo;
    init?: RequestInit;
    flipper?: boolean;
}

export const useFetch = <T>({ url, init, flipper }: RequestProps) => {
    
    // Response state
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();

    // Stringifying objects
    const [stringifiedUrl, stringifiedInit, stringifiedFlipper] = [JSON.stringify(url), JSON.stringify(init), JSON.stringify(flipper)];

    useEffect(() => {
        console.log("refetched");
        
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
    }, [stringifiedUrl, stringifiedInit, stringifiedFlipper]);

    return {data, loading, error};
};