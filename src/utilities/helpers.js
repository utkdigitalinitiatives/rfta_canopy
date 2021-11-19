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

export const filterBy = (currentURLQuery, currentURLFilters, clickedFilter, selected) => {
  let url
  let filter

  // first determine if we're adding or removing a filter
  if (selected) {
    filter = currentURLFilters ? `${currentURLFilters},${clickedFilter}` : `${clickedFilter}`
  } else {
    // normalize the filters so they match the "clickedFilter" formatting
    const individualFilters = currentURLFilters.replace(/%20/g, ' ').split(',')

    if (individualFilters.length > 1) {
      filter = individualFilters.filter(individualFilter => individualFilter !== clickedFilter)
      filter = filter.join()
    } else {
      filter = ''
    }
  }

  // once we have the filter, determine if we need to account for a query too
  if (currentURLQuery && filter) {
    url = `?q=${currentURLQuery}&filter=${filter}`
  } else if (currentURLQuery && !filter) {
    url = `?q=${currentURLQuery}`
  } else if (!currentURLQuery && filter) {
    url = `?filter=${filter}`
  } else {
    url = '/search'
  }

  navigate(url)
}
