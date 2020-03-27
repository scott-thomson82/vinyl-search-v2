import axios from 'axios'

// const TOKEN = 'aOojmDdTaALmEVyETCghEcSeDkTbddnFmFGumdSo'
const KEY = 'lkxqfzOQwqJpzGHomEzP'
const SECRET = 'lwbclznwyhVEAmAPbUNqNvBreHxWaAcr'

export default axios.create({
    baseURL: 'https://api.discogs.com',
    params: {
        // type: '',
        title: '',
        artist: '',
        label: '',
        genre: '',
        year: '',
        // catno: '',
        barcode: '',
        track: '',
        key: KEY,
        secret: SECRET
    }
})