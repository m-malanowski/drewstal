import React from "react";
import PrimaryLayout from "./src/layouts/PrimaryLayout";

    export const wrapPageElement = ({ element, props }) => {
      return <PrimaryLayout {...props}>{element}</PrimaryLayout>;
    };
