"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      {" "}
      <h1> {error.message}</h1>
      <button className="border" onClick={reset}>
        Try again
      </button>
    </>
  );
}
