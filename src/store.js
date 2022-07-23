// // import { configureStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import rootred from "./redux/reducers/main";

// const store = configureStore(
//     rootred 
// );

// export default store;


import { createStore } from "redux";
import rootred from "./redux/reducers/main";


const store = createStore(
    rootred
);


export default store;