import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 2,
        title: "Services",
        url: "/service",
    },
    {
        id: 3,
        title: "Products",
        url: "/product",
    },

    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
];

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/logo.jpg"
                            alt="logo"
                            width={90}
                            height={90}
                            className={styles.img}
                        />
                    </Link>
                </div>
                <div className={styles.links}>
                    {links.map((link) => {
                        return (
                            <>
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className={styles.link}
                                >
                                    {link.title}
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
            <hr />
        </>
    );
};

export default Header;
