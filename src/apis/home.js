//封装接口

import httpInstance from '@/utils/http'
//获取banner
export function getBannerAPI() {
    return httpInstance({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner'

    })
}