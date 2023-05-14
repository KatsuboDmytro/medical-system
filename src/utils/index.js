const transformToCardItemData = (titles, data, dataOrder) =>
  dataOrder.map((prop, index) => ({
    title: titles[index],
    value: data[prop],
  }));

const transformSoldiersData = ({
  id,
  age,
  brigade,
  name,
  surname,
  patronymic,
  needs_blood_transfusion,
}) => {
  return {
    id,
    name: `${surname} ${name} ${patronymic}`,
    age,
    // bloodType,
    // infections,
    // alergions,
    // battleRoster,
  }
};

export { transformToCardItemData };
