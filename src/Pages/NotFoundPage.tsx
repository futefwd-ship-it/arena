import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#556B2F] to-[#C6D870] w-screen flex flex-col items-center justify-center text-white p-5">
      <h1 className="text-6xl font-bold">404</h1>
      <h3 className="text-xl mt-2">Oops! The path is mismatched...</h3>
      <Link to="/" className="mt-6">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#8FA31E] to-[#C6D870] text-black font-semibold shadow-lg hover:scale-105 transition-all duration-300">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}
