"use client"
import React, { useState } from 'react';
import { MapPin, Calendar, Users, DollarSign, Clock, X, Upload, Check } from 'lucide-react';

function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    branch: '',
    experience: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.resume) {
    alert("Please upload a resume.");
    return;
  }

  const uploadData = new FormData();
  uploadData.append("files", formData.resume);

  try {
    const res = await fetch("/api/candidate/upload-resume", {
      method: "POST",
      body: uploadData,
    });

    if (!res.ok) throw new Error("Upload failed");

    const result = await res.json();
    console.log("Parsed resume result:", result);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        branch: '',
        experience: '',
        resume: null,
      });
    }, 2000);
  } catch (err) {
    console.error("Error uploading resume:", err);
    alert("Something went wrong while uploading the resume.");
  }
};


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Kanaka Software</h1>
            <div className="text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Pune, India
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Job Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-3xl font-bold">Senior Software Engineer</h2>
              <button
                onClick={openModal}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 self-start sm:self-auto"
              >
                Apply Now
              </button>
            </div>
            <p className="text-blue-100 text-lg mb-4">Join our innovative team building the future of technology</p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Puen, Maharastra / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>10LPA</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Posted 2 days ago</span>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className="p-8">

            {/* Job Description */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're seeking a talented Senior Software Engineer to join our dynamic development team. 
                You'll be responsible for designing, developing, and maintaining high-quality software solutions 
                that serve millions of users worldwide. This is an excellent opportunity to work with cutting-edge 
                technologies and make a significant impact on our products.
              </p>
            </section>

            {/* Requirements */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Technical Skills</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 5+ years of software development experience</li>
                    <li>• Proficiency in JavaScript, TypeScript, React</li>
                    <li>• Experience with Node.js and Express</li>
                    <li>• Knowledge of SQL and NoSQL databases</li>
                    <li>• Familiarity with cloud platforms (AWS, Azure, GCP)</li>
                    <li>• Experience with Git version control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Qualifications</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Bachelor's degree in Computer Science or related field</li>
                    <li>• Strong problem-solving and analytical skills</li>
                    <li>• Excellent communication and teamwork abilities</li>
                    <li>• Experience with Agile development methodologies</li>
                    <li>• Passion for learning new technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Offer</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">💰 Competitive Package</h4>
                  <p className="text-sm text-blue-700">Competitive salary, equity, and annual bonuses</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">🏥 Health & Wellness</h4>
                  <p className="text-sm text-green-700">Comprehensive health, dental, and vision insurance</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">📚 Growth</h4>
                  <p className="text-sm text-purple-700">Learning stipend and career development opportunities</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Apply for Position</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                     <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    //   placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    //   placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    //   placeholder="Enter your mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Branch/Department *
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your branch</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="backend">Backend Development</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="devops">DevOps Engineering</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="data">Data Science</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Upload PDF, DOC, or DOCX files only
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
