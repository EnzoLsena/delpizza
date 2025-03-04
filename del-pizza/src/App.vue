<script setup lang="ts">
import { PlusIcon, Cog, Info, Pizza } from 'lucide-vue-next';


</script>

<template>
  <VLayout class="rounded-md">
    <VNavigationDrawer>
      <VListItem>
        <img src="./assets/images/Del_Pizza (1).png" alt="">
      </VListItem>
      <VList>
        <VListItem>
          <span class="flex gap-2 font-semibold">
            <Pizza />
            <h2>Pizzas</h2>
          </span>
        </VListItem>
        <VListItem>
          <span class="flex gap-2 font-semibold">
            <Info />
            <h2>Sobre</h2>
          </span>
        </VListItem>
        <VListItem>
          <span class="flex gap-2 font-semibold">
            <Cog />
            <h2>Config</h2>
          </span>
        </VListItem>
      </VList>
    </VNavigationDrawer>
    <VAppBar color="#d72323"></VAppBar>
    <VMain class="d-flex align-center justify-center bg-gray-200" style="min-height: 300px;">
      <div class="fixed bottom-4 right-4">
        <VFab color="#d72323" icon="$plus" variant="flat">
          <VTooltip activator="parent">Adicionar Pizza</VTooltip>
          <PlusIcon :size="25" />
        </VFab>
      </div>
    </VMain>
  </VLayout>
</template>
