import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StateDropdown from '../components/StateDropdown';
import { Wrench, BookOpen, ArrowRight } from 'lucide-react';

const EngineeringCounseling = () => {
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleStateChange = (state) => {
    setSelectedState(state.code);
  };

  const handleProceed = () => {
    if (selectedState) {
      navigate(`/counseling/engineering/${selectedState.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 shadow-lg">
            <Wrench className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Engineering Counseling Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Complete state-wise admission counseling process for B.Tech/BE programs
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="font-bold text-xl text-gray-900 mb-3">National Counseling</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>JoSAA:</strong> IITs, NITs, IIITs, GFTIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>CSAB:</strong> Special rounds for NIT+ seats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>6 rounds from June to August</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
            <h3 className="font-bold text-xl text-gray-900 mb-3">State Counseling</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>State government engineering colleges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Private engineering colleges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>85% state quota + 15% all-India quota</span>
              </li>
            </ul>
          </div>
        </div>

        {/* State Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Select Your State</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            Choose your state to view detailed counseling information, timelines, fee structure, 
            required documents, and step-by-step admission process.
          </p>

          <div className="flex flex-col md:flex-row items-end gap-4">
            <div className="flex-1 w-full">
              <StateDropdown 
                selectedState={selectedState}
                onStateChange={handleStateChange}
                label="Choose your state/UT"
              />
            </div>
            
            <button
              onClick={handleProceed}
              disabled={!selectedState}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedState
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              View Guide
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* What You'll Find */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">What You'll Find in Your State Guide</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'State counseling body & official website',
              'Eligibility criteria & domicile requirements',
              'Round-wise timeline & important dates',
              'Complete document checklist',
              'Fee structure (registration, counseling, tuition)',
              'Reservation categories & quotas',
              'Top government & private colleges',
              'Common mistakes to avoid',
              'Pro tips from successful students',
              'AYUSH & backup career options'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold text-lg">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringCounseling;
