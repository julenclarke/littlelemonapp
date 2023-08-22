import { Button } from '@chakra-ui/react'

function Specials() {
    return (
        <section className="specials">
            <h1 id="specials-section">This week's specials!</h1>
            <div className="specials-button">
                <Button className='button' size='lg'>
                    Online Menu
                </Button>
            </div>
            <div className="special1">
                <img width={300} src={require("../assets/greek salad.jpg")} alt="Greek Salad" />
                <div className='name'>
                    <h3>Greek Salad</h3>
                    <p id="price">12.99€</p>
                </div>
                <p id="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
            </div>
            <div className="special2">
                <img width={300} src={require("../assets/bruschetta.png")} alt="Bruschetta" />
                <div className='name'>
                    <h3>Bruschetta</h3>
                    <p id="price">5.99€</p>
                </div>
                <p id="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
            </div>
            <div className="special3">
                <img width={300} src={require("../assets/lemon dessert.jpg")} alt="Lemon Dessert" />
                <div className='name'>
                    <h3>Lemon Dessert</h3>
                    <p id="price">5.00€</p>
                </div>
                <p id="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className="order"><a href='http://localhost:3000/'>Order a delivery  🛵</a></div>
            </div>
        </section>
    );
}

export default Specials;