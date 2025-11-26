'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Am I allowed to participate alone?",
    answer: "Absolutely, the choice is yours! If you want to have a complete freedom in designing and building your robot based on your own vision, POLYMAZE offers participation options for both soloists and teams."
  },
  {
    question: "What is the maximum number of participants allowed in a team?",
    answer: "A team can have a maximum of 4 people. This size helps the team communicate and collaborate better in order to build and design a proper robot."
  },
  {
    question: "Do all team members need to fill the form?",
    answer: "No, you just need to assign one member of your team to fill it out."
  },
  {
    question: "How can I find out if I've been accepted to compete in POLYMAZE?",
    answer: "All POLYMAZE applicants are going to receive an email about their acceptance status after the registration form closes."
  },
  {
    question: "Are there any pre-competition workshops scheduled?",
    answer: "We are pleased to confirm that we offer workshops for POLYMAZE participants, and it is going to be led by skilled trainers."
  }
]

export default function PolymzeFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const elRefs = useRef<(HTMLDivElement | null)[]>([])
  const animRefs = useRef<any[]>([])
  const animDirs = useRef<number[]>(faqData.map(() => 1))
  const [heights, setHeights] = useState<string[]>(faqData.map(() => 'auto'))

  // Initialize lottie animations
  useEffect(() => {
    const initAnims = () => {
      if (typeof window !== 'undefined' && (window as any).lottie) {
        faqData.forEach((_, index) => {
          const container = document.querySelector(`#polymaze-faq-plus-${index}`)
          if (container && !animRefs.current[index]) {
            animRefs.current[index] = (window as any).lottie.loadAnimation({
              container: container,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: '/polymaze/Plus to X/plusToX.json'
            })
          }
        })
      }
    }
    
    // Try immediately and after a delay
    initAnims()
    const timer = setTimeout(initAnims, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Calculate heights after mount
  useEffect(() => {
    const calculateHeights = () => {
      const newHeights = faqData.map((_, index) => {
        const el = elRefs.current[index]
        if (!el) return 'auto'
        const question = el.querySelector('.question') as HTMLElement
        return question ? `${question.offsetHeight}px` : 'auto'
      })
      setHeights(newHeights)
    }
    
    calculateHeights()
    window.addEventListener('resize', calculateHeights)
    return () => window.removeEventListener('resize', calculateHeights)
  }, [])

  const toggleFaq = useCallback((index: number) => {
    const el = elRefs.current[index]
    if (!el) return

    const question = el.querySelector('.question') as HTMLElement
    const answer = el.querySelector('.answer') as HTMLElement
    
    // Animate the plus sign
    if (animRefs.current[index]) {
      animRefs.current[index].setDirection(animDirs.current[index])
      animRefs.current[index].play()
      animDirs.current[index] *= -1
    }

    // If clicking the active item, close it
    if (activeIndex === index) {
      setHeights(prev => {
        const newHeights = [...prev]
        newHeights[index] = question ? `${question.offsetHeight}px` : 'auto'
        return newHeights
      })
      setActiveIndex(null)
    } else {
      // Close the previous one with animation
      if (activeIndex !== null) {
        const prevEl = elRefs.current[activeIndex]
        const prevQuestion = prevEl?.querySelector('.question') as HTMLElement
        
        if (animRefs.current[activeIndex]) {
          animRefs.current[activeIndex].setDirection(animDirs.current[activeIndex])
          animRefs.current[activeIndex].play()
          animDirs.current[activeIndex] *= -1
        }
        
        setHeights(prev => {
          const newHeights = [...prev]
          newHeights[activeIndex] = prevQuestion ? `${prevQuestion.offsetHeight}px` : 'auto'
          return newHeights
        })
      }
      
      // Open the new one
      setHeights(prev => {
        const newHeights = [...prev]
        newHeights[index] = question && answer 
          ? `${question.offsetHeight + answer.offsetHeight}px` 
          : 'auto'
        return newHeights
      })
      setActiveIndex(index)
    }
  }, [activeIndex])

  return (
    <section id="faq">
      <h2 className="sectionTitle">Frequently asked questions</h2>
      <div className="container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`el ${activeIndex === index ? 'active' : ''}`}
            ref={el => { elRefs.current[index] = el }}
            style={{ height: heights[index] }}
          >
            <div
              className="plusSign"
              id={`polymaze-faq-plus-${index}`}
              onClick={() => toggleFaq(index)}
            />
            <div className="content">
              <div className="question" onClick={() => toggleFaq(index)}>
                {item.question}
              </div>
              <div className="answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
