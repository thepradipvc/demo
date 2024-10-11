export const convertSlotsTo12HrFormat = (slots: any) => {
  return slots?.map((slot: any) => {
    const startTime24Hr = slot.start;
    const endTime24Hr = slot.end;

    // Function to convert time to 12-hour format
    function convertTo12Hr(time24: any) {
      let [hours, minutes] = time24.split(":");
      hours = parseInt(hours);
      const ampm = hours >= 12 ? " PM" : " AM";
      hours = hours % 12 || 12; // Convert to 12-hour format
      return `${hours}:${minutes}${ampm}`;
    }

    const startTime12Hr = convertTo12Hr(startTime24Hr);
    const endTime12Hr = convertTo12Hr(endTime24Hr);

    // Combine the times in the required format
    return `${startTime12Hr.split(":")[0]}-${endTime12Hr}`;
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed, so add 1
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
