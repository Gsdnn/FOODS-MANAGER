<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @tab-click="handlePath"
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="(item,index) in editableTabs"
      :key="item.path"
      :label="item.title"
      :name="item.path"
     
    >
    
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { watch } from 'vue';
import { ref } from 'vue'
import { useStore } from 'vuex';
import {useRoute,useRouter} from 'vue-router'
import { Itab } from '../../store/type';
const store = useStore()

const editableTabs = computed(()=>{
    return store.getters.getAddTab
})

const editableTabsValue =ref('/user')
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
watch(()=>route.path,() =>{
    editableTabsValue.value =route.path
    addTab()
})

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
}

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
