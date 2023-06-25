"use client"
import Data from "./data"
import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Service = () => {
  const [data, setdata] = useState(Data);
  return (
    <>
      <h1 className={styles.heading}>Our Services</h1>  <hr />
      <div className={styles.grid_services}>
      {
        data.map((CV)=>{
          const { title, desc, img, id } = CV;
          return (
                        <>
                            <div className={styles.box} key={id}>
                                <h2>{title}</h2>
                                <p className={styles.para}>{desc}</p>
                                <Image className={styles.img_services} src={img} alt="img" width={300} height={300} />
                                <Link href="/contact" target="_blank">
                                    <button className={styles.btn}>Join Now</button>
                                </Link>
                            </div>
                        </>
                    );

        })
      }
      </div>
    </>
  )
}

export default Service