/**
 * 
 * @param {*} context 
 * @param {*} data 
 */

const addTab = (context, data) => context.commit('ADD_TAB', data);

const delTab = (context, data) => new Promise((resolve, reject) => {
    context.commit('DEL_TAB', data);
    resolve(context.state.menuList);
})

export default {
    addTab,
    delTab,
}