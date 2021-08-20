import React, { Component } from 'react';
import * as Popover from '@radix-ui/react-popover';

class IIIFBadge extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const red = '#ed1d33';
    const blue = '#2873ab';

    return (
      <div className="canopy-iiif-badge">
        <Popover.Root>
          <Popover.Trigger className="canopy-popover-trigger">
            <svg viewBox="0 0 493.35999 441.33334"
                 id="iiif-logo"
                 version="1.1">
              <title>IIIF Manifest Options</title>
              <g transform="matrix(1.3333333,0,0,-1.3333333,0,441.33333)">
                <g transform="scale(0.1)">
                  <path style={{fill: blue}} d="M 65.2422,2178.75 775.242,1915 773.992,15 65.2422,276.25 v 1902.5"/>
                  <path style={{fill: blue}} d="m 804.145,2640.09 c 81.441,-240.91 -26.473,-436.2 -241.04,-436.2 -214.558,0 -454.511,195.29 -535.9527,436.2 -81.4335,240.89 26.4805,436.18 241.0387,436.18 214.567,0 454.512,-195.29 535.954,-436.18"/>
                  <path style={{fill: red}} d="M 1678.58,2178.75 968.578,1915 969.828,15 1678.58,276.25 v 1902.5"/>
                  <path style={{fill: red}} d="m 935.082,2640.09 c -81.437,-240.91 26.477,-436.2 241.038,-436.2 214.56,0 454.51,195.29 535.96,436.2 81.43,240.89 -26.48,436.18 -241.04,436.18 -214.57,0 -454.52,-195.29 -535.958,-436.18"/>
                  <path style={{fill: blue}} d="m 1860.24,2178.75 710,-263.75 -1.25,-1900 -708.75,261.25 v 1902.5"/>
                  <path style={{fill: blue}} d="m 2603.74,2640.09 c 81.45,-240.91 -26.47,-436.2 -241.03,-436.2 -214.58,0 -454.52,195.29 -535.96,436.2 -81.44,240.89 26.48,436.18 241.03,436.18 214.57,0 454.51,-195.29 535.96,-436.18"/>
                  <path style={{fill: red}} d="m 3700.24,3310 v -652.5 c 0,0 -230,90 -257.5,-142.5 -2.5,-247.5 0,-336.25 0,-336.25 l 257.5,83.75 V 1690 l -258.61,-92.5 V 262.5 L 2735.24,0 v 2360 c 0,0 -15,850 965,950"/>
                </g>
              </g>
            </svg>
          </Popover.Trigger>
          <Popover.Anchor />
          <Popover.Content className="canopy-popover-content">
            <Popover.Close>
              <svg version="1.1"
                   id="popover-close"
                   viewBox="0 0 26 26">
                <path d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467C19.033,16.725,19.033,17.138,18.78,17.394z"/>
              </svg>
            </Popover.Close>
            <Popover.Arrow />
            <a href={this.props.url}
               target="_blank">
              Link to IIIF Manifest
            </a>
            <a href={`https://projectmirador.org/embed/?iiif-content=${this.props.url}`}
               target="_blank">
              Open in Mirador Viewer
            </a>
          </Popover.Content>
        </Popover.Root>
      </div>
    )
  }
}

export default IIIFBadge;
