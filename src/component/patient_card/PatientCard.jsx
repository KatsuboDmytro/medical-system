import React from 'react';

import './PatientCard.css';
import imgFront from './img/image 7.png';
import imgBack from './img/image 8.png';

const PatientCard = () => {
  return (
    <div className='patient-card-wrapper'>
      <div className='patient-card-header'>
        <p className='patient-card-header-text'>Картка Бойової допомоги військовому (КБДВ)</p>
      </div>
      <div className='patient-card'>
        <div className='patient-card-brigade'>
          <div className='block-flex'>
            <h1>Бригада#:</h1>
            <input type="text"/>
          </div>
          <div className='block-flex'>
            <h1>Evac:</h1>
            <input type='checkbox'/>
            <p>Терміново</p>
            <input type='checkbox'/>
            <p>Пріоритетно</p>
            <input type='checkbox'/>
            <p>Звичайно</p>
          </div>
        </div>
        <div className='patient-card-initials'>
          <div className='block-flex'>
            <h1>ПІБ:</h1>
            <input type="text"/>
            <h1>Last4:</h1>
            <input type="text"/>
          </div>
          <div className='block-flex'>
            <h2>Стать:</h2>
            <input type='checkbox'/>
            <p className='patient-initials-text'>Ч</p>
            <input type='checkbox'/>
            <p className='patient-initials-text'>Ж</p>
            <h2 className='patient-initials-text w-100'>Дата <span>(DD-MMMM-YY)</span>:</h2>
            <input type="text"/>
            <h2 className='patient-initials-text'>Час:</h2>
            <input type="text"/>
          </div>
          <div className='block-flex'>
            <h2>Війська:</h2>
            <input type="text"/>
            <h2>Тип:</h2>
            <input type="text"/>
            <h2>Алергії:</h2>
            <input type="text"/>
          </div>
        </div>
        <div className='patient-card-injury'>
          <div className='block-flex'>
            <h2>Тип травми:</h2>
            <input type="text"/>
          </div>
          <div className='block-flex'>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>Артилерія</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>ТП</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>Опіки</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>Перелам</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>Уламки</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>IED</p>
          </div>
          <div className='block-flex'>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>Міна</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>ДТП</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>RPG</p>
            <input type="checkbox"/>
            <p className='patient-card-injury-text'>GSW</p>
            <p>Інші:</p>
            <input type="text"/>
          </div>
        </div>

        <div className='patient-card-therapy'>
          <div className='block-flex '>
            <h1>Травми:</h1>
            <input type="text"/>
          </div>

          <div className='display-flex'>

            <div className='display-flex'>
              <div className='wrapper'>
                <div className='block-flex patient-block '>
                  <h3>TQ: R Arm</h3>
                  <div className='display-flex'>
                    <p>Тип:</p>
                    <input type='text'/>
                  </div>
                  <div className='display-flex'>
                    <p>Час:</p>
                    <input type='text'/>
                  </div>
                </div>

                <div className='block-flex patient-block '>
                  <h3>TQ: R Leg</h3>
                  <div className='display-flex'>
                    <p>Тип:</p>
                    <input type='text'/>
                  </div>
                  <div className='display-flex'>
                    <p>Час:</p>
                    <input type='text'/>
                  </div>
                </div>
              </div>

              <img src={imgFront} alt=""/>

            </div>

            <div className='display-flex'>
              <div className='wrapper'>
                <div className='block-flex patient-block '>
                  <h3>TQ: L Arm</h3>
                  <div className='display-flex'>
                    <p>Тип:</p>
                    <input type='text'/>
                  </div>
                  <div className='display-flex'>
                    <p>Час:</p>
                    <input type='text'/>
                  </div>
                </div>

                <div className='block-flex patient-block '>
                  <h3>TQ: L ALeg</h3>
                  <div className='display-flex'>
                    <p>Тип:</p>
                    <input type='text'/>
                  </div>
                  <div className='display-flex'>
                    <p>Час:</p>
                    <input type='text'/>
                  </div>
                </div>
              </div>
              <img src={imgBack} alt="imgBack"/>
            </div>
          </div>

        </div>

        <div className='patient-signSympthoms'>
          <table>
            <tbody>
              <tr>
                <td className='empty-td'>Час</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='colored'>
                <td>Пульс (час. та місце)</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='colored'>
                <td>Кров’яний тиск</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Частота дихання</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Пульс Ox % O2 Sat</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='colored'>
                <td>AVPU</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='colored'>
                <td>Шкала болю (0-10)</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PatientCard;
