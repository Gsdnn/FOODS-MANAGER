<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @tab-click="handlePath"
    @edit="handleTabsEdit"
    @contextmenu.prevent.native="openContextMenu($event)"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.path"
      :label="item.title"
      :name="item.path"
     
    >
    
    </el-tab-pane>
  </el-tabs>

  <ul v-show="contextVisiable" :style="{left:left+'px',top:top+'px'}" class="contextMenu">
    <li @click="closeAllTab">关闭所有</li>
    <li @click="closeOther('left')">关闭左边</li>
    <li @click="closeOther('right')">关闭右边</li>
    <li @click="closeOther('other')">关闭其他</li>
  </ul>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import { ref } from 'vue'
import { useStore } from 'vuex';
import {useRoute,useRouter} from 'vue-router'
import { Itab } from '../../store/type';

defineProps(['contextVisiable'])

const store = useStore()


const editableTabs = computed(()=>{
    return store.getters.getAddTab
})

const editableTabsValue =ref('')
const route = useRoute()  
const  router =useRouter()

//添加tab

const addTab= ()=>{
    const {meta , path} =route
    const tab:Itab={
        path:path,
        title:meta.title as string
    }
    store.commit("addTab",tab)
}
//刷新数据保存状态
  const refresh=()=>{
    window.addEventListener('beforeunload',()=>{
     if(store.state.tabList!=='')
      store.commit('setTabData')
    })
  }
  let session = sessionStorage.getItem("TABS_ROUTER")
  if(session){
    let tabItem = JSON.parse(session)
    console.log(tabItem)
    tabItem.forEach((element:Itab) => {
        store.commit('addTab',element)
    });
  }

watch(()=>route.path,() =>{
    editableTabsValue.value =route.path
    addTab()
},{immediate:true})

const handlePath = (event:any)=>{
 console.log(event)
if(event.props!=='')
 router.push( event.props.name)
}

const handleTabsEdit =(targetName: string,action: 'remove' | 'add')=>{
  console.log(action,targetName)
  if(action == "remove"){
    store.commit("MoveTab",targetName)
  }
  let index = store.state.tabList.length-1
  if(store.state.tabList.length!==0)
  router.push({path:store.state.tabList[index].path})
}

 
  //右键显示菜单列表
  let contextVisiable =ref(false)
  let left = ref('')
  let top = ref('')
  
  const openContextMenu=(e:any)=>{
   if(e.srcElement.id){
    let currentContextTable =e.srcElement.id.split('-')[1]
    //把路由保存起来
    store.commit('savecontextMenu',currentContextTable)
      contextVisiable.value=true
      left.value = e.clientX
      top.value = e.clientY +15
   }
   
  }
  //关闭所有
  const closeAllTab = ()=>{
    store.commit('closeAllTab')
    contextVisiable.value=false
    
  }

  const closeOther =(clickInfo:string)=>{
      
        store.commit("closeOther",clickInfo)
       contextVisiable.value=false

  
    
  }

  onMounted(()=>{

    //刷新保存数据
    //  addTab()
    refresh()
  })
  

</script>
<style lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.contextMenu{
  width: 100px;
  margin: 0;
  border: 1px solid #fff;
  z-index: 99;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 15px;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.2);
  li{
    margin: 0;
    padding: 7px 16px;
    &:hover{
      background: #f2f2f2;
      cursor: pointer;
    }
  }
}
</style>
