// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//图片懒加载
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// 定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        console.log(el, binding.value);
        useIntersectionObserver(el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    //进入视口区域
                    el.src = binding.value
                }
            },
        )



    }

})
