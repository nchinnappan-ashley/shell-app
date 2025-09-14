'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CubeIcon,
  ServerIcon,
  Bars3Icon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Department {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const departments: Department[] = [
  { id: 'ashleydirect', name: 'Ashley Direct', icon: Squares2X2Icon, color: 'bg-blue-500' },
  { id: 'ashleynet', name: 'Ashley Net', icon: BuildingOfficeIcon, color: 'bg-green-500' },
  { id: 'supplier', name: 'Supplier', icon: TruckIcon, color: 'bg-purple-500' },
  { id: 'finance', name: 'Finance', icon: CurrencyDollarIcon, color: 'bg-yellow-500' },
  { id: 'hr', name: 'HR', icon: UserGroupIcon, color: 'bg-pink-500' },
  { id: 'payroll', name: 'Payroll', icon: DocumentTextIcon, color: 'bg-indigo-500' },
  { id: 'transportation', name: 'Transportation', icon: TruckIcon, color: 'bg-orange-500' },
  { id: 'highjump', name: 'HighJump', icon: CubeIcon, color: 'bg-teal-500' },
  { id: 'as400', name: 'AS400', icon: ServerIcon, color: 'bg-red-500' },
];

interface SidebarProps {
  selectedDepartment: string | null;
  onDepartmentSelect: (department: string | null) => void;
  onPlusClick?: () => void;
}

export function Sidebar({ selectedDepartment, onDepartmentSelect, onPlusClick }: SidebarProps) {
  const router = useRouter();
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
      {/* Logo/Home */}
      <button
        onClick={() => { onDepartmentSelect(null); router.push('/'); }}
        className={clsx(
          'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
          selectedDepartment === null 
            ? 'bg-gray-900 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        )}
      >
        <HomeIcon className="w-5 h-5" />
      </button>

      {/* Add New (opens recent searches) */}
      <button
        onClick={() => onPlusClick?.()}
        aria-label="Open recent activity"
        className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 flex items-center justify-center transition-colors"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>

      {/* Departments */}
      <div className="flex flex-col space-y-3">
        {departments.map((dept) => {
          const IconComponent = dept.icon;
          return (
            <button
              key={dept.id}
              onClick={() => { onDepartmentSelect(dept.id); router.push(`/apps/${dept.id}`); }}
              className={clsx(
                'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                selectedDepartment === dept.id
                  ? `${dept.color} text-white`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              title={dept.name}
            >
              <IconComponent className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
          U
        </div>
      </div>
    </div>
  );
}
