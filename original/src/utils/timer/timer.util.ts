/* eslint-disable class-methods-use-this */

export default class TimerUtil {

  public getCurrentDate(): Date {
    return new Date();
  }

  public runTimer(): void {
    setTimeout(this.callback, 1000);
  }

  // eslint-disable-next-line class-methods-use-this
  private callback(): void {
    // eslint-disable-next-line no-console
    console.log('callback invoked');
  }

}
