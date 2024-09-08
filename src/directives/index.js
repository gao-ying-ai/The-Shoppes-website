//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                console.log(el, binding.value);
                const { stop } = useIntersectionObserver(el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            //进入视口区域
                            el.src = binding.value
                            // console.log(isIntersecting);

                            stop()
                        }
                    }

                )



            }
        }
        )
    }
}

