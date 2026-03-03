import React, { useState } from 'react';
import { FileText, CheckCircle, Circle } from 'lucide-react';

const DocumentChecklist = ({ documents, title = "Required Documents" }) => {
  const [checkedItems, setCheckedItems] = useState({});

  if (!documents || documents.length === 0) {
    return null;
  }

  const toggleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = documents.length;
  const progressPercentage = (checkedCount / totalCount) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileText className="text-green-600" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="text-sm font-semibold text-gray-600">
          {checkedCount} / {totalCount}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {progressPercentage === 100 ? '✓ All documents ready!' : 'Check off as you collect each document'}
        </p>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {documents.map((doc, index) => {
          const isChecked = checkedItems[index] || false;
          const documentText = typeof doc === 'string' ? doc : doc.name || doc.document;
          
          return (
            <div
              key={index}
              onClick={() => toggleCheck(index)}
              className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isChecked 
                  ? 'bg-green-50 border-green-300 shadow-sm' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              {/* Checkbox */}
              <div className="flex-shrink-0 mt-0.5">
                {isChecked ? (
                  <CheckCircle className="text-green-600" size={24} />
                ) : (
                  <Circle className="text-gray-400" size={24} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className={`font-medium ${isChecked ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                  {documentText}
                </p>
                {typeof doc === 'object' && doc.details && (
                  <p className="text-sm text-gray-600 mt-1">
                    {doc.details}
                  </p>
                )}
                {typeof doc === 'object' && doc.note && (
                  <p className="text-xs text-blue-600 mt-1 font-semibold">
                    ⓘ {doc.note}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">💡 Pro Tip:</span> Make photocopies of all documents and carry originals in a separate folder during physical verification.
        </p>
      </div>
    </div>
  );
};

export default DocumentChecklist;
