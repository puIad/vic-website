'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    lottie: any;
  }
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the vision of the club?",
    answer: "Creating an enriching experience for our members -which consist of university students- and fostering a lasting community that instills pride in their membership"
  },
  {
    question: "Who can join the club?",
    answer: "VIC's membership is mainly exclusive to students of l'École Nationale Polytechnique of Algiers."
  },
  {
    question: "How do I become a member of the club?",
    answer: "During the period of October-November of each year, the VIC opens its doors to new members. Interested students have to fill out a membership application via a form shared on our social media and website, followed by an interview with our team. Moreover, a special recruitment season during April is usually held as well."
  },
  {
    question: "What type of events does the club organize?",
    answer: "Given the scientific nature of the club —as well as the study field of its members, the VIC organizes a variety of scientific, technical, linguistic and cultural events. Visit \"Our Events\" page for more information."
  },
  {
    question: "How do I sign up for an event?",
    answer: "During the marketing phase of each event, a sign-up form is shared with the audience via our social media and website with respective criteria to the nature of the event."
  },
  {
    question: "Do I need prior experience/knowledge to join?",
    answer: "The usual answer to this question is no. The main selection criteria for joining is a good motivation to contribute and learn in the process."
  },
  {
    question: "Are there leadership opportunities within the club?",
    answer: "Given the general hierarchy of the club and the plethora of events and activities it organizes, it is only natural that every member is provided with the opportunity to be involved and responsible for the success of these activities as well as enriching the community of the club in the process."
  },
  {
    question: "What are the benefits of joining the club?",
    answer: "Simply put, having the student club experience with its ups and downs makes for an objectively better engineer. At this age, humans are commanded to explore, feel, make memories, and learn about themselves and the world around them. And VIC, most undoubtedly takes you on that ride."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const animRefs = useRef<any[]>([])
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lottie) {
      faqData.forEach((_, index) => {
        if (containerRefs.current[index] && !animRefs.current[index]) {
          animRefs.current[index] = window.lottie.loadAnimation({
            container: containerRefs.current[index],
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '/Plus to X/plusToX.json'
          })
        }
      })
    }
  }, [])

  const handleQuestionClick = (index: number) => {
    if (activeIndex === index) {
      // Close
      if (animRefs.current[index]) {
        animRefs.current[index].setDirection(-1)
        animRefs.current[index].play()
      }
      setActiveIndex(null)
    } else {
      // Close previous if any
      if (activeIndex !== null && animRefs.current[activeIndex]) {
        animRefs.current[activeIndex].setDirection(-1)
        animRefs.current[activeIndex].play()
      }
      // Open new
      if (animRefs.current[index]) {
        animRefs.current[index].setDirection(1)
        animRefs.current[index].play()
      }
      setActiveIndex(index)
    }
  }

  return (
    <section id="faq">
      <p className="bfaq">FAQ</p>
      <p className="title">Questions? Answers</p>
      <p>&quot;Have questions? We&apos;ve got answers! Explore our FAQ section to learn more about VIC Club, our events, membership, and how you can get involved.&quot;</p>

      <div className="faqContainer">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className={`question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="container">
              <p>{item.question}</p>
              <div 
                className="animationptx"
                ref={el => { containerRefs.current[index] = el }}
              ></div>
            </div>
            <div className="answer" style={{ opacity: activeIndex === index ? 1 : 0 }}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
