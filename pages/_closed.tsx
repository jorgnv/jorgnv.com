export default function Closed() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-44px)] justify-center bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 315"
        className="w-16 h-16 text-black"
      >
        <path
          fill="currentColor"
          d="M128 20c-59.55 0-108 48.45-108 108s48.45 108 108 108 108-48.45 108-108S187.55 20 128 20zm0 196c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88zm28-66h-56c-6.6 0-12-5.4-12-12s5.4-12 12-12h56c6.6 0 12 5.4 12 12s-5.4 12-12 12z"
        />
      </svg>

      <h1 className="text-5xl tracking-tight max-w-3xl font-semibold mb-4 mt-10">
        We&apos;ll be back.
      </h1>
      <p className="ml-4 text-gray-500 text-xl">
        We&apos;re busy updating the website for you and will be back soon.
      </p>
    </div>
  );
}
