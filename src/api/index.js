import axios from 'axios';





export const getPlacesData = async (type, sw, ne) => {

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': 'ddaf94000fmshf13ebf44fc7a7d5p1d5e98jsn9032284eb4cc'
            }
        })

        return data;
    }
    catch (error) {
        console.log(error)

    }
}