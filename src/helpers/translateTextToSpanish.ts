import { foreCastDaysItemMapped } from '../interfaces/types'
import { mockMadridDays } from '../mocks/responseMadrid'

export const translateGermanToSpanish = (germanText: string) => {
    let textoTraducido

    switch (germanText.toLowerCase()) {
        case 'leicht bewölkt':
            textoTraducido = 'Parcialmente nublado'
            break
        case 'leichter regenschauer':
            textoTraducido = 'Llovizna ligera'
            break
        case 'bedeckt':
            textoTraducido = 'Nublado'
            break
        case 'wolkig':
            textoTraducido = 'Nublado'
            break
        case 'sonnig':
            textoTraducido = 'Soleado'
            break
        default:
            textoTraducido = 'Estable'
    }

    return textoTraducido
}

export function translateItems(items: Array<foreCastDaysItemMapped>) {
    return items.map(item => {
        if (item.weather && item.weather.text) {
            item.weather.text = translateGermanToSpanish(item.weather.text)
        }
        // Puedes agregar más campos para traducir aquí si es necesario

        return item
    })
}
