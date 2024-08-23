import Axios from 'axios'

export default function api() {
    const baseURL = 'https://api.felipesobral.com.br'

    return Axios.create({
        baseURL
    })
}