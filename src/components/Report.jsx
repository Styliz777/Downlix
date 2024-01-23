import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import emailjs from 'emailjs-com';
import ReportImg from '../assets/Report.svg';

const Report = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(''); 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fadeIn = useSpring({
    opacity: isModalOpen ? 1 : 0,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm('service_3ll5auk', 'template_z827esp', e.target, 'oBeLztkPbbQVpW5Wd')
      .then((result) => {
        console.log(result.text);
        setSubmissionResult('success');
        openModal(); // Open the modal on successful form submission
      })
      .catch((error) => {
        console.log(error.text);
        setSubmissionResult('error');
        openModal(); // Open the modal on form submission error
      })
      .finally(() => {
        setSubmitting(false);
      });

    e.target.reset();
  };

  return (
    <div className='mt-16 w-full p-4'>


      <section className="bg-bg">
      <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-lg bg-white shadow-xl lg:col-span-3 lg:p-12"
            >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <img src={ReportImg} className="" alt="Report" />
            </div>

           
            <div className="rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-12">
              <h1 className='w-full flex flex-col items-center content-center text-2xl mb-4 font-bold'>Report</h1>
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      className="w-full rounded-lg border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input className="peer sr-only" id="option1" type="radio" name="option" value="Slow" />
                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      <span className="text-sm"> Slow </span>
                    </label>
                  </div>

                  <div>
                    <input className="peer sr-only" id="option2" type="radio" name="option" value="Ads" />
                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      <span className="text-sm"> Ads </span>
                    </label>
                  </div>

                  <div>
                    <input className="peer sr-only" id="option3" type="radio" name="option" value="Lag's" />
                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white"
                    >
                      <span className="text-sm"> Lag's </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg resize-none border p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto relative"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="BTn flex items-center justify-center">
                       <div className="loader"></div>
                       <span className='ml-4'>Submitting...</span> 
                      </div>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </motion.div>
      </section>


      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <animated.div style={fadeIn} className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              {/* Modal panel */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <animated.div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* Checkmark icon */}
                      {submissionResult === 'success' ? (
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-red-500">!</span>
                      )}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {submissionResult === 'success' ? 'Form Submitted!' : 'Error Submitting Form'}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {submissionResult === 'success'
                            ? 'Your enquiry has been successfully submitted.'
                            : 'There was an error submitting the form. Please try again later.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </animated.div>
            </div>
          </animated.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Report;
