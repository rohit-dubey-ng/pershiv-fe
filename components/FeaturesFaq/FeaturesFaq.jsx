import Link from "next/link";

const FeaturesFaq = () => {
  const faqData = [
    {
      question: "What are the advantages of aluminium windows over traditional wooden windows? ",
      answer:
        "Aluminium windows are more durable, low maintenance, and resistant to termites, warping, and moisture damage. They also offer a sleek, modern look with slim frames and larger glass areas, making them a preferred choice for contemporary homes.",
    },
    {
      question: " How do aluminium windows perform in India's diverse climate conditions? ",
      answer:
        "Aluminium windows are built to withstand extreme weather conditions, from scorching summers to heavy monsoons. They are rust-resistant, moisture-proof, and can be thermally insulated to maintain indoor comfort in all seasons. ",
    },
    {
      question: "Are aluminium windows cost-effective compared to other materials?",
      answer:
        "While the upfront cost of aluminium windows may be higher than some alternatives, they offer long-term savings by requiring minimal maintenance and lasting for decades without deterioration.",
    },
    {
      question: "Can aluminium windows be customized to match traditional Indian architectural styles?",
      answer:
        "Yes, aluminium windows come in various colors, finishes, and designs, including wood-like textures that blend seamlessly with traditional Indian homes. They can also be customized in shape and size to complement any architectural style. ",
    },
    {
      question: "How do aluminium windows contribute to energy efficiency in Indian homes? ",
      answer:
        "Aluminium windows with thermal break technology and double-glazing help maintain indoor temperatures, reducing the need for excessive air conditioning or heating, leading to lower energy bills.",
    },
    {
      question: "What security features are available with aluminium windows? ",
      answer:
        "Aluminium windows offer enhanced security with multi-point locking systems, toughened glass, and strong, reinforced frames, making them a reliable option for home safety.",
    },

    {
      question: "How do aluminium windows handle noise pollution in urban Indian settings? ",
      answer:
        "Double-glazed aluminium windows with airtight seals significantly reduce outside noise, creating a quieter and more peaceful indoor environment, especially in busy city areas.",
    },

    {
      question: " Are there any environmental concerns associated with aluminium windows?",
      answer:
        "Aluminium is a sustainable and eco-friendly material as it is 100% recyclable. Choosing aluminium windows helps reduce environmental impact while ensuring durability and efficiency.",
    },

    
  ];
  return (
    <div className="faqSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="faqTitle">
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className="accordion accordion-style-two" id="accordionOne">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <div className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionOne"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFaq;
