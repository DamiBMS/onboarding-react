import React from 'react';

import { TaskNote } from '../../components/TaskNote';
import { PageWrapper } from '../../components/PageWrapper';
import { PageTitle } from '../../components/PageTitle';
import { ListItems } from './components/ListItems';
import { GridCards } from './components/GridCards';
import { dataCards } from './__mocks__/dataCards';

export const MapPractice = () => {

  const dataList = [
    {
      label: 'Label 1',
      value: 123,
    },
    {
      label: 'Label 2',
      value: 123,
    },
    {
      label: 'Label 3',
      value: 123,
    },
    {
      label: 'Label 4',
      value: 123,
    }
  ]
  return (
    <PageWrapper>
      <section>
        <PageTitle pageTitle='map Practice' />
        <h6>Qué es?</h6>
        <div style={{ marginBottom: '30px' }}>
          <ul>
            <li>Es una función para operar con arrays</li>
            <li>Transforma cada elemento de un array en otro elemento</li>
            <li>Evita repetir components, reduce código y facilita el mantenimiento del mismo. </li>
          </ul>
          <p>
            <a target='_blank' href='#'>
              Más Info - Resumen Notion
            </a>
          </p>
        </div>
        <h6>Ejemplo</h6>
        <ListItems items={dataList}/>
        <TaskNote task='Crear grilla de Cards y mapearla en base a la data mockeada proporcionada en el .json file | Ver file del Design System de MS.' />
      </section>

      <section>
        <GridCards props={dataCards} />
      </section>


    </PageWrapper>
  )
}