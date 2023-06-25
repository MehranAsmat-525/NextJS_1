import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = ({ title, desc, img }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.desc}>{desc}</p>
                    <Link href="https://nextjs.org/" target="_blank">
                    <button className={styles.btn}>Read</button>

                    </Link>
                </div>
                <div className={styles.item}>
                    <Image
                        src={img}
                        alt="homeIMG"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
