import request from '@/utils/http'


export const getOrderAPI = (id) => {
    return request({
        url: `https://pcapi-xiaotuxian-front-devtest.itheima.net/member/order/${id}`
    })
}
