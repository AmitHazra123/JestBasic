const {parseWithComments} = require('jest-docblock');

test('should match the case', () => {
  const code = `
  /*
   * Thi is a sample
   * 
   * @flow
   */
   
  console.log('Hello World!');
  `;

  const parsed = parseWithComments(code);
  
  // prints an object with two attributes: comments and pragmas
  console.log(parsed);
});