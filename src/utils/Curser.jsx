// src/Cursor.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");

  // تحديث الموقع عند تحرك المؤشر
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // تغيير نوع المؤشر حسب العنصر الذي يمر عليه
  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setCursorType("grow");
      } else if (e.target.style.userSelect === "text") {
        setCursorType("text");
      } else if (e.target.disabled) {
        setCursorType("disabled");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => {
      setCursorType("default");
    };

    // إضافة مستمعات الحدث للعناصر
    document.querySelectorAll("a, button, p").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll("a, button, p").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // تخصيص نمط المؤشر بناءً على نوع المحتوى
  const cursorStyles = {
    default: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#ff0088",
    },
    grow: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: "#ff0088",
    },
    text: {
      width: "20px",
      height: "20px",
      backgroundColor: "transparent",
      border: "2px solid #ff0088",
      cursor: "text",
    },
    disabled: {
      width: "20px",
      height: "20px",
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: cursorPosition.y - 10, // تعويض نصف حجم المؤشر
        left: cursorPosition.x - 10,
        pointerEvents: "none",
        ...cursorStyles[cursorType], // تغيير الأنماط بناءً على نوع المحتوى
      }}
      animate={{
        scale: cursorType === "grow" ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    />
  );
};

export default Cursor;
