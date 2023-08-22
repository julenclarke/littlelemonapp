import { Button } from '@chakra-ui/react'
import React, {useEffect, useRef } from "react";

function CallToAction() {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currScrollPos = window.scrollY;
            const currHeaderElement = headerRef.current;

            if (!currHeaderElement)
                return;

            if (prevScrollPos > currScrollPos)
                currHeaderElement.style.transform = 'translateY(0)';
            else
                currHeaderElement.style.transform = 'translateY(-200px)';

            prevScrollPos = currScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="call-to-action">
            <div className="text">
                <h1 id="call-to-action-section">Little Lemon</h1>
                <h2>Donostia</h2>
                <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.<br/><br/>Have a taste of the best Donostiarra pintxos in town.</p>
                <div>
                    <Button className='button' size='lg' onClick={handleClick('booking')}>
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