import React, { useEffect, useRef } from "react";

export default function Fact() {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;
    const speed = 100; // The lower the number, the slower the animation

    const startCounting = (counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    };

    // **Intersection Observer** to trigger animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid bg-secondary py-5 mt-3">
      <div className="container">
        <div className="row">
          {[
            { target: "99", text: "Success in getting happy customer" },
            { target: "25", text: "Thousands of successful business" },
            { target: "120", text: "Total clients who love HighTech" },
            { target: "5", text: "Stars reviews given by satisfied clients" },
          ].map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 wow fadeIn`}
              data-wow-delay={`.${index + 1}s`}
            >
              <div className="d-flex counter">
                <h1
                  ref={(el) => (countersRef.current[index] = el)}
                  className="me-3 text-primary counter-value"
                  data-target={item.target}
                >
                  0
                </h1>
                <h5 className="text-white mt-1">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
