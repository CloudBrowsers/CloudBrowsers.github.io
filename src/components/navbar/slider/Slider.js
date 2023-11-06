import React, { useState } from "react";
import { Range } from "react-range";

const Slider = () => {
  const [values, setValues] = useState([0]);
  const trackWidth = `${(values[0] / 100) * 100}%`;

  return (
    <Range
      step={1}
      min={0}
      max={100}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "2px",
            width: "100%",
            backgroundColor: "#f2f1f2",
            margin: "3rem 0rem",
          }}
        >
          {children}
          <div
            style={{
              position: "absolute",
              height: "2px",
              width: trackWidth,
              backgroundColor: "#000000",
            }}
          />
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "50px",
            width: "50px",
            backgroundColor: "white",
            border: "2px solid #14295b",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "22px",
          }}
        >
          <div style={{ color: "#14295b", fontWeight: "bold" }}>{values}</div>
        </div>
      )}
      renderMark={({ props, index }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "40px",
            width: "2px",
            backgroundColor:
              index === 0 ||
              index === 20 ||
              index === 40 ||
              index === 60 ||
              index === 80 ||
              index === 100
                ? "rgb(218 217 217)"
                : null,
            position: "absolute",
            top: "0px",
          }}
        ></div>
      )}
    />
  );
};

export default Slider;
