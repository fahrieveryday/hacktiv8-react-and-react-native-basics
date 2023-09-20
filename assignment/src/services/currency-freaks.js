export const useGetCurrencyFreaks = async () => {
  try {
    const response = await fetch(
      'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=500ec804bd22405486bc125a4b9b28e2',
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return {};
  }
};
