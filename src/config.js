
const question = [{
  name: 'css',
  type: 'list',
  message: '请选择项目使用的CSS预处理：',
  choices: ['less', 'stylus', 'scss', 'none'],
},
{
  name: 'framework',
  type: 'list',
  message: '请选择项目使用的JS框架：',
  choices: ['vue', 'react', 'jquery'],
}]

const cmd = {
  command:[{
    name: 'create <v>',
    description: 'create project',
    alias: 'c',
    examples: ['green-cli create project-name']
  },
  {
    name: 'config',
    description: 'config info',
    alias: 'cf',
    examples: [
      'green-cli config get <k>',
      'green-cli config set <k> <v>'
    ]
  }],
  option:[]
}

module.exports = {
  cmd,
  question
}