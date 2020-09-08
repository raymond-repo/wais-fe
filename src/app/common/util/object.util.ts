
export class ObjectUtil {

  static isEmpty(value: any): boolean {
    return !value || Object.keys(value).length === 0;
  }

  static isNotEmpty(value: any): boolean {
    return !!value && Object.keys(value).length !== 0;
  }
}
