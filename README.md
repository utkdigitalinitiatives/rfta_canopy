# Canopy
[![Netlify Status](https://api.netlify.com/api/v1/badges/ff650df9-ca2c-43c3-a32b-0093d0d4b536/deploy-status)](https://app.netlify.com/sites/iiif-canopy/deploys)

Canopy is a [Gatsby](https://www.gatsbyjs.com/) based application that fetches a single 
[IIIF Collection](https://iiif.io/api/presentation/3.0/#51-collection) (Presentation API 3.0) and distils it into a 
fully functional front end. The stack includes [Lunr](https://lunrjs.com/) as a lightweight search index and 
a custom viewer based on the HTML5 video player for object viewing.

It was created primarily to serve the [Rising from the Ashes: Chimney Tops 2 Wildfire Project](https://rfta.lib.utk.edu) 
with IIIF. For other technical information about canopy and its relationship to RFTA, see the 
[RFTA Technical Docs](https://rfta-data-models.readthedocs.io/en/latest/).

## Setup
```shell
git clone git@github.com:utkdigitalinitiatives/canopy.git
cd canopy
yarn install
```

## Development
```shell
cd canopy
yarn start
```

Canopy will be available at [localhost:8000](http://localhost:8000/) unless port `8000` is currently in use. 
If it is in use, the Gatsby startup process will ask you to use an alternative port, ex: `8001`.

## Pointing at a Collection

Update `const rootCollection = 'https://digital.lib.utk.edu/static/iiif/collections/rfta_completed.json';` in `gatsby-config.js`
to build a new collection.
