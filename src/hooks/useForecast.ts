import { useContext, SyntheticEvent, ChangeEvent, useEffect } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { getStorage, setStorage } from '../services/localstorage'
import Swal from 'sweetalert2'
import { getCoordinatesByLocation } from '../services/geoCodeApi'
import { getLocationId } from '../services/data-meteorological'

export const useForecast = () => {
    const {
        locationUser,
        initForecastDays,
        initForecastHours,
        setLocationUser,
        forecastDays,
        trialFreeSearch
    } = useContext(ForecastContext)

    const handleLocationUser = async (event: any) => {
        event.preventDefault()
        const element = event.target[0].value
        setLocationUser(element)
    }

    const handleForecast = async (locationUser: string) => {
        // if (trialFreeSearch === '5') {
        //     Swal.fire({
        //         title: 'Oh vaya!',
        //         html: `
        //         <h5>parece que has agotado las 5 búsquedas gratuitas</h5>
        //         <p style="font-size: 16px; margin-bottom: 5px">Obtén acceso sin límites con la membresía premium</p>
        //         <a href="#">Membresia premium<a/>
        //       `,
        //         icon: 'error',
        //         confirmButtonText: 'Entendido',
        //         customClass: {
        //             popup: 'my-custom-popup-class'
        //         },
        //         showClass: {
        //             popup: 'animated fadeIn slower'
        //         },
        //         hideClass: {
        //             popup: 'animated fadeOut slower'
        //         }
        //     })

        //     return
        // }
        const storedLocation = getStorage('location-user')
        console.log(await getLocationId(locationUser))
        if (
            !storedLocation ||
            storedLocation !== locationUser ||
            Object.keys(forecastDays).length < 1
        ) {
            setStorage('location-user', locationUser)
            initForecastDays()
            initForecastHours()
        }
    }
    useEffect(() => {
        locationUser && handleForecast(locationUser)
    }, [locationUser])

    return {
        handleLocationUser,
        handleForecast
    }
}
