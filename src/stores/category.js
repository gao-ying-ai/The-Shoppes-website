import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
    //导航列表逻辑
    //导航列表数据
    const getCategoryList = ref([])
    //actions
    const getCategory = async () => {
        const res = await getCategoryAPI()
        getCategoryList.value = res.result

    }
    return {
        getCategoryList,
        getCategory
    }
})
