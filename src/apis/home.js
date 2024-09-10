//封装接口
import httpInstance from '@/utils/http'
//获取banner
export function getBannerAPI(params = {}) {
    const { distributionSite = '1' } = params

    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }

    })
}
// 获取新鲜好物
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}
// 获取人气推荐模块
export const findHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}
// 获取产品列表模块
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}
