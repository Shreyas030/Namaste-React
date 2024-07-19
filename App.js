//React(library of js) can be used in small portion of your project but in frameworks whole project

// Heading is a react Object
// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     " Hello From React "
// );
// console.log(heading);It is returning Object


// const root = ReactDOM.createRoot(document.getElementById("root"));

//Render function is converting that Object in H1 tag
// root.render(heading);


//! creating this :->
/* 
<div id="parent">
    <div id="child">
        <h1> I am h1 </h1>
        <h2> I am h1 </h2>
    </div>
<div/> 
*/

const parent = React.createElement(
    "div", { id: "parent" }, React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, " I am h1 "),
        React.createElement("h2", {}, " I am h2 ")
        ]

    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

