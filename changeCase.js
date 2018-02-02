/**
 * @desc 字母大小写切换
 * @param {String}
 * @param {Number [1:首字母大写],[2:大小写转换],[3:全部大写],[4:全部小写]}
 * @return {String}
 */

function changeCase(str, type) {
    switch (type) {
        case 1:
            {
                return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
            }
        case 2:
            {
                let itemText = "";
                str.split("").forEach(
                    function (item) {
                        if (/^([a-z]+)/.test(item)) {
                            itemText += item.toUpperCase();
                        } else if (/^([A-Z]+)/.test(item)) {
                            itemText += item.toLowerCase();
                        } else {
                            itemText += item;
                        }
                    });
                return itemText;
            }
        case 3:
            {
                return str.toUpperCase();
            }
        case 4:
            {
                return str.toLowerCase();
            }
    }
}
