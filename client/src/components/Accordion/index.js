import React, {useState, useEffect} from "react";

export default function (props) {

    useEffect(() => {
        console.log("rendered")
    }, [])

  return (
    <div className = "accordion accordion-flush" id={`accordionFlush-${props.id}`}>
      <div className = "accordion-item">
        <h2 className = "accordion-header" id={`flush-${props.title}-heading`}>
          <button
            className = "accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-${props.id}`}
            aria-expanded="false"
            aria-controls={`flush-collapse-${props.title}`}
          >
            <h2> {props.title} </h2>
          </button>
        </h2>
        <div
          id={`flush-collapse-${props.id}`}
          className = "accordion-collapse collapse"
          aria-labelledby={`flush-${props.title}-heading`}
          data-bs-parent={`accordionFlush-${props.id}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
