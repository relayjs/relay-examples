import React from 'react';
import JSResource from './JSResource';

export default function SuspenseImage(props) {
  console.log(props);
  const { src } = props;
  if (src != null) {
    const resource = JSResource(src, () => {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          resolve(src);
        };
        img.src = src;
      });
    });
    resource.load();
    resource.read();
  }
  return <img alt={props.alt} {...props} />;
}
