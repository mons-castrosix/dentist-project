import axios from 'axios';

const DatabaseAdapter = {
    async findOne(url, id) {
        const result = await axios.get(url, { params: {id:id} });
        return result.data;
    },
    async find(url) {
        const result = await axios.get(url);
        return result.data;
    },
    async save(url, data) {
        const result = await axios.post(url, data);
        return result.data;
    },
    async edit(url, data) {
        const result = await axios.patch(url, data);
        return result.data;
    },
    async delete(url,id) {
        const result = await axios.delete(url, { params: {id:id} });
        return result.data;
    }
    // ...
}

export default DatabaseAdapter;