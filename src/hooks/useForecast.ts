import { useContext, SyntheticEvent, ChangeEvent, useEffect } from 'react'
import { ForecastContext } from '../context/ForecastContext'
import { getStorage, setStorage } from '../services/localstorage'
import Swal from 'sweetalert2'
import { getLocationId } from '../services/data-meteorological'
import { toast } from 'sonner'
import { LOCATION_USER } from '../constants/localStorage'

export const useForecast = () => {
    const {
        locationUser,
        initForecastDays,
        initForecastHours,
        setLocationUser,
        forecastDays,
        trialFreeSearch,
        setIsLoading
    } = useContext(ForecastContext)

    const handleLocationUser = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        const element = (event.currentTarget.elements[0] as HTMLInputElement)
            ?.value
        if (element.length <= 1) {
            return
        }

        if (await getLocationId(element)) {
            setLocationUser(element)
        } else {
            toast(
                `Al parecer ha ocurrido un error al buscar la localidad. Por favor intente de nuevo con otra.`
            )
        }
    }

    const handleForecast = async (locationUser: string) => {
        if (trialFreeSearch === '5') {
            Swal.fire({
                title: 'Oh vaya!',
                html: `
                <h5>parece que has agotado las 5 búsquedas gratuitas</h5>
                <p style="font-size: 16px; margin-bottom: 5px">Obtén acceso sin límites con la membresía premium</p>
                <a href="#">Membresia premium<a/>
              `,
                icon: 'error',
                confirmButtonText: 'Entendido',
                showClass: {
                    popup: 'animated fadeIn slower'
                },
                hideClass: {
                    popup: 'animated fadeOut slower'
                }
            })

            return
        }
        const storedLocation = getStorage(LOCATION_USER)
        if (
            !storedLocation ||
            storedLocation !== locationUser ||
            Object.keys(forecastDays).length < 1
        ) {
            setIsLoading(true)
            initForecastDays()
            initForecastHours()
            setStorage(LOCATION_USER, locationUser)
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
