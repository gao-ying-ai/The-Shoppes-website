//倒计时
import { computed, onUnmounted, ref } from "vue"
import dayjs from 'dayjs'
export const useCountDown = () => {
    let timer = null
    const time = ref(0)
    //格式化时间
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

    const start = (currentTime) => {
        //开始倒计时
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    //清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}