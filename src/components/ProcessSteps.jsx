import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const ProcessSteps = ({ steps, title = "Counseling Process", showProgress = false }) => {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const stepText = typeof step === 'string' ? step : step.step || step.title;
          const stepDescription = typeof step === 'object' ? step.description || step.details : null;
          const isCompleted = showProgress && index < 3; // Example: mark first 3 as completed

          return (
            <div key={index} className="flex gap-4">
              {/* Step Number/Icon */}
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle2 className="text-white" size={24} />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className={`rounded-lg p-5 ${
                  isCompleted 
                    ? 'bg-green-50 border-2 border-green-200' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200'
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    isCompleted ? 'text-green-900' : 'text-gray-900'
                  }`}>
                    {stepText}
                  </h3>
                  
                  {stepDescription && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {stepDescription}
                    </p>
                  )}

                  {typeof step === 'object' && step.substeps && (
                    <ul className="mt-3 space-y-2">
                      {step.substeps.map((substep, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <Circle className="text-blue-500 flex-shrink-0 mt-0.5" size={12} fill="currentColor" />
                          <span>{substep}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {typeof step === 'object' && step.important && (
                    <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                      <p className="text-sm text-yellow-900">
                        <span className="font-semibold">⚠️ Important:</span> {step.important}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;
