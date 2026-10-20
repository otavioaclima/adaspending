export const getAdaPrice = async (): Promise<number> => {
  const response = await fetch('/api/v1/markets/ada-price');
  if (!response.ok) throw new Error('Failed to fetch ADA price');
  const data = await response.json();
  return data.usd;
};
