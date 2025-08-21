import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService {
  setData(key: string, data: Object) {
    const content = {
      data,
    };
    const stringfiedContent = JSON.stringify(content);
    localStorage.setItem(key, stringfiedContent);
    return true;
  }

  getData(key: string) {
    const stringfiedContent = localStorage[key];
    const parsedContent = stringfiedContent ? JSON.parse(stringfiedContent) : undefined;
    return parsedContent?.data;
  }

  removeData(key: string) {
    localStorage[key] = undefined;
    return true;
  }
}
