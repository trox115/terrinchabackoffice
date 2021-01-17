export const apiUrls = {
    // Clientes
    clientes:  '/clientes',
    //Casas
    casas: '/casas/index',
    //Produtos
    produtos: '/produtos/index',
    //Encomendas
    encomendas: '/encomendas',
    //Atividades
    atividades: '/atividades',
    //Pequenos Almoços
    palmocos:'/palmocos',
    // Menus de degustação
    menus: '/degustacao',
  };
  
  export const replaceUrls = (url, obj) => {
    const pattern = /:[\w]+/ig; // :property
    return url.replace(pattern, (token) => obj[token.substr(1)] || '');
  };
  