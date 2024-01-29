/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const RequiredIcon15 = ({ color = "#DB2777", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_988_1032)">
        <path
          clipRule="evenodd"
          d="M8.00033 0L6.80505 1.30539L5.22645 0.481353L4.55514 2.11075L2.78388 1.86808L2.71989 3.62748L0.96996 3.9955L1.5186 5.67157L0.000666639 6.60894L1.10129 8.001L0 9.39239L1.5186 10.3291L0.970626 12.0058L2.71989 12.3745L2.78388 14.1333L4.55514 13.8906L5.22645 15.5206L6.80505 14.6966L8.00033 16L9.19695 14.6966L10.7749 15.5206L11.4462 13.8906L13.2181 14.1333L13.2828 12.3745L15.032 12.0058L14.4827 10.3291L16 9.39239L14.8994 8.001L16 6.60894L14.4827 5.67157L15.032 3.9955L13.2828 3.62748L13.2181 1.86808L11.4462 2.11075L10.7749 0.481353L9.19695 1.30539L8.00033 0ZM8.00033 1.77941L8.93363 2.79812L10.1642 2.15609L10.6889 3.42748L12.0662 3.2388L12.1155 4.61019L13.4734 4.89554L13.0461 6.19692L14.2194 6.92162L13.3674 8.00167L14.2194 9.07904L13.0461 9.80307L13.4734 11.1065L12.1155 11.3925L12.0662 12.7625L10.6889 12.5739L10.1642 13.8466L8.93363 13.2039L8.00033 14.2219L7.06771 13.2039L5.83709 13.8466L5.31311 12.5739L3.93584 12.7625L3.88717 11.3925L2.52856 11.1065L2.95521 9.80307L1.78126 9.07904L2.63389 8.00167L1.78059 6.92229L2.95588 6.19692L2.52923 4.89554L3.88717 4.61019L3.93584 3.2388L5.31311 3.42748L5.83709 2.15609L7.06771 2.79812L8.00033 1.77941Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_988_1032">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

RequiredIcon15.propTypes = {
  color: PropTypes.string,
};
