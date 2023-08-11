function Main() {
    return (
        <main>
            <section>
                <h1>Little Lemon</h1>
                <h2>Donostia</h2>
                <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.

Have a taste of the best Donostiarra pintxos in town.</p>
                <a><div>Reserve a table</div></a>
                <img src={require("../assets/restaurantfood.jpeg")} alt="Restaurant food photo" />
            </section>
            <section>
                <h1>This week's specials!</h1>
                <a><div>Online Menu</div></a>
                <div>
                    <img src={require("../assets/greek salad.jpg")} alt="Greek Salad" />
                    <h3>Greek Salad</h3>
                    <p>12.99€</p>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <a>Order a delivery  🛵</a>
                </div>
                <div>
                    <img src={require("../assets/bruschetta.png")} alt="Bruschetta" />
                    <h3>Bruschetta</h3>
                    <p>5.99€</p>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <a>Order a delivery  🛵</a>
                </div>
                <div>
                    <img src={require("../assets/lemon dessert.jpg")} alt="Lemon Dessert" />
                    <h3>Lemon Dessert</h3>
                    <p>5.00€</p>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a>Order a delivery  🛵</a>
                </div>
            </section>
            <section>
                <h1>Testimonials</h1>
                <div>
                    <img alt="5 stars" />
                    <img alt="Amanda" />
                    <h3>Amanda</h3>
                    <p>Delicious food!</p>
                </div>
                <div>
                    <img alt="5 stars" />
                    <img alt="Amanda" />
                    <h3>Amanda</h3>
                    <p>Delicious food!</p>
                </div>
                <div>
                    <img alt="5 stars" />
                    <img alt="Amanda" />
                    <h3>Amanda</h3>
                    <p>Delicious food!</p>
                </div>
                <div>
                    <img alt="5 stars" />
                    <img alt="Amanda" />
                    <h3>Amanda</h3>
                    <p>Delicious food!</p>
                </div>
            </section>
            <section>
                <h1>Little Lemon</h1>
                <h2>Donostia</h2>
                <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.

                Have a taste of the best Donostiarra pintxos in town cooked by Mario and Adrian, best chefs in town!</p>
                <img src={require("../assets/Mario and Adrian A.jpg")} alt="Mario and Adrian" />
                <img src={require("../assets/Mario and Adrian b.jpg")} alt="Mario and Adrian" />
            </section>
        </main>
    );
}

export default Main;