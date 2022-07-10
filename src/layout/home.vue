<template>
  <div class="layout">
    <el-container>
      <el-header>
         <el-row :gutter="20">
            <el-col :span="4" style="text-align:right">
                  
            </el-col>
            <el-col :span="16" class="span16">
                 <div>标题</div>
            </el-col>
            <el-col :span="4" class="span4"><div>退出登入</div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="auto">
            <span v-show="!collapsed"> 管理系统</span>
                     <el-row>
                        <el-icon @click="()=>(collapsed = !collapsed)">
                            <component :is="collapsed ? Expand: Fold"></component>
                        </el-icon>  
                     </el-row>
            <menu-bar :collapsed="collapsed"></menu-bar>
        </el-aside>
      <el-main>
         <div class="nav"><header-bar></header-bar></div>
        <div class="tab-nav"><tab-bar></tab-bar></div>
       <div class="content"><router-view></router-view></div>
      </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
    import TabBar from '../components/TabBar/TabBar.vue'
    import HeaderBar from '../components/HeaderBar/index.vue'
    import MenuBar from '../components/MenuBar/MenuBar.vue';
    import {Expand,Fold } from "@element-plus/icons-vue"
    import { ref } from 'vue';

    const collapsed = ref<boolean>(false)
</script>

<style lang="scss" scoped>

    .layout{
        display: flex;
        height: 100vh;
        .el-header{
           vertical-align: center;
            background-color:#cbe1fb;
            .span16{  
             vertical-align: center; 
            text-align: center;
            }
            .span4{
                 text-align: right;
            }
        }
        .el-main{
          .tab-nav{
            margin-top: 30px;
          }
            .nav{
              text-align: left;
            }
            .content{
              text-align: center;
            }
        }
        .el-aside{
            text-align: center;
            line-height: 400rpx;
            background-color:#ddecfd;
            span{
                padding: 20rpx;
            }
        }
        .el-icon{
           text-align: left;
        }
    }
</style>
