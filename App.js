var run_btn = document.getElementById("run-btn")
run_btn.onclick = function () {
    var code = document.getElementById("code").value;
    var result = document.getElementById("result")
    result.innerHTML = code;
}