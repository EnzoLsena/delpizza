<script setup lang="ts">
import { useViolationStore } from './stores/violation';
const violationStore = useViolationStore();
</script>

<template>
  <v-app>

    <v-app-bar color="primary" elevation="2">
      <div class="flex gap-2 ml-2">
        <span class="text-white font-weight-bold text-3xl">DelPizza </span>
        <img src="./assets/images/pizzalogo.png" alt="logo-pizzaria" class="w-10">
      </div>
    </v-app-bar>


    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item>
          <v-card variant="flat" class="mb-4">
            <v-card-title class="text-h6">Total de pizzas</v-card-title>
            <v-card-text>
              <div class="text-h5 text-primary font-weight-bold">
                {{ new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
                }).format(violationStore.totalFines) }}
              </div>
            </v-card-text>
          </v-card>
        </v-list-item>

        <v-list-item title="Menu" class="text-h6"></v-list-item>
        <v-list-item to="/" prepend-icon="mdi-home" title="Início" value="home"></v-list-item>
        <v-list-item to="/register-employee" prepend-icon="mdi-account" title="Funcionários"
          value="register"></v-list-item>
        <v-list-item to="/history" prepend-icon="mdi-history" title="Histórico" value="history"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <router-view></router-view>
    </v-main>


    <v-footer app color="primary" class="text-center text-white">
      <div>© 2024 DelPizza - Sistema de Controle de Pizzas LTDA</div>
    </v-footer>
  </v-app>
</template>