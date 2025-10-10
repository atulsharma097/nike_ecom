import React, { useState, useRef } from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    setCursorPos({ x, y });
  };

  const handleClick = () => {
    console.log('=== ShoeCard Click Debug ===');
    console.log('imgURL object:', imgURL);
    console.log('imgURL.bigshoe:', imgURL.bigshoe);
    console.log('Current bigShoeImg:', bigShoeImg);
    console.log('Are they equal?', bigShoeImg === imgURL.bigshoe);
    
    // Call the function regardless
    changeBigShoeImage(imgURL.bigshoe);
  };

  const isSelected = bigShoeImg === imgURL.bigshoe;

  return (
    <div
      className={`rounded-xl border-2 ${
        isSelected
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1 transition-all duration-300 hover:scale-105`}
      onClick={handleClick}
    >
      <div
        ref={cardRef}
        className="relative flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg hover:shadow-xl overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Base background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900"></div>
        
        {/* Cursor following gradient effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 100px at ${cursorPos.x}% ${cursorPos.y}%, rgba(220, 49, 214, 0.4), transparent)`,
            pointerEvents: 'none',
          }}
        ></div>

        {/* Image */}
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain relative z-10 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

// import React, { useState, useRef } from 'react';

// const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
//   const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
//   const cardRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!cardRef.current) return;
    
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = ((event.clientX - rect.left) / rect.width) * 100;
//     const y = ((event.clientY - rect.top) / rect.height) * 100;
    
//     setCursorPos({ x, y });
//   };

//   const handleClick = () => {
//     if (bigShoeImg !== imgURL.bigShoe) {
//       changeBigShoeImage(imgURL.bigShoe);
//     }
//   };

//   return (
//     <div
//       className={`rounded-xl border-2 ${
//         bigShoeImg === imgURL.bigShoe
//           ? 'border-coral-red'
//           : 'border-transparent'
//       } cursor-pointer max-sm:flex-1 transition-all duration-300 hover:scale-105`}
//       onClick={handleClick}
//     >
//       <div
//         ref={cardRef}
//         className="relative flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg hover:shadow-xl overflow-hidden"
//         onMouseMove={handleMouseMove}
//       >
//         {/* Base background */}
//         <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900"></div>
        
//         {/* Cursor following gradient effect */}
//         <div
//           className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-200"
//           style={{
//             background: `radial-gradient(circle 100px at ${cursorPos.x}% ${cursorPos.y}%, rgba(220, 49, 214, 0.4), transparent)`,
//             pointerEvents: 'none',
//           }}
//         ></div>

//         {/* Image */}
//         <img
//           src={imgURL.thumbnail}
//           alt="shoe collection"
//           width={127}
//           height={103.34}
//           className="object-contain relative z-10 pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default ShoeCard;





// import React, { useState } from 'react';

// const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
//   const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });

//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
//     const x = ((clientX - left) / width) * 100;
//     const y = ((clientY - top) / height) * 100;
//     setCursorPos({ x: `${x}%`, y: `${y}%` });
//   };

//   const handleClick = () => {
//     if (bigShoeImg !== imgURL.bigShoe) {
//       changeBigShoeImage(imgURL.bigShoe);
//     }
//   };

//   return (
//     <div
//       className={`rounded-xl ${
//         bigShoeImg === imgURL.bigShoe
//           ? 'border-coral-red'
//           : 'border-transparent'
//       } cursor-pointer max-sm:flex-1 transform transition-transform duration-300 hover:translate-y-1 hover:translate-x-1`}
//       onClick={handleClick}
//     >
//       <div
//         className="relative flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg hover:shadow-xl"
//         style={{ '--cursor-x': cursorPos.x, '--cursor-y': cursorPos.y }}
//         onMouseMove={handleMouseMove}
//       >
//         <img
//           src={imgURL.thumbnail}
//           alt="shoe collection"
//           width={127}
//           height={103.34}
//           className="object-contain z-10 relative"
//         />
//         <div
//           className="absolute inset-0 rounded-xl pointer-events-none"
//           style={{
//             background: `radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(220, 49, 214, 0.3), transparent 70%)`,
//             zIndex: 1, // Ensure this is behind the image
//           }}
//         ></div>
//         <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gray-700  opacity-20 z-0"></div>
//         <div className="absolute inset-0 rounded-xl  opacity-20 shadow-inner z-0"></div>
//       </div>
//     </div>
//   );
// };

// export default ShoeCard;




// // import React, { useState } from 'react';

// // const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
// //   const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });

// //   const handleMouseMove = (event) => {
// //     const { clientX, clientY } = event;
// //     const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
// //     const x = ((clientX - left) / width) * 100;
// //     const y = ((clientY - top) / height) * 100;
// //     setCursorPos({ x: `${x}%`, y: `${y}%` });
// //   };

// //   const handleClick = () => {
// //     if (bigShoeImg !== imgURL.bigShoe) {
// //       changeBigShoeImage(imgURL.bigShoe);
// //     }
// //   };

// //   return (
// //     <div
// //       className={`rounded-xl ${
// //         bigShoeImg === imgURL.bigShoe
// //           ? 'border-coral-red'
// //           : 'border-transparent'
// //       } cursor-pointer max-sm:flex-1 transform transition-transform duration-300 hover:translate-y-1 hover:translate-x-1`}
// //       onClick={handleClick}
// //     >
// //       <div
// //         className="relative flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 shadow-lg hover:shadow-xl"
// //         style={{ '--cursor-x': cursorPos.x, '--cursor-y': cursorPos.y }}
// //         onMouseMove={handleMouseMove}
// //       >
// //         <img
// //           src={imgURL.thumbnail}
// //           alt="shoe collection"
// //           width={127}
// //           height={103.34}
// //           className="object-contain z-10 relative"
// //         />
// //         <div
// //           className="absolute inset-0 rounded-xl pointer-events-none"
// //           style={{
// //             background: `radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(220, 49, 214, 0.3), transparent 70%)`,
// //             zIndex: 1, // Ensure this is behind the image
// //           }}
// //         ></div>
// //         <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-gray-700  opacity-20 z-0"></div>
// //         <div className="absolute inset-0 rounded-xl  opacity-20 shadow-inner z-0"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShoeCard;
