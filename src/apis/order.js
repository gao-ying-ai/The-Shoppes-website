import request from "@/utils/http";

export const getUserOrder = (params) => {
    return request({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/member/order',
        method: 'GET',
        params
    })
}
