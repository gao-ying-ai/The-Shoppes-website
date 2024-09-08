//把components中的所有组件通过插件的形式都进行全局化注册

import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        //app.component('组件名',组件配置对象)
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}
