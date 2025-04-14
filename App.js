// const headingg= React.createElement("h1",{id:"color"},"hello from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingg);
// console.log(headingg)

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [
        React.createElement("h1",{id:"heading"},"i am h1 tag"),
        React.createElement("h2",{id:"heading"},"i am h2 tag"),
        React.createElement("h3",{id:"heading"},"i am h3 tag")
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