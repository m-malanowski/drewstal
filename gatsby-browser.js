import React from "react";
import "./src/styles/global.scss";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import PrimaryLayout from "./src/layouts/PrimaryLayout";

const transitionDelay = 500;

export const wrapPageElement = ({ element, props }) => {
    return <PrimaryLayout {...props}>{element}</PrimaryLayout>;
};

export const shouldUpdateScroll = ({
                                       routerProps: { location },
                                       getSavedScrollPosition
                                   }) => {
    if (location.action === "PUSH") {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        );
    }
    return false;
};


// export const onClientEntry = () => {
//     document.querySelector('.loader-wrapper').style.display = "block";
// }
// export const onPreRouteUpdate = () => {
//     document.querySelector('.loader-wrapper').style.display = "block";
// }
// export const onRouteUpdateDelayed = () => {
//     document.querySelector('.loader-wrapper').style.display = "block";
// }
// export const onRouteUpdate = () => {
//     setTimeout(() => {
//         document.querySelector('.loader-wrapper').style.display = "none";
//     }, 1000);
// }