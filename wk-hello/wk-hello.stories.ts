import { html, TemplateResult } from 'lit';
import './wk-hello';

export default {
  title: 'WK/Hello',
  component: 'wk-hello',
};

const Template = ({ markup }): TemplateResult =>
  html`
    <wk-hello></wk-hello>
  `;

export const Hello = Template.bind({});
