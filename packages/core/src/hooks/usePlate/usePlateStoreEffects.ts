import { useEffect } from 'react';
import { useDeepCompareEffect } from 'use-deep-compare';
import { isUndefined } from '../../common/utils/types.utils';
import { PlateProps } from '../../components/Plate';
import { getPlateActions } from '../../stores/plate/platesStore';
import { PlatePlugin } from '../../types/plugins/PlatePlugin';

export type UsePlateStoreEffects<T = {}> = Pick<
  PlateProps<T>,
  | 'id'
  | 'value'
  | 'enabled'
  | 'onChange'
  | 'editableProps'
  | 'plugins'
  | 'decorate'
  | 'renderElement'
  | 'renderLeaf'
>;

export const usePlateStoreEffects = <T = {}>({
  id,
  value: valueProp,
  enabled: enabledProp = true,
  onChange,
  editableProps,
  plugins,
  decorate,
  renderElement,
  renderLeaf,
}: UsePlateStoreEffects<T>) => {
  const plateActions = getPlateActions(id);

  // Store Slate.value
  useEffect(() => {
    if (!isUndefined(valueProp)) {
      valueProp && plateActions.value(valueProp);
    }
  }, [valueProp, plateActions]);

  // Store enabled
  useEffect(() => {
    if (!isUndefined(enabledProp)) {
      plateActions.enabled(enabledProp);
    }
  }, [enabledProp, plateActions]);

  // Store onChange
  useEffect(() => {
    if (!isUndefined(onChange)) {
      plateActions.onChange(onChange);
    }
  }, [onChange, plateActions]);

  // Store editableProps
  useDeepCompareEffect(() => {
    if (!isUndefined(editableProps)) {
      plateActions.editableProps(editableProps);
    }
  }, [editableProps, plateActions]);

  // Store decorate
  useEffect(() => {
    if (!isUndefined(decorate)) {
      plateActions.decorate(decorate);
    }
  }, [decorate, plateActions]);

  // Store plugins
  useEffect(() => {
    if (!isUndefined(renderElement)) {
      plateActions.renderElement(renderElement);
    }
  }, [renderElement, plateActions]);

  // Store plugins
  useEffect(() => {
    if (!isUndefined(renderLeaf)) {
      plateActions.renderLeaf(renderLeaf);
    }
  }, [renderLeaf, plateActions]);

  // Store plugins
  useEffect(() => {
    if (!isUndefined(plugins)) {
      plateActions.plugins(plugins as PlatePlugin[]);
    }
  }, [plugins, plateActions]);
};
