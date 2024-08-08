import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomUserConfigurations extends Schema.Component {
  collectionName: 'components_custom_user_configurations';
  info: {
    displayName: 'User Configurations';
    icon: 'alien';
  };
  attributes: {
    Key: Attribute.String;
    Data: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.user-configurations': CustomUserConfigurations;
    }
  }
}
