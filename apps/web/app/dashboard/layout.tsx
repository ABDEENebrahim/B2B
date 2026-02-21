import { ReactNode } from 'react';
import { DashboardShell } from '../../src/components/dashboard/dashboard-shell';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
