<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from 'com/HelloWorld.vue'
import SlotsAttrs from 'com/SlotsAttrs.vue'
import { reactive } from 'vue';
const ageList = reactive([2,3,4,5])
const parenClick=(msg:string)=>{
  console.log("msg",msg)
  alert(msg)
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld  ageList={{ageList}}  @parenClick="parenClick"/>
  <slots-attrs a="1" class="header" style="color: red;">
    <template #header >
      {{ageList}}
    </template>
  </slots-attrs> -->
  <router-view></router-view>
</template>

<style>

</style>
