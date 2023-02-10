import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as T from './types'

export const useViewModdelNegotiationsPage = (
  props: T.NegotiationsPageProps
) => {
  const { register, handleSubmit, getValues, setValue } =
    useForm<T.FormDataCreateNegotiations>()
  const [step, setStep] = useState<'one' | 'two'>('one')
  const [coords, setCoords] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0
  })
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

  const handlerOnSubmitSearch = async (form: T.FormDataCreateNegotiations) => {
    const {
      address,
      city,
      state,
      zip_code,
      description,
      limit_date,
      trade_for,
      type,
      urgency,
      value
    } = form

    const location = { address, city, state, zip_code, ...coords }

    const { data, error } = await props.negotiationsService.onAddNegotiation({
      location,
      urgency: {
        limit_date,
        type: urgency
      },
      description: description,
      trade_for: trade_for,
      value: value,
      type: type,
      photos: imagesPreview.map(({ name }) => ({ src: name }))
    })

    console.log(data, 'data')
    console.log(error, 'error')
  }

  const loadNavigation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoords({ lat: coords.latitude, lng: coords.longitude })
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
