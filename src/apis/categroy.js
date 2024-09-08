import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/category',
        params: {
            id
        }
    })
}

//二级分类列表接口
export const getCategoryFilterAPI = (id) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/category/sub/filter',
        params: {
            id
        }
    })
}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/category/goods/temporary',
        method: 'POST',
        data
    })
}
