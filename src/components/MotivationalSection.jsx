import React from 'react';
import { Heart, Sparkles, TrendingUp } from 'lucide-react';

const MotivationalSection = ({ message, whileYouWait, tips, studentTips }) => {
  // Combine tips and studentTips
  const allTips = [...(tips || []), ...(studentTips || [])];

  return (
    <div className="space-y-6">
      {/* Motivational Message */}
      {message && (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start gap-3">
            <Heart className="text-white flex-shrink-0 mt-1" size={28} fill="currentColor" />
            <div>
              <h3 className="text-xl font-bold mb-2">You've Got This! 💪</h3>
              <p className="text-white/95 leading-relaxed">{message}</p>
            </div>
          </div>
        </div>
      )}

      {/* While You Wait Section */}
      {whileYouWait && whileYouWait.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md p-6 border-2 border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">While You Wait</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Make the most of your time during counseling rounds:
          </p>
          <ul className="space-y-3">
            {whileYouWait.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Student Tips */}
      {allTips && allTips.length > 0 && (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-yellow-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-orange-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Pro Tips from Students</h3>
          </div>
          <div className="space-y-3">
            {allTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-orange-400 shadow-sm">
                <span className="text-2xl">💡</span>
                <p className="text-gray-700 flex-1">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* General Encouragement */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg p-6 text-white text-center">
        <p className="text-lg font-semibold mb-2">
          Remember: Every successful student went through this process! 🎓
        </p>
        <p className="text-white/90 text-sm">
          Stay patient, read instructions carefully, and don't hesitate to ask for help when needed.
        </p>
      </div>
    </div>
  );
};

export default MotivationalSection;
