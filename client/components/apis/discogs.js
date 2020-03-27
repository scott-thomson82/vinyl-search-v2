import axios from 'axios'

// const TOKEN = 'aOojmDdTaALmEVyETCghEcSeDkTbddnFmFGumdSo'
const KEY = 'lkxqfzOQwqJpzGHomEzP'
const SECRET = 'lwbclznwyhVEAmAPbUNqNvBreHxWaAcr'

export default axios.create({
    baseURL: 'https://api.discogs.com',
    params: {
        page: 1,
        per_page: 1,
        items: 1,
        key: KEY,
        secret: SECRET
    }
})