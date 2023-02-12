import BoomTable from './BoomTable.vue'
interface BoomCompo {
    [compoName:string] : any;
} 
const components:BoomCompo ={
    'boom-table':BoomTable
}
// 全局注册
export default {
    install(app:any){
       for (let component in components) {
        app.component(component,components[component])
       }
    }
}