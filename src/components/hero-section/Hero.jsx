import "./hero.css";
import Typewriter from "typewriter-effect";
const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <h1 className="display-1 mb-4">مرحبا بك فى ديجتوبيا</h1>
                <Typewriter
                    className="typed-text"
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("نحن متخصصون فى")
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString("المواقع الإلكترونيه وتطبيقات الموبايل")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    );
};
export default Hero;
