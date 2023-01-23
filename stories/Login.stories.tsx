import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "@qusay77/login-page";

export default {
	title: "Example/Input",
	component: Login,
	argTypes: {
		type: {
			control: "none",
		},
		isOpen: {
			control: "none",
		},
		value: {
			control: "none",
		},
	},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;
export const MainLogin = Template.bind({});
