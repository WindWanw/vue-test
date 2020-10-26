/**
 * 公共方法
 * 
 */

//获取唯一id
const getUuid = () => {
    return "xxxy-xxyx-xyxx-yxxx-xxxx-yyyy-xyxyxyxy".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}

export default {
    getUuid
}