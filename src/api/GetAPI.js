import axios from "axios";

export const getapi = async (url) => {
    try {
        const response = await axios.get(`http://13.234.34.136/api/${url}`, );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
