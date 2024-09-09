//封装购物车模块
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('cart', () => {
    //1、定义state
    const cartList = ref([])
    //2、定义actions
    const addCart = (goods) => {
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

    //删除购物车
    const delCart = (skuId) => {


        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        //splice
        cartList.value.splice(idx, 1)


        console.log(cartList.value);

    }
    //计算属性
    //1、总数
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    //2、总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.price * c.count, 0))

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }


}, {
    persist: true,
})