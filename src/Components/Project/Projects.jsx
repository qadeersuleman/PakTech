import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faExpand } from "@fortawesome/free-solid-svg-icons";

const ImageData = [
  {
    ImagePath: "img/project-1.jpg",
    ImageTitle: "Web Development",
    ImageSubTitle: "Ecommerce website",
    ProjectUrl: "https://example.com/project-1",
  },
  {
    ImagePath: "img/project-2.jpg",
    ImageTitle: "Cyber Security",
    ImageSubTitle: "Cyber Security Core",
    ProjectUrl: "https://example.com/project-2",
  },
  {
    ImagePath: "img/project-3.jpg",
    ImageTitle: "Mobile Info",
    ImageSubTitle: "Upcoming Phone",
    ProjectUrl: "https://example.com/project-3",
  },
  {
    ImagePath: "img/project-4.jpg",
    ImageTitle: "Web Development",
    ImageSubTitle: "Web Analysis",
    ProjectUrl: "https://example.com/project-4",
  },
  {
    ImagePath: "img/project-5.jpg",
    ImageTitle: "Digital Marketing",
    ImageSubTitle: "Marketing Analysis",
    ProjectUrl: "https://example.com/project-5",
  },
  {
    ImagePath: "img/project-6.jpg",
    ImageTitle: "SEO Optimization",
    ImageSubTitle: "Key Optimization",
    ProjectUrl: "https://example.com/project-6",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid project py-5 mb-5">
      <div className="container">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "600px" }}>
          <h5 className="text-primary">Our Project</h5>
          <h1>Our Recently Completed Projects</h1>
        </div>
        <div className="row g-5">
          {ImageData.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up">
              <div className="project-item position-relative">
                <div className="project-img">
                  <img
                    src={item.ImagePath}
                    className="img-fluid w-100 rounded "
                    alt={item.ImageTitle}
                  />
                  <div className="project-content position-absolute top-50 start-50 translate-middle">
                    <a
                      href={item.ImagePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center me-2"
                    >
                      <FontAwesomeIcon
                        icon={faExpand}
                        className="text-white fa-2x"
                      />
                    </a>
                    <a
                      href={item.ProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-white fa-2x"
                      />
                    </a>
                  </div>
                </div>
                <div className="project-info text-center mt-3">
                  <h4 className="text-secondary">{item.ImageTitle}</h4>
                  <p className="m-0 text-dark">{item.ImageSubTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
