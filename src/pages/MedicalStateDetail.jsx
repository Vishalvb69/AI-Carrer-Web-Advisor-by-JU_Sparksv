import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';
import TimelineComponent from '../components/TimelineComponent';
import DocumentChecklist from '../components/DocumentChecklist';
import ProcessSteps from '../components/ProcessSteps';
import OfficialLinksCard from '../components/OfficialLinksCard';
import MotivationalSection from '../components/MotivationalSection';
import medicalData from '../../medical-counseling-data.json';

const MedicalStateDetail = () => {
  const { stateCode } = useParams();
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Medical - State Code from URL:', stateCode);
      console.log('Medical - Total states in data:', medicalData.stateCounseling?.length);
      console.log('Medical - Available state codes:', medicalData.stateCounseling?.map(s => s.stateCode));
      
      // Find state data
      const state = medicalData.stateCounseling.find(
        s => s.stateCode.toLowerCase() === stateCode.toLowerCase()
      );
      
      console.log('Medical - Found state data:', state ? state.stateName : 'NOT FOUND');
      setStateData(state);
      setLoading(false);

      // Scroll to top
      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Medical - Error loading state data:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [stateCode]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
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
            to="/counseling/medical"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
            to="/counseling/medical"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to State Selection
          </Link>
        </div>
      </div>
    );
  }

  const mcc = medicalData.nationalCounseling.mcc;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/counseling/medical"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to State Selection
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {stateData.stateName} Medical Counseling
          </h1>
          <p className="text-red-100 text-lg">
            Complete admission guide for MBBS/BDS programs
          </p>
        </div>

        {/* CRITICAL: Bond Warning */}
        {stateData.bond && stateData.bond.hasBond && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-900 mb-3">
                  CRITICAL: Bond Requirement
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">Service Period</p>
                    <p className="text-2xl font-bold text-yellow-900">{stateData.bond.servicePeriod}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">Penalty</p>
                    <p className="text-2xl font-bold text-red-600">{stateData.bond.amount}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <p className="text-center text-sm text-gray-700 font-semibold">
                      Mandatory for Govt/Aided Colleges
                    </p>
                  </div>
                </div>
                <p className="text-yellow-900 font-medium">{stateData.bond.details}</p>
              </div>
            </div>
          </div>
        )}

        {/* Counseling Body Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-red-600">
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
                className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
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

        {/* National Counseling (MCC) */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">National Counseling (MCC)</h2>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Medical Counselling Committee
            </h3>
            <p className="text-gray-700 mb-4">{mcc.basicInfo.description}</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Qualifying Percentile</p>
                <p className="text-xl font-bold text-red-600">{mcc.eligibility.qualifyingPercentile}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Registration Fee</p>
                <p className="text-xl font-bold text-green-600\">{mcc.fees.registrationGeneral}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium mb-1">Total Rounds</p>
                <p className="text-2xl font-bold text-purple-600\">{Array.isArray(mcc.rounds) ? mcc.rounds.length : mcc.rounds.total}</p>
              </div>
            </div>

            {Array.isArray(mcc.rounds) ? (
              <TimelineComponent rounds={mcc.rounds} title="MCC Counseling Rounds" />
            ) : mcc.rounds.typicalTimeline && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 font-medium">Timeline</p>
                <p className="text-lg font-bold text-red-900">{mcc.rounds.typicalTimeline}</p>
              </div>
            )}
            <ProcessSteps steps={mcc.process} title="MCC Process Steps" />
            <DocumentChecklist documents={mcc.documents} title="Required Documents for MCC" />
          </div>
        </div>

        {/* State Counseling Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {stateData.stateName} State Counseling
          </h2>

          {/* State Quota */}
            {stateData.stateQuota && (
              <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">State Quota: {stateData.stateQuota.percentage}</h3>
                <p className="text-blue-900">{stateData.stateQuota.eligibility}</p>
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
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {stateData.fees.registration && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">Registration Fee</p>
                    <p className="text-xl font-bold text-blue-600">{stateData.fees.registration}</p>
                  </div>
                )}
                {stateData.fees.securityDeposit && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium mb-1">Security Deposit</p>
                    <p className="text-xl font-bold text-purple-600">{stateData.fees.securityDeposit}</p>
                  </div>
                )}
              </div>
              {stateData.fees.tuition && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium mb-2">Annual Tuition Fees</p>
                  <p className="text-gray-800">{stateData.fees.tuition}</p>
                </div>
              )}
            </div>
          )}

          {/* Colleges */}
          {stateData.colleges && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Medical Colleges</h3>
              {typeof stateData.colleges === 'string' ? (
                <p className="text-gray-700">{stateData.colleges}</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {stateData.colleges.government && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Government Colleges</h4>
                      {Array.isArray(stateData.colleges.government) ? (
                        <ul className="space-y-2">
                          {stateData.colleges.government.slice(0, 5).map((college, index) => (
                            <li key={index} className="text-gray-700 flex items-start gap-2">
                              <span className="text-red-600 mt-1">•</span>
                              <span>{college}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">{stateData.colleges.government}</p>
                      )}
                    </div>
                  )}
                  {stateData.colleges.private && (
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Private Colleges</h4>
                      {Array.isArray(stateData.colleges.private) ? (
                        <ul className="space-y-2">
                          {stateData.colleges.private.slice(0, 5).map((college, index) => (
                            <li key={index} className="text-gray-700 flex items-start gap-2">
                              <span className="text-pink-600 mt-1">•</span>
                              <span>{college}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">{stateData.colleges.private}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Reservation & Cutoffs */}
          {(stateData.reservation || stateData.cutoffs) && (
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {stateData.reservation && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reservation</h3>
                  {typeof stateData.reservation === 'string' ? (
                    <p className="text-gray-700">{stateData.reservation}</p>
                  ) : (
                    <div className="space-y-1">
                      {Object.entries(stateData.reservation).map(([key, value]) => (
                        <p key={key} className="text-gray-700">
                          <span className="font-semibold uppercase">{key}:</span> {value}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {stateData.cutoffs && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cutoffs (Approx.)</h3>
                  <div className="space-y-2">
                    {stateData.cutoffs.govtMbbsGen && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Govt MBBS (General):</span> {stateData.cutoffs.govtMbbsGen}
                      </p>
                    )}
                    {stateData.cutoffs.privateMbbsGen && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Private MBBS (General):</span> {stateData.cutoffs.privateMbbsGen}
                      </p>
                    )}
                  </div>
                </div>
              )}
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

          {/* Financial Aid */}
          {stateData.financialAid && (
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">💰 Financial Aid & Scholarships</h3>
              <p className="text-green-900">{stateData.financialAid.scholarships}</p>
            </div>
          )}

          {/* AYUSH Options */}
          {stateData.ayush && (
            <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">AYUSH Options</h3>
              <p className="text-purple-900 mb-2">
                <strong>Conducted by:</strong> {stateData.ayush.conductedBy}
              </p>
              <p className="text-purple-900">
                <strong>Courses:</strong> {Array.isArray(stateData.ayush.courses) 
                  ? stateData.ayush.courses.join(', ') 
                  : stateData.ayush.courses}
              </p>
            </div>
          )}

          {/* Backup Options */}
          {stateData.backupOptions && (
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Backup Options</h3>
              {Array.isArray(stateData.backupOptions) ? (
                <ul className="space-y-2">
                  {stateData.backupOptions.map((option, index) => (
                    <li key={index} className="text-orange-900 flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-orange-900">{stateData.backupOptions}</p>
              )}
            </div>
          )}

          {/* Official Links */}
          <OfficialLinksCard 
            data={{
              website: stateData.counselingBody.website,
              helpline: stateData.counselingBody.helpline,
              portal: stateData.officialLinks?.portal
            }}
          />

          {/* Motivational Section */}
          <MotivationalSection 
            message={stateData.motivation}
            whileYouWait={stateData.whileYouWait}
            studentTips={stateData.studentTips}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalStateDetail;
