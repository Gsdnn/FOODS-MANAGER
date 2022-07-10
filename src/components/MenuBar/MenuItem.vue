<template>

      <template v-for="item in menus" :key="item.path">

      <el-sub-menu v-if="item.children && item.children.length>1" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span>{{item.meta?.title}}</span>
      </template>
      <!-- 使用了组件递归 -->
      <menu-item :menus="item.children" ></menu-item>  
    </el-sub-menu>
    <el-menu-item v-else  @click="toPath(item.name)" :index="item.path">
      <el-icon>
         <component :is="item.meta?.icon"></component>
      </el-icon>
      <template #title>{{item.meta?.title}}</template>
    </el-menu-item>

  </template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// defineProps({
//   menus:{
//     type:Array,
//   }
// })
const router = useRouter()
const toPath = (item:string)=>{
  router.push({name:item})
}
defineProps(['menus'])
onMounted(()=>{
   console.log()
})
</script>

<style scoped>
.el-sub-menu{
 
}
</style>