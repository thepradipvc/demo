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
