//管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user'
import { ref } from "vue";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()

    //state
    const userInfo = ref({})
    //action
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        //合并购物车
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateNewList()


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