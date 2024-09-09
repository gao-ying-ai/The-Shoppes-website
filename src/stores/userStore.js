//管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user'
import { ref } from "vue";
import { useCartStore } from "./cartStore";
export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()

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
        //执行清除购物车的action
        cartStore.clearCart()
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