import React from 'react';
import { colors } from '../../../';

function HangUpIconSVG(props) {

    const onCall = (
        <style>
        {`
        .HangUpIconSVGbackground {
            fill: ${colors.regularRed};
            stroke:${colors.regularRed};
            stroke-miterlimit:10;
            stroke-width:'2px'
        }
        .HangUpIconSVGforeground {
            fill: ${colors.offWhite};
        }
        .HangUpIconSVG:hover > svg > .HangUpIconSVGbackground {
            fill: #CB3750;
        }
        `}
        </style>
    );
    const loading = (
        <style>
        {`
        .HangUpIconSVGbackground {
            fill: none;
            stroke:${colors.black};
            stroke-miterlimit:10;
            stroke-width: 2px;
        }
        .HangUpIconSVGforeground {
            fill: ${colors.offWhite};
        }
        @keyframes blink {
            0% {
              opacity: .2;
            }
            20% {
              opacity: 1;
            }
            100% {
              opacity: .2;
            }
        }
        .loading1, .loading2, .loading3 {
            animation-name: blink;
            animation-duration: 1.4s;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
        }
        .loading2 {
            animation-delay: .2s;
        }
        .loading3 {
            animation-delay: .4s;
        }
        `}
        </style>
    );

  return (
    <div style={{display: 'inline-block'}}>
    {props.loading? loading : onCall}
    <div
    className="HangUpIconSVG"
    style={Object.assign({
      display: 'inline-block',
      cursor: 'pointer',
    },props.style)
    }
    onClick={!props.loading? props.onClick : null}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
      {props.noBackground? null : (<circle className="HangUpIconSVGbackground" cx="181" cy="181" r="180" />)}
      {props.loading?
      (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
        <circle className="loading1" cx="110" cy="181" r="30" />
        <circle className="loading2" cx="180" cy="181" r="30" />
        <circle className="loading3" cx="250" cy="181" r="30" />
      </svg>
      ) : null}

      {props.loading? null : (<path className="HangUpIconSVGforeground" d="M300.76,207.31a15.71,15.71,0,0,1,4,1.28c16.42,8.66,31.87,18.7,44.94,32a50.53,50.53,0,0,1,11.54,16.87,20.54,20.54,0,0,1-4.19,22.35,23,23,0,0,1-17.2,7.74,236.87,236.87,0,0,1-41.85-.83,4.19,4.19,0,0,1-4.19-3.56c-1.3-6.55-2.63-13.1-3.76-19.67-1.74-10.21-3.25-20.47-5-30.66-.77-4.31-1.21-4.81-5.56-5-11.26-.55-45.52-.5-51.34,0-4,.35-4.6.82-5.31,4.73-1.65,9.1-3,18.29-4.58,27.41-1.28,7.41-2.64,14.8-4,22.18a5.07,5.07,0,0,1-5.13,4.71,206.9,206.9,0,0,1-49-.33,3.39,3.39,0,0,1-1.21-.32c-9.31-5.5-17.35-15.09-12.43-28.21,3.39-9,9.73-15.92,16.74-22.24a167.82,167.82,0,0,1,38.71-26.35,48.71,48.71,0,0,1,16.18-4C230,204.21,285.48,203.94,300.76,207.31ZM204.29,233a18.79,18.79,0,0,0-13.14,2.23,54.57,54.57,0,0,0-23.44,26.22c-1.8,3.9-1,5.32,3.24,6.09a50.7,50.7,0,0,0,23.29-1.31,2.74,2.74,0,0,0,1.55-1.53c1.64-5.67,3.16-11.39,4.69-17.1C201.78,242.84,203,238.09,204.29,233Zm99.77,0c.19,1.21.25,2.09.49,3q3.13,11.21,6.27,22.39c.74,2.61.88,6.11,2.64,7.55s5.48,1.86,8.37,2a106.36,106.36,0,0,0,15.46-.4c4-.44,4.61-2,3.14-5.71a34.5,34.5,0,0,0-2.51-5.15c-5.27-8.81-11.74-16.47-20.92-21.32a19.25,19.25,0,0,0-12.94-2.39Z" transform="translate(-71 -70)"/>)}

      </svg>
      </div>
      </div>
  );
}

export default HangUpIconSVG;
