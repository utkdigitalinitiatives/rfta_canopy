import { navigate } from "@reach/router"

export const urlParams = (search) => {
  const params = new URLSearchParams(search.slice(1))
  const query = params.get("q") || ""
  let filter = params.get("filter") || ""

  return { query, filter }
}

export const searchBy = (inquiry, filter) => {
  filter ? navigate(`?q=${inquiry}&filter=${filter}`) : navigate(`?q=${inquiry}`)
}

export const filterBy = (query, currentFilter, clickedFilter, status) => {
  let url
  let filter

  // first determine if we're adding or removing a filter
  if (status) {
    filter = currentFilter ? `${currentFilter},${clickedFilter}` : `${clickedFilter}`
  } else {
    // normalize the filters so they match the "clickedFilter" formatting
    const individualFilters = currentFilter.replace(/%20/g, ' ').split(',')

    if (individualFilters.length > 1) {
      filter = individualFilters.filter(filter => filter !== clickedFilter)
      filter = filter.join()
    } else {
      filter = ''
    }
  }

  // once we have the filter, determine if we need to account for a query too
  if (query && filter) {
    url = `?q=${query}&filter=${filter}`
  } else if (query && !filter) {
    url = `?q=${query}`
  } else if (!query && filter) {
    url = `?filter=${filter}`
  } else {
    url = '/search'
  }

  navigate(url)
}
