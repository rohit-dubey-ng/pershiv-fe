import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import blogs from "../../data/blog";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer/Footer";

const NewsMedia = () => {
  return (
    <>
      <Seo pageTitle="NewsMedia" />
      <DefaulHeader />
      <div className="news-media-page">
        <div>
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="top-banner text-center">
              <h2 className="tx-dark mb-20">Press Coverage</h2>
              <p className="mb-5">We are proud to have been featured in several leading publications of the country.
                Below are the links to our recent print media coverage</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {blogs.slice(0, 3).map((post, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={post.delay}
                >
                  <article className="blog-meta-three mt-40 wow fadeInUp">
                    <figure className="post-img m0">
                      <Link href={`/blog/${post.id}`} className="w-100 d-block">
                        <Image
                          width={410}
                          height={300}
                          src={post.imageSrc}
                          alt="blog"
                          className="lazy-img w-100 tran4s"
                        />
                      </Link>
                    </figure>
                    <div className="post-data mt-40">
                      <div className="post-date opacity-75 text-uppercase">
                        {post.date}
                      </div>
                      <Link href={`/blog/${post.id}`} className="mt-5 mb-35 lg-mb-20">
                        <h4 className="tran3s blog-title fw-normal tx-dark">
                          {post.title}
                        </h4>
                      </Link>
                      <div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="read-btn-two fw-500 tran3s"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-100">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="top-banner text-center">
              <h2 className="tx-dark mb-20">Advertisement Centre</h2>
              <p className="mb-5">Fenesta regularly invests in smart marketing campaigns to build market share and leadership. Here's a collection of our past advertising campaigns.</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {blogs.slice(0, 3).map((post, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={post.delay}
                >
                  <article className="blog-meta-three mt-40 wow fadeInUp">
                    <figure className="post-img m0">
                      <Link href={`/blog/${post.id}`} className="w-100 d-block">
                        <Image
                          width={410}
                          height={300}
                          src={post.imageSrc}
                          alt="blog"
                          className="lazy-img w-100 tran4s"
                        />
                      </Link>
                    </figure>
                    <div className="post-data mt-40">
                      <div className="post-date opacity-75 text-uppercase">
                        {post.date}
                      </div>
                      <Link href={`/blog/${post.id}`} className="mt-5 mb-35 lg-mb-20">
                        <h4 className="tran3s blog-title fw-normal tx-dark">
                          {post.title}
                        </h4>
                      </Link>
                      <div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="read-btn-two fw-500 tran3s"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-50">
      <Footer />
      </div>
    </>
  );
};

export default NewsMedia;