import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge"; // Assuming this is a shadcn/ui badge component
import { Button } from "@/components/ui/button"; // Assuming this is a shadcn/ui button component
import { Input } from "@/components/ui/input"; // Assuming this is a shadcn/ui input component
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Assuming these are shadcn/ui avatar components
import { Search, Filter, ArrowUpDown, Eye, MessageSquare } from "lucide-react"; // Icons from lucide-react

// Mock candidate data (in a real app, this would come from an API)
const candidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    qualification: "M.S. Computer Science",
    gender: "Female",
    location: "San Francisco, CA",
    experience: 5,
    applicationDate: "2024-01-15",
    technologies: ["React", "TypeScript", "Node.js"],
    status: "Interview"
  },
  {
    id: 2,
    name: "Michael Chen",
    qualification: "B.S. Software Engineering",
    gender: "Male",
    location: "Seattle, WA",
    experience: 3,
    applicationDate: "2024-01-12",
    technologies: ["Python", "Django", "PostgreSQL"],
    status: "Review"
  },
  {
    id: 3,
    name: "Emma Davis",
    qualification: "B.A. Design, UX Certification",
    gender: "Female",
    location: "Austin, TX",
    experience: 4,
    applicationDate: "2024-01-10",
    technologies: ["Figma", "Adobe Creative Suite", "Prototyping"],
    status: "New"
  },
  {
    id: 4,
    name: "James Wilson",
    qualification: "M.S. Data Science",
    gender: "Male",
    location: "Boston, MA",
    experience: 6,
    applicationDate: "2024-01-08",
    technologies: ["Python", "Machine Learning", "AWS"],
    status: "Hired"
  },
  {
    id: 5,
    name: "Olivia White",
    qualification: "B.S. Electrical Engineering",
    gender: "Female",
    location: "New York, NY",
    experience: 2,
    applicationDate: "2024-01-18",
    technologies: ["C++", "Embedded Systems"],
    status: "New"
  },
  {
    id: 6,
    name: "David Lee",
    qualification: "Ph.D. Artificial Intelligence",
    gender: "Male",
    location: "Palo Alto, CA",
    experience: 8,
    applicationDate: "2024-01-05",
    technologies: ["TensorFlow", "PyTorch", "NLP"],
    status: "Interview"
  }
];

// Helper function to determine badge color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-800 border border-blue-200";
    case "Review":
      return "bg-yellow-100 text-yellow-800 border border-yellow-200";
    case "Interview":
      return "bg-purple-100 text-purple-800 border border-purple-200";
    case "Hired":
      return "bg-green-100 text-green-800 border border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border border-gray-200";
  }
};

// Helper function to get initials for AvatarFallback
const getInitials = (name) => {
  if (!name) return "";
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
};

export function CandidateTable({ jobId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (!sortField) return 0;

    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === "asc"
        ? aValue - bValue
        : bValue - aValue;
    }
    return 0;
  });

  return (
    <Card className="rounded-lg shadow-sm border border-gray-200">
      <CardHeader className="p-4 pb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <CardTitle className="text-2xl font-semibold text-gray-900">Candidates</CardTitle>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-md shadow-sm hover:shadow-md transition-shadow">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</TableHead>
                <TableHead onClick={() => handleSort("qualification")} className="cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Qualification
                    <ArrowUpDown className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</TableHead>
                <TableHead onClick={() => handleSort("location")} className="cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Location
                    <ArrowUpDown className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("experience")} className="cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Experience
                    <ArrowUpDown className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead onClick={() => handleSort("applicationDate")} className="cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Applied
                    <ArrowUpDown className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technologies</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {sortedCandidates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                    No candidates found matching your criteria.
                  </TableCell>
                </TableRow>
              ) : (
                sortedCandidates.map((candidate) => (
                  <TableRow key={candidate.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-9 h-9">
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm font-semibold">
                            {getInitials(candidate.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-gray-900">{candidate.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{candidate.qualification}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{candidate.gender}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{candidate.location}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{candidate.experience} years</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{candidate.applicationDate}</TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {candidate.technologies.slice(0, 2).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-1 rounded-full border border-gray-300 bg-gray-50 text-gray-700">
                            {tech}
                          </Badge>
                        ))}
                        {candidate.technologies.length > 2 && (
                          <Badge variant="outline" className="text-xs px-2 py-1 rounded-full border border-gray-300 bg-gray-50 text-gray-700">
                            +{candidate.technologies.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <Badge className={getStatusColor(candidate.status)}>
                        {candidate.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 transition-colors">
                          <Eye className="w-5 h-5 text-gray-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 transition-colors">
                          <MessageSquare className="w-5 h-5 text-gray-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
