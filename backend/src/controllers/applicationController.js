import { Application } from '../models/index.js';

// Get all applications
export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate('student', 'firstName lastName email university major')
      .populate('project', 'title clientName projectType status')
      .sort({ submittedAt: -1 }); // Sort by newest first
    
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching applications',
      error: error.message
    });
  }
};

// Get application by ID
export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching application',
      error: error.message
    });
  }
};

// Create new application
export const createApplication = async (req, res) => {
  try {
    const { student, project, status, notes } = req.body;
    
    // Validate required fields
    if (!student || !project) {
      return res.status(400).json({
        success: false,
        message: 'Student ID and Project ID are required'
      });
    }
    
    const newApplication = new Application({
      student,
      project,
      status: status || 'pending',
      notes,
      submittedAt: new Date()
    });
    
    const savedApplication = await newApplication.save();
    
    // Populate the saved application for response
    const populatedApplication = await Application.findById(savedApplication._id)
      .populate('student', 'firstName lastName email')
      .populate('project', 'title clientName');
    
    res.status(201).json({
      success: true,
      message: 'Application created successfully',
      data: populatedApplication
    });
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating application',
      error: error.message
    });
  }
};

// Update application status
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    
    if (!updatedApplication) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Application updated successfully',
      data: updatedApplication
    });
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating application',
      error: error.message
    });
  }
};

// Delete application
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedApplication = await Application.findByIdAndDelete(id);
    
    if (!deletedApplication) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Application deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting application',
      error: error.message
    });
  }
};

// Get applications by status
export const getApplicationsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    
    const applications = await Application.find({ status })
      .sort({ submittedAt: -1 });
    
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    console.error('Error fetching applications by status:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching applications by status',
      error: error.message
    });
  }
};