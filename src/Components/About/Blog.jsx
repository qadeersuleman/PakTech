import React from "react";
import { Link } from "react-router";

const BlogData = [
  {
    image: "img/blog-1.jpg",
    BlogName: "By Daniel Martin",
    BlogTitle: "Web Design",
    BlogPublish: "24 March 2023",
    BlogAbout:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus utinterdum. Aliquam dolor eget urna ultricies tincidunt liberosit amet",
    BlogShare: "120",
    BlogComments: "530 ",
  },
  {
    image: "img/blog-1.jpg",
    BlogName: "By Daniel Martin",
    BlogTitle: "App Design",
    BlogPublish: "19 April 2020",
    BlogAbout:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus utinterdum. Aliquam dolor eget urna ultricies tincidunt liberosit amet",
    BlogShare: "190",
    BlogComments: "230 ",
  },
  {
    image: "img/blog-1.jpg",
    BlogName: "By Daniel Martin",
    BlogTitle: "UI/UX Design",
    BlogPublish: "09 July 2021",
    BlogAbout:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus utinterdum. Aliquam dolor eget urna ultricies tincidunt liberosit amet",
    BlogShare: "190",
    BlogComments: "230 ",
  },
];

export default function Blog() {
  return (
    <div class="container-fluid blog py-5 mb-5">
      <div class="container">
        <div
          class="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{
            maxWidth: "600px",
          }}
        >
          <h5 class="text-primary">Our Blog</h5>
          <h1>Latest Blog & News</h1>
        </div>
        <div class="row g-5 justify-content-center">
          {BlogData.map((item, index) => (
            <div class="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
              <div class="blog-item position-relative bg-light rounded">
                <img
                  src="img/blog-1.jpg"
                  class="img-fluid w-100 rounded-top"
                  alt=""
                />
                <span
                  class="position-absolute px-4 py-3 bg-primary text-white rounded"
                  style={{ top: "-28px", right: "20px" }}
                >
                  {item.BlogTitle}
                </span>
                <div
                  class="blog-btn d-flex justify-content-between position-relative px-3"
                  style={{ marginTop: "-75px" }}
                >
                  <div class="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                    <Link href="" class="btn text-white">
                      Read More
                    </Link>
                  </div>
                  <div class="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                    <div class="blog-icon-1">
                      <p class="text-white px-2">
                        Share<i class="fa fa-arrow-right ms-3"></i>
                      </p>
                    </div>
                    <div class="blog-icon-2">
                      <Link href="" class="btn me-1">
                        <i class="fab fa-facebook-f text-white"></i>
                      </Link>
                      <Link href="" class="btn me-1">
                        <i class="fab fa-twitter text-white"></i>
                      </Link>
                      <Link href="" class="btn me-1">
                        <i class="fab fa-instagram text-white"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  class="blog-content text-center position-relative px-3"
                  style={{ marginTop: "-25px" }}
                >
                  <img
                    src="img/admin.jpg"
                    class="img-fluid rounded-circle border border-4 border-white mb-3"
                    alt=""
                  />
                  <h5 class="">By {item.BlogName}</h5>
                  <span class="text-secondary">{item.BlogPublish}</span>
                  <p class="py-2">{item.BlogAbout}</p>
                </div>
                <div class="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                  <Link href="" class="text-white">
                    <small>
                      <i class="fas fa-share me-2 text-secondary"></i>
                      {item.BlogShare} Share
                    </small>
                  </Link>
                  <Link href="" class="text-white">
                    <small>
                      <i class="fa fa-comments me-2 text-secondary"></i>
                      {item.BlogComments}
                      Comments
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div class="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".5s">
                        <div class="blog-item position-relative bg-light rounded">
                            <img src="img/blog-2.jpg" class="img-fluid w-100 rounded-top" alt="">
                            <span class="position-absolute px-4 py-3 bg-primary text-white rounded" style="top: -28px; right: 20px;">Development</span>
                            <div class="blog-btn d-flex justify-content-between position-relative px-3" style="margin-top: -75px;">
                                <div class="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                    <a href="" class="btn text-white ">Read More</a>
                                </div>
                                <div class="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                    <div class="blog-icon-1">
                                        <p class="text-white px-2">Share<i class="fa fa-arrow-right ms-3"></i></p>
                                    </div>
                                    <div class="blog-icon-2">
                                        <a href="" class="btn me-1"><i class="fab fa-facebook-f text-white"></i></a>
                                        <a href="" class="btn me-1"><i class="fab fa-twitter text-white"></i></a>
                                        <a href="" class="btn me-1"><i class="fab fa-instagram text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content text-center position-relative px-3" style="margin-top: -25px;">
                                <img src="img/admin.jpg" class="img-fluid rounded-circle border border-4 border-white mb-3" alt="">
                                <h5 class="">By Daniel Martin</h5>
                                <span class="text-secondary">23 April 2023</span>
                                <p class="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div class="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <a href="" class="text-white"><small><i class="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                <a href="" class="text-white"><small><i class="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".7s">
                        <div class="blog-item position-relative bg-light rounded">
                            <img src="img/blog-3.jpg" class="img-fluid w-100 rounded-top" alt="">
                            <span class="position-absolute px-4 py-3 bg-primary text-white rounded" style="top: -28px; right: 20px;">Mobile App</span>
                            <div class="blog-btn d-flex justify-content-between position-relative px-3" style="margin-top: -75px;">
                                <div class="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                    <a href="" class="btn text-white ">Read More</a>
                                </div>
                                <div class="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                    <div class="blog-icon-1">
                                        <p class="text-white px-2">Share<i class="fa fa-arrow-right ms-3"></i></p>
                                    </div>
                                    <div class="blog-icon-2">
                                        <a href="" class="btn me-1"><i class="fab fa-facebook-f text-white"></i></a>
                                        <a href="" class="btn me-1"><i class="fab fa-twitter text-white"></i></a>
                                        <a href="" class="btn me-1"><i class="fab fa-instagram text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-content text-center position-relative px-3" style="margin-top: -25px;">
                                <img src="img/admin.jpg" class="img-fluid rounded-circle border border-4 border-white mb-3" alt="">
                                <h5 class="">By Daniel Martin</h5>
                                <span class="text-secondary">30 jan 2023</span>
                                <p class="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div class="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <a href="" class="text-white"><small><i class="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                <a href="" class="text-white"><small><i class="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
