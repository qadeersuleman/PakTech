import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: "img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    img: "img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    img: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    img: "img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid testimonial py-5 mb-5">
      <div className="container">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "600px" }}>
          <h5 className="text-primary">Our Testimonial</h5>
          <h1>Our Client Saying!</h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item border p-4">
              <div className="d-flex align-items-center">
                <div>
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">{testimonial.name}</h4>
                  <p className="m-0 pb-3">{testimonial.profession}</p>
                  <div className="d-flex pe-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star me-1 text-primary"></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
