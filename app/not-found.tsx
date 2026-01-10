import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-black text-white/10 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-10">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
