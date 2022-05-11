import { shouldTransformRef } from "vue/compiler-sfc"
import storage from "../../utils/storage"

const userStore = {
    namespaced: true,
    state:() => {
        return {
            userInfo: ''|| storage.getItem("userinfo")
        }
    },
    mutations:{
        saveUserInfoCommit:(state,params) => {
            storage.setItem('username',params)
            state.userInfo = params
        }
    },
    getters:{
        birthday:(state) => {
            return new Date().getFullYear - state.age
        }
    },
    actions:{
        saveUserInfoAction:(store,params) => {
            store.commit('saveUserInfoCommit',params);
        }
    }
}

export default userStore