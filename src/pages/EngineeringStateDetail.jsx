import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import TimelineComponent from '../components/TimelineComponent';
import DocumentChecklist from '../components/DocumentChecklist';
import ProcessSteps from '../components/ProcessSteps';
import OfficialLinksCard from '../components/OfficialLinksCard';
import MotivationalSection from '../components/MotivationalSection';
import engineeringData from '../../engineering-counseling-data.json';

const EngineeringStateDetail = () => {
  const { stateCode } = useParams();
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Engineering - State Code from URL:', stateCode);
      console.log('Engineering - Total states in data:', engineeringData.stateCounseling?.length);
      console.log('Engineering - Available state codes:', engineeringData.stateCounseling?.map(s => s.stateCode));
      
      // Find state data
      const state = engineeringData.stateCounseling.find(
        s => s.stateCode.toLowerCase() === stateCode.toLowerCase()
      );
      
      console.log('Engineering - Found state data:', state ? state.stateName : 'NOT FOUND');
      setStateData(state);
      setLoading(false);

      // Scroll to top
      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Engineering - Error loading state data:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [stateCode]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-red-900 mb-4">Error Loading Data</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/counseling/engineering"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to State Selection
          </Link>
        </div>
      </div>
    );
  }

  if (!stateData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">State Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find counseling data for state code: {stateCode}
          </p>
          <Link
            to="/counseling/engineering"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to State Selection
          </Link>
        </div>
      </div>
    );
  }

  const josaa = engineeringData.nationalCounseling.josaa;
  const csab = engineeringData.nationalCounseling.csab;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/counseling/engineering"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to State Selection
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {stateData.stateName} Engineering Counseling
          </h1>
          <p className="text-blue-100 text-lg">
            Complete admission guide for B.Tech/BE programs
          </p>
        </div>

        {/* Counseling Body Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {stateData.counselingBody.name}
            {stateData.counselingBody.acronym && ` (${stateData.counselingBody.acronym})`}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 font-medium">Official Website</p>
              <a
                href={`https://${stateData.counselingBody.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                {stateData.counselingBody.website}
                <ExternalLink size={16} />
              </a>
            </div>
            {stateData.counselingBody.helpline && (
              <div>
                <p className="text-sm text-gray-600 font-medium">Helpline</p>
                <p className="text-gray-900 font-semibold">{stateData.counselingBody.helpline}</p>
              </div>
            )}
          </div>
        </div>

        {/* National Counseling Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">National Counseling (JoSAA & CSAB)</h2>
          
          {/* JoSAA */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">JoSAA (Joint Seat Allocation Authority)</h3>
            <p className="text-gray-700 mb-4">{josaa.basicInfo.description}</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Total Seats</p>
                <p className="text-2xl font-bold text-blue-600">{josaa.seatMatrix.totalSeats}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Registration Fee (General)</p>
                <p className="text-2xl font-bold text-green-600">{josaa.fees.registrationGeneral}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Total Rounds</p>
                <p className="text-2xl font-bold text-purple-600">{josaa.rounds.total}</p>
              </div>
            </div>

            {josaa.rounds.typicalTimeline && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 font-medium">Timeline</p>
                <p className="text-lg font-bold text-blue-900">{josaa.rounds.typicalTimeline}</p>
              </div>
            )}
            <ProcessSteps steps={josaa.process} title="JoSAA Process Steps" />
            <DocumentChecklist documents={josaa.documents} title="Required Documents for JoSAA" />
          </div>

          {/* CSAB */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">CSAB (Central Seat Allocation Board)</h3>
            <p className="text-gray-700 mb-4">{csab.basicInfo.description}</p>
            <p className="text-gray-600"><strong>Eligibility:</strong> {csab.eligibility}</p>
            <p className="text-gray-600 mt-2"><strong>Note:</strong> {csab.process}</p>
          </div>
        </div>

        {/* State Counseling Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {stateData.stateName} State Counseling
          </h2>

          {/* State Quota */}
            {stateData.quotaBreakdown && (
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-2">Quota Breakdown</h3>
                {stateData.quotaBreakdown.stateQuota && (
                  <p className="text-yellow-900 mb-1"><strong>State Quota:</strong> {stateData.quotaBreakdown.stateQuota}</p>
                )}
                {stateData.quotaBreakdown.allIndiaQuota && (
                  <p className="text-yellow-900"><strong>All India Quota:</strong> {stateData.quotaBreakdown.allIndiaQuota}</p>
                )}
              </div>
            )}

            {/* State Exam Info */}
            {stateData.stateExam && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">State Entrance Exam</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{stateData.stateExam.examName}</p>
                <p className="text-gray-700 mb-2">{stateData.stateExam.pattern}</p>
                {stateData.stateExam.typicalMonth && (
                  <p className="text-gray-600"><strong>Typically held in:</strong> {stateData.stateExam.typicalMonth}</p>
                )}
              </div>
            )}

          {/* Process Steps */}
          <ProcessSteps steps={stateData.process} title={`${stateData.stateName} Counseling Process`} />

          {/* Timeline */}
          <TimelineComponent rounds={stateData.rounds} title="Counseling Rounds" />

          {/* Documents */}
          <DocumentChecklist documents={stateData.documents} title="Required Documents" />

          {/* Fees */}
          {stateData.fees && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fee Structure</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {stateData.fees.general && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">General Category</p>
                    <p className="text-xl font-bold text-blue-600">{stateData.fees.general}</p>
                  </div>
                )}
                {stateData.fees.reserved && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">Reserved Category</p>
                    <p className="text-xl font-bold text-green-600">{stateData.fees.reserved}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Colleges */}
          {stateData.colleges && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Engineering Colleges</h3>
              {stateData.colleges.government && typeof stateData.colleges.government === 'string' ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Government Colleges</h4>
                    <p className="text-gray-700">{stateData.colleges.government}</p>
                  </div>
                  {stateData.colleges.private && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Private Colleges</h4>
                      <p className="text-gray-700">{stateData.colleges.private}</p>
                    </div>
                  )}
                  {stateData.colleges.top && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Top Colleges</h4>
                      <p className="text-gray-700">{stateData.colleges.top}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {stateData.colleges.government && Array.isArray(stateData.colleges.government) && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Government Colleges</h4>
                      <ul className="space-y-2">
                        {stateData.colleges.government.slice(0, 5).map((college, index) => (
                          <li key={index} className="text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{college}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {stateData.colleges.private && Array.isArray(stateData.colleges.private) && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Private Colleges</h4>
                      <ul className="space-y-2">
                        {stateData.colleges.private.slice(0, 5).map((college, index) => (
                          <li key={index} className="text-gray-700 flex items-start gap-2">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{college}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Reservation */}
          {stateData.reservation && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reservation Policy</h3>
              <p className="text-gray-700">{stateData.reservation}</p>
            </div>
          )}

          {/* Common Mistakes */}
          {stateData.commonMistakes && (
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">⚠️ Common Mistakes to Avoid</h3>
              {Array.isArray(stateData.commonMistakes) ? (
                <ul className="space-y-3">
                  {stateData.commonMistakes.map((mistake, index) => (
                    <li key={index} className="text-red-900 flex items-start gap-2">
                      <span className="font-bold mt-1">{index + 1}.</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-red-900">{stateData.commonMistakes}</p>
              )}
            </div>
          )}

          {/* Official Links */}
          <OfficialLinksCard 
            data={{
              website: stateData.counselingBody?.website,
              helpline: stateData.counselingBody?.helpline,
              portal: stateData.officialLinks?.portal
            }}
          />

          {/* Motivational Section */}
          {(stateData.motivation || stateData.whileYouWait || stateData.studentTips) && (
            <MotivationalSection 
              message={stateData.motivation}
              whileYouWait={stateData.whileYouWait}
              studentTips={stateData.studentTips}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EngineeringStateDetail;
