 
import Header from './conponents/header/Header';
import Hero from './conponents/hero/Hero';
import Main from './conponents/main/Main';
import Contact from './conponents/contact/Contact';
import Footer from './conponents/footer/Footer';
import { useEffect, useState } from 'react';
function App() {

useEffect(() => {
  window.addEventListener('scroll', () => {
    if( window.scrollY > 200){
   setshowScrollBTN(true)
  }else{
       setshowScrollBTN(false)
  }});
},[])
const[showScrollBTN, setshowScrollBTN] = useState(false)
  return (
    <div id='up' className='container'>
      <Header/>
      <Hero/>
      <div className='divider'/>
      <section id="Main">
      <Main/>
      </section>
      <div className='divider'/>
      <section id="Contact">
      <Contact/>

      </section>
      <div className='divider'/>
      <section id="Footer">
      <Footer/>
      </section>
     {/* <a href="#up"> <button className='scroll2Top icon-keyboard_arrow_up'></button>
   </a>  */}

    <a style={{opacity: showScrollBTN ? 1 : 0,transition:"2s"}} href="#up">
   <button className=' icon-keyboard_arrow_up scroll2top'></button>
   </a>
   </div>
  )
}

export default App
