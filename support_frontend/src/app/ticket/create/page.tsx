"use client";

import { useState } from "react";

/**
 * Create Ticket Page: Minimal, modern, light-design for support ticket entry & publishing.
 */
export default function CreateTicketPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // PUBLIC_INTERFACE
  function handleTicketSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title || !description) {
      setError("Both fields are required.");
      return;
    }
    // TODO: Integrate backend ticket submit
    setPublished(true);
  }

  // Show confirmation if published
  if (published) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fafc]">
        <div className="max-w-lg bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="text-green-600 font-semibold text-xl mb-2">Ticket published!</div>
          <div className="text-gray-700 mb-1">
            <span className="font-bold">Title:</span> {title}
          </div>
          <div className="text-gray-700 mb-4">
            <span className="font-bold">Description:</span> {description}
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-2"
            onClick={() => {
              setTitle("");
              setDescription("");
              setPublished(false);
            }}
          >
            Create another ticket
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <form
        className="w-full max-w-xl p-8 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col gap-5"
        onSubmit={handleTicketSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Create Support Ticket</h2>
        <input
          type="text"
          placeholder="Ticket title"
          className="input input-bordered rounded w-full py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ticket description"
          className="input input-bordered rounded w-full py-2 px-3 border border-gray-200 focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-y"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded py-2 mt-2 transition-all"
        >
          Publish Ticket
        </button>
      </form>
    </div>
  );
}
