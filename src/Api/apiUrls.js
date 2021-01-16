export const apiUrls = {
    // Clientes
    clientes:  '/clientes',
    //Casas
    casas: '/casas/index'
  };
  
  export const replaceUrls = (url, obj) => {
    const pattern = /:[\w]+/ig; // :property
    return url.replace(pattern, (token) => obj[token.substr(1)] || '');
  };
  