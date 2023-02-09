export type FacadeUrl = {
  normalizeUrlByParams: (
    endPoint: string,
    params: Record<string, string | number>,
    dontUseDefaultUrl?: boolean
  ) => string
  loadDefaultUrl: () => string
}
