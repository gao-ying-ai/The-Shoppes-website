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
