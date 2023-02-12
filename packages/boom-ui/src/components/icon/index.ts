import BoomIcon from './BoomIcon.vue'
interface BoomCompo {
    [compoName:string] : any;
} 
const components:BoomCompo ={
    'boom-icon':BoomIcon
}
// 全局注册
export default {
    install(app:any){
       for (let component in components) {
        app.component(component,components[component])
       }
    }
}