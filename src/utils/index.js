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
  infections,
  allergies,
  blood_type,
}) => {
  return {
    id,
    name: `${surname} ${name} ${patronymic}`,
    age,
    bloodType: blood_type,
    infections,
    alergions: allergies,
    battleRoster: brigade,
    transfusion: needs_blood_transfusion ? 'Треба' : 'Не треба',
  };
};

const transformFeedbackData = ({
  id,
  text,
  name,
  surname,
  patronymic,
}) => ({
  id,
  name: `${surname} ${name} ${patronymic}`,
  helpDate: '2023-04-25',
  feedback: text,
});

export { transformToCardItemData, transformSoldiersData, transformFeedbackData };
