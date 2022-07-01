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
        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&family=Work+Sans:wght@300;400&display=swap"
          rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        {/* <!-- Stylesheets --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Head>

      <main>
        <Header title="Art School Africa" />
        <div id="landing-section" class="section title-section">
          <div class="title-heading">
            <h1>
              Your Journey Into The Arts Starts Here
            </h1>
          </div>
          <div class="title-actions">
            <a href="#stay-utd-section"><button class="btn CTA">
                <p class="title-text">Join Now</p>
              </button></a>
            <p class="title-text"><a class="light" href="#our-mission-section">Learn More</a></p>
          </div>
        </div>

        {/* <!-- Our Story Section --> */}
        <div id="our-mission-section" class="section">
          <div class="container our-mission-block">
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
        <div id="quote-section" class='section quote-section grid'>
          <div class="grid-child vl">
          </div>
          <div class="grid-child quote-heading">
            <h1>We're passionate about helping you grow and make an impact.</h1>
          </div>
        </div>

        {/* <!-- Survey Section --> */}
        <div id="survey-section" class="section survey-section">
          <div class="flex flex-col flex-gap-bg">
            <div class="survey-intro">
              <h1>Join us on our journey.</h1>
              <h1>Fill out a short survey.</h1>
            </div>
            <div class="flex flex-col survey-links">
              <h2>I'm A <a class="dark slide-underline" href="https://4chocppu9yw.typeform.com/to/vv7aGd0P"
                  target="_blank">Student</a></h2>
              <h2>I'm An <a class="dark slide-underline" href="https://4chocppu9yw.typeform.com/to/xoZgOaw0"
                  target="_blank">Art Professional</a></h2>
            </div>
          </div>
        </div>

        {/* <!-- Sneak Peek Section --> */}
        <div id="three-pillars-section" class="section flex flex-col flex-gap-bg">
          <h1>What We Do</h1>
          <div class='flex flex-wrap three-pillars'>
            <div class='card'>
              <div class="img-container">
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
            <div class='card'>
              <div class="img-container">
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
            <div class='card'>
              <div class="img-container">
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
        <div id="stay-utd-section" class="flex section stay-utd-section">
          <div>
            <h1>Stay up to date.</h1>
            <hr>
            </hr>
            <form id="mailing-list-form" class="flex">
              <input type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="Join our mailing list." name="email"></input>
              <button id="mailing-list-btn" type="submit" class="btn">&rarr;</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
