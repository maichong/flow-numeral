declare module 'numeral' {
  declare class Numeral {
    static (val: string|number|Numeral):Numeral;
    static defaultFormat(format: string):void;
    static zeroFormat(format: string):void;
    static nullFormat(format: string):void;
    static reset():void;
    static register(type: string, sub: string, options: Object):void;
    static isNumeral(val: any):boolean;
    static version:string;
    static options:{};
    static formats:{};
    static locales:{};

    constructor(input: number|string):void;
    format(format?: string):string;
    value():number;
    add(val: number):void;
    subtract(val: number):void;
    multiply(val: number):void;
    divide(val: number):void;
    set(val: number):void;
    difference(val: number|Numeral):number;
    clone():Numeral;
  }

  declare var exports: Class<Numeral>
}
