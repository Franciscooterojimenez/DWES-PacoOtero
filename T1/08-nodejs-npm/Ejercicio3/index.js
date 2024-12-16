import {DateTime} from 'luxon';
import chalk from 'chalk';

function printCurrentDateTime() {
  const now = DateTime.local();
  const formattedDateTime = now.toFormat('dd-MM-yyyy HH:mm:ss');
  if( now.second % 10 === 0){
    console.log(chalk.green(formattedDateTime));
  }else{
    console.log(formattedDateTime);
  }
}

setInterval(printCurrentDateTime, 1000);
