import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/category',
        params: {
            id
        }
    })
}
