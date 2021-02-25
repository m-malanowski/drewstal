import React from "react"
import SEO from "../components/SEO"
import {Link} from "gatsby"

const NotFoundPage = () => (
    <>
        <SEO title="🏠️ &nbsp; 404" description="Oferujemy nowoczesne domy drewniane całoroczne lub letniskowe bez pozwolenia"/>
        <div className="error-page">
            <div>
                <h2>404</h2>
                <h6>Przepraszamy, ale strona której szukasz nie istnieje. Naciśnij przycisk poniżej aby wrócić do strony głównej.</h6>
                <Link to="/"> Wróć na główną </Link>
            </div>
        </div>
    </>
)

export default NotFoundPage
