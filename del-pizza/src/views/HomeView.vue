<script setup>
import { Plus, Cog, Info, Pizza } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(null);

const openModal = () => {
  isOpen.value = true;
}

</script>

<template>
  <VLayout class="rounded-md">
    <VNavigationDrawer permanent>
      <VListItem class="justify-center">
        <img src="@/assets/images/Del_Pizza (1).png" alt="Logo" width="150">
      </VListItem>

      <VList density="compact">
        <VListItem>
          <span class="flex items-center gap-2 font-semibold">
            <Pizza />
            <h2>Pizzas</h2>
          </span>
        </VListItem>
        <VListItem>
          <span class="flex items-center gap-2 font-semibold">
            <Info />
            <h2>Sobre</h2>
          </span>
        </VListItem>
        <VListItem>
          <span class="flex items-center gap-2 font-semibold">
            <Cog />
            <h2>Config</h2>
          </span>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VAppBar color="#d72323"></VAppBar>

    <VMain class="d-flex align-center justify-center bg-gray-200" style="min-height: 300px;">
      <div class="fixed bottom-4 right-4">
        <VBtn color="#d72323" icon elevation="3" fab @click="openModal">
          <VTooltip activator="parent" location="top">Adicionar Pizza</VTooltip>
          <Plus :size="25" />
        </VBtn>
      </div>
    </VMain>
  </VLayout>

  <VDialog v-model="isOpen" persistent>
    <VCard class="w-[600px] mx-auto pa-6">
      <h1 class="font-semibold text-lg pb-4">Cadastro de Pizza</h1>
      <p class="mb-4">*Uma pizza = <strong>R$ 50,00</strong></p>

      <div class="mb-4">
        <VTextField label="Nome" placeholder="Digite o nome do funcionário"  variant="outlined" class="mb-3" />
        <VTextarea label="Justificativa" placeholder="Digite a justificativa" class="mb-3" variant="outlined" />
      </div>

      <div class="d-flex justify-end mt-4">
        <VBtn color="red">
          Criar Tarifa
          <Plus :size="20" class="ml-2" />
        </VBtn>
        <VBtn @click="isOpen = false" class="ml-4">Fechar</VBtn>
      </div>
    </VCard>
  </VDialog>



</template>
