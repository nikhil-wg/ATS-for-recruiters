"use client"; // This component uses client-side hooks like useRouter

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { Button } from "@/components/ui/button"; // Assuming this path is correct
import { ArrowLeft, Upload } from "lucide-react"; // Icons from lucide-react
import { CandidateTable } from "../../../_components/CandidateTable"; // This component needs to be created

// This component will receive 'params' as a prop from Next.js App Router
// The dynamic segment '[id]' will be available as params.id
export default function JobCandidates({ params }) {
  const router = useRouter();
  const jobId = 1; // Access the dynamic job ID from params


  const jobTitle = "Senior Frontend Developer"; // Example: This would come from an API call based on jobId

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/dashboard")} // Use router.push for navigation
            className="flex items-center text-muted-foreground hover:bg-gray-100 transition-colors rounded-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Candidates for {jobTitle}</h1>
            <p className="text-muted-foreground text-gray-600">Review applications for this position</p>
          </div>
        </div>
        <Button
          onClick={() => router.push(`/dashboard/job/${jobId}/upload`)} // Use router.push for navigation
          className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow rounded-md"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Resumes
        </Button>
      </div>

      {/* Candidates Table Section */}
      <CandidateTable jobId={jobId} /> {/* Pass jobId to CandidateTable if it needs it */}
    </div>
  );
}
