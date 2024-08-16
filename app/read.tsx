import React, { useEffect, useState } from 'react';

const Read: React.FC = () => {
  const [highlightIndex, setHighlightIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 2000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center mb-14 px-4"> 
        <div className="mb-8 md:mb-0 flex justify-center md:justify-start">
          <div className="text-gray-600 text-center md:text-left">
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 0 && 'text-green-500'}`}>
              Enhance your knowledge
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 1 && 'text-green-500'}`}>
              Achieve greater success
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 2 && 'text-green-500'}`}>
              Improve your health
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 3 && 'text-green-500'}`}>
              Develop better parenting skills
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 4 && 'text-green-500'}`}>
              Increase happiness
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 5 && 'text-green-500'}`}>
              Be the best version of yourself!
            </div>
          </div>
        </div>

        <div className="bg-gray-200 max-w-full md:max-w-[450px] py-12 px-6 text-center">
          <div className="flex gap-3 mb-6 justify-center">
            <span className="text-blue-700 font-bold">93%</span>
            <p className="w-[260px] md:w-[320px]">
              of summarist members <span className="font-bold">significantly increase</span> reading frequency.
            </p>
          </div>

          <div className="flex gap-3 mb-6 justify-center">
            <span className="text-blue-700 font-bold">96%</span>
            <p className="w-[260px] md:w-[320px]">
              of summarist members <span className="font-bold">establish better</span> habits.
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <span className="text-blue-700 font-bold">93%</span>
            <p className="w-[260px] md:w-[320px]">
              have made <span className="font-bold">significant positive</span> changes to their lives.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around items-center mb-14 px-4"> 
        <div className="bg-gray-200 max-w-full md:max-w-[450px] py-12 px-6 text-center">
          <div className="flex gap-3 mb-6 justify-center">
            <span className="text-blue-700 font-bold">91%</span>
            <p className="w-[260px] md:w-[320px]">
              of summarist members <span className="font-bold">report feeling more productive</span> after incorporating the service into their daily routine.
            </p>
          </div>

          <div className="flex gap-3 mb-6 justify-center">
            <span className="text-blue-700 font-bold">94%</span>
            <p className="w-[260px] md:w-[320px]">
              of summarist members have <span className="font-bold">noticed an improvement</span> in their overall comprehension and retention of information.
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <span className="text-blue-700 font-bold">88%</span>
            <p className="w-[260px] md:w-[320px]">
              of summarist members <span className="font-bold">feel more informed</span> about events and industry trends since using the platform.
            </p>
          </div>
        </div>

        <div className="mb-8 md:mb-0 flex justify-center md:justify-start">
          <div className="text-gray-600 text-center md:text-left">
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 0 && 'text-green-500'}`}>
              Expand your learning
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 1 && 'text-green-500'}`}>
              Accomplish your goals
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 2 && 'text-green-500'}`}>
              Strengthen your vitality
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 3 && 'text-green-500'}`}>
              Become a better caregiver
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 4 && 'text-green-500'}`}>
              Improve your mood
            </div>
            <div className={`text-2xl md:text-3xl font-bold mb-3 ${highlightIndex === 5 && 'text-green-500'}`}>
              Maximize your abilities
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
