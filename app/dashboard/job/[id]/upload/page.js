"use client"; // This component uses client-side hooks like useState and useRouter

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useParams and useRouter from Next.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming these are shadcn/ui components
import { Button } from "@/components/ui/button"; // Assuming this is a shadcn/ui component
import { Input } from "@/components/ui/input"; // Assuming this is a shadcn/ui component
import { Label } from "@/components/ui/label"; // Assuming this is a shadcn/ui component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Assuming these are shadcn/ui components
import { ArrowLeft, Upload, FileText, X } from "lucide-react"; // Icons from lucide-react
import axios from "axios";

export default function JobManage() {
  const params = useParams(); // Get dynamic route parameters
  const router = useRouter(); // Initialize Next.js router
  const jobId = params.id; // Access the dynamic job ID

  const [uploadedFiles, setUploadedFiles] = useState([]);

  // In a real application, you would fetch the job title based on jobId
  // For now, we'll use a placeholder or fetch from a mock data source
  const jobTitle = "Senior Frontend Developer"; // Example: This would come from an API call based on jobId

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || []);
    // Filter out non-PDF/DOC/DOCX files or files larger than 10MB if needed
    const validFiles = files.filter(file => {
      const fileType = file.type;
      const fileSize = file.size; // in bytes
      const maxFileSize = 10 * 1024 * 1024; // 10 MB

      const isAllowedType = fileType === "application/pdf" ||
        fileType === "application/msword" || // .doc
        fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; // .docx

      return isAllowedType && fileSize <= maxFileSize;
    });

    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleProcessResumes = () => {
    // Implement your logic here to send files to a backend for processing
    console.log("Processing resumes:", uploadedFiles);
    // Simulate API call
    setTimeout(() => {
      alert("Resumes processed successfully!"); // Use a custom modal in a real app
      router.push(`/jobs/${jobId}/candidates`); // Navigate back to candidates view
    }, 1500);
  };
const handleSaveChanges = () => {
  const jobDetails = {
    title: document.getElementById("job-title")?.value,
    department: document.getElementById("department")?.value,
    location: document.getElementById("location")?.value,
    type: document.getElementById("job-type")?.value,
  };

  console.log("Job Details Submitted:", jobDetails);
};


  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push(`/dashboard/job/${jobId}/candidates`)} // Use router.push for navigation
            className="flex items-center text-muted-foreground hover:bg-gray-100 transition-colors rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Candidates
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage {jobTitle}</h1>
            <p className="text-muted-foreground text-gray-600">Upload resumes and manage job details</p>
          </div>
        </div>
      </div>

      {/* Tabs for Upload Resumes and Job Details */}
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-md p-1">
          <TabsTrigger value="upload" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-colors">Upload Resumes</TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-colors">Job Details</TabsTrigger>
        </TabsList>

        {/* Upload Resumes Tab Content */}
        <TabsContent value="upload" className="space-y-6 mt-6">
          <Card className="rounded-lg shadow-sm border border-gray-200">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="flex items-center text-2xl font-semibold text-gray-900">
                <Upload className="w-6 h-6 mr-3 text-blue-600" />
                Upload Candidate Resumes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-6">
              {/* File Upload Area */}
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => document.getElementById('resume-upload').click()} // Trigger hidden input click
              >
                <div className="space-y-4">
                  <Upload className="w-16 h-16 mx-auto text-gray-400" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Drop files here or click to browse</h3>
                    <p className="text-muted-foreground text-sm text-gray-600">Supports PDF, DOC, DOCX files up to 10MB each</p>
                  </div>
                  <Input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <Label htmlFor="resume-upload" className="inline-block"> {/* Label for accessibility and clickability */}
                    <Button variant="outline" className="cursor-pointer rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <span>Choose Files</span>
                    </Button>
                  </Label>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-800">Uploaded Files ({uploadedFiles.length})</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-6 h-6 text-gray-500" />
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-muted-foreground text-gray-600">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFile(index)}
                          className="rounded-full hover:bg-red-100 text-red-600 hover:text-red-800 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Button */}
              {uploadedFiles.length > 0 && (
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <Button
                    onClick={handleProcessResumes}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow rounded-md"
                  >
                    Process {uploadedFiles.length} Resume{uploadedFiles.length !== 1 ? 's' : ''}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Job Details Tab Content */}
        <TabsContent value="details" className="space-y-6 mt-6">
          <Card className="rounded-lg shadow-sm border border-gray-200">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-2xl font-semibold text-gray-900">Job Information</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="job-title" className="text-gray-700 font-medium mb-1 block">Job Title</Label>
                  <Input id="job-title" defaultValue={jobTitle} className="rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <Label htmlFor="department" className="text-gray-700 font-medium mb-1 block">Department</Label>
                  <Input id="department" defaultValue="Engineering" className="rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <Label htmlFor="location" className="text-gray-700 font-medium mb-1 block">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" className="rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <Label htmlFor="job-type" className="text-gray-700 font-medium mb-1 block">Job Type</Label>
                  <Input id="job-type" defaultValue="Full-time" className="rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <Button
                  onClick={handleSaveChanges}
                  variant="outline"
                  className="rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
