import React from 'react';
import { Value } from '@udecode/plate-core';
import {
  getRootProps,
  StyledElementProps,
} from '@udecode/plate-styled-components';
import { getCollapsibleElementStyles } from './CollapsibleElement.styles';

export const CollapsibleElement = <V extends Value>(
  props: StyledElementProps<V>
) => {
  const { attributes, children, nodeProps } = props;

  const rootProps = getRootProps(props);
  const { root } = getCollapsibleElementStyles(props);

  return (
    <details
      {...attributes}
      css={root.css}
      className={root.className}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </details>
  );
};
