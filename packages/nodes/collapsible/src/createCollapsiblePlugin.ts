import {
  createPluginFactory,
  HotkeyPlugin,
  onKeyDownToggleElement,
} from '@udecode/plate-core';

export const ELEMENT_COLLAPSIBLE = 'collapsible';

/**
 * Enables support for collapsible, useful for
 * hiding content.
 */
export const createCollapsiblePlugin = createPluginFactory<HotkeyPlugin>({
  key: ELEMENT_COLLAPSIBLE,
  isElement: true,
  deserializeHtml: {
    rules: [
      {
        validNodeName: 'COLLAPSIBLE',
      },
    ],
  },
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
  options: {
    hotkey: ['mod+m', 'mod+l'], // VSCode like
  },
});
