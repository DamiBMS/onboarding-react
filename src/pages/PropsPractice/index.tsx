import React from 'react'
import { Heading } from './components/Heading'
import { TaskNote } from '../../components/TaskNote'
import { PageWrapper } from '../../components/PageWrapper'
import { PageTitle } from '../../components/PageTitle'

export const PropsPractice = () => {
  return (
    <PageWrapper>
      <section>
        <PageTitle pageTitle='props Practice' />
        <h6>Qué es?</h6>
        <div style={{ marginBottom: '30px' }}>- Son propiedades de un Component.
          - Sirven para:
          - Pasarle data al Component (popularlo con data)
          - Pasar data entre Components ⇒ El flujo de data entre components siempre es unidireccional, de padre a hijos.</div>

        <h6>Ejemplo</h6>
        <Heading title='Heading Title' numberRows={34} />
        <TaskNote task='Crear Avatar component | props para nombre e imagen | Ver file del Design System de MS.' />
      </section>

      <section>
        {/*// Resolver el ejercicio acá!*/}
      </section>


    </PageWrapper>
  )
}