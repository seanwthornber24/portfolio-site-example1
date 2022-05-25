import "./about.css";

export default function AboutSection() {
    return(
        <section id="about-section">

            <div id="left-div">

                <div id="text-div">
                    <h1>Hey, I'm Sean.</h1>
                    <h2>I'm passionate about creating web apps</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus ultrices libero vel volutpat. Donec vitae venenatis ante. Pellentesque neque nisl, posuere at pulvinar id, ornare nec nulla. Sed venenatis, lectus ac porttitor consequat, erat nisi molestie magna, sed sagittis felis lectus id turpis. Quisque euismod felis odio, et convallis tortor tempor non.
                    </p>
                </div>

            </div>

            <div id="right-div">
                <img src={require("./working.png")}></img>
            </div>

        </section>
    );
}