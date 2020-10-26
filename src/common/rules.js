/**
 * 
 * 表单自定义验证
 * 
 * @param {*} rule 
 * @param {*} value 
 * @param {*} callback 
 */

//检测输入的字符串不是中文
const checkInputPassword = (rule, value, callback) => {

    if (!value) {
        return callback(new Error("密码必须填写"));
    } else {
        const reg = /^\w{6,}$/;

        if (reg.test(value)) {
            return callback()
        } else {
            return callback(new Error("密码必须是字母、数字或者下划线,且长度不能小于6个字符"));
        }
    }


}

//检测电话号码是否符合
const checkPhone = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("电话号码必须填写"));
    }

    const reg = /^1(3|5|7|8|9)\d{9}$/;

    if (reg.test(value)) {
        return callback()
    } else {
        return callback(new Error("电话号码输入格式错误，请重新输入(格式为13,15,17,18,19打头)"));
    }

}

//检测身份证
const checkIdCard = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("身份证号必须填写"));
    }
    const reg = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    if (reg.test(value)) {
        return callback()
    } else {
        return callback(new Error("身份证号输入格式错误，请重新输入"));
    }
}

//检测小数点checkCapital
const checkCapital = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("注册资金必须填写"));
    }

    const reg = /^([\+]?(([1-9]\d*)|(0)))([\.]\d*)?$/;

    if (reg.test(value)) {
        return callback()
    } else {
        return callback(new Error("注册资金格式错误，只能是整数或者小数，请重新输入"));
    }
}


//检测社会信用代码
const checkSocietyCode = (rule, value, callback) => {
    if (!value) {
        return callback(new Error("企业社会统一信用代码必须填写"));
    }
    const reg = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;

    if (reg.test(value)) {
        return callback()
    } else {
        return callback(new Error("企业社会统一信用代码输入格式错误，请重新输入"));
    }
}


export default {
    checkInputPassword,
    checkPhone,
    checkIdCard,
    checkCapital,
    checkSocietyCode
}