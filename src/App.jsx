import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Lottie from 'react-lottie-player'; // استيراد Lottie بشكل صحيح
import './App.css'; 
import Loader from './Loader/Loader'; 

// المكونات المؤجلة باستخدام React.lazy
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

// تحميل ملف JSON للأنيميشن
import animationData from './assets/Animation - 1739821623597.json'; // تأكد من المسار الصحيح للـ JSON

const App = () => {

  return (
    <BrowserRouter>
        <div className="background-animation">
          <Lottie
            animationData={animationData}
            play
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,  // التأكد من أن الأنيميشن في الخلفية
            }}
          />
        </div>
    

      <Suspense fallback={<Loader />}>
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
