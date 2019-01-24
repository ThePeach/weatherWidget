import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import EditableTitle from "../components/molecules/EditableTitle";

storiesOf("Molecules/EditableTitle", module).add("basic module", () => (
  <EditableTitle defaultTitle="The default title" />
));
