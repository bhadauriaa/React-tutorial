const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}, React.createElement("h1",{},"I'm an H1 Tag")));




// const heading=React.createElement("h1",{},"Hello world from react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);