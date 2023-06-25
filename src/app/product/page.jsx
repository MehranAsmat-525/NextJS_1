"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        call();
    }, []);

    const call = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
            setFilteredCategory(data.products);
            setFilteredProducts(data.products);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    const filterElement = (category) => {
        const updatedList = category === "All"
            ? filteredCategory
            : filteredCategory.filter((product) => {
                return product.category === category;
            });
        setFilteredProducts(updatedList);
    };

    const filterCategoryList = [
        ...new Set(
            filteredCategory.map((product) => {
                return product.category;
            })
        ),
        "All",
    ];

    return (
        <>
            <div className={styles.navbar_product}>
                {filterCategoryList.map((category) => (
                    <button
                        onClick={() => filterElement(category)}
                        key={category}
                        className={styles.navbar_product_btn}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.container_movies}>
                {filteredProducts.map((product) => {
                    const {
                        id,
                        title,
                        thumbnail,
                        price,
                        rating,
                        discountPercentage,
                        brand,
                        stock,
                        description,
                    } = product;
                    return (
                        <div className={styles.box_movies} key={id}>
                            <h3 className={styles.title}>{title}</h3>
                            <Image
                                src={thumbnail}
                                width={300}
                                height={300}
                                alt="img"
                                className={styles.srcIMG}
                            />
                            <p>{description.slice(0, 19)}...</p>
                            <span className={styles.price}>
                                Price: {price}$
                            </span>
                            <span>Rating: {rating}</span>
                            <p>
                                For early users discounts:{" "}
                                <span className={styles.discount}>
                                    {discountPercentage}%
                                </span>
                            </p>
                            <span>Brand: {brand}</span>
                            <p className={styles.para_movies}>
                                Current stock: {stock}
                            </p>
                            <Link href="/contact">
                                <button className={styles.btn}>Buy Now</button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Product;
