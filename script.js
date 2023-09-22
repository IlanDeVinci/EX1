"use strict";

/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */
let a = 69;
let b = 420;
let c = 69;

switch(a){
    case b:
        console.log("Egal à b");
        break;
    case c:
        console.log("Egal à c");
        break;
    default:
        console.log("Egal à aucun des deux");
}