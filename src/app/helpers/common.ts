export function importToArray<Key extends string, PropType>(importObject: Record<Key, PropType>): PropType[] {
    const keys = Object.getOwnPropertyNames(importObject);
    return keys.filter(key => key.indexOf("__") !== 0).map(key => importObject[key]);
  }


export function findValueByPrefix(object:any, prefix:string) {
  for (var property in object) {
    if (object.hasOwnProperty(property) && 
       property.toString().startsWith(prefix)) {
       return object[property];
    }
  }
}