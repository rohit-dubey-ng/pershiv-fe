import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    category: "",
  });

  const bookService = (values) => {
    console.log(values);
    const { name, email, contact, category } = values;

    const message = encodeURIComponent(
      `Hello,\nI want to book a appointment.\nName: ${name}\n Email: ${email}\n Phone: ${contact}\n Make & Model: ${category}.`
    );

    const whatsappURL = `https://wa.me/${9377780098}?text=${message}`;

    // Open in a new tab
    window.open(whatsappURL, "_blank");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    bookService(formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls align-items-center justify-content-center w-100">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Your name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="contact"
              placeholder="Mobile no*"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="contact-direction">
          <p>Call & Direction</p>
          <div className="call-address">
             <div className="call">
            <a href="+919377780098" className="phone"><i class="fa-solid fa-phone"></i></a> 
            <a href="#"> +919377780098 </a>
            </div>

            <div className="address">
           <a href="#" className="location"><i class="fa-solid fa-location-dot" ></i></a>
           <a href="#"> Pershiv Alu Systems - 22-23, first floor, Mangaldas Shopping Centre, Navjivan Circle U.M Road, Surat - 395017.
           </a>
           </div>
          </div>
        </div>

        <div className="container mt-5 category_wrp">
          <p>Select Your Category:</p>
          <div className="radio_data">
            <div className="form-check radio_details">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="b2b"
                value="B2B"
                onChange={handleChange}
              />
              <label className="form-check-label" for="b2b">
                {" "}
                B2B{" "}
              </label>
            </div>{" "}
            <div className="form-check radio_details">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="b2c"
                value="B2C"
                onChange={handleChange}
              />
              <label className="form-check-label" for="b2c">
                {" "}
                B2C{" "}
              </label>
            </div>{" "}
            <div className="form-check radio_details">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="interiorDesigner"
                value="Interior Designer"
                onChange={handleChange}
              />
              <label className="form-check-label" for="interiorDesigner">
                {" "}
                Interior Designer{" "}
              </label>
            </div>
            <div className="form-check radio_details">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="architect"
                value="Architect"
                onChange={handleChange}
              />
              <label className="form-check-label" for="architect">
                {" "}
                Architect{" "}
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
            >
              SEND MESSAGE
            </button>
          </div>
          {/* End .col-12 */}
        </div>
      </div>
      {/* End .row */}

      <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before?</span>{" "}
        <a href="#" className="tx-dark fw-500">
          Check your query
        </a>
      </div>

      <div className="social_icon">
        <div className="container mt-5">
          {" "}
          <div className="d-flex justify-content-center">
            {" "}
            <a
              href="https://www.facebook.com"
              className="btn btn-primary me-2"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>{" "}
            <a
              href="https://www.twitter.com"
              className="btn btn-info me-2"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>{" "}
            <a
              href="https://www.instagram.com"
              className="btn btn-danger me-2"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>{" "}
            <a
              href="https://www.linkedin.com"
              className="btn btn-primary"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>{" "}
          </div>{" "}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
