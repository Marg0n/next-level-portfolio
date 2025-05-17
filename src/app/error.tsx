'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-6 text-lg">{error.message}</p>
          <button
            onClick={() => reset()}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
