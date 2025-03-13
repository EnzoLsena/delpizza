<script setup lang="ts">
import type { Employee } from '../types';

defineProps<{
  employees: Employee[];
}>();

const headers = [
  { title: 'Nome', key: 'name', align: 'start' },
  { title: 'Cargo', key: 'role', align: 'start' },
];
</script>

<template>
  <div class="mt-8">
    <h3 class="text-h6 mb-4">Funcionários Cadastrados</h3>
    <v-data-table
      :headers="headers"
      :items="employees"
      :items-per-page="10"
    >
      <template v-slot:item.role="{ item }">
        {{ item.role === 'desenvolvedor' ? 'Desenvolvedor' : 'Gerente' }}
      </template>
      <template v-slot:no-data>
        <div class="text-center pa-4">Nenhum funcionário cadastrado</div>
      </template>
    </v-data-table>
  </div>
</template>