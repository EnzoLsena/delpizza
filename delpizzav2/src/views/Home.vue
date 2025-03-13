<script setup lang="ts">
import { useViolationStore } from '../stores/violation';
import { useEmployeeStore } from '../stores/employee';
import ViolationForm from '../components/ViolationForm.vue';
import ViolationList from '../components/ViolationList.vue';


const violationStore = useViolationStore();
const employeeStore = useEmployeeStore();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">Registro de Pizzas</v-card-title>
          <ViolationForm :employees="employeeStore.employees"
            @submit="({ employeeId }) => violationStore.addViolation(employeeId)" />
          <ViolationList :violations="violationStore.violations" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>