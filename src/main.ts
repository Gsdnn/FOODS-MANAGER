import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {store} from './store/index'
import *as ElIcons from '@element-plus/icons'
const app = createApp(App)
for (const name in ElIcons){
    app.component(name,(ElIcons as any)[name] )
}
// import './styles/variables.scss';
app.use(router).use(store).mount('#app')


