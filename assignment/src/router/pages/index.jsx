import { useMemo, useEffect, useState, useRef, useCallback } from 'react';
import { useGetCurrencyFreaks } from 'services/currency-freaks';
import CountUp from 'react-countup';

export const HomePage = () => {
  const fetchAfterInitValueRef = useRef(false);
  const currencyList = ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'];

  const [exchangeRates, setExchangeRates] = useState({});

  const weBuyRates = useMemo(() => {
    const currentValue = {};
    Object.keys(exchangeRates).forEach(function (key) {
      currentValue[key] = (105 / 100) * exchangeRates[key]; // 105% from exchange rate
    });
    return currentValue;
  }, [exchangeRates]);

  const weSellRates = useMemo(() => {
    const currentValue = {};
    Object.keys(exchangeRates).forEach(function (key) {
      currentValue[key] = (95 / 100) * exchangeRates[key]; // 95% from exchange rate
    });
    return currentValue;
  }, [exchangeRates]);

  const initExchangeRates = useCallback(() => {
    const currentValue = {};
    currencyList.forEach(function (key) {
      currentValue[key] = 0;
    });
    setExchangeRates(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchExchangeRatesFromInternet = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useGetCurrencyFreaks();
    const currentValue = {};
    currencyList.forEach(function (key) {
      currentValue[key] = Number(response?.rates?.[key] ?? 0);
    });
    setTimeout(() => {
      setExchangeRates(currentValue);
    }, 1500);
  };

  useEffect(() => {
    if (Object.keys(exchangeRates).length === 0) {
      console.log('initExchangeRates');
      initExchangeRates();
      fetchAfterInitValueRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (fetchAfterInitValueRef.current) {
      console.log('fetchExchangeRatesFromInternet');
      fetchExchangeRatesFromInternet();
      return () => {
        fetchAfterInitValueRef.current = false;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRates]);

  // console.log(exchangeRates, weBuyRates, weSellRates);

  return (
    <div className='home-wrapper'>
      <table className='home-table'>
        <thead>
          <tr className='home-table-row'>
            <th align='center' className='home-table-heading'>
              <h2>Currency</h2>
            </th>
            <th align='center' className='home-table-heading'>
              <h2>We Buy</h2>
            </th>
            <th align='center' className='home-table-heading'>
              <h2>Exchange Rate</h2>
            </th>
            <th align='center' className='home-table-heading'>
              <h2>We Sell</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {currencyList.map((currency, index) => (
            <tr key={index} className='home-table-row'>
              <td align='center' className='home-table-display'>
                {currency}
              </td>
              <td align='center' className='home-table-display'>
                <CountUp end={weBuyRates?.[currency]} decimals={4} />
                {/* {weBuyRates?.[currency]} */}
              </td>
              <td align='center' className='home-table-display'>
                <CountUp end={exchangeRates?.[currency]} decimals={4} />
                {/* {exchangeRates?.[currency]} */}
              </td>
              <td align='center' className='home-table-display'>
                <CountUp end={weSellRates?.[currency]} decimals={4} />
                {/* {weSellRates?.[currency]} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>Rates are based from 1 USD.</div>
        <div>
          This application uses API from https://currencyfreaks.com.
        </div>
      </div>
    </div>
  );
};
