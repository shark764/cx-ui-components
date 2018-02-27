import React from 'react';

function CaretIconSVG(props) {



  return (
    <div style={{display: 'inline-block'}}>
    <div
    className={props.className}
    style={Object.assign({
      display: 'inline-block',
      cursor: 'pointer',
    },props.style)
    }
    onClick={props.onClick}
    >
    {props.direction === "down" &&
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.21 88.74">
      <polyline points="10.5 10.5 76.69 74.21 143.71 10.5" style={{fill:'none',stroke:'#07487a',strokeLinecap:'round',strokeMiterlimit:'10',strokeWidth:'21px'}}/></svg>
    }
    {props.direction === "up" &&
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.21 88.74">
      <polyline points="143.71 78.24 77.52 14.53 10.5 78.24" style={{fill:'none',stroke:'#07487a',strokeLinecap:'round',strokeMiterlimit:'10',strokeWidth:'21px'}}/></svg>
    }
    {props.direction === "right" &&
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133 107.29">
    <path d="M194,293.14,306,250h0L194,206.86" transform="translate(-183.5 -196.36)" style={{fill:'none',stroke:'#07487a',strokeLinecap:'round',strokeMiterlimit:'10',strokeWidth:'21px'}} />
    </svg>
  }
  {
    props.direction === "left" &&
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133 107.29">
    <path d="M306,206.86,194,250h0l112,43.14" transform="translate(-183.5 -196.36)" style={{fill:'none',stroke:'#07487a',strokeLinecap:'round',strokeMiterlimit:'10',strokeWidth:'21px'}} />
    </svg>
  }
      </div>
      </div>
  );
}

export default CaretIconSVG;
