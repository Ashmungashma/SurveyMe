
import Button from "@material-ui/core/es/Button/Button";
import MultipleChoice from "../components/MultipleChoice";
import React from "react";


export default () => (
  <div>
    <h1>Survey Form</h1>
    <h2>Questions:</h2>
    <MultipleChoice questionText="What is your name?"/>
    <Button variant="contained" color="secondary">
      Bello Bello
    </Button>
  </div>
);
