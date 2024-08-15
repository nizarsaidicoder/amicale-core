import "./sass/index.scss";
import NavigationBar from "./components/NavigationBar";
import Image from "next/image";
import Button from "./components/Button";
export default function Home() {
    return (
        <>
            <NavigationBar />
            <main>
                <div className="hero-section">
                    <Image
                        className="hero-section__background"
                        src="/images/back-sphere.svg"
                        alt="background"
                        fill
                    />
                    <div className="hero-section__text">
                        <div className="heading-primary">Amicale Core</div>
                        <p className="text-1">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don&apos;t look.
                        </p>
                    </div>
                    <div className="hero-section__buttons">
                        <Button type="primary">Nos Services</Button>
                        <Button type="secondary">Actualités</Button>
                    </div>
                </div>
                <div className="back"></div>
            </main>
        </>
    );
}
