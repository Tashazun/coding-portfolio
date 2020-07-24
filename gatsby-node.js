const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const digitalTemplate = path.resolve('src/templates/digitalTemplate.js');
  const traditionalTemplate = path.resolve('src/templates/traditionalTemplate.js');

  const digitals = graphql(`
  {
    allDigital {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allDigital.edges.forEach(digital => {
      createPage({
        path: `/digital/${digital.node.id}`,
        component: digitalTemplate,
        context: {digitalId: digital.node.id}
      })
    });
  });

  const traditionals = graphql(`
  {
    allTraditional {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allTraditional.edges.forEach(traditional => {
      createPage({
        path: `/traditional/${traditional.node.id}`,
        component: traditionalTemplate,
        context: {traditionalId: traditional.node.id}
      })
    });
  });

  return Promise.all([digitals, traditionals]);
}