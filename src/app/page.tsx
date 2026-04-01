import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block px-4 py-2 bg-chart-1/10 border border-chart-1/20 rounded-full">
            <span className="text-sm font-semibold text-chart-1">
              Open Source • Forever Free
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Build Library UIs{" "}
            <span className="text-primary">Without a Backend</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            LibraryVault is a free, open-source API that provides fake library
            data perfect for prototyping, testing, and learning. No server setup
            required.
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Link href="/docs">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View API Documentation
              </Button>
            </Link>
            <a
              href="https://github.com/MabelSamuel/Library-Vault"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                GitHub Repository
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            <Card className="border border-border bg-card p-6">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">API Endpoints</div>
            </Card>
            <Card className="border border-border bg-card p-6">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Books</div>
            </Card>
            <Card className="border border-border bg-card p-6">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">User Roles</div>
            </Card>
            <Card className="border border-border bg-card p-6">
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">
                Requests/Month
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            LibraryVault provides a complete, realistic library management API
            with all the features you need to build and test your library
            applications.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  📚
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Complete Books Database
              </h3>
              <p className="text-muted-foreground">
                Access a comprehensive collection of over 1,000 books with
                realistic metadata including ISBN, publication year, categories,
                and availability status.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  🔐
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Role-Based Access Control
              </h3>
              <p className="text-muted-foreground">
                Experience real authentication with JWT and four distinct user
                roles: Member, Librarian, Admin, and Super Admin, each with
                specific permissions.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  ⚡
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Response times optimized for development. Test your UI
                responsiveness with realistic data loading and edge case
                handling.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  📖
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Book Borrowing System
              </h3>
              <p className="text-muted-foreground">
                Full borrowing lifecycle support with due dates, return
                tracking, late fees, and member borrow limits. Perfect for
                testing real library workflows.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  🛠️
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
                No authentication key required. Make requests directly from your
                frontend. Works with any HTTP client library or framework.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="border border-border p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl">
                  🚀
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Open Source</h3>
              <p className="text-muted-foreground">
                100% open source and community-driven. Modify the code, host
                your own instance, or contribute improvements back to the
                project.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-muted-foreground mb-8">
            Start using LibraryVault with just a simple fetch request:
          </p>

          <Card className="border border-border p-6 mb-8 bg-slate-900 text-white">
            <pre className="font-mono text-sm overflow-x-auto">
              <code>{`// Login to get a token
const res = await fetch('https://api.libraryvault.dev/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'member@example.com',
    password: 'password123'
  })
});

const { token } = await res.json();

// Fetch books
const booksRes = await fetch('https://api.libraryvault.dev/books', {
  headers: { 'Authorization': \`Bearer \${token}\` }
});

const { data } = await booksRes.json();`}</code>
            </pre>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm font-semibold text-primary mb-1">
                Base URL
              </div>
              <code className="text-sm font-mono break-all">
                https://api.libraryvault.dev
              </code>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm font-semibold text-primary mb-1">
                Auth
              </div>
              <code className="text-sm font-mono">JWT Bearer Token</code>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm font-semibold text-primary mb-1">
                Rate Limit
              </div>
              <code className="text-sm font-mono">1000 req/hour</code>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Credentials */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Demo Credentials</h2>
          <p className="text-muted-foreground mb-8">
            Use these credentials to explore the API and test different user
            roles:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border p-6">
              <h3 className="font-semibold mb-3">Member Account</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    member@example.com
                  </code>
                </div>
                <div>
                  <span className="text-muted-foreground">Password:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    password123
                  </code>
                </div>
                <div className="pt-2">
                  <span className="text-muted-foreground">Permissions:</span>{" "}
                  Can borrow/return books
                </div>
              </div>
            </Card>

            <Card className="border border-border p-6">
              <h3 className="font-semibold mb-3">Admin Account</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    admin@example.com
                  </code>
                </div>
                <div>
                  <span className="text-muted-foreground">Password:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    password123
                  </code>
                </div>
                <div className="pt-2">
                  <span className="text-muted-foreground">Permissions:</span>{" "}
                  Can manage users & books
                </div>
              </div>
            </Card>

            <Card className="border border-border p-6">
              <h3 className="font-semibold mb-3">Librarian Account</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    librarian@example.com
                  </code>
                </div>
                <div>
                  <span className="text-muted-foreground">Password:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    password123
                  </code>
                </div>
                <div className="pt-2">
                  <span className="text-muted-foreground">Permissions:</span>{" "}
                  Can manage books
                </div>
              </div>
            </Card>

            <Card className="border border-border p-6">
              <h3 className="font-semibold mb-3">Super Admin Account</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    superadmin@example.com
                  </code>
                </div>
                <div>
                  <span className="text-muted-foreground">Password:</span>{" "}
                  <code className="bg-background px-2 py-1 rounded">
                    password123
                  </code>
                </div>
                <div className="pt-2">
                  <span className="text-muted-foreground">Permissions:</span>{" "}
                  Full system access
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start building your library management application today.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/docs">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Read Full Documentation
              </Button>
            </Link>
            <a
              href="https://github.com/MabelSamuel/Library-Vault"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black bg-accent hover:bg-primary-foreground/10"
              >
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
