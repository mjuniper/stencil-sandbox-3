import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-sandbox-3',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "../node_modules/@esri/calcite-components/dist/calcite",
          dest: "calcite",
        },
        {
          src:
            "../node_modules/@esri/calcite-components/dist/calcite/assets/calcite-date-picker/nls",
          dest: "calcite-date-picker/nls",
        },
      ],
    },
  ],
};
