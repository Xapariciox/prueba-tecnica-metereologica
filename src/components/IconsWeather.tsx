interface IconWeatherProps {
    text: string
    isNight?: boolean | null
    width?: number
}
export const IconWeather = ({ text, isNight, width }: IconWeatherProps) => {
    switch (text) {
        case 'Parcialmente nublado':
            if (isNight) {
                return (
                    <img
                        width={width}
                        src="../img/parcialmente-nublado-noche.gif"
                        alt="nublado noche"
                    />
                )
            }
            return (
                <img
                    width={width}
                    src="../img/parcialmente-nublado.gif"
                    alt="nublado"
                />
            )
        case 'Llovizna ligera':
            return <img width={width} src="../img/lluvia.gif" alt="Llovizna" />
        case 'Nublado':
            return <img width={width} src="../img/nublado.gif" alt="nublado" />
        case 'Soleado':
            return <img width={width} src="../img/soleado.gif" alt="soleado" />
        case 'Claro':
            return <img width={width} src="../img/claro.png" alt="soleado" />
        default:
            return <img width={width} src="../img/soleado.gif" alt="soleado" />
    }
}
