const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
]

function superbowlWin(arr) {
    let newArr = arr.find(function (s) {
        let win = s.result === "W"
        if (win) {
            return s.year
        } else {
            undefined
        }

    })
    if (newArr === undefined) {
        return undefined
    } else {
        return newArr.year
    }
}