import React from 'react';

const LearningHub = () => {
  const courses = [
    { title: "Basics of Organic Farming", lang: "Hindi" },
    { title: "Compost Making", lang: "Punjabi" },
    { title: "Farm to Market Techniques", lang: "English" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Learning Hub</h2>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li key={index} className="border p-4 rounded shadow-sm hover:shadow-md">
            <h3 className="text-xl">{course.title}</h3>
            <p className="text-sm text-gray-600">Language: {course.lang}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start Course</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningHub;
