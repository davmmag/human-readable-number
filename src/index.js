module.exports = function toReadable (number) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbers2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const set = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = String(number);
    if(res.length === 1) {
        return numbers[res[0] - 1] || 'zero';
    } 
    if(res.length === 2) {
        if(number < 20) return numbers2[res[1]]
        else {return `${set[res[0] - 2]} ${numbers[res[1] - 1] || ''}`.trim();}
    }
    if(res.length === 3) {
        if(res.slice(1) === '00') return `${numbers[res[0] - 1]} hundred`;
        return `${numbers[res[0] - 1]} hundred ${toReadable(+res.slice(1))}`.trim();
    }
}

