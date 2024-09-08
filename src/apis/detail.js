import request from '@/utils/http'

export const getDetail = (id) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/goods',
        params: {
            id
        }
    })
}