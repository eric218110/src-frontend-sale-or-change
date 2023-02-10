import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as T from './types'

export const useViewModdelNegotiationsPage = (
  props: T.NegotiationsPageProps
) => {
  const { register, handleSubmit, getValues, setValue } =
    useForm<T.FormDataCreateNegotiations>()
  const [step, setStep] = useState<'one' | 'two'>('one')
  const [imagesPreview, setImagesPreview] = useState<T.PreviewImageType[]>([])

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

  const handlerOnSubmitSearch = (data: T.FormDataCreateNegotiations) => {
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

  const onChangeImageInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.item(0)) {
      const file = event.target.files?.item(0)
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImagesPreview([
          ...imagesPreview,
          ...[
            {
              name: String(file?.name),
              uri: reader.result,
              file
            }
          ]
        ])
        event.target.value = ''
      })
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  const onFindAddressByZipCode = async () => {
    const zipCode = Number(getValues('zip_code'))
    const { data, error } = await props.zipCodeService.onLoadZipById(zipCode)

    if (data) {
      setValue('address', String(data?.logradouro))
      setValue('city', String(data?.localidade))
      setValue('state', String(data?.uf))
    }
    if (error) {
      setValue('address', '')
      setValue('city', '')
      setValue('state', '')
    }
  }

  const isOne = step === 'one'
  const isTwo = step === 'two'

  return {
    step: {
      currentStep: step,
      goToBackStep,
      goToNextStep,
      isOne,
      isTwo
    },
    imagesPreview,
    onChangeImageInput,
    onFindAddressByZipCode,
    handlerOnSubmitForm: handleSubmit(handlerOnSubmitSearch),
    loadNavigation,
    register
  }
}
