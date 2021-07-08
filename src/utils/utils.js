import axios from 'axios';

export async function getData(url) {
    try {
        const { data } = await axios.get(url);
        return [data, null];
    } catch (error) {
        console.log(error);
        return [null, error];
    }
}
