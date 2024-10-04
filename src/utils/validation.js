// validation.js

// Function to validate user data
export const validateUserData = (user) => {
    const errors = {};
  
    if (!user.applicantId || user.applicantId.trim() === "") {
      errors.applicantId = "Applicant ID is required.";
    }
    if (!user.name || user.name.trim() === "") {
      errors.name = "Name is required.";
    }
    if (!user.connectionType || user.connectionType.trim() === "") {
      errors.connectionType = "Connection type is required.";
    }
    if (user.loadApplied > 200) {
      errors.loadApplied = "Load applied should not exceed 200 KV.";
    }
    if (!user.dateOfApplication) {
      errors.dateOfApplication = "Date of application is required.";
    }
  
    return errors;
  };
  
  // Function to validate if a user can be deleted (only "Rejected" status is allowed)
  export const canDeleteUser = (status) => {
    return status === "Rejected";
  };
  