import React from "react"
import { Indicator, Root } from "@radix-ui/react-checkbox"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "@reach/router"
import { handleFacetUpdate } from "../../utilities/helpers"

const CurrentFilter = ({ filter }) => {
  const location = useLocation()
  const value = filter.replace(':', ': ')

  return (
    <span className="canopy-form-item-checkbox current-filter">
      <label id={`${value}`}>
        {value}
        <Root
          checked={true}
          onCheckedChange={selected => handleFacetUpdate(location, filter, selected)}
          aria-labelledby={`${value}`}
          name={value}
          value={value}
          className='current-filter-box'
        >
          <Indicator>
            <svg viewBox="0 0 32 32">
              <g transform="scale(1)">
                <path d="M21.443,10.584l-.027-.027a1.9,1.9,0,0,0-2.688,0L16,13.285l-2.728-2.728a1.9,1.9,0,0,0-2.688,0l-.027.027a1.9,1.9,0,0,0,0,2.688L13.285,16l-2.728,2.728a1.9,1.9,0,0,0,0,2.688l.027.027a1.9,1.9,0,0,0,2.688,0L16,18.715l2.728,2.728a1.9,1.9,0,0,0,2.688,0l.027-.027a1.9,1.9,0,0,0,0-2.688L18.715,16l2.728-2.728A1.9,1.9,0,0,0,21.443,10.584Z" />
              </g>
            </svg>
          </Indicator>
        </Root>
      </label>
    </span>
  )
}

export default CurrentFilter
