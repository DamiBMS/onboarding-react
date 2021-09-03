import React from 'react'
import { TaskNote } from '../../components/TaskNote'
import { PageWrapper } from '../../components/PageWrapper'
import { PageTitle } from '../../components/PageTitle'
import { MessageAlert } from './components/MessageAlert'

export const StatePractice = () => {
  return (
    <PageWrapper>
      <section>
        <PageTitle pageTitle='state Practice' />
        <h6>Qué es?</h6>
        <div style={{ marginBottom: '30px' }}>- Es una propiedad de un Component.
          - Sirve para cambiar una prop del Component (luego de que el Component se haya renderizado y ante una acción del usuario generalmente)</div>

        <h6>Ejemplo</h6>
        <MessageAlert  message='Hide the pain Harold!' />
        <TaskNote task='Crear Modal component | Ver file del Design System de MS.' />
      </section>

      <section>
        {/*// Resolver el ejercicio acá!*/}
      </section>


    </PageWrapper>
  )
}