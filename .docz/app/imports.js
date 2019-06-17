export const imports = {
  'docs/Controles.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-controles" */ 'docs/Controles.mdx'
    ),
  'docs/Evenements.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-evenements" */ 'docs/Evenements.mdx'
    ),
  'docs/MapView.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-map-view" */ 'docs/MapView.mdx'
    ),
  'docs/Projection.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-projection" */ 'docs/Projection.mdx'
    ),
  'docs/Projection2.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-projection2" */ 'docs/Projection2.mdx'
    ),
  'docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'
    ),
}
