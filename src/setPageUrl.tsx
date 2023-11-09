export function setPageUrl(res: string) {
  window.open(`http://localhost:5174?${res}`, '_self')
}
