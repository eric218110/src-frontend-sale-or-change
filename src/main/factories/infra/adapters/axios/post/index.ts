import { MethodHttpPostAdapter } from '@data/protocols/adapter/http/post'
import { AxiosAdapter } from '@infra/adapter/axios'

export const makeAxiosPostAdapter = (): MethodHttpPostAdapter =>
  new AxiosAdapter()
