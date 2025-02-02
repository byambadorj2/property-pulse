const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all Properties
async function fetchProperties() {
  try {
    // Handle the case where the API domain is available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single Property
async function fetchProperty(id) {
  try {
    // Handle the case where the API domain is available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties, fetchProperty };
