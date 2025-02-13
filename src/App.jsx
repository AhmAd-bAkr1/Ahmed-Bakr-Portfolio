import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Loader from './Loader/Loader'; // استيراد مكون Loader

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // التحقق من تحميل الصفحة بالكامل
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    // تنظيف الحدث عند الخروج
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* إظهار الـ Loader حتى اكتمال التحميل */}
        {loading && <Loader />}
        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* استخدم Suspense مع Loader كـ fallback */}
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Hero />
          </Suspense>
        </div>

        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Works />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Feedbacks />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
