import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, User, Mail, Phone, MapPin, FileText, Calendar, DollarSign, Download } from 'lucide-react';

const JobApplicationAdmin = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      position: "Frontend Developer",
      experience: "5 years",
      salary: "$85,000",
      appliedDate: "2024-09-20",
      status: "pending",
      resumeUrl: "/resumes/sarah-johnson-resume.pdf",
      coverLetter: "I'm excited to apply for the Frontend Developer position. My passion for creating intuitive user experiences aligns perfectly with your company's mission. With 5 years of experience in React and modern frontend technologies, I'm confident I can contribute to your team's success while learning from the mentorship program.",
      education: "BS Computer Science, Stanford University",
      skills: "React, TypeScript, Node.js, AWS, GraphQL"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "(555) 987-6543",
      location: "Seattle, WA",
      position: "Backend Engineer",
      experience: "3 years",
      salary: "$75,000",
      appliedDate: "2024-09-19",
      status: "pending",
      resumeUrl: "/resumes/michael-chen-resume.pdf",
      coverLetter: "I am writing to express my interest in the Backend Engineer role. With my experience in distributed systems and passion for clean code, I believe I would be a valuable addition to your development team. I'm particularly excited about the mentorship opportunities and the chance to work on innovative Software 3.0 solutions.",
      education: "MS Software Engineering, University of Washington",
      skills: "Python, Django, PostgreSQL, Docker, Kubernetes"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      phone: "(555) 456-7890",
      location: "Austin, TX",
      position: "UX Designer",
      experience: "4 years",
      salary: "$70,000",
      appliedDate: "2024-09-18",
      status: "pending",
      resumeUrl: "/resumes/emily-rodriguez-resume.pdf",
      coverLetter: "As a UX designer passionate about creating meaningful digital experiences, I'm thrilled to apply for this position at InFuture. Your focus on bridging the education-industry gap resonates deeply with my career goals. I would love to contribute my design expertise while learning from experienced mentors.",
      education: "BA Design, Art Center College of Design",
      skills: "Figma, Sketch, User Research, Prototyping, HTML/CSS"
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "(555) 234-5678",
      location: "New York, NY",
      position: "Data Scientist",
      experience: "6 years",
      salary: "$95,000",
      appliedDate: "2024-09-17",
      status: "pending",
      resumeUrl: "/resumes/david-kim-resume.pdf",
      coverLetter: "I am excited to bring my expertise in machine learning and data analysis to your growing data team. InFuture's innovative approach to combining education with industry experience aligns perfectly with my desire to mentor while continuing to grow professionally. I look forward to contributing to your Software 3.0 initiatives.",
      education: "PhD Statistics, Columbia University",
      skills: "Python, R, TensorFlow, SQL, Machine Learning"
    }
  ]);

  const [selectedApplicant, setSelectedApplicant] = useState(applicants[0]);

  const updateStatus = (applicantId, newStatus) => {
    setApplicants(prev => prev.map(applicant => 
      applicant.id === applicantId 
        ? { ...applicant, status: newStatus }
        : applicant
    ));
    
    if (selectedApplicant.id === applicantId) {
      setSelectedApplicant(prev => ({ ...prev, status: newStatus }));
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'declined':
        return <XCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Clock className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'approved':
        return 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40';
      case 'declined':
        return 'bg-red-500/10 border-red-500/20 hover:bg-red-500/20 hover:border-red-400/40';
      default:
        return 'bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40';
    }
  };

  const handleDownloadResume = (resumeUrl, applicantName) => {
    console.log(`Downloading resume for ${applicantName}: ${resumeUrl}`);
    alert(`Resume download would start for ${applicantName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent"></div>
      
      <div className="flex h-screen relative z-10">
        <div className="w-1/4 bg-white/[0.02] backdrop-blur-xl border-r border-white/10 overflow-y-auto">
          <div className="p-6 border-b border-white/10">
            <h1 className="text-xl font-bold text-white">Job Applications</h1>
            <p className="text-sm text-neutral-400 mt-1">{applicants.length} total applicants</p>
          </div>
          
          <div className="p-4 space-y-3">
            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                onClick={() => setSelectedApplicant(applicant)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  selectedApplicant.id === applicant.id 
                    ? 'border-cyan-400/50 bg-cyan-500/20 shadow-xl shadow-cyan-500/20' 
                    : `${getStatusColor(applicant.status)}`
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white truncate group-hover:text-cyan-300 transition-colors duration-300">{applicant.name}</h3>
                  <div className="flex space-x-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(applicant.id, 'approved');
                      }}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        applicant.status === 'approved' 
                          ? 'bg-emerald-400/20 scale-110' 
                          : 'hover:bg-emerald-400/15 hover:scale-110'
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 transition-colors duration-300 ${
                        applicant.status === 'approved' ? 'text-emerald-400' : 'text-neutral-500 group-hover:text-emerald-400'
                      }`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(applicant.id, 'pending');
                      }}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        applicant.status === 'pending' 
                          ? 'bg-cyan-400/20 scale-110' 
                          : 'hover:bg-cyan-400/15 hover:scale-110'
                      }`}
                    >
                      <Clock className={`w-4 h-4 transition-colors duration-300 ${
                        applicant.status === 'pending' ? 'text-cyan-400' : 'text-neutral-500 group-hover:text-cyan-400'
                      }`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        updateStatus(applicant.id, 'declined');
                      }}
                      className={`p-1 rounded-full transition-all duration-300 ${
                        applicant.status === 'declined' 
                          ? 'bg-red-400/20 scale-110' 
                          : 'hover:bg-red-400/10 hover:scale-110'
                      }`}
                    >
                      <XCircle className={`w-4 h-4 transition-colors duration-300 ${
                        applicant.status === 'declined' ? 'text-red-400' : 'text-neutral-500 group-hover:text-red-400'
                      }`} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 mb-1 group-hover:text-white transition-colors duration-300">{applicant.position}</p>
                <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">{applicant.location}</p>
                <div className="flex items-center mt-2">
                  {getStatusIcon(applicant.status)}
                  <span className="ml-2 text-sm font-medium capitalize text-neutral-300">
                    {applicant.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-white">{selectedApplicant.name}</h1>
                  <p className="text-lg text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text mt-1">{selectedApplicant.position}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {getStatusIcon(selectedApplicant.status)}
                  <span className="text-lg font-semibold capitalize text-white">
                    {selectedApplicant.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-neutral-300">{selectedApplicant.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-neutral-300">{selectedApplicant.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-300 mr-3" />
                  <span className="text-neutral-300">{selectedApplicant.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-neutral-300">Applied: {selectedApplicant.appliedDate}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Experience & Salary</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-neutral-300">{selectedApplicant.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-neutral-300">{selectedApplicant.salary} expected</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Education</h3>
                <p className="text-neutral-300">{selectedApplicant.education}</p>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedApplicant.skills.split(', ').map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 text-cyan-300 border border-cyan-400/30 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-emerald-500/30 hover:border-cyan-300/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-emerald-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Resume</h3>
                </div>
                <button 
                  onClick={() => handleDownloadResume(selectedApplicant.resumeUrl, selectedApplicant.name)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
              <div className="p-4 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 rounded-xl border border-white/5">
                <p className="text-neutral-400 text-sm mb-2">Resume file: {selectedApplicant.name.toLowerCase().replace(' ', '-')}-resume.pdf</p>
                <p className="text-neutral-500 text-xs">Click "Download PDF" to view the complete resume document</p>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Cover Letter</h3>
              <p className="text-neutral-300 leading-relaxed">{selectedApplicant.coverLetter}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationAdmin;