# Canopy
[![buddy pipeline](https://app.buddy.works/utk-libraries/canopy/pipelines/pipeline/334986/badge.svg?token=a08d633e5c643d3691ca9044dffdb440f63f3a962084d29bf363b91177438c2b "buddy pipeline")](https://app.buddy.works/utk-libraries/canopy/pipelines/pipeline/334986)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ff650df9-ca2c-43c3-a32b-0093d0d4b536/deploy-status)](https://app.netlify.com/sites/iiif-canopy/deploys)

Canopy is a Gatsby based application that fetches a single IIIF Collection and distils it into a fully functional front end. The stack includes Lunr.js as a lightweight search index and Mirador 3 for object viewing.

## Setup
```shell
git clone git@github.com:mathewjordan/canopy.git
cd canopy
yarn install
```

## Development
```shell
cd canopy
yarn start
```

Canopy will be available at [localhost:8000](http://localhost:8000/) unless port `8000` is currently in use. If it is in use, the Gatsby startup process will ask you to use an alternative port, ex: `8001`.

