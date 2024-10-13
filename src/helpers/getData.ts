process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const getData = async (profile: string) => {
  const res = await fetch(`https://dev.lnkr.store/api/v1/profile/${profile}`, {
    // Revalidate cache for fresh data in case of ISR/SSG
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    window.location.href = "/404";
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json(); // Fetch will automatically convert it to JSON
};

export default getData;

export const getProductData = async (productId: string) => {
  const res = await fetch(
    `https://dev.lnkr.store/api/v1/profile/product/${productId}`,
    {
      // Revalidate cache for fresh data in case of ISR/SSG
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json(); // Fetch will automatically convert it to JSON
};

export const submitData = async (payload: any) => {
  const res = await fetch(`https://dev.lnkr.store/api/v1/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    // Revalidate cache for fresh data in case of ISR/SSG
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json(); // Automatically convert response to JSON
};

export const getSlotsData = async (
  username: string,
  date: string,
  productId: string
) => {
  const res = await fetch(
    `https://dev.lnkr.store/api/v1/products/${username}/${productId}/availability?date=${date}`,
    {
      // Revalidate cache for fresh data in case of ISR/SSG
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  return res.json(); // Fetch will automatically convert it to JSON
};
