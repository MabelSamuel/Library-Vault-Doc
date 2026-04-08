'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavItem {
  category: string;
  items: { id: string; name: string }[];
}

const navItems: NavItem[] = [
  {
    category: 'Getting Started',
    items: [
      { id: 'introduction', name: 'Introduction' },
      { id: 'authentication', name: 'Authentication' },
      { id: 'base-url', name: 'Base URL' },
    ],
  },
  {
    category: 'Books',
    items: [
      { id: 'get-books', name: 'Get All Books' },
      { id: 'get-book', name: 'Get Single Book' },
      { id: 'create-book', name: 'Create Book' },
      { id: 'update-book', name: 'Update Book' },
      { id: 'delete-book', name: 'Delete Book' },
    ],
  },
  {
    category: 'Borrowing',
    items: [
      { id: 'create-borrow', name: 'Create Borrow Record' },
      { id: 'get-borrows', name: 'Get Borrow History' },
      { id: 'return-book', name: 'Return Book' },
    ],
  },
  {
    category: 'Users',
    items: [
      { id: 'get-users', name: 'Get All Users' },
      { id: 'get-user', name: 'Get User Details' },
      { id: 'update-user', name: 'Update User' },
    ],
  },
  {
    category: 'Admin',
    items: [
      { id: 'user-management', name: 'User Management' },
      { id: 'role-assignment', name: 'Role Assignment' },
      { id: 'library-stats', name: 'Library Statistics' },
    ],
  },
];

interface SidebarNavProps {
  activeSection?: string;
}

export function SidebarNav({ activeSection }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'Getting Started',
  ]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="sm"
        className="lg:hidden mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-border pt-20 overflow-y-auto transition-transform lg:relative lg:pt-0 lg:h-auto lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4 space-y-2">
          {navItems.map((section) => (
            <div key={section.category}>
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors"
              >
                {section.category}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedCategories.includes(section.category)
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              {expandedCategories.includes(section.category) && (
                <div className="pl-4 space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        activeSection === item.id
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-sidebar-border mt-4">
            <a
              href="https://github.com/MabelSamuel/Library-Vault"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.546 2.914 1.194.092-.929.35-1.546.636-1.903-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0110 4.819c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
