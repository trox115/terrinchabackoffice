const model = {
  state: [{name:'Luís Fonseca', email:'geral@luis.com'}, {name: 'António Fernandes', email:'tofernandes67@gmail.com'}],

  reducers: {
    loaded: ( state, payload) => payload,
  }
};

export default model;
