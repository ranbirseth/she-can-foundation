import { useEffect, useState, useRef } from 'react';
import RewardCard from '../component/RewardCard';
import { Medal, Trophy, Shirt, BadgePercent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [intern, setIntern] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(data => setIntern(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 p-6">
      <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8 backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-800">🌟 Intern Dashboard</h1>

        {intern ? (
          <div className="space-y-4 text-gray-800 text-center">
            <p><strong>👤 Name:</strong> {intern.name}</p>
            <p><strong>🔗 Referral Code:</strong> {intern.referralCode}</p>
            <p><strong>💰 Total Donations:</strong> ₹{intern.totalDonations}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">🎁 Rewards & Unlockables</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <RewardCard title="Bronze Badge" icon={<BadgePercent className="w-8 h-8" />} />
                <RewardCard title="Silver Medal" icon={<Medal className="w-8 h-8" />} />
                <RewardCard title="Gold Trophy" icon={<Trophy className="w-8 h-8" />} />
                <RewardCard title="Exclusive T-Shirt" icon={<Shirt className="w-8 h-8" />} />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <SpotlightButton onClick={() => navigate('/leaderboard')} />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}


function SpotlightButton({ onClick }) {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;
    const span = spanRef.current;

    if (!button || !span) return;

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      span.animate({ left }, { duration: 250, fill: 'forwards' });
    };

    const handleMouseLeave = () => {
      span.animate({ left: '50%' }, { duration: 100, fill: 'forwards' });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (button) {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={onClick}
      className="relative w-full mt-20 max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white shadow-lg"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference ">
        View Leaderboard →
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
}
