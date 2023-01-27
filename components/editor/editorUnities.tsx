import React from 'react';
export function convertURLLink(url: string) {
if(!url.trim()) return ""
 let finalURL;

 try{
  finalURL  = new URL(url)
 }catch {
  finalURL = new URL('https://' + url )
 }
 return finalURL.origin

}
