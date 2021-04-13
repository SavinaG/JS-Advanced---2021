(() => {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString()
    }
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        let outString = this.substring(0, n - 3);
        let lastSpace = outString.lastIndexOf(' ');

        if (this.charAt(n - 3) === ' ') {
            return outString.substring(0, n) + "...";
        }

        if (lastSpace !== -1) {
            return outString.substring(0, lastSpace) + "...";
        }

        return outString.substring(0, n - 3) + "...";
    }
    String.format = function (str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key);
        });
        return str
    }
})();
let str = 'the quick brown fox jumps over the lazy dog';


str = str.truncate(12);
