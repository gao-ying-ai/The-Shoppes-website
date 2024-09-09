//管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user'
import { ref } from "vue";
export const useUserStore = defineStore('user', () => {
    //state
    const userInfo = ref({})
    //action
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result

    }

    //退出清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    //return{}
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
}
)