import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./IntroductionStyle.css";

const defaultIntroductions = {
  arabic: {
    title: "مرحبًا بكم في دار العلوم هداية الإسلام",
    content: "مرحبًا بكم في دار العلوم هداية الإسلام. هذا نص تقديمي باللغة العربية.",
    visible: true,
  },
  urdu: {
    title: "دار العلوم ہدایۃ الاسلام میں خوش آمدید",
    content: "دار العلوم ہدایۃ الاسلام میں خوش آمدید۔ یہ اردو تعارفی متن ہے۔",
    visible: true,
  },
  english: {
    title: "Welcome to Darool Uloom Hidayatul Islam",
    content: "Welcome to Darool Uloom Hidayatul Islam. This is the introduction in English.",
    visible: false,
  },
  hindi: {
    title: "दारुल उलूम हिदायतुल इस्लाम में आपका स्वागत है",
    content: "दारुल उलूम हिदायतुल इस्लाम में आपका स्वागत है। यह हिन्दी परिचय है।",
    visible: true,
  },
  gujarati: {
    title: "દરુલ ઉલૂમ હિદાયતુલ ઇસ્લામમાં આપનું સ્વાગત છે",
    content: "દારુલ ઉલૂમ હિદાયતુલ ઇસ્લામમાં આપનું હાર્દિક સ્વાગત છે. આ ગુજરાતી ભાષામાં પરિચયાત્મક માહિતી છે.",
    visible: true,
  },
};

const languageMap = {
  arabic: "arabic",
  urdu: "urdu",
  english: "english",
  hindi: "hindi",
  gujrati: "gujarati",
  gujarati: "gujarati",
};

export default function Introduction() {
  const { lang } = useParams();
  const [introductions, setIntroductions] = useState(defaultIntroductions);

  useEffect(() => {
    const savedIntroductions = localStorage.getItem("introductions");
    if (savedIntroductions) {
      try {
        setIntroductions((prev) => ({ ...prev, ...JSON.parse(savedIntroductions) }));
      } catch (error) {
        console.error("Error loading introductions:", error);
      }
    }
  }, []);

  const code = languageMap[lang?.toLowerCase()] || "english";
  const selectedIntroduction = introductions[code] || defaultIntroductions[code] || {
    title: "Introduction",
    content: "Introduction not available in this language yet.",
    visible: true,
  };

  const isVisible = selectedIntroduction.visible !== false;
  const introduction = isVisible
    ? selectedIntroduction
    : {
        title: "Introduction Not Available",
        content: "This introduction is currently hidden and not available for this language.",
      };

  const language = code.charAt(0).toUpperCase() + code.slice(1);

  return (
    <section className="introduction-section">
      <div className="intro-card">
        <h1>{introduction.title}</h1>
        <p>{introduction.content}</p>
      </div>
    </section>
  );
}
