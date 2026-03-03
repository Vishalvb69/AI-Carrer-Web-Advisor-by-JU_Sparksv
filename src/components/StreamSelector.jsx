import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Heart, Briefcase, Palette, Rocket } from 'lucide-react';

const StreamSelector = () => {
  const streams = [
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Wrench,
      description: 'Complete state-wise counseling guide for JoSAA, CSAB, and all state engineering admissions',
      color: 'blue',
      available: true,
      path: '/counseling/engineering'
    },
    {
      id: 'medical',
      name: 'Medical',
      icon: Heart,
      description: 'Comprehensive MCC and state medical counseling process with bond details and fee structure',
      color: 'red',
      available: true,
      path: '/counseling/medical'
    },
    {
      id: 'commerce',
      name: 'Commerce',
      icon: Briefcase,
      description: 'CA, CS, CMA, and BBA/B.Com admission guidance (Coming Soon)',
      color: 'green',
      available: false,
      path: '#'
    },
    {
      id: 'arts',
      name: 'Arts & Humanities',
      icon: Palette,
      description: 'CUET, DU, JNU and state university admissions (Coming Soon)',
      color: 'purple',
      available: false,
      path: '#'
    },
    {
      id: 'emerging',
      name: 'Emerging Careers',
      icon: Rocket,
      description: 'Design, Animation, Esports, and modern career counseling (Coming Soon)',
      color: 'orange',
      available: false,
      path: '#'
    }
  ];

  const getColorClasses = (color, available) => {
    if (!available) {
      return {
        bg: 'bg-gray-100',
        border: 'border-gray-300',
        icon: 'text-gray-400',
        text: 'text-gray-600',
        hover: ''
      };
    }

    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        text: 'text-blue-900',
        hover: 'hover:bg-blue-100 hover:border-blue-300 hover:shadow-lg'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        text: 'text-red-900',
        hover: 'hover:bg-red-100 hover:border-red-300 hover:shadow-lg'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        text: 'text-green-900',
        hover: 'hover:bg-green-100 hover:border-green-300 hover:shadow-lg'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        text: 'text-purple-900',
        hover: 'hover:bg-purple-100 hover:border-purple-300 hover:shadow-lg'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        text: 'text-orange-900',
        hover: 'hover:bg-orange-100 hover:border-orange-300 hover:shadow-lg'
      }
    };

    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            College Admission Counseling
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guidance for state-wise counseling, documents, fees, timelines, and more
          </p>
        </div>

        {/* Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {streams.map((stream) => {
            const colorClasses = getColorClasses(stream.color, stream.available);
            const Icon = stream.icon;

            const CardContent = (
              <>
                <div className={`${colorClasses.icon} mb-4`}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className={`text-2xl font-bold ${colorClasses.text} mb-3`}>
                  {stream.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {stream.description}
                </p>
                {!stream.available && (
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">
                    Coming Soon
                  </span>
                )}
                {stream.available && (
                  <span className={`inline-block px-4 py-2 ${colorClasses.icon} font-semibold`}>
                    Explore Guide →
                  </span>
                )}
              </>
            );

            return stream.available ? (
              <Link
                key={stream.id}
                to={stream.path}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 transition-all duration-300 ${colorClasses.hover} cursor-pointer`}
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={stream.id}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-xl p-6 cursor-not-allowed opacity-60`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Find Here</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ National Counseling</h3>
              <p className="text-gray-600">JoSAA, CSAB, MCC processes with round-wise schedules</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ State-Wise Guides</h3>
              <p className="text-gray-600">All 36 states/UTs with complete counseling details</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ Document Checklists</h3>
              <p className="text-gray-600">Complete list of required documents for each state</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ Fee Structures</h3>
              <p className="text-gray-600">Registration, counseling, security deposit, and tuition fees</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ Bond Details</h3>
              <p className="text-gray-600">Mandatory service requirements and penalties (Medical)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">✓ Common Mistakes</h3>
              <p className="text-gray-600">State-specific pitfalls to avoid during counseling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamSelector;
