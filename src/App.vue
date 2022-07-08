<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from 'com/HelloWorld.vue'
import { reactive } from 'vue';
const ageList = reactive([2,3,4,5])
const parenClick=(msg:string)=>{
  console.log("msg",msg)
  alert(msg)
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld  ageList={{ageList}}  @parenClick="parenClick"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
