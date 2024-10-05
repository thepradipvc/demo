export const validateForm = (formData:any) => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    // setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };