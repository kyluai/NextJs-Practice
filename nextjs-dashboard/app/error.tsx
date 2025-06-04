'use client';

import { useEffect } from 'react';
import { lusitana } from '@/app/ui/fonts';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <h2 className={`${lusitana.className} text-xl font-semibold`}>Something went wrong!</h2>
      <p className="text-gray-600">An error occurred while processing your request.</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Try again
      </button>
    </main>
  );
} 