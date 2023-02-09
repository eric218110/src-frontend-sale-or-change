import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  type: string
  value: string
  description: string
  trade_for: string
  address: string
  city: string
  state: string
  zip_code: string
  urgency: string
  limit_date: string
  photos: string
}

// “address” : STRING,
// “city” : STRING,
// “state”: STRING ,
// “zip_code” : INT
// }, “urgency” : {
// “type” : ENUM (1 – Baixa, 2 – Média, 3 – Alta, 4 – Data),
// “limit_date” : DATE
// }, “photos“ : [
// { “src” : STRING },
// { “src” : STRING }
// ]

export const useViewModdelNegotiationsPage = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const [step, setStep] = useState<'one' | 'two'>('one')

  const goToNextStep = () => {
    if (step == 'one') {
      setStep('two')
    }
  }

  const goToBackStep = () => {
    if (step == 'two') {
      setStep('one')
    }
  }

  const handlerOnSubmitSearch = (data: FormData) => {
    console.log(data)
  }

  const loadNavigation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
      },
      err => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }

  return {
    step: {
      currentStep: step,
      goToBackStep,
      goToNextStep
    },
    handlerOnSubmitForm: handleSubmit(handlerOnSubmitSearch),
    loadNavigation,
    register
  }
}
