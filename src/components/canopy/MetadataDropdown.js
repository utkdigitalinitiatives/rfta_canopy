import React, { Component } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiChevronDown } from "react-icons/bi"

class MetadataDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {label} = this.props

    return (
      <div className="canopy-control--item canopy-control--item-dropdown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <span>{label}</span>
            <BiChevronDown />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            xyz
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    )
  }
}

export default MetadataDropdown;
