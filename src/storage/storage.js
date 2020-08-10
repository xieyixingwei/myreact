import { useCallback } from "react";

const ls = window.localStorage;
const ss = window.sessionStorage;

export const Cookie = {
    get(key) {
        let arr = document.cookie.split('; ').find( a => {
            let ar = a.trim().split('=');
            return ar[0] === key;
        } );

        if(arr) {
            return arr.trim().split('=')[1];
        }

        return '';
    },

    set(key, value, day) {
        let setting = arguments[0];
        if(Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for(let i in setting) {
                let oDate = new Date();
                oDate.setDate(oDate.getDate + day)
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
            }
        } else {
            let oDate = new Date();
            oDate.setDate(oDate.getDate() + day)
            document.cookie = key + '=' + value + ';expires=' + oDate;
        }
    },

    remove(key) {
        let setting = argument[0];
        if(Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
            setting.forEach( key => {
                this.set(key, 1, -1);
            } )
        } else {
            this.set(key, 1, -1);
        }
    }
};

export const Local = {
    get(key) {
        return key ? JSON.parse(ls.getItem(key)) : null;
    },

    set(key, val) {
        const setting = arguments[0];
        if(Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for(const i in setting) {
                ls.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ls.setItem(key, JSON.stringify(val));
        }
    },

    remove(key) {
        ls.removeItem(key);
    },

    clear() {
        ls.clear();
    }
};

export const Session = {
    get(key) {
        if (key) return JSON.parse(ss.getItem(key))
        return null
    },
    set(key, val) {
        const setting = arguments[0]
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (const i in setting) {
                ss.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            ss.setItem(key, JSON.stringify(val))
        }
    },
    remove(key) {
        ss.removeItem(key)
    },
    clear() {
        ss.clear()
    }
};
