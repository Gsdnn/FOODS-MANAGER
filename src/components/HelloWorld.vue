<script setup lang="ts">
import { emit } from 'process';
import { ref } from 'vue'
// const emits = defineEmits(['parenClick']) 方法声明

const emits =defineEmits<{
  (e:"parenClick",data:string):void 
}>()
const clickEmits = ()=>{
  emits('parenClick',"子组件传递数据")
}

const props= withDefaults(defineProps<{ 
  msg?: string,
  ageList:Array<number>

}>(),{msg:"hello",ageList:()=>[1,2]} ) //对象或者数组写法

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ageList}}</h1>
  <button @click="clickEmits">button</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
