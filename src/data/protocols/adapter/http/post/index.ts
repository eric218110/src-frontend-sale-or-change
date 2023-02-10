export type MethodHttpPostAdapter = {
  post: <R, B>(props: MethodHttpPostAdapter.Props<B>) => Promise<R>
}

export namespace MethodHttpPostAdapter {
  export type Props<B> = {
    url: string
    body: B
  }
}
