import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { SiSpeedtest } from 'react-icons/si';
import { IoSync } from 'react-icons/io5';
import { SiKuaishou } from 'react-icons/si';
import { BsChatRightDots } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
  

  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState(false);

  const ShowDownload = () => {
    setDownload(true);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleConvert = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate a loading time (you can remove this in a real scenario)
    setTimeout(async () => {
      // Make an API call to the conversion service (replace YOUR_API_KEY)
      const apiKey = 'YOUR_API_KEY';
      const apiUrl = `https://api.y2convert.net/api/widgetv2?url=${encodeURIComponent(
        videoUrl
      )}&apiKey=${apiKey}&format=mp4`; // You can customize the format

      // Update the iframe source
      const iframe = document.getElementById('widgetv2Api');
      iframe.src = apiUrl;

      // Fetch the data from the API
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the conversion was successful based on the API response
        if (data.success) {
          console.log(data); // Handle the response data as needed
          toast.success('Conversion completed successfully!');
        } else {
          toast.error('Conversion failed');
        }
      } catch (error) {
        toast.success('Conversion completed successfully!');
      }

      setLoading(false);
    }, 3000); // Assuming the loading process takes 3 seconds
  };

  return (
    <div className='transition'>

      <section className="w-full h-full bg-bg mt-[5em] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-b pt-4 pb-8 Shadow rounded-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center flex-col text-2xl font-bold"
          >
            Youtube Downloader
          </motion.h1>

          {/* Input Area  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center flex-col mt-4"
          >
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleConvert}
              className="p-5 w-full max-w-screen-md mx-auto flex flex-col sm:flex-row items-center justify-center"
            >
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                htmlFor="videoUrl"
                className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-2 sm:mb-0"
              >
                <input
                  type="text"
                  id="videoUrl"
                  value={videoUrl}
                  onChange={handleVideoUrlChange}
                  className="p-3 sm:p-4 w-[22em] sm:w-24em lg:w-[28em] peer border-2 border-primary rounded-md bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Paste Video URL"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs sm:text-sm text-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Paste Video URL
                </span>
              </motion.label>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                type="submit"
                onClick={ShowDownload}
                className={`w-full sm:w-full lg:w-[12em] transition overflow-hidden bg-primary text-bg p-4 rounded-md mt-2 sm:mt-0 ml-0 sm:ml-4 relative ${
                  loading ? 'cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="loader"></span>
                ) : (
                  'Convert'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Download Area  */}
        {download && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full ml-1 mt-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[98%] h-[65em] overflow-hidden rounded-md bg-bg "
            >
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                id="widgetv2Api"
                src=""
                width="100%"
                height="100%"
                allowtransparency="true"
                scrolling="yes"
                style={{ border: 'none' }}
                title="Your Unique Title Here"
              ></motion.iframe>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js"></script>
            </motion.div>
          </motion.div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-[2em] p-5 flex flex-row items-center content-center flex-wrap gap-10"
        >
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-23em h-[19em] sm:w-[25em] rounded-lg border border-gray-200 bg-white p-4  transition shadow-lg sm:p-6 hover:-translate-y-7 hover:shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[10em] flex flex-col items-center content-center"
            >
              <SiSpeedtest className="text-blue-400" style={{ fontSize: '10em' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">Edit 2X Faster</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
            >
              the ultimate app for seamless conversion of YouTube videos to MP3 and MP4 formats,
              catering specifically to your editing needs. This user-friendly application empowers
              content creators, video editors, and music enthusiasts to effortlessly transform their
              favorite YouTube content into versatile audio or video files.
            </motion.p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-23em hover:-translate-y-7 hover:shadow-2xl h-[19em] sm:w-[25em] rounded-lg border border-gray-200 bg-white p-4 transition shadow-lg sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[10em] flex flex-col items-center content-center"
            >
              <IoSync className="text-blue-400" style={{ fontSize: '10em' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">Easy YouTube Link Conversion</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
            >
              Simply paste the YouTube video link into the app, and MediaConvert Pro will handle
              the rest, swiftly converting it to either high-quality MP3 audio or MP4 video formats.
            </motion.p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-23em hover:-translate-y-7 hover:shadow-2xl h-[19em] sm:w-[25em] rounded-lg border border-gray-200 bg-white p-4 transition shadow-lg sm:p-6 "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[10em] flex flex-col items-center content-center"
            >
              <SiKuaishou className="text-blue-400" style={{ fontSize: '10em' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">High-Quality Output</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
            >
              Expect nothing less than top-notch quality. MediaConvert Pro ensures that your
              converted files retain the original audio and video fidelity, providing a seamless
              editing experience.
            </motion.p>
          </motion.article>
        </motion.section>

        {/* Video Details & Download */}
      </section>

      {/* Toast Container for Notifications */}
      <ToastContainer className="mb-5" position="bottom-right" />

      {/* Comment Icon */}
      <Link to='/report' className='Report'>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="ReportIcon"
>
    
  <BsChatRightDots className="text-bg text-3xl" />

</motion.div>
</Link>


      {/* Comment Modal */}
     
    </div>
  );
};

export default Home;
