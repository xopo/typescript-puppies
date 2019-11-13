import axios from  'axios';
const url='localhost:8083';

const getPuppies = () => {
    const apiUrl = `${url}/puppies`;
    return axios.get(apiUrl)
}

const getPuppy = (id: number) => {
    const apiUrl = `${url}/puppy/${id}`;
    return axios.get(apiUrl)
}

export default {
    getPuppy,
    getPuppies
};
