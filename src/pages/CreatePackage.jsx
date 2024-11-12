// import React from 'react';
// import { X, Info } from 'lucide-react';

// function CreatePackage({ isModalOpen, closeModal }) {
//   const activities = [
//     'Culture', 'Outdoors', 'Relaxing', 'Wildlife',
//     'Romantic', 'Religious', 'Hiking', 'Musical',
//     'Shopping', 'Business', 'Museums', 'Party',
//     'Traditions', 'Walks', 'Fishing', 'Cruise',
//     'Guide', 'Healthcare', 'Accommodation'
//   ];

//   if (!isModalOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg w-[480px] p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold text-navy-900">Build Your Own Package</h3>
//           <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
//             <X size={24} />
//           </button>
//         </div>
//         <form className="space-y-4">
//           <div className="space-y-3">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Switzerland"
//                 className="w-full p-3 border border-gray-300 rounded-lg pr-10"
//               />
//               <Info className="absolute right-3 top-3.5 text-gray-400" size={20} />
//             </div>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Lauterbrunen"
//                 className="w-full p-3 border border-gray-300 rounded-lg pr-10"
//               />
//               <Info className="absolute right-3 top-3.5 text-gray-400" size={20} />
//             </div>
//             <button type="button" className="text-red-500 text-sm font-medium">
//               + Add destination
//             </button>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <input
//               type="text"
//               placeholder="Start Date → End Date"
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//             <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none">
//               <option>2 adults</option>
//               <option>1 adult</option>
//               <option>3 adults</option>
//               <option>4 adults</option>
//             </select>
//           </div>
//           <div className="space-y-2">
//             <p className="text-sm text-gray-500">Activities preferences (optional)</p>
//             <div className="grid grid-cols-4 gap-2">
//               {activities.map((activity) => (
//                 <div key={activity} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id={activity}
//                     className="w-4 h-4 border-gray-300 rounded"
//                   />
//                   <label htmlFor={activity} className="ml-2 text-sm text-gray-600">
//                     {activity}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
//           >
//             Build Package
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreatePackage;

import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';

function CreatePackage({ isModalOpen, closeModal }) {
  const activities = [
    'Culture', 'Outdoors', 'Relaxing', 'Wildlife',
    'Romantic', 'Religious', 'Hiking', 'Musical',
    'Shopping', 'Business', 'Museums', 'Party',
    'Traditions', 'Walks', 'Fishing', 'Cruise',
    'Guide', 'Healthcare', 'Accommodation'
  ];

  // Apply blur effect to the background when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[480px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-navy-900">Build Your Own Package</h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <form className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Switzerland"
                  className="w-full p-3 border border-gray-300 rounded-lg pr-10"
                />
                <Info className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Lauterbrunen"
                  className="w-full p-3 border border-gray-300 rounded-lg pr-10"
                />
                <Info className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
              <button type="button" className="text-red-500 text-sm font-medium">
                + Add destination
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Start Date → End Date"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg appearance-none">
                <option>2 adults</option>
                <option>1 adult</option>
                <option>3 adults</option>
                <option>4 adults</option>
              </select>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Activities preferences (optional)</p>
              <div className="grid grid-cols-4 gap-2">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={activity}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <label htmlFor={activity} className="ml-2 text-sm text-gray-600">
                      {activity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Build Package
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePackage;
