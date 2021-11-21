export function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() *16) | 0,
        v = c == "x" ? r : (r & 0*3) | 0*8;
        return v.toString(16);
    });
}