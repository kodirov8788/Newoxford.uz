import React ,{useState}from 'react'
import "./Accordion.css"


function Accordion() {
    const [selected, setSelected] = useState(null)

    const toggle = i => {
      if (selected === i) {
        return setSelected(null)
  
      }
  
      setSelected(i)
    }
  return (
    <div className='wrapper font-sans' >
    <div className='accordion'>
      {data.map((item, i) => (
        <div className="item">
          <div className="tittle" onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={
            selected === i ? 'content show' :
              'content'}>{item.answer}</div>
        </div>

      ))}
    </div>
  </div>
  )
}
const data = [
    {
      question: 'Nima uchun Algoritm-ni tanlashim kerak?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Kursda nimani organaman?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Kurs qancha turadi va uni qanday tolashim mumkin?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Sizning ustozlaringiz kimlar?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Kursga qanday royhatdan otish kerak?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Oqish uchun nima talab qilinadi?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Oqish uchun ingliz tili kerakmi?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Mashgulot vaqtini ozgartirib, boshqa guruhga otishim mumkinmi?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Sertifikatni qanday olishim mumkin?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Oqishni qaysi oydan pul topishim mumkin?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Kurs tugaganidan keyin ishga joylasha olamanmi?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    },
    {
      question: 'Oqish uchun kerakli dasturlarni qayerdan yuklab olsam boladi?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Possimus deserunt commodi optio ipsa aperiam dolore itaque eius inventore aliquid officiis!',
    }
  ]

export default Accordion