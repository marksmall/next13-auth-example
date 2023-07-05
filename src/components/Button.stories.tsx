import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const BUTTON_TEXT = 'Submit Me';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { bgColor: 'bg-green-500', children: BUTTON_TEXT },
};

// export const Disabled: Story = {
//   args: { isDisabled: true, children: BUTTON_TEXT },
// };

// export const Icon: Story = {
//   args: { children: <GBIcon className="mr-2 w-4" /> },
// };

// export const IconAndText: Story = {
//   args: {
//     children: (
//       <>
//         <p>{BUTTON_TEXT}</p>
//       </>
//     ),
//   },
// };

// export const Circle: Story = {
//   args: {
//     children: (
//       <>
//         <p>{BUTTON_TEXT}</p>
//       </>
//     ),
//   },
// };
