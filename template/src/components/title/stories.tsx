import * as React from "react";
import Title from ".";

export default { title: "Title", component: Title };

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "hello people",
};
