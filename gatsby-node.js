const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const codeTemplate = path.resolve('src/templates/codeTemplate.js');
  const designTemplate = path.resolve('src/templates/designTemplate.js');

  const codes = graphql(`
  {
    allCode {
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

    result.data.allCode.edges.forEach(code => {
      createPage({
        path: `/code/${code.node.id}`,
        component: codeTemplate,
        context: {codeId: code.node.id}
      })
    });
  });

  const designs = graphql(`
  {
    allDesign {
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

    result.data.allDesign.edges.forEach(design=> {
      createPage({
        path: `/design/${design.node.id}`,
        component: designTemplate,
        context: {designId: design.node.id}
      })
    });
  });

  return Promise.all([codes, designs]);
}