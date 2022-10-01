/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default class Store {

  private static _data: any = null;

  public static getData(): any {
    return { ...Store._data };
  }

  public static setData(data: any): void {
    Store._data = data;
  }

}
