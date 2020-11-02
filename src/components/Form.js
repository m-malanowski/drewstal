import React from "react"
import FormStyles from "./Form.module.scss"


export default class Form extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",

    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.message}`)
    }
    render() {
        return (
            <div className={FormStyles.contactForm} >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                            required/>
                        <label htmlFor="name">
                            <span>Imię i Nazwisko</span>
                        </label>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                            required />
                        <label htmlFor="email">
                            <span>Email</span>
                        </label>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            autoComplete="off"
                            required />
                        <label htmlFor="phone">
                            <span>Telefon</span>
                        </label>
                    </div>

                    <div className={FormStyles.messageDiv}>
                        <textarea
                            type="text"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
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
}