$(document).ready(function () {
    //如果以前选择了记住密码，则设置复选框的值，将密码和用户名取出来。 否则取消选中。
    if (Cookies.get("remember") === "true") {
        //设置前端的复选框被选中
        $('#remember').prop("checked", true);
        $('#accountName').val(Cookies.get("userName"));
        $('#password').val(Cookies.get("userPW"));
    } else {
        $('#remember').prop("checked", false);
    }
});

//记住用户名密码
function Save() {
    //如果选择了
    if ($('#remember').prop("checked")===true) {
        //取出页面上用户名和密码的值
        let str_username = $("#accountName").val();
        let str_password = $("#password").val();
        //利用cookie.js，放置到cookie中。 将用户名，密码，是否保存，放置到cookie中.
        Cookies.set("remember", "true", {expires: 1}); //存储一个带7天期限的cookie
        Cookies.set("userName", str_username, {expires: 1});
        Cookies.set("userPW", str_password, {expires: 1});
    }
    //如果没有选择了,则取消cookie存储的值
    else {
        Cookies.remove("remember");
        Cookies.remove("userName");
        Cookies.remove("userPW");
    }
}


