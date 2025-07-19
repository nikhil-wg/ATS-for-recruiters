"use client";
import {
  ArrowRight,
  Users,
  Clock,
  Target,
  Filter,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-inter">
      {" "}
      {/* Added font-inter class */}
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5"></div>
          </div>
        </div>
        <div className="text-2xl font-light text-slate-800 tracking-wide">
          Wittl
        </div>
      </nav>
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-light text-slate-800 mb-6 leading-tight">
          Make hiring a wittl
          <br />
          more human.
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Wittl is a new Applicant Tracking System (ATS) that makes the online
          hiring process simpler, more intuitive and a little more human.
        </p>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-slate-500/20 rounded-3xl blur-3xl"></div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <button
                onClick={() => router.push("/dashboard")}
                className=" bg-emerald-700 hover:bg-emerald-300 text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer flex items-center gap-2 group"
              >
                Get started
                <ArrowRight className="w-4 h-4 " />
              </button>
            </div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 m-2">
              {/* Mock Dashboard Interface with Filtering */}
              <div className="space-y-6">
                <Image
                  src="/demo.png" // Placeholder image URL
                  alt="Dashboard Preview"
                  width={1200} // Set appropriate width
                  height={600} // Set appropriate height
                  layout="responsive" // Makes image responsive
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-400">No credit card required</p>
      </div>
      {/* Contact Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              Get in touch
            </h2>
            <p className="text-slate-600">
              Ready to make hiring more human? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <a
                        href="mailto:hello@wittl.com"
                        className="text-slate-600 hover:text-emerald-600 transition-colors"
                      >
                        hello@wittl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-slate-600 hover:text-emerald-600 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Location</p>
                      <p className="text-slate-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-4">Follow us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-slate-800 rounded-full opacity-80"
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="text-xl font-light tracking-wide">Wittl</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Making hiring more human with our intuitive Applicant Tracking
                System.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Wittl. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
