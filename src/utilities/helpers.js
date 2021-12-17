import { navigate } from "@reach/router"

export const urlParams = (search) => {
  const params = new URLSearchParams(search.slice(1))
  const query = params.get("q") || ""
  const filter = params.get("filter") || ""

  return { query, filter }
}

export const handleFacetUpdate = (location, clickedFilter, selected) => {
  const { query, filter } = urlParams(location.search)

  filterBy(query, filter, clickedFilter, selected)
}

export const searchBy = (inquiry, filter) => {
  filter ? navigate(`/interviews?q=${inquiry}&filter=${filter}`) : navigate(`/interviews?q=${inquiry}`)
}

// normalize the filters so they match the metadata
export const listIndividualFilters = currentURLFilters => currentURLFilters.replace(/%20/g, ' ').split(/,(?=\w)/)

export const filterBy = (currentURLQuery, currentURLFilters, clickedFilter, selected) => {
  let url
  let filter

  // first determine if we're adding or removing a filter
  if (selected) {
    filter = currentURLFilters ? `${currentURLFilters},${clickedFilter}` : `${clickedFilter}`
  } else {
    const individualFilters = listIndividualFilters(currentURLFilters)

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
    url = '/interviews'
  }

  navigate(url)
}

export const filterLabelsAndValues = currentURLFilters => {
  const individualFilters = listIndividualFilters(currentURLFilters)
  const labelsAndValues = individualFilters.map(filter => {
    const property = filter.split(':')

    return {
      label: property[0],
      value: property[1],
    }
  })

  return labelsAndValues
}

export const findKeywords = (metadata, element) => {
  let keywords = [];
  metadata.forEach(function(a) {
    if (a.label.en[0] == element) {
      keywords = a.value.en
    }
  })
  return keywords
}