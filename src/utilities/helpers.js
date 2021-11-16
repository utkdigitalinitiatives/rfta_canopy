export const searchParams = search => {
  const params = new URLSearchParams(search.slice(1))
  const q = params.get("q") || ""
  const filter = params.get("filter") || ""

  return { q, filter }
}
