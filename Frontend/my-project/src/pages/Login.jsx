import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dasbord');
  };

  return (
    <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] min-h-screen flex items-center justify-center ">
     <form
  onSubmit={handleLogin}
  className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-3xl shadow-2xl w-[420px] space-y-6 animate-fade-in"
>
  <h2 className="text-3xl font-extrabold text-center text-gray-900 drop-shadow">
    🚀 Intern Login
  </h2>

  <div className="space-y-4">
    <input
      type="email"
      placeholder="Email"
      className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-white shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      required
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-white shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
  >
    🔐 Login
  </button>

  <p className="text-sm text-center text-gray-500 mt-2">
    Don't have an account? <Link to="#" className="text-blue-600 hover:underline">Sign up</Link>
  </p>
</form>

    </div>
  );
}
