"use client"
import styles from "./page.module.css";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Lets Keep in Touch</h1>
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <iframe  className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850625.5669853418!2d71.90318524389404!3d33.61163171613126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687422459702!5m2!1sen!2s"
                            width="550"
                            height="300"
                            style={{ border: "0" }} // Fix: Use double curly braces for style object
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form className={styles.form}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                        />
                        <textarea
                            className={styles.textArea}
                            placeholder="Message"
                            cols="20"
                            rows="6"
                        ></textarea>
                        <button className={styles.btn} onClick={()=>{
                          alert("Wait for submission")
                        }} >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
