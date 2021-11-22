import React from "react"
import { Indicator, Root } from "@radix-ui/react-checkbox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "@reach/router"
import { handleFacetUpdate } from "../../utilities/helpers"

const CurrentFilter = ({ filter }) => {
  const location = useLocation()
  const value = filter.replace(':', ': ')

  return (
    <small className="canopy-form-item-checkbox current-filter ms-2 my-1">
      <label id={`${value}`}>
        <div>{value}</div>
        <Root
          checked={true}
          onCheckedChange={selected => handleFacetUpdate(location, filter, selected)}
          aria-labelledby={`${value}`}
          name={value}
          value={value}
          className='current-filter-box'
        >
          <Indicator>
            <FontAwesomeIcon icon={faTimes} />
          </Indicator>
        </Root>
      </label>
    </small>
  )
}

export default CurrentFilter
