import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Employee } from '../types';

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([]);

  const addEmployee = (employeeData: Omit<Employee, 'id'>) => {
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      ...employeeData,
    };
    employees.value.push(newEmployee);
  };

  const getEmployeeById = (id: string) => {
    return employees.value.find(emp => emp.id === id);
  };

  return {
    employees,
    addEmployee,
    getEmployeeById,
  };
});