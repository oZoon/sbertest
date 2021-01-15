import {initType} from './types';

class Records {
    setRecord(key: string, record: initType) {
        localStorage.setItem(key, JSON.stringify(record));
    }
    getRecord(key: string) {
        return JSON.parse(<string>localStorage.getItem(key));
    }
}

const records = new Records();

export default records;
