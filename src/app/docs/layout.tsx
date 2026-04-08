import { SidebarNav } from "@/components/SidebarNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8 min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-border pt-6 hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <SidebarNav />
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden pt-6">
        <SidebarNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 md:px-8">
        {children}
      </div>
    </div>
  );
}
