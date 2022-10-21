export class Logger {

  // TODO: Make LogLevel enum and private logOut() method
  log(message: string, printable?: any): void {
    console.log(`LOG: ${message} ${'\n\t' + JSON.stringify(printable)}`);
  }

  debug(message: string, printable?: any): void {
    console.debug(`DEBUG: ${message} ${'\n\t' + JSON.stringify(printable)}`);
  }

  error(message: string, error?: Error): void {
    console.error(`%cERROR: ${message}\n${error}`);
  }
}