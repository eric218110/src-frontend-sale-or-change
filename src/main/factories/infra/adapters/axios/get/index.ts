import { MethodHttpGetAdapter } from '@data/protocols/adapter/http/get'
import { AxiosAdapter } from '@infra/adapter/axios'

export const makeAxiosGetAdapter = (): MethodHttpGetAdapter =>
  new AxiosAdapter()
