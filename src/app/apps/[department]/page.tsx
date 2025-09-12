import { ShellLayout } from '@/components/layout/ShellLayout';

export default async function AppDepartmentPage({ params }: { params: Promise<{ department: string }> }) {
  const { department } = await params;
  return <ShellLayout initialSelectedDepartment={department} />;
}

