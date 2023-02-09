export type MethodHttpGetAdapter = {
  get: <R>(props: MethodHttpGetAdapter.Props) => Promise<R>
}

export namespace MethodHttpGetAdapter {
  export type Props = {
    url: string
  }
}
