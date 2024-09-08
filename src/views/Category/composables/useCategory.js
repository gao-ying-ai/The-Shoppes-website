//封装分类业务数据相关代码

import { getCategoryAPI } from '@/apis/categroy'
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';//获得路由参数

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {//默认id
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    //实现在路由参数发生变化时，把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)

    })
    return {
        categoryData
    }
}