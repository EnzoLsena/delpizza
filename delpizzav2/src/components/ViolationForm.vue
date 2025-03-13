<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Employee } from '../types';
import { ROLE_FINES } from '../types';
import { PlusIcon } from "lucide-vue-next"

const props = defineProps<{
  employees: Employee[];
}>();

const emit = defineEmits<{
  (e: 'submit', data: { employeeId: string }): void;
}>();

const selectedEmployeeId = ref(null);

const selectedEmployee = computed(() => 
  props.employees.find(emp => emp.id === selectedEmployeeId.value)
);

const handleSubmit = () => {
  if (selectedEmployeeId.value) {
    emit('submit', { employeeId: selectedEmployeeId.value });
    selectedEmployeeId.value = '';
  }
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-select v-model="selectedEmployeeId" :items="employees" item-title="name" item-value="id"
      label="Selecione o Funcionário" required variant="outlined" class="mb-4">
      <template v-slot:item-title="{ item }">
        {{ item.name }} ({{ item.role === 'desenvolvedor' ? 'Desenvolvedor' : 'Gerente' }} -
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(ROLE_FINES[item.role]) }})
      </template>
    </v-select>
    <div class="fixed bottom-[50px] right-3">
      <VBtn color="#d72323" icon elevation="3" fab :disabled="!selectedEmployeeId" type="submit">
        <VTooltip activator="parent" location="top">Adicionar Pizza</VTooltip>
        <PlusIcon :size="25" />
      </VBtn>
    </div>
    <!-- <v-btn
      type="submit"
      color="primary"
      :disabled="!selectedEmployeeId"
    >
      Registrar Violação
    </v-btn> -->
  </v-form>
</template>