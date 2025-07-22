"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  // PUBLIC_INTERFACE
  function handleSignupSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // TODO: Backend integration
    if (!email || !password || !name) {
      setError("All fields are required.");
      return;
    }
    // Simulate success for now
    alert("Sign up successful (simulate)");
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSignupSubmit}>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered rounded w-full py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={e => setName(e.target.value)}
        autoComplete="name"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered rounded w-full py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete="email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered rounded w-full py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={e => setPassword(e.target.value)}
        autoComplete="new-password"
        required
      />
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded py-2 mt-2 transition-all"
      >
        Create Account
      </button>
      <div className="text-sm text-gray-500 mt-2 text-center">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-blue-700 hover:underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}
