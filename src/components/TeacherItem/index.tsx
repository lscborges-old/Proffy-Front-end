import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://pbs.twimg.com/profile_images/532661239529230336/7g5Oglgi_400x400.jpeg" 
      alt="Fernando Naruto"/>
      <div>
        <strong>Fernando Naruto</strong>
        <span>Sedução</span>
      </div>
    </header>
    
    <p>
      Entusiasta em técnicas de sedução avançadas
      <br/><br/>
      Apaixonado por seduzir e ser seduzido
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>

  </article>
  )
}

export default TeacherItem