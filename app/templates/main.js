var app = {
    init: function (options) {
        this.log(options);
        this.log('code here');
    },
    log: function (msg) {
        console.log(msg);
    }
};

$(function () {
    app.init();
});
