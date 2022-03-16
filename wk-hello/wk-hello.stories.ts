import { html, TemplateResult } from 'lit';
import './wk-hello';

export default {
  title: 'Content/Hello',
  component: 'wk-hello',
  args: {
    markup: 'Word!',
  },
};

const Template = ({ markup }): TemplateResult =>
  html`
    <wk-hello>${markup}</wk-hello>
  `;

export const Hello = Template.bind({});
