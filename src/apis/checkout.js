import request from '@/utils/http'

//获取详情接口
export const getCheckInfoAPI = () => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/member/order/pre',

    })
}