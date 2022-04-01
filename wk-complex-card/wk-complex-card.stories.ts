import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './wk-complex-card';

const cardVariantOptions = ['primary' , 'secondary' , 'tertiary']

export default {
  title: 'Content/Complex Card',
  component: 'wk-complex-card',
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: cardVariantOptions
    }
  },
  args: {
    label: 'The 10 Most Beautiful Beaches in the World',
    tag: 'Fashion',
    date: 'September 15, 2016',
    url: '#',
    rounded: false,
  },
};

const Template = ({
  label,
  tag,
  date,
  url,
}): TemplateResult =>
  html`
    <outline-container>
      <wk-complex-card
        label="${ifDefined(label)}"
        tag="${ifDefined(tag)}"
        date=${ifDefined(date)}
        url="${ifDefined(url)}"
      >
      </wk-complex-card>
    </outline-container>
  `;

export const ComplexCard = Template.bind({});
