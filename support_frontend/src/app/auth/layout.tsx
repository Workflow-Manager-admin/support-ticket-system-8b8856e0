import "../globals.css";

/**
 * Shared layout for authentication pages (signup/signin) for modern minimal support app.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <main className="w-full max-w-md p-8 bg-white rounded-xl shadow-md border border-gray-100">
        <header className="mb-8 text-center">
          <span className="text-2xl font-bold text-blue-700">SupportSystem</span>
          <div className="text-sm text-gray-500 mt-1">Fast, friendly support</div>
        </header>
        {children}
      </main>
    </div>
  );
}
