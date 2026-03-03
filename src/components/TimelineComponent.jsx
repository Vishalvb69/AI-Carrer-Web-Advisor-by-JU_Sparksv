import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const TimelineComponent = ({ rounds, title = "Counseling Timeline" }) => {
  if (!rounds || rounds.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-blue-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {rounds.map((round, index) => (
            <div key={index} className="relative flex items-start gap-4 md:gap-8">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm md:text-base">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 md:p-6 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {typeof round === 'string' ? round : round.name || round.round}
                  </h3>
                  {(typeof round === 'object' && round.month) && (
                    <div className="flex items-center gap-1 text-blue-600">
                      <Clock size={16} />
                      <span className="text-sm font-semibold">{round.month}</span>
                    </div>
                  )}
                </div>
                
                {typeof round === 'object' && round.description && (
                  <p className="text-gray-700 text-sm md:text-base">
                    {round.description}
                  </p>
                )}
                
                {typeof round === 'object' && round.details && (
                  <ul className="mt-2 space-y-1">
                    {round.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
