// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { head, isClient }) {
  const googleAnalyticsId = process.env.GRIDSOME_GOOGLE_ANALYTIC_ID;

  head.script.push({
    src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
    async: true,
  });

  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }

  if (isClient) {
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', googleAnalyticsId);
    window.gtag = gtag; // expose gtag function to global scope
  }

  Vue.component('Layout', DefaultLayout);
}
