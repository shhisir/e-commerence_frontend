 import React, { useState, useEffect } from 'react'
import { serverUrl } from '../api';
// import { BASE_URL } from '../../constants'; // Assuming BASE_URL is defined here

const useFetch = (endpoint) => {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Clear previous errors
            try {
                const response = await fetch(`${serverUrl}/${endpoint}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result.todos?result.todos:result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (endpoint) { // Only fetch if endpoint is provided
            fetchData();
        } else {
            setLoading(false); // If no endpoint, no loading needed
        }

    }, [endpoint]); // Re-run effect if endpoint changes

    return { data, loading, error };
};

export default useFetch;