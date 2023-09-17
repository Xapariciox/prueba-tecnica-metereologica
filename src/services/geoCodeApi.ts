export const getCoordinatesByLocation = async (location: string) => {
    const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?format=json&city=${location}&accept-language=es&polygon_threshold=0.0`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                'e7fdeb2ce2mshaa5ead4a7995c12p1ced8fjsn5444f5bb2d24',
            'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        console.log(location)
        const resultMapped = {
            lat: result[0].lat,
            lon: result[0].lon
        }
        return resultMapped
    } catch (error) {
        console.log(error)
    }
}
