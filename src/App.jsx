import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy ,useEffect } from "react";
import { motion, useScroll} from "framer-motion";


// استخدام Dynamic Imports لتحميل المكونات فقط عند الحاجة
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // التأكد من تحديث شريط التمرير عند التحميل
    const updateScrollProgress = () => {
      scrollYProgress.set(0); // أو قيمة معينة إذا كنت تحتاج أن تبدأ من مكان آخر
    };
    updateScrollProgress();

    // تحديث عند التحميل الأولي
    window.addEventListener("load", updateScrollProgress);

    return () => {
      window.removeEventListener("load", updateScrollProgress);
    };
  }, [scrollYProgress]);

  return (
       <>
       <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress, // هذا سيتحكم في العرض بناءً على التمرير
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0, // يبدأ من اليسار
          backgroundColor: "#ff0088",
          zIndex: 100,
        }}
      />
    <BrowserRouter>

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* استخدم Suspense لتحميل Navbar و Hero بشكل ديناميكي */}
          <Suspense fallback={<div>جارٍ تحميل الشريط العلوي...</div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div>جارٍ تحميل البطل...</div>}>
            <Hero />
          </Suspense>
        </div>

        {/* تحميل المكونات الأخرى ديناميكيًا */}
        <Suspense fallback={<div>جارٍ تحميل About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>جارٍ تحميل Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>جارٍ تحميل Tech...</div>}>
          <Tech />
        </Suspense>
        <Suspense fallback={<div>جارٍ تحميل Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div>جارٍ تحميل Feedbacks...</div>}>
          <Feedbacks />
        </Suspense>

        <div className="relative z-0">
          <Suspense fallback={<div>جارٍ تحميل Contact...</div>}>
            <Contact />
          </Suspense>
        </div>
    {/* <Cursor /> إضافة المؤشر المخصص */}

      </div>
    </BrowserRouter>
    </>
  );
};

export default App;