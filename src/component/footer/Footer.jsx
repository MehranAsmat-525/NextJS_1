import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div>@2023 Mehran Asmat.All rights Reserved</div>
                <div className={styles.social}>
                    <Link href="https://www.facebook.com/" target="_blank">
                        <Image
                            src="/1.png"
                            width={25}
                            height={25}
                            className={styles.icon}
                            alt="Lama Dev Facebook Account"
                        />
                    </Link>

                    <Image
                        src="/2.png"
                        width={25}
                        height={25}
                        className={styles.icon}
                        alt="Lama Dev"
                    />
                    <Image
                        src="/3.png"
                        width={25}
                        height={25}
                        className={styles.icon}
                        alt="Lama Dev"
                    />
                    <Image
                        src="/4.png"
                        width={25}
                        height={25}
                        className={styles.icon}
                        alt="Lama Dev"
                    />
                </div>
            </div>
        </>
    );
};

export default Footer;
