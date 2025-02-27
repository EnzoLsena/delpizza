<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from 'vue-router'
</script>


<template>
  <div class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-6 overflow-y-auto bg-gray-100">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>


