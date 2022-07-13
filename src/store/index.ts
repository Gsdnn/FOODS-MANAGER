import { createStore } from "vuex";
import {Itab} from './type'
interface State {
    count :number,
    tabList:Array<Itab>,
    content:string,
    contextMenuTabid:string
}

export const store = createStore<State>({
    state(){
        return{
            count:0,
            tabList:[],
            content:'',
            contextMenuTabid:''
        }
    },
    mutations:{
        addTab(state:State,tab:Itab){
            const isSome = state.tabList.some(item=>item.path == tab.path)
            if(!isSome){
                state.tabList.push(tab)
            }
        },
        MoveTab(state:State,indexPath:string){
            const index =state.tabList.findIndex(item=>item.path.indexOf(indexPath)!==-1)
            state.tabList.splice(index,1)
        },
        setTabData(state:State){
            sessionStorage.setItem('TABS_ROUTER',JSON.stringify(state.tabList))
        },
        //右键保存
        savecontextMenu(state:State,contextMenuTabid){
            state.contextMenuTabid= contextMenuTabid
        },
        //删除所有
        closeAllTab(state:State){
            state.tabList=[]
            sessionStorage.removeItem('TABS_ROUTER')
        },
        closeOther(state:State,par){  //删除其他
                switch(par){
                    case "other":
                         state.tabList=state.tabList.filter(item=>item.path ==state.contextMenuTabid),
                         sessionStorage.setItem('TABS_ROUTER',JSON.stringify(state.tabList))
                    break;
                    case "left":
                         const indexleft = state.tabList.findIndex(item=>item.path ==state.contextMenuTabid)
                         state.tabList.splice(0,indexleft)
                         sessionStorage.setItem('TABS_ROUTER',JSON.stringify(state.tabList))
                         break;
                    case "right":
                            const indexright = state.tabList.findIndex(item=>item.path ==state.contextMenuTabid)
                            state.tabList.splice(indexright+1,state.tabList.length-indexright)
                            sessionStorage.setItem('TABS_ROUTER',JSON.stringify(state.tabList))
                            break;
                }
        },
        // increment(state){
        //     state.count++
        // }
    },
    getters:{
        getAddTab(state:State){
            return   state.tabList
        }
    }
})