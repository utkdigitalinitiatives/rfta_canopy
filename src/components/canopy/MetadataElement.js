import React from 'react'
import { Link } from "gatsby"

const MetadataElement = ({ element, language }) => {
  const { label, value } = element

  const parseElement = () => {
    return(
      <>
        <dt>{getLabel(label)}:</dt>
        {getValues(value)}
      </>
    )
  }

  const getLabel = label => label[language][0]

  const getValues = multiple_values => {
    const the_label = getLabel(label)
    const do_not_filter = ['Extent', 'Date', 'Description', 'Descripción', 'Título']
    let valueArray = multiple_values[language]
    let lastItemInArray = valueArray[valueArray.length - 1]

    return multiple_values[language].map((value, index) => {
      if (do_not_filter.includes(the_label)) {
        return (
          <dd key={index}>
            {value}
          </dd>
        )
      }
      else if (valueArray.length > 1 && value !== lastItemInArray) {
        return (
          <dd key={index}>
            <Link to={`/interviews/?filter=${the_label}:${value}`}>
              {value},&nbsp;
            </Link>
          </dd>
        )
      }

      return (
        <dd key={index}>
          <Link to={`/interviews/?filter=${the_label}:${value}`}>
            {value}
          </Link>
        </dd>
      )
    })
  }

  return parseElement()
}

export default MetadataElement
