import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "@qusay77/login-page";

export default {
	title: "LoginPage",
	component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;
export const MainLogin = Template.bind({});
export const SetPassword = Template.bind({});
SetPassword.args = {
	isNewPassword: true,
};
