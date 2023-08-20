import { Button } from '@chakra-ui/react'

function CallToAction() {
    return (
        <section className="call-to-action">
            <div className="text">
                <h1>Little Lemon</h1>
                <h2>Donostia</h2>
                <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.<br/><br/>Have a taste of the best Donostiarra pintxos in town.</p>
                <div>
                    <Button className='button' size='lg'>
                        Reserve a table
                    </Button>
                </div>
            </div>
            <div className="food">
                <img width={300} src={require("../assets/restaurantfood.jpg")} alt="Restaurant food" />
            </div>
        </section>
    );
}

export default CallToAction;