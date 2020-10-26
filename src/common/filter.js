/**
 * 注册全局过滤器
 * @param {*} status 
 */


//获取性别
const getSexStatus = (status) => status == '0' ? '女' : '男';

export default {
    getSexStatus,
}