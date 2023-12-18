/**
 * @param str the string to be StUpIdIfIeD
 * @return ThE StUpIdIfIeD StRiNg
 */
export function StUpIdCaSe(str){
    return [...str].map((char, idx) =>
        idx % 2 == 0
        ? char.toUpperCase() 
        : char.toLowerCase()
    ).join('')
}
