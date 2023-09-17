interface IconWeatherProps {
    text: string
    isNight?: boolean | null
    width?: number
}
export const IconWeather = ({ text, isNight, width }: IconWeatherProps) => {
    // Define los casos de acuerdo al valor de "symbolPhrase"
    switch (text) {
        case 'clear':
            if (isNight) {
                return (
                    <img
                        width={width}
                        src="../img/parcialmente-nublado-noche.gif"
                        alt={text}
                    />
                )
            }
            return <img width={width} src="../img/claro.png" alt={text} />
        case 'mostly clear':
            if (isNight) {
                return (
                    <img
                        width={width}
                        src="../img/parcialmente-nublado-noche.gif"
                        alt={text}
                    />
                )
            }
            return (
                <img
                    width={width}
                    src="../img/parcialmente-nublado.gif"
                    alt={text}
                />
            )
        case 'light rain':
            return <img width={width} src="../img/lluvia.gif" alt={text} />
        case 'cloudy':
            return <img width={width} src="../img/nublado.gif" alt={text} />
        case 'sunny':
            return <img width={width} src="../img/soleado.gif" alt={text} />
        default:
            return <img width={width} src="../img/soleado.gif" alt={text} />
    }
}
