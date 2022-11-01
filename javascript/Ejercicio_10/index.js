import chalk from 'chalk';
import * as moduloController from './modulos/controller.js';

const sum = moduloController.suma(4, 6);
console.log(chalk.bgCyan.white(sum));

const multp = moduloController.multiplica(5, 6);
console.log(chalk.bgGreen(multp));