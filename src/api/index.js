import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'



const getPlacesData = async (sw, ne) => {

    try {
        const { data: { data } } = await axios.get(URL, {
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