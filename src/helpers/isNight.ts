export const isNight = (time: string) => {
    const horaClima = new Date(time)

    if (horaClima.getHours() >= 6 && horaClima.getHours() < 18) {
        return false
    } else {
        return true
    }
}
