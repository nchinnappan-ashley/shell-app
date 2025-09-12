'use client';

import React from 'react';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left spacer (search removed per request) */}
      <div className="flex-1" />

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <BellIcon className="w-5 h-5" />
        </button>

        {/* Theme */}
        <ThemeToggle />

        {/* Settings */}
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Cog6ToothIcon className="w-5 h-5" />
        </button>

        {/* Ashley logo icon */}
        <div className="h-8 w-auto flex items-center">
          <Image
            src="/AshleyLogoLLCOrangeBlack.png"
            alt="Ashley"
            width={104}
            height={32}
            priority
          />
        </div>
      </div>
    </header>
  );
}
