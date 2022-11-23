import CloverIIIF from "@samvera/clover-iiif";
import React from 'react';

export default function App({manifestId}) {
  return (
    <CloverIIIF
      manifestId={manifestId}
    />
  );
}