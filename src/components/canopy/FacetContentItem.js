import React, { useState } from "react"
import { Indicator, Root } from "@radix-ui/react-checkbox"
import { useLocation } from "@reach/router"
import { filterBy, urlParams } from "../../utilities/helpers"

const FacetContentItem = ({ value, count, id, label }) => {
  const [checked, setChecked] = useState(false)
  const location = useLocation()

  const handleFacetUpdate = (selected) => {
    setChecked(!checked)
    const { query, filter } = urlParams(location.search)
    const clickedFilter = `${label}:${value}`

    filterBy(query, filter, clickedFilter, selected)
  }

  return (
    <span className="canopy-form-item-checkbox">
      <label id={id}>
        <Root
          checked={checked}
          onCheckedChange={selected => handleFacetUpdate(selected)}
          aria-labelledby={id}
          name={label}
          value={value}
        >
          <Indicator>
            <svg viewBox="0 0 32 32">
              <g transform="scale(1)">
                <path d="M21.443,10.584l-.027-.027a1.9,1.9,0,0,0-2.688,0L16,13.285l-2.728-2.728a1.9,1.9,0,0,0-2.688,0l-.027.027a1.9,1.9,0,0,0,0,2.688L13.285,16l-2.728,2.728a1.9,1.9,0,0,0,0,2.688l.027.027a1.9,1.9,0,0,0,2.688,0L16,18.715l2.728,2.728a1.9,1.9,0,0,0,2.688,0l.027-.027a1.9,1.9,0,0,0,0-2.688L18.715,16l2.728-2.728A1.9,1.9,0,0,0,21.443,10.584Z" />
              </g>
            </svg>
          </Indicator>
        </Root>
        {value} ({count})
      </label>
    </span>
  )
}

export default FacetContentItem
