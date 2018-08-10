/**
 * @desc 字母大小写切换
 * @param {String}
 * @param {Number [1:首字母大写],[2:全部大写],[3:全部小写],[4:大小写转换]}
 * @return {String}
 */

if (!String.prototype.changeCase) {
  String.prototype.changeCase = function () {

  };
}

function changeCase(s, type) {
  switch (type) {
    case 1:
      return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();

    case 2:
      return s.toUpperCase();

    case 3:
      return s.toLowerCase();

    case 4:
      var str = "";
      s.split("").forEach(function (item) {
        if (/^([a-z]+)/.test(item)) {
          str += item.toUpperCase();
        } else if (/^([A-Z]+)/.test(item)) {
          str += item.toLowerCase();
        } else {
          str += item;
        }
      })
      return str;
  }
}
console.log(changeCase("HeLlpFf", 2))