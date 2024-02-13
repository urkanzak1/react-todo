
export function sleep(duration: number){
    let start = new Date().getTime();
    let end = start + duration;

    while (start < end){
        start = new Date().getTime();
    }
}