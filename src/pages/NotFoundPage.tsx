import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* Large 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Page Not Found
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have
                been moved or deleted.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pt-8">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-[#18181A] text-white rounded-lg font-medium hover:bg-[#2a2a2d] transition-all duration-200 hover:scale-105"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
