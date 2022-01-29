import { IEnvironment } from '@nx-xplat-template/xplat/core';
import { deepMerge } from '@nx-xplat-template/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
