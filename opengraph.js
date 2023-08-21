const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = '';
const auth = {
  username: '',
  password: ''
};

axios.get(url, {
  auth: auth
})
.then(response => {
  const dom = new JSDOM(response.data);
  const document = dom.window.document;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (ogTitle) {
    console.log(`OG Title: ${ogTitle.content}`);
  } else {
    console.log('No OG Title found.');
  }

  if (ogDescription) {
    console.log(`OG Description: ${ogDescription.content}`);
  } else {
    console.log('No OG Description found.');
  }

  if (ogImage) {
    console.log(`OG Image: ${ogImage.content}`);
  } else {
    console.log('No OG Image found.');
  }
})
.catch(error => {
  console.error('Error fetching page:', error);
});
