import React, { useState } from "react";
import "./IntroPage.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function IntroPage() {
  const [businessRunning, setBusinessRunning] = useState("");
  const [identify, setIdentify] = useState("");
  const [teachingOnline, setTeachingOnline] = useState("");
  const [audienceSize, setAudienceSize] = useState("");
  const [businessTopic, setBusinessTopic] = useState("");
  const [earnings, setEarnings] = useState("");
  const [training, setTraining] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 50) {
          clearInterval(timer); // Stop the interval once progress reaches 50 or more
          return 50;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 0);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log("Form submitted:", {
      businessRunning,
      identify,
      teachingOnline,
      audienceSize,
      businessTopic,
      earnings,
      training,
    });

    // Simulate form submission (replace with your actual logic)
    alert("Your form has been submitted successfully!");
  };

  const handleBusinessChange = (event) => {
    setBusinessRunning(event.target.value);
  };

  const handleIdentifyChange = (event) => {
    setIdentify(event.target.value);
  };

  const handleTeachingChange = (event) => {
    setTeachingOnline(event.target.value);
  };

  const handleAudienceChange = (event) => {
    setAudienceSize(event.target.value);
  };

  const handleTopicChange = (event) => {
    setBusinessTopic(event.target.value);
  };

  const handleEarningsChange = (event) => {
    setEarnings(event.target.value);
  };

  const handleTrainingChange = (event) => {
    setTraining(event.target.value);
  };

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "10px",
        }}
      />

      <div className="container mx-auto px-[29em] py-20 mobile_container">
        <h1 className="text-4xl font-semibold mb-10">
          Tell us a little more about yourself
        </h1>
        <p className="text-lg mb-10">
          Your answers will help us build an experience to match your needs.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="business" className="block mb-2 font-bold">
              Do you currently run an online business?
            </label>
            <select
              id="business"
              value={businessRunning}
              onChange={handleBusinessChange}
              className="text-gray-700 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            >
              <option value="">Please choose an option</option>
              <option value="exploring">No, Just exploring!</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="business" className="font-bold block mb-2">
              I primarily identify as a
            </label>
            <select
              id="identify"
              value={identify}
              onChange={handleIdentifyChange}
              className="text-gray-700 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            >
              <option value="">Please choose an option</option>
              <option value="freelancer">
                Freelancer or Consultant (Project-based work)
              </option>
              <option value="entrepreneur">
                Entrepreneur or Business Owner
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="teaching" className="block mb-2 font-bold">
              Are you already teaching or offering content online?
            </label>
            <select
              id="teaching"
              value={teachingOnline}
              onChange={handleTeachingChange}
              className="text-gray-700 border border-gray-300 w-full rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Please choose an option</option>
              <option value="getting_started">
                No, I'm just getting started sharing my knowledge
              </option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="audience" className="block mb-2 font-bold">
              How big is your current audience (email list, social media
              followers, subscribers, etc.)?
            </label>
            <select
              id="teaching"
              value={audienceSize}
              onChange={handleAudienceChange}
              className="text-gray-700 border w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Please choose an option</option>
              <option value="1-1000">1-1000 people</option>
              <option value="1000-3000">1000-3000 people</option>
              <option value="3000-6000">3000-6000 people</option>
              <option value="6000-10,000">6000-10,000 people</option>
              <option value="Above 10,000">Above 10,000 people</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="topic" className="block mb-2 font-bold">
              Which topic is most relevant to your business or content?
            </label>
            <select
              id="teaching"
              value={businessTopic}
              onChange={handleTopicChange}
              className="text-gray-700 border w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Please choose an option </option>
              <option value="photo_video">Photo and Video</option>
              <option value="technology">Technology</option>
              <option value="fashion">Fashion</option>
              <option value="health">Health & Wellness</option>
              <option value="finance">Finance & Investment</option>
              <option value="food">Food & Cooking</option>
              <option value="travel">Travel & Adventure</option>
              <option value="education">Education & Learning</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="earnings" className=" block mb-2 font-bold">
              Approximately how much money do you make charging for your
              knowledge today (in courses, consulting, books, speaking, etc.)?
              We ask this so that we can provide you with relevant resources for
              the size and stage of your business.
            </label>
            <select
              id="teaching"
              value={earnings}
              onChange={handleEarningsChange}
              className="text-gray-700 border w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Please choose an option </option>
              <option value="prefer_not_to_answer">
                I prefer not to answer
              </option>
              <option value="less_than_1000">Less than $1,000</option>
              <option value="1000_to_5000">$1,000 - $5,000</option>
              <option value="5000_to_10000">$5,000 - $10,000</option>
              <option value="10000_to_50000">$10,000 - $50,000</option>
              <option value="more_than_50000">More than $50,000</option>{" "}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="earnings" className="block mb-2 font-bold">
              What are you hoping to do first on Teachable? (Select up to 3 to
              get started as quickly as possible)
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="createCourse"
                  checked={selectedOptions.includes("createCourse")}
                  onChange={() => handleOptionChange("createCourse")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">Create an online course</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="sellCourse"
                  checked={selectedOptions.includes("sellCourse")}
                  onChange={() => handleOptionChange("sellCourse")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">Create a coaching program</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="monetizeContent"
                  checked={selectedOptions.includes("monetizeContent")}
                  onChange={() => handleOptionChange("monetizeContent")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">
                  Create a digital download (ebook, article, template,
                  worksheet, etc.)
                </span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="hostWebinars"
                  checked={selectedOptions.includes("hostWebinars")}
                  onChange={() => handleOptionChange("hostWebinars")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">Create a community or forum</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="buildCommunity"
                  checked={selectedOptions.includes("buildCommunity")}
                  onChange={() => handleOptionChange("buildCommunity")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">Create a pre-sell</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="growAudience"
                  checked={selectedOptions.includes("growAudience")}
                  onChange={() => handleOptionChange("growAudience")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">I'm not sure yet</span>
              </label>
              <br />
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="others"
                  checked={selectedOptions.includes("others")}
                  onChange={() => handleOptionChange("others")}
                  className="form-checkbox text-indigo-600 h-5 w-5"
                />
                <span className="ml-2">
                  Something else (please tell us more)
                </span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="teaching" className="block mb-2 font-bold">
              How much content or training material (videos, worksheets,
              downloads, etc.) have you already prepared?
            </label>
            <select
              id="training"
              value={training}
              onChange={handleTrainingChange}
              className="text-gray-700 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Please choose an option </option>
              <option value="none">None, I'm just getting started</option>
              <option value="some_content">I have some content prepared</option>
              <option value="extensive_content">
                I have extensive content prepared
              </option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-White-500 font-bold text-black border border-black border-2 rounded-lg rounded px-[50px] py-2 mt-8"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default IntroPage;
