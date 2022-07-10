<template>
    <div>
        this is slots
    </div>
    <slot name="header">this is slot data</slot>

</template>

<script setup>
    import {onMounted, useSlots,useAttrs} from 'vue'
    const solts =useSlots()
    const attrs = useAttrs()

    onMounted(()=>{
        console.log(solts.header())
        console.log(attrs);
        attrs.style.color = "blue";   
    })
</script>

<style  scoped>
.header{
  color: red;
}
</style>