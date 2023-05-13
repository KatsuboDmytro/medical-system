const transformToCardItemData = (titles, data, dataOrder) =>
  dataOrder.map((prop, index) => ({
    title: titles[index],
    value: data[prop],
  }));

export { transformToCardItemData };
