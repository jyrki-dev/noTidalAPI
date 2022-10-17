export class Logger {

  // TODO: Make LogLevel enum and private logOut() method
  log(message: string, printable?: any): void {
    console.log(`LOG: ${message} ${'\n\t' + JSON.stringify(printable)}`);
  }

  debug(message: string, printable?: any): void {
    console.log(`DEBUG: ${message} ${'\n\t' + JSON.stringify(printable)}`);
  }

  error(message: string, printable?: any): void {
    console.error(`ERROR: ${message} ${'\n\t' + JSON.stringify(printable)}`);
  }
}