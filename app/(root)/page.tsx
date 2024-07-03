import HeaderBox from '@/components/HeaderBox'
import React from 'react'

function Home() {
  const loggedIn = {firstName: 'Miguel'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Bem vindo ao Thermo'
            user={loggedIn?.firstName || 'Convidado'}
            subtext='Acompanhe e monitore em tempo real a curagem do concreto de suas obras'
          />
        </header>
      </div>
    </section>
  )
}

export default Home