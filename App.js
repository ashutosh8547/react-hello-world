
import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement(
    "div", {"id":"parent"}, [React.createElement(
"div", {"id":"child1"},  [React.createElement("h1",{"id":"heading"},"Hello From react h1")
    , React.createElement("h2",{"id":"heading2"},"Hello From react h2")
]
),
React.createElement("div", {"id":"child2"},  
    [React.createElement("h3",{"id":"heading3"},"Hello From react h3")
    , React.createElement("h4",{"id":"heading4"},"Hello From react h4")
]
) ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
