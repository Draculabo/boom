import { PropType, ExtractPropTypes } from 'vue';
export const buttonProps = {
  type: {
    type: String as PropType<'normal' | 'warning'>,
    default: 'normal',
  },
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
