// src/services/RxNormService.js
const BASE_URL = "https://rxnav.nlm.nih.gov/REST";

export const getRxcuiByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/rxcui?name=${encodeURIComponent(name)}`);
    const data = await response.json();
    if (data.idGroup && data.idGroup.rxnormId) {
      return data.idGroup.rxnormId[0]; // RxCUI for the medication
    }
    return null; // No RxCUI found
  } catch (error) {
    console.error("Error fetching RxCUI:", error);
    return null;
  }
};
