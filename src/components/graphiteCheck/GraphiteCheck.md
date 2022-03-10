<!-- # GraphiteCheck -->
A boolean is returned by GraphiteCheck -- true if Graphite-enabled fonts are to be displayed; false if Graphite-enabled fonts are not to be displayed. See GraphiteCheckShow for a more verbose respose.
```jsx
/** Should Graphite-enabled fonts be displayed? */
/** This checks for Firefox and assumes gfx.font_rendering.graphite.enabled is set to true in about:config. */
const graphiteCheck = { testClient: 'firefox', alwaysUse: false };

<GraphiteCheck {...graphiteCheck} ></GraphiteCheck>;
```