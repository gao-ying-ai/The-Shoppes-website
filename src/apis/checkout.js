import request from '@/utils/http'

//获取详情接口
export const getCheckInfoAPI = () => {
    return request({
        url: '/member/order/pre',

    })
}


//订单
export const creatOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data

    })
}