import { createStore } from "vuex";
import {Itab} from './type'
interface State {
    count :number,
    tabList:Array<Itab>,
    content:string
}

export const store = createStore<State>({
    state(){
        return{
            count:0,
            tabList:[],
            content:''
        }
    },
    mutations:{
        addTab(state:State,tab:Itab){
            const isSome = state.tabList.some(item=>item.path == tab.path)
            if(!isSome){
                state.tabList.push(tab)
            }
        }
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