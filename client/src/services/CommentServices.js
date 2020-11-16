import ApiClient from './ApiClient'


export const __CreateComment = async (formData, user_id, post_id) => {
    try {
        const res = await ApiClient.post(`/comment/${post_id}/user/${user_id}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}