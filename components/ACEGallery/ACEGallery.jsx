import Slider from "react-slick/lib/slider";




const testimonials = [
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "John Doe",
    position: "CEO, Company A"
  },
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "Jane Smith",
    position: "Marketing Head, Company B"
  },
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "David Brown",
    position: "CTO, Company C"
  },
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "David Brown",
    position: "CTO, Company C"
  },
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "David Brown",
    position: "CTO, Company C"
  },
  {
    videoUrl: "https://youtu.be/hceNBCnOx44",
    author: "David Brown",
    position: "CTO, Company C"
  },
];
const ACEGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
  
        <div className="ACEGallery-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="video-container">
                  <video width="100%" controls>
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="testimonial-author mt-4 text-center">
                  <h5>{testimonial.author}</h5>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
       
    </>
  );
};

export default ACEGallery;
