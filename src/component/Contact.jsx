import React from "react";
import "aos/dist/aos.css";
import "../style/Contact.css";

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container" data-aos="fade-up">

                <h2>Contact</h2>
                <p>
                    Jika kamu ingin bekerja sama, punya project, atau hanya sekedar bertanya,
                    kamu bisa hubungi saya melalui form di bawah.
                </p>

                <form
                    action="https://formspree.io/f/your-endpoint"
                    method="POST"
                    className="contact-form"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Kamu"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Kamu"
                        required
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Pesan Kamu..."
                        required
                    />

                    <button type="submit">
                        Kirim Pesan
                    </button>
                </form>

                <div className="social-links">
                    <a href="https://instagram.com/" target="_blank">Instagram</a>
                    <a href="https://wa.me/" target="_blank">WhatsApp</a>
                    <a href="mailto:email@gmail.com">Email</a>
                </div>
            </div>
        </section>
    );
}
