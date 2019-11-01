import React from 'react';
import JSResource from './JSResource';

export default function SuspenseImage(props) {
  const { src } = props;
  if (src != null) {
    // JSResource is meant for loading resources, but the implementation is
    // just cached loading of promises. So we reuse that here as a quick
    // way to suspend while images are loading, with caching in case
    // we encouter the same image twice (in that case, we'll create
    // new loader *functions*, but JSResource will return a cached
    // value and only load the iamge once.
    const resource = JSResource(src, () => {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          resolve(src);
        };
        img.onerror = error => {
          console.error(error);
          resolve(src);
        };
        img.src = src;
      });
    });
    resource.load(); // TODO: JSResource::read() should call load() if necessary
    resource.read(); // suspends while the image is pending
  }
  return <img alt={props.alt} {...props} />;
}
