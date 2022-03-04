<!-- # GraphiteCheck -->

```jsx
/** Should Graphite-enabled fonts be displayed? */
/** This checks for Firefox and assumes gfx.font_rendering.graphite.enabled is set to true in about:config. */
const graphiteCheck = { testClient: 'firefox', alwaysUse: false };

<GraphiteCheck {...graphiteCheck} ></GraphiteCheck>;
```