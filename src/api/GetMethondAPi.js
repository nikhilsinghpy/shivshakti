import axios from "axios";
// thiss api us going to be used to call api with pramas value
export const GetMethodAPI = async (url, params = {}) => {
    try {
        const response = await axios.get(`http://www.siptok.in/api/${url}?${params}`, );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
