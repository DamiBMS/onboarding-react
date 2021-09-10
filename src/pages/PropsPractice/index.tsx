import React from 'react'
import { Heading } from './components/Heading'
import { TaskNote } from '../../components/TaskNote'
import { PageWrapper } from '../../components/PageWrapper'
import { PageTitle } from '../../components/PageTitle'
import { Avatar } from '../../components/Avatar'

export const PropsPractice = () => {
  return (
    <PageWrapper>
      <section>
        <PageTitle pageTitle='props Practice' />
        <h6>Qué es?</h6>
        <div style={{ marginBottom: '30px' }}>
          <ul>
            <li>Son propiedades de un Component.</li>
            <li>Sirven para:</li>
              <ul>
                <li>Pasarle data al Component (popularlo con data)</li>
                <li>Pasar data entre Components ⇒ El flujo de data entre components siempre es unidireccional, de padre a hijos.</li>
              </ul>
          </ul>
          <p>
            <a target='_blank' href='https://grand-seaplane-52c.notion.site/6-ReactJS-Fundamentals-4259bea8a63f4e9eaf8967178863fb63#20edda699e2e480198d2518fe5692170'>
              Más Info - Resumen Notion
            </a>
          </p>
        </div>

        <h6>Ejemplo</h6>
        <Heading title='Heading Title' numberRows={34} />
        <TaskNote task='Crear Avatar component | props para nombre e imagen | Ver file del Design System de MS.' />
      </section>

      <section>
        <Avatar name='Damian Borgognoni' img="https://pixelz.cc/wp-content/uploads/2018/07/hide-the-pain-harold-meme-uhd-4k-wallpaper.jpg" />
      </section>


    </PageWrapper>
  )
}