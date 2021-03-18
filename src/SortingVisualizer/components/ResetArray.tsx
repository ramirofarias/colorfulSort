import React from "react";

const ResetArray = (props: {
  disabledButton: boolean | undefined;
  generateBars: React.MouseEventHandler<HTMLButtonElement>;
  color1: any;
  color2: any[];
  color3: any;
}) => {
  return (
    <button
      data-testid="resetArray"
      disabled={props.disabledButton}
      onClick={props.generateBars}
      style={{
        background: `linear-gradient(90deg,
            rgba( ${props.color1},${props.color2[0]}, ${props.color3},.7),
            rgba(${props.color1},${props.color2[126]}, ${props.color3},.7) 50%,
            rgba(${props.color1},${props.color2[254]}, ${props.color3},.7) 100%
    )`,
        borderRadius: "3px",
        border: "none",
        color: "white",
        fontWeight: "bolder",
        textTransform: "uppercase",
        height: "48px",
        padding: "0 30px",
        boxShadow: `0 0 5px 2px rgba(0,0,0,.4)`,
        textShadow: "0px 0px 5px rgba(0,0,0, .4)",
      }}
    >
      Generate pretty colors
    </button>
  );
};

export default ResetArray;
