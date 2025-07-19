"use client"; // Marks this component as a Client Component for Next.js

import React from "react";
import { CandidateTable } from "../../dashboard/_components/CandidateTable"; // Assuming this path is correct for your CandidateTable

export default function Candidates() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      

      {/* Candidates Table */}
      {/* The CandidateTable component itself handles search, sort, and displays data */}
      <CandidateTable />
    </div>
  );
}
