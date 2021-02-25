import React from "react"
import FormStyles from "./Form.module.scss"


const Form = () => {
    return (
        <div className={FormStyles.contactForm} >
            <form name="contact" action="https://formspree.io/f/xrgowgrw"  method="post"  data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-contact" value="contact" />
                <div>
                    <input
                        type="text"
                        name="imię"
                        autoComplete="off"
                        required/>
                    <label htmlFor="name">
                        <span>Imię i Nazwisko</span>
                    </label>
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        required />
                    <label htmlFor="email">
                        <span>Email</span>
                    </label>
                </div>

                <div>
                    <input
                        type="text"
                        name="telefon"
                        autoComplete="off"
                        required />
                    <label htmlFor="phone">
                        <span>Telefon</span>
                    </label>
                </div>

                <div className={FormStyles.messageDiv}>
                        <textarea
                            type="text"
                            name="wiadomość"
                            autoComplete="off"
                            required
                            rows="10" />
                    <label htmlFor="message">
                        <span>Wiadomość</span>
                    </label>
                </div>

                <p className={FormStyles.agreements}>
                    Używając tego formularza zgadzam się na przetwarzanie przekazywanych danych w celu przygotowania i prezentacji oferty oraz akceptuję politykę prywatności.
                </p>

                <button type="submit">Wyślij zapytanie</button>

            </form>

        </div>
    )
}
export default Form