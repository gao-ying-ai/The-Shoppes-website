import request from '@/utils/http'

export const getDetail = (id) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/goods',
        params: {
            id
        }
    })
}
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/goods/hot',
        params: {
            id,
            type,
            limit
        }

    })
}