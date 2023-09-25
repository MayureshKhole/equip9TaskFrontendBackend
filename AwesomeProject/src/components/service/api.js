const API_URI = process.env.EXPO_PUBLIC_API_URL;

export const uploadFile = async (data) => {
  // Convert FormData to a string for logging
  const formDataString = Array.from(data)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  console.log("FormData to be sent:", formDataString);

  try {
    const response = await fetch(`${API_URI}/upload`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    //const response = await fetch(`${API_URI}/upload`);
    const text = await response.text();

    return JSON.parse(text).path;
  } catch (error) {
    console.error(error);
  }
};
