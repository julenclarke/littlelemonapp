function Donostia() {
    return (
        <section className="donostia">
            <div className="text">
                <h1>Little Lemon</h1>
                <h2>Donostia</h2>
                <p>We are a family owned Basque restaurant, focused on traditional recipes served with a modern twist.<br/><br/>Have a taste of the best Donostiarra pintxos in town cooked by Mario and Adrian, best chefs in town!</p>
            </div>
            <div className="chefs">
                <img id="top" width={300} src={require("../assets/Mario and Adrian A.jpg")} alt="Mario and Adrian" />
                <img id="bottom" width={300} src={require("../assets/Mario and Adrian b.jpg")} alt="Mario and Adrian" />
            </div>
        </section>
    );
}

export default Donostia;


