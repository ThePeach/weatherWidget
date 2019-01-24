import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../components/atoms/Button";
import Title from "../components/atoms/Title";

storiesOf("Atoms/Title", module)
  .add("default", () => <Title>A title</Title>)
  .add("different heading size", () => (
    <Title headingSize={1}>A h1 title</Title>
  ));

storiesOf("Atoms/Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
