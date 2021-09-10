import React from 'react'
import { TaskNote } from '../../components/TaskNote'
import { PageWrapper } from '../../components/PageWrapper'
import { PageTitle } from '../../components/PageTitle'
import { MessageAlert } from './components/MessageAlert'
import { Modal } from './components/Modal'

export const StatePractice = () => {
  return (
    <PageWrapper>
      <section>
        <PageTitle pageTitle='state Practice' />
        <h6>Qué es?</h6>
        <div style={{ marginBottom: '30px' }}>
          <ul>
            <li>Es una propiedad de un Component.</li>
            <li>Sirve para cambiar una prop del Component (luego de que el Component se haya renderizado y ante una acción del usuario generalmente)</li>
          </ul>

          <div style={{ padding: '10px' }}>
            <h6>Más info</h6>
            <p>
              <a target='_blank' href='https://grand-seaplane-52c.notion.site/6-ReactJS-Fundamentals-4259bea8a63f4e9eaf8967178863fb63#62a84ed9cf514df6b037146b385ac914'>
                state - Resumen Notion
              </a>
            </p>

            <p>
              <a target='_blank' href='https://grand-seaplane-52c.notion.site/6-ReactJS-Fundamentals-4259bea8a63f4e9eaf8967178863fb63#044b5cfbd6a3450db4331aafd36570e9'>
                hooks - Resumen Notion
              </a>
            </p>

            <p>
              <a target='_blank' href='https://grand-seaplane-52c.notion.site/6-ReactJS-Fundamentals-4259bea8a63f4e9eaf8967178863fb63#f1f950cbe44e44eb841cf7e76ba66902'>
               useEffect - Resumen Notion
              </a>
            </p>
          </div>
        </div>

        <h6>Ejemplo</h6>
        <MessageAlert  message='Hide the pain Harold!' />
        <TaskNote task='Crear Modal component | Ver file del Design System de MS.' />
      </section>

      <section>
        <Modal message='This is my modal, its ugly, but functional. Sorry about that :(.'/>
      </section>


    </PageWrapper>
  )
}