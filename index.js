
const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const arr2 = ['rica', 'cari', 'pancing', 'pincang', 'kamu', 'muka', 'kua'];
const groupAnagram = (arr = []) => {
    if (arr.length === 0) {
        return arr;
    };
    const map = new Map();
    for (let str of arr) {
        let sorted = [...str];
        sorted.sort();
        sorted = sorted.join('');
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str])
        };
    };
    return [...map.values()];
};
console.log(groupAnagram(arr));
console.log(groupAnagram(arr2));

module.exports = groupAnagram