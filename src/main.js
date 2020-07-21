const program = require('commander')
const axios = require('axios')
const ora = require('ora')
const inquirer = require('inquirer')
const { version } = require('./constants')
const { question, cmd } = require('./config')
const { fetchRepoList } = require('./fetch')
let projectName = ''
cmd.command.forEach(item => {
  const { name, description, alias } = item
  program
    .command(name)
    .alias(alias)
    .description(description)
    .action((name, destination) => {
      projectName = name
      getTemplate()
    })
})

function getTemplate () {
  let url = 'https://api.github.com/users/yplgreenlotus'
  url = 'https://api.github.com/users/yplgreenlotus/repos'
  url = 'https://api.github.com/repos/yplgreenlotus/green-cli'

  
  const spinner = ora('start fetching project.....');
  axios.get('https://api.github.com/repos/yplgreenlotus/green-cli').then((res) => {
    spinner.succeed()
    console.log(res)
  }).catch(err => { 
    spinner.fail()
    console.log('项目下载失败')
  })
}

program.on('--help', () => {
  console.log('Examples：');
  Object.keys(actions).forEach((action) => {
    cmd.command.examples.forEach((example) => {
      console.log(`  ${example}`);
    });
  });
});


program.version(version)

program.parse(process.argv)






