import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import ContactoBanner from '../components/ContactoBanner'
import CustomFooter from '../components/CustomFooter'
import PorfolioBanner from '../components/PorfolioBanner'
import Services from '../components/services'
import ToroBanner from '../components/ToroBanner'
import ToroHeader from '../components/ToroHeader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <ToroHeader />
    <ToroBanner />
    <Services />
    <About />
    <ContactoBanner />
    <PorfolioBanner />
    <ContactForm />
    <CustomFooter />
   </>
  )
}
