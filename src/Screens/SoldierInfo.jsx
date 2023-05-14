import React, { useState } from 'react';

import Header from '../component/Header';
import { MainInfo } from '../component/InfoList/MainInfo';
import { SecondaryInfo } from '../component/InfoList/SecondaryInfo';
import { Communication } from '../component/InfoList/Communication';

export const SoldierInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [infections, setInfections] = useState('');
  const [allergies, setAllergies] = useState('');
  const [transfusion, setTransfusion] = useState('');
  const [battleRoster, setBattleRoster] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [army, setArmy] = useState('');
  const [armyType, setArmyType] = useState('');

  const [evac, setEvac] = React.useState([]);
  const [sex, setSex] = React.useState([]);
  const [injuries, setInjuries] = React.useState([]);

  const [textField, setTextField] = React.useState('');
  const [feedbackField, setfeedbackField] = React.useState('');

  const [img, setImg] = React.useState('');

  const submitMainInformations = [
    {
      name,
      age,
      bloodType,
      infections,
      allergies,
      transfusion,
      battleRoster,
    },
  ];

  const submitSecInformations = [
    {
      date,
      time,
      army,
      armyType,
      evac,
      sex,
      injuries,
      img,
    },
  ];

  const submitTextField = [
    {
      textField,
    },
  ];

  const submitFeedbackField = [
    {
      feedbackField,
    },
  ];

  const handleSubmit = event => {
    event.preventDefault();
    console.log(submitMainInformations);
  };

  const handleChangeMult = event => {
    const { value } = event.target;
    setInjuries(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeSex = event => {
    event.preventDefault();
    setSex(event.target.value);
  };

  const handleChangeEvac = event => {
    event.preventDefault();
    setEvac(event.target.value);
  };

  const handleChangeTextField = event => {
    event.preventDefault();
    setTextField(event.target.value);
  };

  const handleChangeFeedbackField = event => {
    event.preventDefault();
    setfeedbackField(event.target.value);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} style={{ margin: '25px' }}>
        <MainInfo
          name={name}
          age={age}
          bloodType={bloodType}
          infections={infections}
          allergies={allergies}
          transfusion={transfusion}
          battleRoster={battleRoster}
          setName={setName}
          setAge={setAge}
          setBloodType={setBloodType}
          setInfections={setInfections}
          setAllergies={setAllergies}
          setTransfusion={setTransfusion}
          setBattleRoster={setBattleRoster}
        />

        <SecondaryInfo
          date={date}
          time={time}
          army={army}
          armyType={armyType}
          evac={evac}
          sex={sex}
          injuries={injuries}
          img={img}
          setDate={setDate}
          setImg={setImg}
          setTime={setTime}
          setArmy={setArmy}
          setArmyType={setArmyType}
          handleChangeMult={handleChangeMult}
          handleChangeSex={handleChangeSex}
          handleChangeEvac={handleChangeEvac}
          submitSecInformations={submitSecInformations}
        />

        <Communication
          textField={textField}
          setfeedbackField={setfeedbackField}
          handleChangeTextField={handleChangeTextField}
          handleChangeFeedbackField={handleChangeFeedbackField}
          submitTextField={submitTextField}
          submitFeedbackField={submitFeedbackField}
        />
      </form>
    </>
  );
};
