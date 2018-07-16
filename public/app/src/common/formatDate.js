function pad(source, length) {
  let pre = '',
      negative = source < 0,
      string = String(Math.abs(source));
  if (string.length < length) {
    pre = new Array(length - string.length + 1).join('0');
  }
  return (negative ? '-' : '') + pre + string;
}

export default function formatDate(source, pattern){
    if (typeof source ==='string') {
      pattern = source;
      source = null;
    }
    source = source || new Date();
    pattern = pattern || 'yyyy-MM-dd HH:mm:ss';

    function replacer(patternPart, result) {
      pattern = pattern.replace(patternPart, result);
    }
    let year = source.getFullYear(),
      month = source.getMonth() + 1,
      date2 = source.getDate(),
      hours = source.getHours(),
      minutes = source.getMinutes(),
      seconds = source.getSeconds();
    replacer(/yyyy/g, pad(year, 4));
    replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
    replacer(/MM/g, pad(month, 2));
    replacer(/M/g, month);
    replacer(/dd/g, pad(date2, 2));
    replacer(/d/g, date2);
    replacer(/HH/g, pad(hours, 2));
    replacer(/H/g, hours);
    replacer(/hh/g, pad(hours % 12, 2));
    replacer(/h/g, hours % 12);
    replacer(/mm/g, pad(minutes, 2));
    replacer(/m/g, minutes);
    replacer(/ss/g, pad(seconds, 2));
    replacer(/s/g, seconds);
    return pattern;
}