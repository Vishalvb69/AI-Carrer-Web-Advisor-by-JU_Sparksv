import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StateDropdown from '../components/StateDropdown';
import { Heart, BookOpen, ArrowRight, AlertTriangle } from 'lucide-react';

const MedicalCounseling = () => {
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleStateChange = (state) => {
    setSelectedState(state.code);
  };

  const handleProceed = () => {
    if (selectedState) {
      navigate(`/counseling/medical/${selectedState.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6 shadow-lg">
            <Heart className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Medical Counseling Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Complete state-wise admission counseling process for MBBS/BDS programs
          </p>
        </div>

        {/* Critical Bond Warning */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">
                CRITICAL: Bond Requirements Vary by State!
              </h3>
              <p className="text-yellow-900 mb-2">
                Most states require mandatory rural/government service after MBBS:
              </p>
              <ul className="space-y-1 text-yellow-900 text-sm">
                <li>• <strong>Service Period:</strong> 1-5 years depending on state</li>
                <li>• <strong>Penalty:</strong> ₹3-30 Lakhs if you don't serve</li>
                <li>• <strong>Critical Decision:</strong> Choose your state wisely!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
            <h3 className="font-bold text-xl text-gray-900 mb-3">National Counseling</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span><strong>MCC:</strong> 15% AIQ + 100% Central/Deemed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span><strong>Eligibility:</strong> NEET 50th-40th percentile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>4 rounds: Round 1, 2, Mop-Up, Stray Vacancy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-600">
            <h3 className="font-bold text-xl text-gray-900 mb-3">State Counseling</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>85% state quota for domicile students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Govt, Private, and Deemed medical colleges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 mt-1">•</span>
                <span>Security deposits: ₹30K-2L depending on college</span>
              </li>
            </ul>
          </div>
        </div>

        {/* State Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-red-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Select Your State</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            Choose your state to view detailed counseling information including <strong>bond requirements</strong>, 
            timelines, fee structure, domicile criteria, required documents, and financial aid options.
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
                  ? 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              View Guide
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* What You'll Find */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">What You'll Find in Your State Guide</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'State counseling body & official portal',
              'Domicile & eligibility requirements',
              'CRITICAL: Bond details (service years & penalty)',
              'Round-wise timeline & important dates',
              'Complete document checklist',
              'Fee structure (registration, security, tuition)',
              'Reservation categories & cutoffs',
              'Top government & private medical colleges',
              'Common mistakes to avoid',
              'Financial aid & scholarship schemes',
              'AYUSH (BAMS/BHMS/BUMS) backup options',
              'Pro tips from medical students'
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

export default MedicalCounseling;
