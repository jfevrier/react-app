import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [data, setData] = useState([]);
    console.log('toto');
    
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        console.log('json', json);

        setData(json);
    };
    useEffect(() => {
        fetchUrl();
    });
    return [data];
}