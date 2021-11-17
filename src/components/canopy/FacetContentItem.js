import React from "react"
import { Indicator, Root } from "@radix-ui/react-checkbox"

const FacetContentItem = ({ value, count, id }) => {

  const handleFacetUpdate = (status) => {
    // status comes as bool
    // somehow update url param for this in gatsby
  }

  // const { status, value, count, id } = this.props

  return (
    <span className="canopy-form-item-checkbox">
      <label id={id}>
        <Root
          // checked={status}
          onCheckedChange={handleFacetUpdate}
          aria-labelledby={id}
        >
          <Indicator>
            <svg viewBox="0 0 32 32">
              <g transform="scale(1)">
                <path d="M21.443,10.584l-.027-.027a1.9,1.9,0,0,0-2.688,0L16,13.285l-2.728-2.728a1.9,1.9,0,0,0-2.688,0l-.027.027a1.9,1.9,0,0,0,0,2.688L13.285,16l-2.728,2.728a1.9,1.9,0,0,0,0,2.688l.027.027a1.9,1.9,0,0,0,2.688,0L16,18.715l2.728,2.728a1.9,1.9,0,0,0,2.688,0l.027-.027a1.9,1.9,0,0,0,0-2.688L18.715,16l2.728-2.728A1.9,1.9,0,0,0,21.443,10.584Z" />
              </g>
            </svg>
          </Indicator>
        </Root>
        <strong>{value} <em>({count})</em></strong>
      </label>
    </span>
  )
}

export default FacetContentItem
