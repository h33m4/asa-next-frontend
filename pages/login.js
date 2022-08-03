import { Head, Body } from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import { render } from 'react-dom'

export default function Login() {
    return(
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
            <Body>
                <div>
                    <form>
                        <input placeholder='Test'/>
                        <input/>
                        <input/>
                        <input/>
                    </form>
                </div>
            </Body>
        </>
        )
}