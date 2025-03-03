<script setup lang="ts">
import { PlusIcon } from 'lucide-vue-next';

</script>

<template>
  <VLayout class="rounded-md">
    <VNavigationDrawer>
      <VList>
        <VListItem><img src="./assets/images/Del_Pizza (1).png" alt=""> </VListItem>
      </VList>
    </VNavigationDrawer>
    <VAppBar color="#d72323"></VAppBar>
    <VMain class="d-flex align-center justify-center bg-gray-200" style="min-height: 300px;">
      <div class="fixed bottom-4 right-4">
        <VFab color="#d72323" icon="$plus" variant="flat">
          <PlusIcon :size="25" />
        </VFab>
      </div>
    </VMain>
  </VLayout>
</template>
