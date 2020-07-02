import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// // click event to save pets
// $("#savePet").on("click", function () {
//   $.ajax({
//     type: "POST",
//     url: "/saved",
//     dataType: "json",
//     data: {
//       //list out information we are collecting for each pet and place here as examples below.
//       // title: $("#title").val(),
//       // author: $("#author").val(),
//       // created: Date.now()
//     }
//   }).then(function (data) {
//     console.log(data);
//     getUnread();
//     $("#author").val("");
//     $("#title").val("");
//   }
//   );
//   return false;
// });
