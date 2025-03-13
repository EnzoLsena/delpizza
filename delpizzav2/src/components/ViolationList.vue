<script setup lang="ts">
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { Violation } from '../types';

defineProps<{
  violations: Violation[];
}>();

const headers = [
  { title: 'Funcionário', key: 'employeeName', align: 'start' },
  { title: 'Cargo', key: 'employeeRole', align: 'start' },
  { title: 'Data/Hora', key: 'timestamp', align: 'start' },
  { title: 'Multa', key: 'fine', align: 'start' },
];
</script>

<template>
  <div class="mt-8">
    <h3 class="text-h6 mb-4">Histórico de Violações</h3>
    <v-data-table
      :headers="headers"
      :items="violations"
      :items-per-page="10"
    >
      <template v-slot:item.employeeRole="{ item }">
        {{ item.employeeRole === 'desenvolvedor' ? 'Desenvolvedor' : 'Gerente' }}
      </template>
      <template v-slot:item.timestamp="{ item }">
        {{ format(new Date(item.timestamp), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR }) }}
      </template>
      <template v-slot:item.fine="{ item }">
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.fine) }}
      </template>
      <template v-slot:no-data>
        <div class="text-center pa-4">Nenhuma violação registrada</div>
      </template>
    </v-data-table>
  </div>
</template>