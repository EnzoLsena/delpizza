import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Violation } from '../types';
import { ROLE_FINES } from '../types';
import { useEmployeeStore } from './employee';

export const useViolationStore = defineStore('violation', () => {
  const violations = ref<Violation[]>([]);
  const employeeStore = useEmployeeStore();

  const totalFines = computed(() => {
    return violations.value.reduce((sum, violation) => sum + violation.fine, 0);
  });

  const addViolation = (employeeId: string) => {
    const employee = employeeStore.getEmployeeById(employeeId);
    if (!employee) return;

    const newViolation: Violation = {
      id: crypto.randomUUID(),
      employeeId,
      employeeName: employee.name,
      employeeRole: employee.role,
      timestamp: new Date().toISOString(),
      fine: ROLE_FINES[employee.role]
    };
    
    violations.value.push(newViolation);
  };

  return {
    violations,
    totalFines,
    addViolation,
  };
});