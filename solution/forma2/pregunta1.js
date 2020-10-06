function getOldestPcrs(rawData) {
  /* Write your solution here */
  const { values } = rawData;
  const oldestDay = values[values.length - 1][0];
  return values.filter((pcr) => pcr[0] === oldestDay);
}

function transformPcrsByRegion(rawData) {
  /* Write your solution here */
  return rawData.values.map((pcr) => pcr
    .reduce((acc, attr, index) => {
      if (index === 1) return acc;
      return {
        ...acc,
        [rawData.columns[index]]: attr,
      }
    }, {})
  );
}

function getRegionWithLeastPcrs(rawData) {
  /* Write your solution here */
  const transformedPcrs = transformPcrsByRegion(rawData);
  let [minPcr] = transformedPcrs;
  transformedPcrs.forEach((pcr) => {
    if (pcr['Total'] < minPcr['Total']) {
      minPcr = pcr;
    }
  });
  return minPcr;
}

function getStaticticsByRegion(rawData) {
  /* Write your solution here */
  const transformedPcrs = transformPcrsByRegion(rawData);
  const transformedPcrsByRegion = transformedPcrs.reduce((acc, pcr) => ({
    ...acc,
    [pcr['Region']]: [
      ...(acc[pcr['Region']] || []),
      pcr,
    ],
  }), {});

  let statisticsObj = {};
  Object.keys(transformedPcrsByRegion).forEach((key) => {
    const sum = transformedPcrsByRegion[key].reduce((acc, item) => acc + item['Total'], 0);
    const avgQuantity = sum / transformedPcrsByRegion[key].length;
    let minQuantity = transformedPcrsByRegion[key][0]['Total'];
    transformedPcrsByRegion[key].forEach((pcr) => {
      if (pcr['Total'] < minQuantity) {
        minQuantity = pcr['Total'];
      }
    });
    statisticsObj[key] = { avgQuantity, minQuantity };
  });

  return statisticsObj;
}

module.exports = {
  getOldestPcrs,
  transformPcrsByRegion,
  getRegionWithLeastPcrs,
  getStaticticsByRegion,
};
