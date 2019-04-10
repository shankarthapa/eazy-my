/**
 * generate random unique key
 */
export function getUniqueKey() {
    return Math.floor( Math.random()  * 9999999999 ) + Date.now();
}
