import React from "react";

export default function (props) {


  return (
    <div className = "accordion accordion-flush" id={props.ids}>
      <div className = "accordion-item">
        <h2 className = "accordion-header" id={`flush-${props.title}-heading`}>
          <button
            className = "accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-${props.ids}`}
            aria-expanded="false"
            aria-controls={`flush-collapse-${props.title}`}
          >
            <h2> {props.title} </h2>
          </button>
        </h2>
        <div
          id={`flush-collapse-${props.ids}`}
          className = "accordion-collapse collapse"
          aria-labelledby={`flush-${props.title}-heading`}
          data-bs-parent={props.ids}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
