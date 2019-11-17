import axios from  'axios';
const url='http://localhost:8080';

const getPuppies = () => {
    const apiUrl = `${url}/puppies`;
    return axios.get(apiUrl)
}

const adoptPuppy = (id: number) => {
    const apiUrl = `${url}/adoptPuppy/${id}`;
    return axios.patch(apiUrl);
}

export default {
    adoptPuppy,
    getPuppies
};
