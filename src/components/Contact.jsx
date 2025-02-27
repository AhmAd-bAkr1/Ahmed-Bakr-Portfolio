import React, { useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0q0ip7x",
        "template_03xbhx4",
        {
          from_name: form.name,
          to_name: "Ahmed Bakr",
          from_email: form.email,
          to_email: "ahmd.m.bakr@gmail.com",
          reply_to: form.email,
          message: form.message,
        },
        "RjGiatVshyYA-Wi2r"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <div className="contact-info">
          <h1 className="bg-tertiary py-4 px-6 text-white font-medium">
            Name: <span className="font-semibold">Ahmad Mahmoud Bakr</span>
          </h1>
          <h1 className="bg-tertiary py-4 px-6 text-white font-medium">
            Phone Number || Whatsapp: <span className="font-semibold">(+20)1090358191</span>
          </h1>
          <h1 className="bg-tertiary py-4 px-6 text-white font-medium">
            Email: <span className="font-semibold">ahmd.m.bakr@gmail.com</span>
          </h1>
          <h1 className="bg-tertiary py-4 px-6 text-white font-medium">
            Linkedin: <a className="font-semibold text-blue-400" href="https://www.linkedin.com/in/ahmed-bakr-929297232/" target="_blank" rel="noopener noreferrer">Ahmed Bakr</a>
          </h1>
          <h1 className="bg-tertiary py-4 px-6 text-white font-medium">
            Github: <a className="font-semibold text-blue-400" href="https://github.com/AhmAd-bAkr1">AhmAd-bAkr1</a>
          </h1>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
