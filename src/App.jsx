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
  const [isLoaded, setIsLoaded] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  // إضافة تأثير لتحميل الصفحة وإخفاء الـ Loader بعد تحميل المحتوى
  useEffect(() => {
    // تحديد الوقت الذي سيختفي فيه الـ Loader
    const timer = setTimeout(() => {
      setLoaderVisible(false);  // إخفاء الـ Loader بعد 1 ثانية
    }, 1000);

    // عندما يتم تحميل الصفحة بالكامل
    const handleLoad = () => {
      setIsLoaded(true);
      setLoaderVisible(false); // إخفاء الـ Loader بمجرد تحميل الصفحة
    };

    // إضافة مستمع لتحميل الصفحة
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer); // إلغاء التوقيت عند تدمير الكومبوننت
      window.removeEventListener("load", handleLoad); // إزالة مستمع حدث التحميل
    };
  }, []);

  // إذا كانت الصفحة لم يتم تحميلها أو إذا كان الـ Loader لا يزال ظاهرًا، فسيتم إظهار الـ Loader
  if (!isLoaded || loaderVisible) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* الأنيميشن يظهر فقط عندما يكون الـ Loader غير مرئي */}
      {!loaderVisible && (
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
      )}

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
