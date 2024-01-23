import React from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-16">
      <h1 className='w-full flex flex-col items-center content-center text-2xl font-bold mt-4 mb-8 sm:mb-16'>Frequently Asked Questions</h1>
      <motion.div className="space-y-4 w-full sm:w-full md:w-[40em] max-w-screen-md">
        <motion.details className="group [&_summary::-webkit-details-marker]:hidden">
          <motion.summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-medium">Is it FREE?</h2>
            <motion.svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.summary>
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-4 px-4 leading-relaxed text-gray-700"
          >
            We provide all our services for free.
          </motion.p>
        </motion.details>

        <motion.details className="group [&_summary::-webkit-details-marker]:hidden">
          <motion.summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="font-medium">Is there any download limit?</h2>
            <motion.svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.summary>
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mt-4 px-4 leading-relaxed text-gray-700"
          >
            No, there is no download limit. You can download HD videos for free, unlimited!
          </motion.p>
        </motion.details>
      </motion.div>
    </div>
  );
};

export default Faq;
