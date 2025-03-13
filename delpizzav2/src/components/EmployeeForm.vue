<script setup lang="ts">
import { ref } from 'vue';
import type { Employee } from '../types';

const emit = defineEmits<{
  (e: 'submit', employee: Omit<Employee, 'id'>): void;
}>();

const name = ref('');
const role = ref<'desenvolvedor' | 'gerente'>('desenvolvedor');

const roles = [
  { title: 'Desenvolvedor', value: 'desenvolvedor' },
  { title: 'Gerente', value: 'gerente' },
];

const handleSubmit = () => {
  if (name.value.trim()) {
    emit('submit', {
      name: name.value,
      role: role.value,
    });
    name.value = '';
    role.value = 'desenvolvedor';
  }
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="name"
      label="Nome do Funcionário"
      required
      variant="outlined"
      placeholder="Digite o nome do funcionário"
      class="mb-4"
    ></v-text-field>

    <v-select
      v-model="role"
      :items="roles"
      item-title="title"
      item-value="value"
      label="Cargo"
      required
      variant="outlined"
      class="mb-4"
    ></v-select>
    
    <v-btn
      type="submit"
      color="primary"
      :disabled="!name.trim()"
    >
      Cadastrar Funcionário
    </v-btn>
  </v-form>
</template>