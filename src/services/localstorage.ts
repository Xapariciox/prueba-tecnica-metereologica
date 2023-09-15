export const getStorage = (storage: string) => {
    const data = localStorage.getItem(storage)
    if (data) {
        return data
    }
}

export const setStorage = (storage: string, data: string) => {
    localStorage.setItem(storage, data)
    return
}

export const deleteStorage = (storage: string) => {
    localStorage.removeItem(storage)
    return
}
