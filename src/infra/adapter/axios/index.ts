import axios from 'axios'
import { MethodHttpGetAdapter } from 'src/data/protocols/adapter/http/get'

export class AxiosAdapter implements MethodHttpGetAdapter {
  public get<R>(props: MethodHttpGetAdapter.Props): Promise<R> {
    return axios.get(props.url)
  }
}
