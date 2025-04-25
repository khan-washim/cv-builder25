import React from 'react';

const CvTemplates = ({ selectedTemplate, setSelectedTemplate }) => {
  const templates = ['Modern Blue', 'Classic Gray', 'Elegant Black', 'Creative Red', 'Professional Green'];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select a Template:</label>
      <select
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {templates.map((template, index) => (
          <option key={index} value={template}>{template}</option>
        ))}
      </select>
    </div>
  );
};

export default CvTemplates;
