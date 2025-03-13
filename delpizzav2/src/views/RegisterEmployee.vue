<script setup lang="ts">
import { useEmployeeStore } from '../stores/employee';
import EmployeeForm from '../components/EmployeeForm.vue';
import EmployeeList from '../components/EmployeeList.vue';

const employeeStore = useEmployeeStore();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">Cadastro de Funcionários</v-card-title>
          <EmployeeForm @submit="employeeStore.addEmployee" />
          <EmployeeList :employees="employeeStore.employees" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>