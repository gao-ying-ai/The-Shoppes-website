//封装购物车模块
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from "./userStore"
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart"
export const useCartStore = defineStore('cart', () => {
    const useStore = useUserStore()
    const isLogin = computed(() => useStore.userInfo.token)
    //1、定义state
    const cartList = ref([])
    //2、定义actions
    //获取最新购物列表的函数
    const updateNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result

    }
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            //登录之后的购物车逻辑
            await insertCartAPI({ skuId, count })

            updateNewList()
        } else {
            //添加到购物车
            //已经添加过--- count+1
            // 未添加过---push
            //通过判断skuId
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++

            } else {
                cartList.value.push(goods)
            }
        }


    }

    //删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            //调用接口删除功能
            await delCartAPI([skuId])
            updateNewList()

        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            // splice
            cartList.value.splice(idx, 1)
        }
    }
    //清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    //单选功能
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }


    //计算属性
    //1、总数
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2、总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.price * c.count, 0))
    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //3、已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

    //4、已选商品总价
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList


    }


}, {
    persist: true,
})