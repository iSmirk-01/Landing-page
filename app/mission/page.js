import React from 'react'
import TittleBar from '../components/TittleBar'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import Notice from '../components/Notice';

function Mission() {
  return (
    <div className="flex flex-col h-screen gap-4 items-center w-screen">
      <TittleBar header="M2 HQ" />
      <Notice />
      <Navigation
        link1=""
        link2="contacts"
        link3="reviews"
        name1="Services"
        name2="Contacts"
        name3="Reviews"
      />
      <div className=" text-white flex flex-col h-screen justify-center items-center w-screen ">
        <div className="flex flex-col bg-slate-800 p-4 rounded-lg w-fit h-fit m-4 justify-center text-2xl border border-sky-300">
          <h1 className="font-semibold self-center">Mission Statement</h1>
          <br />
          <p className='flex flex-wrap'>
            At M2 HQ, my mission is to bring integrity and passion to the tech
            service industry. Built on a foundation of honesty and a wealth of
            hands-on experience, im dedicated to providing exceptional,
            personalized services to those who seek quality solutions but may
            lack the time or expertise. I aim to demystify technology, making it
            accessible and reliable for everyone, ensuring each client has a
            reliable everyday tool. My commitment is to deliver excellence
            through transparency, skill, and a genuine desire to help others
            succeed in the ever evolving world of technology.
          </p>
        </div>
      </div>

      <Footer footer="Disclaimer: All custom build services come with a money back guarantee if parts are delivered damaged or defective. Replacements are subject to the supplier the component was purchased from. I 'do not' purchase parts for customers." />
    </div>
  );
}

export default Mission
