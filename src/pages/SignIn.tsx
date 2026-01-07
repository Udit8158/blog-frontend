import { useContext, useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { api } from "../config/config";
import { useNavigate } from "react-router";
import { AuthContext } from "../components/auth/AuthProvider";

export default function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { refreshAuth } = useContext(AuthContext);

  const handleSignIn = async (e: React.FormEvent) => {
    console.log("inside handle signin");
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await api.post(`/auth/login`, {
      email,
      password,
    });

    if (res.data.success) {
      // setting auth context
      refreshAuth(); // this is gonna run the validateToken function in authcontext againg
      // and will reset the states there by calling the backend '/auth/me'
      // and now it should refresh the authstatus and all

      // then we can go to /dashboard else, it was gonna redirect back to signin without a page refresh
      navigate("/dashboard", { replace: true });
    }
  };

  const togglePaswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-dark-primary-100 rounded-lg p-8 space-y-6">
          {/* Header */}
          {/* <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Admin Sign In</h1>
            <p className="text-gray-400 text-sm">
              Enter your credentials to access the dashboard
            </p>
          </div> */}

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                ref={emailRef}
                placeholder="admin@example.com"
                required
                className="w-full px-4 py-3 bg-dark-primary-300 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200 placeholder:text-gray-500"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                ref={passwordRef}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 bg-dark-primary-300 rounded-lg border border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200 placeholder:text-gray-500 pr-10"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                className="absolute right-2 top-1/2 cursor-pointer "
                onClick={togglePaswordVisibility}
              >
                {isPasswordVisible ? (
                  <EyeClosed size={18} className="text-gray-400" />
                ) : (
                  <Eye className="text-gray-400" size={18} />
                )}
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-dark-primary-300 text-white rounded-lg font-medium hover:bg-[#2a2a2d] transition-all duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
