// const headingg= React.createElement("h1",{id:"color"},"hello from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingg);
// console.log(headingg)
import React  from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [
        React.createElement("h1",{id:"heading2"},"i am h1 tag"),
        React.createElement("h2",{id:"heag3"},"i am h2 tag"),
        React.createElement("h3",{id:"heading4"},"i am h3 tag")
       ]
    ),
    React.createElement("div",{id:"child2"},
        [
         React.createElement("h1",{id:"heading"},"i am h1 tag"),
         React.createElement("h2",{id:"heading"},"i am h2 tag"),
         React.createElement("h3",{id:"heading"},"i am h3 tag")
        ]
     )
)


        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        console.log(parent)