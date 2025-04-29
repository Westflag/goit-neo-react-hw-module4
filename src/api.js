import axios from 'axios';

const ACCESS_KEY = 'UkA0ctGXF9jOuCcZbycP7ehV9wE8JbZoS7CJ0O--Gno';

export const fetchImages = async (query, page = 1) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            page,
            per_page: 12,
        },
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
    });

    return response.data;
};
