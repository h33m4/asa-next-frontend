import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

// images
import tp_1 from 'public/img/tp-1.png'
import tp_2 from 'public/img/tp-2.jpg'
import tp_3 from 'public/img/tp-3.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Art School Africa - Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="landing-section" className="section title-section">
          <div className="title-heading">
            <h1>
              Your Journey Into The Arts Starts Here
            </h1>
          </div>
          <div className="title-actions">
            <a href="#stay-utd-section"><button className="btn CTA">
                <p className="title-text">Join Now</p>
              </button></a>
            <p className="title-text"><a className="light" href="#our-mission-section">Learn More</a></p>
          </div>
        </div>

        {/* <!-- Our Story Section --> */}
        <div id="our-mission-section" className="section">
          <div className="container our-mission-block">
            <h1>Our Mission</h1>
            <hr>
            </hr>
            <p>
              Art School Africa aims to empower aspiring art professionals on the African continent by providing
              them with the necessary knowledge and access to pursue a career in the arts.
            </p>
          </div>
        </div>

        {/* <!-- Quote Section ***needs to include a grid to include the vertical line--> */}
        <div id="quote-section" className='section quote-section grid'>
          <div className="grid-child vl">
          </div>
          <div className="grid-child quote-heading">
            <h1>We're passionate about helping you grow and make an impact.</h1>
          </div>
        </div>

        {/* <!-- Survey Section --> */}
        <div id="survey-section" className="section survey-section">
          <div className="flex flex-col flex-gap-bg">
            <div className="survey-intro">
              <h1>Join us on our journey.</h1>
              <h1>Fill out a short survey.</h1>
            </div>
            <div className="flex flex-col survey-links">
              <h2>I'm A <a className="dark slide-underline" href="https://4chocppu9yw.typeform.com/to/vv7aGd0P"
                  target="_blank">Student</a></h2>
              <h2>I'm An <a className="dark slide-underline" href="https://4chocppu9yw.typeform.com/to/xoZgOaw0"
                  target="_blank">Art Professional</a></h2>
            </div>
          </div>
        </div>

        {/* <!-- Sneak Peek Section --> */}
        <div id="three-pillars-section" className="section flex flex-col flex-gap-bg">
          <h1>What We Do</h1>
          <div className='flex flex-wrap three-pillars'>
            <div className='card'>
              <div className="img-container">
                <Image src={tp_1} alt="" />
              </div>
              <div>
                <h2>Education</h2>
                <p>
                  Through a series of masterclasses, we aim to provide our users with the necessary skills to
                  best enter and navigate the art industry.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className="img-container">
                <Image src={tp_2} alt="" />
              </div>
              <div>
                <h2>Network</h2>
                <p>
                  We aim to provide users with a more accessible art-focused community through customised
                  profiles and a space to connect.
                </p>
              </div>
            </div>
            <div className='card'>
              <div className="img-container">
                <Image src={tp_3} alt="" />
              </div>
              <div>
                <h2>Opportunities</h2>
                <p>
                  Our platform sheds light on the many professional avenues that are available within the
                  arts, by providing a communal space for jobs and new opportunities to be shared.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Stay Up-to-date Section  STILL NEED TO IMPLEMENT THIS -> PHP CODE TO ADD INPUT TO A TEXTFILE ON FTP SERVER --> */}
        <div id="stay-utd-section" className="flex section stay-utd-section">
          <div>
            <h1>Stay up to date.</h1>
            <hr>
            </hr>
            <form id="mailing-list-form" className="flex">
              <input type="email" className="form-control" id="exampleFormControlInput1"
                placeholder="Join our mailing list." name="email"></input>
              <button id="mailing-list-btn" type="submit" className="btn">&rarr;</button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
