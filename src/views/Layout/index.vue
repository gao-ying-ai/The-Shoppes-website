<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
</script>
<template>
    <!-- 路由出口 -->
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <LayoutFooter />
</template>