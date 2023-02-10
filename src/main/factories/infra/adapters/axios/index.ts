import { MethodHttpGetAdapter } from '@data/protocols/adapter/http/get'
import { AxiosAdapter } from '@infra/adapter/axios'

export const makeAxiosAdapter = (): MethodHttpGetAdapter => new AxiosAdapter()
