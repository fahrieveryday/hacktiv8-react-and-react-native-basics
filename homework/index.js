const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const isAllItemsString = (shouldBeArray) =>
  shouldBeArray.every((item) => typeof item === 'string');

const makeAllCaps = (arrayParams) =>
  new Promise((resolve, reject) => {
    // params should be array
    if (!Array.isArray(arrayParams)) return reject('parameter harus array!');
    // each item should be string
    if (!isAllItemsString(arrayParams))
      return reject('setiap item harus string!');

    // make all item uppercase
    return resolve(arrayParams.map((item) => item?.toUpperCase()));
  });

const sortWords = (arrayParams) =>
  new Promise((resolve, reject) => {
    // params should be array
    if (!Array.isArray(arrayParams)) return reject('parameter harus array!');
    // each item should be string
    if (!isAllItemsString(arrayParams))
      return reject('setiap item harus string!');

    // sort all item
    return resolve(arrayParams.sort());
  });

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
