import axios from 'axios';

const DatabaseAdapter = {
    async findOne(url, query) {
        const result = await axios.get(url, { params: query });
        return result.data;
    },
    async save(url, data) {
        const result = await axios.post(url, data);
        return result.data;
    }
    // ...
}

export default DatabaseAdapter;