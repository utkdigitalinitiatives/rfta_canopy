const accompanyingCanvas = {
  "id": "https://iiif.io/api/cookbook/recipe/0014-accompanyingcanvas/canvas/accompanying",
  "type": "Canvas",
  "label": {
    "en": [
      "Accompanying Canvas for RFTA Audiofile"
    ]
  },
  "height": 200,
  "width": 134,
  "items": [
    {
      "id": "https://iiif.io/api/cookbook/recipe/0014-accompanyingcanvas/canvas/accompanying/annotation/page",
      "type": "AnnotationPage",
      "items": [
        {
          "id": "https://iiif.io/api/cookbook/recipe/0014-accompanyingcanvas/canvas/accompanying/annotation/image",
          "type": "Annotation",
          "motivation": "painting",
          "body": {
            "id": "https://digital.lib.utk.edu/iiif/2/collections~islandora~object~rfta%3A143~datastream~TN/full/134,200/0/default.jpg",
            "type": "Image",
            "format": "image/jpeg",
            "height": 200,
            "width": 134,
            "service": [
              {
                "id": "https://iiif.io/api/image/3.0/example/reference/4b45bba3ea612ee46f5371ce84dbcd89-mahler-0",
                "type": "ImageService3",
                "profile": "level1"
              }
            ]
          },
          "target": "https://iiif.io/api/cookbook/recipe/0014-accompanyingcanvas/canvas/accompanying"
        }
      ]
    }
  ]
}

export default accompanyingCanvas
