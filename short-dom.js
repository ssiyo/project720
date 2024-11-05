function byid(id) {
    return document.getElementById(id);
}
function bycss(css) {
    return document.querySelector(css);
}
function cssall(css) {
    return document.querySelectorAll(css);
}

function hide(elm) {
    elm.classList.add("hidden");
}
function show(elm) {
    elm.classList.remove("hidden");
}
function toggleSwitch(btn, switchFunc) {
    btn.addEventListener("click", () => {
        toggleClass(btn, "switched");
        switchFunc()
    });
}


function toggleClass(elm, cl) {
    elm.classList.toggle(cl);
}
function toggleVisibility(elm) {
    elm.classList.toggle("hidden");
}
function toggleVisibilityByBtn(btn, elm) {
    btn.addEventListener("click", () => {
        elm.classList.toggle("hidden");
    });
}
function toggleAbilityByBtn(btn, elm) {
    btn.addEventListener("click", () => {
        elm.disabled = !elm.disabled;
    });
}
function toggleBtnIcon(btn, src1, src2) {
    const icon = btn.querySelector("img");
    btn.addEventListener("click", () => {
        icon.src = icon.src.includes(src1) ? src2 : src1;
    });
}
function inputSelectionMenu(input, menu) {
    // between selection menu and filter input
    hide(menu);

    let mouseover, focused;
    menu.addEventListener("mouseover", () => {
        mouseover = true;
    });
    menu.addEventListener("mouseout", () => {
        mouseover = false;
        if (!focused) hide(menu);
    });
    input.addEventListener("focus", () => {
        focused = true;
        show(menu);
    });
    input.addEventListener("blur", () => {
        focused = false;
        if (!mouseover) hide(menu);
    });
}
function toggleViewsVisibilityByBtn(btn, view1, view2) {
    hide(view1);
    show(view2);
    btn.addEventListener("click", () => {
        view1.classList.toggle("hidden");
        view2.classList.toggle("hidden");
    });
}
function focusLabelAsInput(labelElm) {
    let searchInpFocused = false;
    const labelInp = labelElm.querySelector("input");

    labelElm.addEventListener("mouseover", () => {
        if (searchInpFocused) return;

        labelElm.classList.add("focus");

        // reset button appears when value is reset without button
        if (labelInp.value == "") labelElm.querySelector("button.reset");
    });
    labelElm.addEventListener("mouseout", () => {
        if (searchInpFocused) return;

        labelElm.classList.remove("focus");
    });

    labelInp.addEventListener("focus", () => {
        searchInpFocused = true;

        labelElm.classList.add("focus");
    });
    labelInp.addEventListener("blur", () => {
        searchInpFocused = false;

        labelElm.classList.remove("focus");
    });
}

// autoResizePrompt(bycss("textarea"));
function autoResizePrompt(textarea) {
    const minPx = (document.body.style.fontSize || 16) * 2;
    textarea.style.height = 2 * minPx + 2 + "px";
    textarea.addEventListener("input", () => {
        textarea.style.height = minPx + 2 + "px";
        textarea.style.height = textarea.scrollHeight + minPx + 2 + "px";
    });
}
function enableLabelResetBtns() {
    // reset label buttons
    cssall("label button.reset").forEach((btn) => {
        const labelInp = btn.parentElement.querySelector("input");

        btn.addEventListener("click", () => {
            labelInp.value = "";
            hide(btn);
            labelInp.focus();
        });

        hide(btn);
        labelInp.addEventListener("input", () => {
            if (labelInp.value == "") hide(btn);
            else if (btn.classList.contains("hidden")) show(btn);
        });
    });
}
function enableBtnsClickAnim() {
    // button click animation
    cssall("button").forEach((btn) => {
        let timeToAnimate;
        btn.addEventListener("click", () => {
            btn.classList.add("clicked");

            clearTimeout(timeToAnimate);
            timeToAnimate = setTimeout(() => {
                btn.classList.remove("clicked");
            }, 500);
        });
    });
}
