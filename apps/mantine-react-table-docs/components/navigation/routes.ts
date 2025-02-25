export type RouteItem = {
  href: string;
  label: string;
  items?: RouteItem[];
  divider?: boolean;
  external?: boolean;
  secondaryItems?: RouteItem[];
};

export const routes: Array<RouteItem> = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/changelog',
    label: 'Changelog & Roadmap',
  },
  {
    label: 'Getting Started',
    href: '/docs/getting-started',
    items: [
      {
        href: '/docs/getting-started/install',
        label: 'Install',
      },
      {
        href: '/docs/getting-started/usage',
        label: 'Usage',
      },
    ],
  },
  {
    label: 'API Reference',
    href: '/docs/api',
    items: [
      {
        label: 'Options',
        href: '/docs/api#options',
        items: [
          {
            href: '/docs/api/table-options',
            label: 'Table Options (Props)',
          },
          {
            href: '/docs/api/column-options',
            label: 'Column Options',
          },
          {
            href: '/docs/api/state-options',
            label: 'State Options',
          },
        ],
      },
      {
        label: 'Instance APIs',
        href: '/docs/api#instance-apis',
        items: [
          {
            href: '/docs/api/table-instance-apis',
            label: 'Table Instance APIs',
          },
          {
            href: '/docs/api/column-instance-apis',
            label: 'Column Instance APIs',
          },
          {
            href: '/docs/api/row-instance-apis',
            label: 'Row Instance APIs',
          },
          {
            href: '/docs/api/cell-instance-apis',
            label: 'Cell Instance APIs',
          },
        ],
      },
    ],
  },
  {
    label: 'Quick Examples',
    href: '/docs/examples',
    items: [
      {
        href: '/docs/examples/basic',
        label: 'Basic Example',
      },
      {
        href: '/docs/examples/minimal',
        label: 'Minimal Example',
      },
      {
        href: '/docs/examples/advanced',
        label: 'Advanced Example',
      },
      {
        href: '/docs/examples/custom-headless',
        label: 'Custom Headless Example',
      },
      {
        href: '/docs/examples/aggregation-and-grouping',
        label: 'Aggregation/Grouping Example',
      },
      {
        href: '/docs/examples/export-csv',
        label: 'Data Export Examples',
        secondaryItems: [
          {
            href: '/docs/examples/export-pdf',
            label: 'Export to PDF',
          },
        ],
      },
      {
        href: '/docs/examples/editing-crud',
        label: 'Editing (CRUD) Examples',
        secondaryItems: [
          {
            href: '/docs/examples/editing-crud-inline-row',
            label: 'Inline Row Editing',
          },
          {
            href: '/docs/examples/editing-crud-inline-cell',
            label: 'Inline Cell Editing',
          },
          {
            href: '/docs/examples/editing-crud-inline-table',
            label: 'Inline Table Editing',
          },
        ],
      },
      {
        href: '/docs/examples/react-query',
        label: 'Remote Data Fetching Examples',
        secondaryItems: [
          {
            href: '/docs/examples/remote',
            label: 'Remote Data Fetching',
          },
        ],
      },
      {
        href: '/docs/examples/virtualized',
        label: 'Virtualized Example',
      },
      {
        href: '/docs/examples/infinite-scrolling',
        label: 'Infinite Scrolling Example',
      },
      {
        href: 'https://www.mantine-react-table.dev',
        label: 'Extra Storybook Examples',
        external: true,
      },
    ],
  },
  {
    label: 'Guides',
    href: '/docs/guides',
    items: [
      {
        label: 'Fundamentals',
        href: '/docs/guides#fundamentals',
        items: [
          {
            href: '/docs/guides/best-practices',
            label: 'Best Practices',
          },
          {
            href: '/docs/guides/data-columns',
            label: 'Data (Accessor) Columns',
          },
          {
            href: '/docs/guides/display-columns',
            label: 'Display (Built-in) Columns',
          },
          {
            href: '/docs/guides/customize-components',
            label: 'Customize (Style) Components',
          },
          {
            href: '/docs/guides/custom-icons',
            label: 'Custom Icons',
          },
          {
            href: '/docs/guides/localization',
            label: 'Localization (i18n)',
          },
          {
            href: '/docs/guides/memoize-components',
            label: 'Memoize Components',
          },
          {
            href: '/docs/guides/event-listeners',
            label: 'Event Listeners (onClicks)',
          },
          {
            href: '/docs/guides/state-management',
            label: 'State Management',
          },
          {
            href: '/docs/guides/toolbar-customization',
            label: 'Toolbar Customization',
          },
        ],
      },
      {
        label: 'Feature Guides',
        href: '/docs/guides#feature-guides',
        items: [
          {
            href: '/docs/guides/aggregation-and-grouping',
            label: 'Aggregation and Grouping',
          },
          {
            href: '/docs/guides/async-loading',
            label: 'Async Loading',
          },
          {
            href: '/docs/guides/click-to-copy',
            label: 'Click to Copy',
          },
          {
            href: '/docs/guides/column-actions-menu',
            label: 'Column Actions (Menu)',
          },
          {
            href: '/docs/guides/column-filtering',
            label: 'Column Filtering',
          },
          {
            href: '/docs/guides/column-hiding',
            label: 'Column Hiding',
          },
          {
            href: '/docs/guides/column-ordering-dnd',
            label: 'Column Ordering and Dragging',
          },
          {
            href: '/docs/guides/column-pinning',
            label: 'Column Pinning (Freezing)',
          },
          {
            href: '/docs/guides/column-resizing',
            label: 'Column Resizing',
          },
          {
            href: '/docs/guides/density-toggle',
            label: 'Density Toggle',
          },
          {
            href: '/docs/guides/detail-panel',
            label: 'Detail Panel (Expanding)',
          },
          {
            href: '/docs/guides/editing',
            label: 'Editing and Creating',
          },
          {
            href: '/docs/guides/expanding-sub-rows',
            label: 'Expanding Sub-Rows (Tree)',
          },
          {
            href: '/docs/guides/full-screen-toggle',
            label: 'Full Screen Toggle',
          },
          {
            href: '/docs/guides/global-filtering',
            label: 'Global Filtering (Search)',
          },
          {
            href: '/docs/guides/pagination',
            label: 'Pagination',
          },
          {
            href: '/docs/guides/row-actions',
            label: 'Row Actions (Buttons)',
          },
          {
            href: '/docs/guides/row-numbers',
            label: 'Row Numbers',
          },
          {
            href: '/docs/guides/row-ordering-dnd',
            label: 'Row Ordering and Dragging',
          },
          {
            href: '/docs/guides/row-selection',
            label: 'Row Selection (Checkboxes)',
          },
          {
            href: '/docs/guides/sorting',
            label: 'Sorting',
          },
          {
            href: '/docs/guides/sticky-header-footer',
            label: 'Sticky Header/Footer',
          },
          {
            href: '/docs/guides/virtualization',
            label: 'Virtualization (Large Data)',
          },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    items: [
      {
        href: '/blog/introducing-mantine-react-table',
        label: 'Introducing Mantine React Table',
      },
    ],
  },
  {
    label: 'Other',
    href: '#',
    items: [
      {
        href: 'https://discord.gg/5wqyRx6fnm',
        label: 'Discord',
        external: true,
      },
      {
        href: 'https://www.github.com/kevinvandy/mantine-react-table',
        label: 'GitHub',
        external: true,
      },
      {
        href: 'https://www.npmjs.com/package/mantine-react-table',
        label: 'NPM',
        external: true,
      },
    ],
  },
];
