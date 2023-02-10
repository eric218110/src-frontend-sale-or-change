import { MethodHttpPostAdapter } from '@data/protocols/adapter/http/post'
import { FacadeUrl } from '@domain/facade/url'
import { AddNegotiation } from '@domain/useCases/negotiations/add'

export class AddNegotiationsService implements AddNegotiation {
  constructor(
    private readonly facadeUrl: FacadeUrl,
    private readonly methodHttpPostAdapter: MethodHttpPostAdapter
  ) {}

  public async onAddNegotiation(
    body: AddNegotiation.Props
  ): Promise<AddNegotiation.Response> {
    try {
      const url = this.facadeUrl.normalizeUrlByParams('deal')

      const { data } = await this.methodHttpPostAdapter.post<
        AddNegotiation.Response,
        AddNegotiation.Props
      >({
        url,
        body
      })

      return { data }
    } catch (error) {
      return {
        error: {
          message: 'Error on load zipCode informations',
          status: 'fetch error',
          type: 'error'
        }
      }
    }
  }
}
