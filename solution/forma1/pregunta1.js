function getMostRecentCases(rawData) {
  /* Write your solution here */
  const mostRecentDay = rawData.values[0][0];
  return rawData.values.filter((singleCase) => singleCase[0] === mostRecentDay);
}

function transformCasesByRegion(rawData) {
  /* Write your solution here */
  return rawData.values.map((singleCase) => singleCase
    .reduce((acc, attr, index) => ({
      ...acc,
      [rawData.columns[index]]: attr,
    }), {})
  );
  
}

function getRegionWithMostCases(rawData) {
  /* Write your solution here */
  const transformedCases = transformCasesByRegion(rawData);
  let [maxCase] = transformedCases;
  transformedCases.forEach((singleCase) => {
    if (singleCase['Region'] !== '"Total"' && singleCase['Casos_acumulados'] > maxCase['Casos_acumulados']) {
      maxCase = singleCase;
    }
  });
  return maxCase;
}

function getStaticticsByRegion(rawData) {
  /* Write your solution here */
  const transformedCases = transformCasesByRegion(rawData);
  const transformedCasesByRegion = transformedCases.reduce((acc, singleCase) => ({
    ...acc,
    [singleCase['Region']]: [
      ...(acc[singleCase['Region']] || []),
      singleCase,
    ],
  }), {});

  let statisticsObj = {};
  Object.keys(transformedCasesByRegion).forEach((key) => {
    const sum = transformedCasesByRegion[key].reduce((acc, item) => acc + item['Casos_acumulados'], 0);
    const avgCases = sum / transformedCasesByRegion[key].length;
    let maxCases = transformedCasesByRegion[key][0]['Casos_acumulados'];
    transformedCasesByRegion[key].forEach((singleCase) => {
      if (singleCase['Casos_acumulados'] > maxCases) {
        maxCases = singleCase['Casos_acumulados'];
      }
    });
    statisticsObj[key] = { avgCases, maxCases };
  });

  return statisticsObj;
}

module.exports = {
  getMostRecentCases,
  transformCasesByRegion,
  getRegionWithMostCases,
  getStaticticsByRegion
};
