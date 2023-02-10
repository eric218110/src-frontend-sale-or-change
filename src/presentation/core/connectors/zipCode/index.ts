import { makeLoadZipCodeByIdService } from '@main/factories/data/services/zipCode/loadById'
import { ZipCodeConnectorType } from '@presentation/core/types/zipcode'

export const zipCodeConnector: ZipCodeConnectorType = {
  onLoadZipById: (zipCode: number) =>
    makeLoadZipCodeByIdService().onLoadZipCodeById(zipCode)
}
