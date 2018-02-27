/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/*
 * Does a find and replace for ; in a css string and replaces with  !important;
 * NOTE: This should only be used on css injects that are component specific!
 */

/*
 * input:
 *
 * `
 *  background-color: blue;
 * `
 *
 * output:
 *
 * `
 *  background-color: blue !important;
 * `
 *
 */

export default function importantCss(css) {
  return css.replace(/\;/g, ' !important;');
}
