import { ErrorModel } from '@domain/models/error.model'
import { ZipCodeModel } from '@domain/models/zipCode.model'

export type LoadZipCodeById = {
  onLoadZipCodeById: (zipCode: number) => Promise<LoadZipCodeById.Response>
}

export namespace LoadZipCodeById {
  export type Response = {
    data?: ZipCodeModel
    error?: ErrorModel
  }
}
