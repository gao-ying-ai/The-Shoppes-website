//封装接口
import httpInstance from '@/utils/http'
//获取banner
export function getBannerAPI() {
    return httpInstance({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner'

    })
}
// 获取新鲜好物
export const findNewAPI = () => {
    return httpInstance({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/new'
    })
}
// 获取人气推荐模块
export const findHotAPI = () => {
    return httpInstance({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/hot'
    })
}
// 获取产品列表模块
export const getGoodsAPI = () => {
    return httpInstance({
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/goods'
    })
}
