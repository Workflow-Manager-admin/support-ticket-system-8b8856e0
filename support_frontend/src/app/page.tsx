import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 w-full max-w-lg mt-16 items-center bg-white border border-gray-100 rounded-xl shadow-md p-8">
        <h1 className="font-bold text-2xl text-blue-700">Welcome to SupportSystem</h1>
        <div className="text-gray-600 text-center mb-2">
          A modern support ticket platform. Quickly sign up, sign in, and publish your support tickets.
        </div>
        <div className="w-full flex flex-col gap-4 mt-6">
          <Link
            href="/auth/signin"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded py-2 transition-all text-center"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 text-base font-medium rounded py-2 transition-all text-center border border-blue-300"
          >
            Sign Up
          </Link>
        </div>
        <div className="w-full pt-2 border-t border-gray-100 text-center">
          <span className="text-sm text-gray-400">Preview: </span>
          <Link
            href="/ticket/create"
            className="inline-block text-blue-600 hover:underline font-semibold ml-1"
          >
            Create Ticket
          </Link>
        </div>
      </main>
    </div>
  );
}
