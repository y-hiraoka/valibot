import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TKey: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseSchema',
      href: '../BaseSchema/',
      generics: [
        'unknown',
        'unknown',
        {
          type: 'custom',
          name: 'BaseIssue',
          href: '../BaseIssue/',
          generics: ['unknown'],
        },
      ],
    },
  },
  TValue: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseSchema',
      href: '../BaseSchema/',
      generics: [
        'unknown',
        'unknown',
        {
          type: 'custom',
          name: 'BaseIssue',
          href: '../BaseIssue/',
          generics: ['unknown'],
        },
      ],
    },
  },
  MapOutput: {
    type: {
      type: 'custom',
      name: 'Map',
      generics: [
        {
          type: 'custom',
          name: 'Output',
          href: '../Output/',
          generics: [
            {
              type: 'custom',
              name: 'TKey',
            },
          ],
        },
        {
          type: 'custom',
          name: 'Output',
          href: '../Output/',
          generics: [
            {
              type: 'custom',
              name: 'TValue',
            },
          ],
        },
      ],
    },
  },
};
