import axios from 'axios'
import { MethodHttpGetAdapter } from 'src/data/protocols/adapter/http/get'
import { MethodHttpPostAdapter } from 'src/data/protocols/adapter/http/post'

export class AxiosAdapter
  implements MethodHttpGetAdapter, MethodHttpPostAdapter
{
  public get<R>(props: MethodHttpGetAdapter.Props): Promise<R> {
    return axios.get(props.url)
  }

  public post<R, B>(props: MethodHttpPostAdapter.Props<B>): Promise<R> {
    return axios.post(props.url, props.body)
  }
}
