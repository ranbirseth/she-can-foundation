import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function RewardCard({ title, icon = <Gift className="w-8 h-8" /> }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-white/70 via-white/30 to-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
      whileHover={{ scale: 1.05, rotate: -1 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="absolute -top-2 -right-2 bg-yellow-300 text-white text-xs px-2 py-1 rounded-full shadow-md animate-pulse z-10">
        New!
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="text-yellow-500 bg-yellow-100 p-4 rounded-full shadow-inner">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 drop-shadow">{title}</h3>
        <p className="text-sm text-gray-600 text-center leading-tight">
          Earned by raising over ₹5,000 in donations.
        </p>
      </div>
 
    </motion.div>
    
  );
}
