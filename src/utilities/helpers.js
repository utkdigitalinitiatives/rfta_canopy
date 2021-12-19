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
    if (a.label.en[0] === element) {
      keywords = a.value.en
    }
  })
  return keywords
}

export const findPeople = (metadata, element) => {
  var people = []
  metadata.forEach(function(a) {
    if (a.label.en[0] === element) {
      people = a.value.en.map(person => {
        return {
          "@type": "Person",
          "name": person
        }
      })
    }
  })
  return people
}

export const findLanguage = (metadata) => {
  let language = "";
  metadata.forEach(function(a) {
    if (a.label.en[0] === "Language") {
      if (a.value.en[0] === "English") {
        language = "en"
      }
      else {
        language = "es"
      }
    }
  })
  return language
}

export const determineType = (metadata) => {
  let objectType = "";
  metadata.forEach(function(element) {
    if (element.label.en[0] === "Format") {
      if (element.value.en[0] === "motion pictures (visual works)") {
        objectType = "VideoObject"
      }
      else {
        objectType = "AudioObject"
      }
    }
  })
  return objectType
}

export const convertDuration = (metadata) => {
  let duration = "";
  metadata.forEach(function(element) {
    if (element.label.en[0] === "Extent") {
      duration = element.value.en[0]
    }
  })
  const duration_split = duration.split(':')
  return "PT" + parseInt(duration_split[0]) + "H" + parseInt(duration_split[1]) + "M" + parseInt(duration_split[2]) + "S"
}
