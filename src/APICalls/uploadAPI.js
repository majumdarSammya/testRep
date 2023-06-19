export async function uploadToGCS(formData) {
  try {
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
      body: formData,
    });

    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function uploadSuccessToken(formData) {
  try {
    const response = await fetch("http://127.0.0.1:5000/success", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    });

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error(error);
  }
}
