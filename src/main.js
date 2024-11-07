import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'

import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus).use(Router).use(Store)
app.mount('#app')
                                                                                                                                                                                                                                                    