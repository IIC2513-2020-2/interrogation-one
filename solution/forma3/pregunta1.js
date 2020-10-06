function getTotalDeaths(rawData) {
  /* Write your solution here */
  const { values } = rawData;
  const field = '"Total"';
  return values.filter((death) => death[1] === field);

  /* Another solution would be to build the array based on summing the values of each region */
  /* Consider that with this solution, the sum is one unit less for each day (ex. 12320 instead of 12321) */
  /*const field = '"Total"';
  const transformedDeaths = transformDeathsByRegion(rawData);
  const transformedDeathsByTime = transformedDeaths.reduce((acc, death) => ({
    ...acc,
    [death['time']]: [
      ...(acc[death['time']] || []),
      death,
    ],
  }), {});

  return Object.keys(transformedDeathsByTime).map((time) => {
    const sum = transformedDeathsByTime[time].reduce((acc, regionData) => {
      if (regionData['Region'] === field) return acc;
      return acc + regionData['Muertos'];
    }, 0);
    return [
      time,
      field,
      sum,
    ];
  });*/
}

function transformDeathsByRegion(rawData) {
  /* Write your solution here */
  return rawData.values.map((death) => death
    .reduce((acc, attr, index) => ({
      ...acc,
      [rawData.columns[index]]: attr,
    }), {})
  );
}

function getRegionWithMostDeaths(rawData) {
  /* Write your solution here */
  const transformedDeaths = transformDeathsByRegion(rawData);
  let [maxDeaths] = transformedDeaths;
  transformedDeaths.forEach((death) => {
    if (death['Region'] !== '"Total"' && death['Muertos'] > maxDeaths['Muertos']) {
      maxDeaths = death;
    }
  });
  return maxDeaths;
}

function getStaticticsByRegion(rawData) {
  /* Write your solution here */
  const transformedDeaths = transformDeathsByRegion(rawData);
  const transformedDeathsByRegion = transformedDeaths.reduce((acc, death) => ({
    ...acc,
    [death['Region']]: [
      ...(acc[death['Region']] || []),
      death,
    ],
  }), {});

  let statisticsObj = {};
  Object.keys(transformedDeathsByRegion).forEach((key) => {
    let maxDeaths = transformedDeathsByRegion[key][0]['Muertos'];
    transformedDeathsByRegion[key].forEach((death) => {
      if (death['Muertos'] > maxDeaths) {
        maxDeaths = death['Muertos'];
      }
    });
    const worrying = maxDeaths > 500;
    statisticsObj[key] = { maxDeaths, worrying };
  });

  return statisticsObj;
}

module.exports = {
  getTotalDeaths,
  transformDeathsByRegion,
  getRegionWithMostDeaths,
  getStaticticsByRegion,
};
