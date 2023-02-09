import { MethodHttpGetAdapter } from '@data/protocols/adapter/http/get'
import { FacadeUrl } from '@domain/facade/url'
import { LoadZipCodeById } from '@domain/useCases/zipCode/load/byId'

export class LoadZipCodeByIdService implements LoadZipCodeById {
  constructor(
    private readonly facadeUrl: FacadeUrl,
    private readonly methodHttpGetAdapter: MethodHttpGetAdapter
  ) {}

  public async onLoadZipCodeById(
    zipCode: number
  ): Promise<LoadZipCodeById.Response> {
    const url = this.facadeUrl.normalizeUrlByParams(
      'http://viacep.com.br/ws/${zipCode}/json/',
      { zipCode },
      false
    )

    const reponse =
      await this.methodHttpGetAdapter.get<LoadZipCodeById.Response>({ url })

    console.log(reponse)

    return Promise.resolve({ data: {} })
  }
}
