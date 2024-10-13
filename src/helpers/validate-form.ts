export const validateForm = (formData: any, apiFields: string[]) => {
  console.log(formData, apiFields);
  
  const newErrors: any = {};

  // Loop through each field received from the API
  apiFields.forEach((field) => {
    const fieldKey = field.toLowerCase(); // Assuming formData uses lowercase field names

    // Validate each field: it should not be undefined, null, or an empty string
    if (
      formData[fieldKey] === undefined ||
      formData[fieldKey] === null ||
      formData[fieldKey].trim() === ""
    ) {
      newErrors[fieldKey] = `${field} is required.`; // Dynamically create error messages
    }

    // Example additional validation for email fields
    if (field.toLowerCase() === "email" && formData[fieldKey]) {
      if (!/\S+@\S+\.\S+/.test(formData[fieldKey])) {
        newErrors[fieldKey] = "Email format is invalid.";
      }
    }
  });
  console.log(newErrors);
  

  return Object.keys(newErrors).length === 0 ? true : newErrors; // Return errors if any exist
};
