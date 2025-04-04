import React from 'react'

export default function ContactForm() {
  return (
    <div className="contact-form">
        <h2 style={{fontSize: '25px'}}>КОНТАКТНАЯ ФОРМА</h2>
        <br />
        <div class="form-group">
            <input type="text" placeholder="Имя и Фамилия"/>
            <input type="text" placeholder="Телефон"/>
            <input type="email" placeholder="Электронная почта"/>
        </div>
        
        <br />
        <textarea placeholder="Ваше сообщение"></textarea>
        <br/>
        <button className="btn">Отправить сообщение</button>
    </div>
  )
}
