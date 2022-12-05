import { Comments } from "./comments";

export class Newcar {

    constructor(public id:number,
        public nom:string,
        public img:string,
        public date:Date,
        public prix:number,
        public cv:number,
        public porte:number,
        public toutoption:boolean,
        public comments:Comments[]
        ){}
}
