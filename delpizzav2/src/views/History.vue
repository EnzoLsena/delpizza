<script setup lang="ts">
import { useViolationStore } from '../stores/violation';
import ViolationList from '../components/ViolationList.vue';

const violationStore = useViolationStore();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">Histórico de Pizzas</v-card-title>
          <ViolationList :violations="violationStore.violations" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>