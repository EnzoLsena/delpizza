export interface Employee {
  id: string;
  name: string;
  role: 'desenvolvedor' | 'gerente';
}

export interface Violation {
  id: string;
  employeeId: string;
  employeeName: string;
  employeeRole: string;
  timestamp: string;
  fine: number;
}

export const ROLE_FINES = {
  desenvolvedor: 50,
  gerente: 100,
} as const;