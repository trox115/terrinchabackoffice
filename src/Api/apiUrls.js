export const apiUrls = {
    // AUTH
    clientes:  '/clientes',
  };
  
  export const replaceUrls = (url, obj) => {
    const pattern = /:[\w]+/ig; // :property
    return url.replace(pattern, (token) => obj[token.substr(1)] || '');
  };
  