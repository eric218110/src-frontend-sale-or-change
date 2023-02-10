import { LoadZipCodeById } from '@domain/useCases/zipCode/load/byId'

export type ZipCodeConnectorType = {
  onLoadZipById: (zipCode: number) => Promise<LoadZipCodeById.Response>
}
