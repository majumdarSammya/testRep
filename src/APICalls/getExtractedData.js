export async function getDashboardData() {
  try {
    const response = await fetch("http://127.0.0.1:5000/data", {
      method: "GET",
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
