import { Value } from '@udecode/plate-core';
import {
  createStyles,
  StyledElementProps,
} from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';

export const getCollapsibleElementStyles = <V extends Value>(
  props: StyledElementProps<V>
) =>
  createStyles(
    { prefixClassNames: 'CollapsibleElement', ...props },
    {
      root: [
        tw`my-2 mx-0`,
        css`
          border-left: 2px solid #ddd;
          padding: 10px 20px 10px 16px;
          color: #aaa;
        `,
      ],
    }
  );
