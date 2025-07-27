import React, { useState } from 'react';

const translations = {
  en: {
    title: '📚 Learn About Organic Farming',
    what: '🌱 What is Organic Farming?',
    whatDesc:
      'Organic farming is a method of agriculture that avoids the use of synthetic fertilizers and pesticides. Instead, it relies on natural processes, biodiversity, and sustainable practices.',
    benefits: '🌿 Benefits of Organic Farming',
    benefitList: [
      'Improves soil fertility and structure',
      'Reduces pollution and conserves water',
      'Supports biodiversity and wildlife',
      'Produces healthier, chemical-free food',
    ],
    techniques: '🌾 Common Organic Techniques',
    techniqueList: [
      'Crop rotation',
      'Composting and green manure',
      'Biological pest control',
      'Intercropping and polyculture',
    ],
    resources: '📖 Resources to Explore More',
  },

  hi: {
    title: '📚 जैविक खेती के बारे में जानें',
    what: '🌱 जैविक खेती क्या है?',
    whatDesc:
      'जैविक खेती एक ऐसी कृषि विधि है जिसमें रासायनिक उर्वरकों और कीटनाशकों का उपयोग नहीं किया जाता है। इसमें प्राकृतिक प्रक्रियाओं, जैव विविधता और टिकाऊ तकनीकों का उपयोग किया जाता है।',
    benefits: '🌿 जैविक खेती के लाभ',
    benefitList: [
      'मिट्टी की उर्वरता और संरचना में सुधार',
      'प्रदूषण में कमी और जल संरक्षण',
      'जैव विविधता और वन्य जीवन का समर्थन',
      'स्वस्थ और रसायन मुक्त भोजन उत्पादन',
    ],
    techniques: '🌾 सामान्य जैविक तकनीकें',
    techniqueList: [
      'फसल चक्र परिवर्तन',
      'कंपोस्टिंग और ग्रीन खाद',
      'जैविक कीट नियंत्रण',
      'इंटरक्रॉपिंग और बहु-फसली प्रणाली',
    ],
    resources: '📖 अधिक जानकारी के स्रोत',
  },

  pa: {
    title: '📚 ਆਰਗੈਨਿਕ ਖੇਤੀ ਬਾਰੇ ਸਿੱਖੋ',
    what: '🌱 ਆਰਗੈਨਿਕ ਖੇਤੀ ਕੀ ਹੈ?',
    whatDesc:
      'ਆਰਗੈਨਿਕ ਖੇਤੀ ਇੱਕ ਐਸੀ ਵਿਧੀ ਹੈ ਜਿਸ ਵਿੱਚ ਰਸਾਇਣਕ ਖਾਦਾਂ ਜਾਂ ਕੀਟਨਾਸ਼ਕਾਂ ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕੀਤੀ ਜਾਂਦੀ। ਇਹ ਕੁਦਰਤੀ ਢੰਗ, ਜੈਵਿਕ ਵਿਭਿੰਨਤਾ ਅਤੇ ਟਿਕਾਊ ਤਰੀਕਿਆਂ ਉਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।',
    benefits: '🌿 ਆਰਗੈਨਿਕ ਖੇਤੀ ਦੇ ਲਾਭ',
    benefitList: [
      'ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਅਤੇ ਬਣਤਰ ਵਿੱਚ ਸੁਧਾਰ',
      'ਪ੍ਰਦੂਸ਼ਣ ਵਿੱਚ ਘਟਾਅ ਅਤੇ ਪਾਣੀ ਦੀ ਬਚਤ',
      'ਜੈਵਿਕ ਵਿਭਿੰਨਤਾ ਦਾ ਸੰਰੱਖਣ',
      'ਸਿਹਤਮੰਦ ਅਤੇ ਰਸਾਇਣ ਰਹਿਤ ਭੋਜਨ',
    ],
    techniques: '🌾 ਆਮ ਆਰਗੈਨਿਕ ਤਕਨੀਕਾਂ',
    techniqueList: [
      'ਫਸਲ ਚੱਕਰ',
      'ਕੰਪੋਸਟ ਅਤੇ ਹਰੀ ਖਾਦ',
      'ਜੈਵਿਕ ਕੀੜੇ ਕੰਟਰੋਲ',
      'ਮਿਲੀ-ਜੁਲੀ ਖੇਤੀ',
    ],
    resources: '📖 ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸਰੋਤ',
  },

  mr: {
    title: '📚 सेंद्रिय शेती बद्दल शिका',
    what: '🌱 सेंद्रिय शेती म्हणजे काय?',
    whatDesc:
      'सेंद्रिय शेती ही एक अशी शेती पद्धत आहे ज्यात रासायनिक खतांचा आणि कीटकनाशकांचा वापर केला जात नाही. नैसर्गिक प्रक्रिया, जैवविविधता आणि शाश्वत तंत्रांचा उपयोग केला जातो.',
    benefits: '🌿 सेंद्रिय शेतीचे फायदे',
    benefitList: [
      'मातीची सुपीकता आणि रचना सुधारते',
      'प्रदूषण कमी करते आणि पाण्याची बचत करते',
      'जैवविविधता आणि वन्यजीवनाला प्रोत्साहन',
      'आरोग्यदायी आणि रसायनमुक्त अन्न उत्पादन',
    ],
    techniques: '🌾 सामान्य सेंद्रिय तंत्र',
    techniqueList: [
      'पीक फेरफार',
      'कंपोस्टिंग आणि हरित खत',
      'सेंद्रिय कीड नियंत्रण',
      'मिश्र पीक शेती',
    ],
    resources: '📖 अधिक माहितीचे स्रोत',
  },
};

const Learn = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">{t.title}</h2>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="pa">ਪੰਜਾਬੀ</option>
          <option value="mr">मराठी</option>
        </select>
      </div>

      <div className="space-y-6">
        <section className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{t.what}</h3>
          <p className="text-gray-700">{t.whatDesc}</p>
        </section>

        <section className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{t.benefits}</h3>
          <ul className="list-disc list-inside text-gray-700">
            {t.benefitList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{t.techniques}</h3>
          <ul className="list-disc list-inside text-gray-700">
            {t.techniqueList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{t.resources}</h3>
          <ul className="list-disc list-inside text-blue-700">
            <li><a href="https://ofrf.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Organic Farming Research Foundation</a></li>
            <li><a href="https://rodaleinstitute.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Rodale Institute</a></li>
            <li><a href="https://www.fao.org/organic-agriculture/en/" target="_blank" rel="noopener noreferrer" className="hover:underline">FAO on Organic Agriculture</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Learn;
