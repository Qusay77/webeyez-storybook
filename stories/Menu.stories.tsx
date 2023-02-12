import { ComponentStory, ComponentMeta } from "@storybook/react";
import Side from "@qusay77/side-menu";

export default {
	title: "Example/Side",
	component: Side,
	argTypes: {
		backgroundColor: { control: "color" },
		handleClick: {
			action: "clicked",
		},
	},
} as ComponentMeta<typeof Side>;

export interface SideType {
  label: string;
  isActive: boolean;
  HasUnderLine?: boolean;
  hasArrow?: boolean;
  IsExpanded?: boolean;
}

const menuElements: Array<SideType> = [
	{
		label: "Dashboard",
		isActive: false,
	},
	{
		label: "Business",
		isActive: false,
		hasArrow: true,
		IsExpanded: false,
	},
	{
		label: "Technology",
		isActive: false,
		hasArrow: true,
		IsExpanded: false,
	},
	{
		label: "Sessions",
		isActive: true,
	},
	{
		label: "Alerts",
		isActive: false,
		HasUnderLine: true,
	},
	{
		label: "Implementation",
		isActive: false,
	},
	{
		label: "Updates",
		isActive: false,
	},
];

const Template: ComponentStory<typeof Side> = () => (
	<Side menuElements={menuElements} />
);

export const Large = Template.bind({});
