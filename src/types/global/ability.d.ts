import Vue from 'vue';
import { AnyAbility } from '@casl/ability';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ability: AnyAbility;
    $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean;
  }
}
