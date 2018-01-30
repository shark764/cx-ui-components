import React from 'react';
import * as Colors from '../colors.js';

function UnMutedIconSVG(props) {

  return (
    <div style={{display: 'inline-block'}}>
    <style>
    {`
    .UnMutedIconSVGbackground {
        fill: ${Colors.darkGreen};
        stroke:${Colors.black};
        stroke-miterlimit:10;
        stroke-width:'2px'
    }
    .UnMutedIconSVGforeground {
        fill: ${Colors.offWhite};
    }
    .UnMutedIconSVG:hover > svg > .UnMutedIconSVGbackground {
        fill: ${Colors.hoverDarkGreen};
    }
    `}
    </style>
    <div
    className="UnMutedIconSVG"
    style={Object.assign({
      display: 'inline-block',
      cursor: 'pointer',
    },props.style)  
    }
    onClick={props.onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
      <title>microphone</title>
      <circle className="UnMutedIconSVGbackground" cx="181" cy="181" r="180" />
      <line x1="145.96" y1="276.52" x2="219.88" y2="276.52" style={{fill:'none',stroke:Colors.offWhite,strokeLinecap:'round',strokMiterlimit:'10',strokeWidth:'17px'}}/>
      <rect x="136.36" y="85.48" width="89.28" height="141.11" rx="44.64" ry="44.64" style={{fill:'none',stroke:Colors.offWhite,strokeMiterlimit:'10',strokeWidth:'12px'}}/>
      <path d="M315.29,238v14.38A65.48,65.48,0,0,1,250,317.68h0a65.48,65.48,0,0,1-65.29-65.29V238" transform="translate(-69 -69)" style={{fill:'none',stroke:Colors.offWhite,strokeLinecap:'round',strokeMiterlimit:'10',strokeWidth:'12px'}}/>
      </svg>

      </div>
      </div>
  );
}

export default UnMutedIconSVG;
