import {
    fetchPost,
    fetchGet
} from './fetch';


const getPath = params => fetchGet('test', params);



export default {
    getPath,
}