export class StorageUtil {

  static SET(key: string, value: any) {
    if (key !== undefined && value !== undefined) {
      localStorage.setItem(key, value);
    }
  }

  static GET(key: string): string {
    return !!localStorage.getItem(key) ? localStorage.getItem(key) : '';
  }

  static REMOVE(key: string): void {
    if (!!this.GET(key)) {
      localStorage.removeItem(key);
    }
  }
}
