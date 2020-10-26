const ADD_TAB = (state, data) => {

    state.breadcrumb = [];
    if (data.meta.parent) {
        state.breadcrumb.push(data.meta.parent)
    }
    state.breadcrumb.push(data.meta.name)

}

const DEL_TAB = (state, data) => {
    state.menuList.forEach(item => {
        if (item.path === data.path) {
            state.menuList.splice(state.menuList.indexOf(item), 1);
        }
    })
}

export default {
    ADD_TAB,
    DEL_TAB,
}