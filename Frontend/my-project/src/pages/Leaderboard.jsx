import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
          🏆 Leaderboard
        </h1>

        <div className="space-y-4">
          {leaders.map((user, index) => (
            <motion.div
              key={user.referralCode}
              className="bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md p-4 flex justify-between items-center hover:scale-[1.02] transition-all"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-purple-500">{index + 1}.</div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">Referral: {user.referralCode}</p>
                </div>
              </div>
              <div className="text-lg font-bold text-indigo-600">
                ₹{user.totalDonations}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
