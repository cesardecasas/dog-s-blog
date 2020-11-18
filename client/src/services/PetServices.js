import ApiClient from './ApiClient'

export const __CreatePet = async(formData, userid) =>{
    try {
        const res = await ApiClient.post(`/pet/${userid}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetPets = async (userid) =>{
    try {
        const res = await ApiClient.get(`/pet/${userid}`)
        return res.data 
    } catch (error) {
        throw error
    }
}
