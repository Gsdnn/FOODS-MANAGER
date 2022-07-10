<template>
    <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="{ path: item.path }">
                    {{item.meta.title}}
                </el-breadcrumb-item>
            </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
    import { ref,watch,Ref } from 'vue';
    import { useRoute, RouteLocationMatched } from 'vue-router';
    const route = useRoute()
    console.log(route)
    const breadcrumb:Ref<RouteLocationMatched[]>  =ref([])

    const getBreadCrumb = ()=>{
        
       let matched = route.matched.filter((item)=>item.meta && item.meta.title && item.children.length!==1)
    // let matched:Array<any> = []
    //    matched.push({path: route.matched[1]?.path,meta: route.matched[1]?.meta.title})
      const first = matched[0]
      console.log(matched);
      
      if(first.path!=='/index'){
        matched = [{path:'/index',meta:{title:"首页"}}as any ].concat(matched)
      }
      breadcrumb.value=matched
    }
     getBreadCrumb()
    watch(()=>route.path,()=>{
        getBreadCrumb()
    })
</script>

<style scoped>

</style>