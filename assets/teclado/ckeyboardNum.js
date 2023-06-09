var cKeyboardNum_config = {
    input_target: "input",
    interation_mode: "pointerdown",
    target: "#keyboardNum",
    capslock_state: !1,
    layout: [
        {
            q: { name: "q", text: "q", class: "cKKey" },
            w: { name: "w", text: "w", class: "cKKey" },
            e: { name: "e", text: "e", class: "cKKey" },
            r: { name: "r", text: "r", class: "cKKey" },
            t: { name: "t", text: "t", class: "cKKey" },
            y: { name: "y", text: "y", class: "cKKey" },
            u: { name: "u", text: "u", class: "cKKey" },
            i: { name: "i", text: "i", class: "cKKey" },
            o: { name: "o", text: "o", class: "cKKey" },
            p: { name: "p", text: "p", class: "cKKey" },
        },
        {
            a: { name: "a", text: "a", class: "cKKey" },
            s: { name: "s", text: "s", class: "cKKey" },
            d: { name: "d", text: "d", class: "cKKey" },
            f: { name: "f", text: "f", class: "cKKey" },
            g: { name: "g", text: "g", class: "cKKey" },
            h: { name: "h", text: "h", class: "cKKey" },
            j: { name: "j", text: "j", class: "cKKey" },
            k: { name: "k", text: "k", class: "cKKey" },
            l: { name: "l", text: "l", class: "cKKey" },
        },
        {
            shift: { name: "shift", text: "", class: "cKFunction" },
            z: { name: "z", text: "z", class: "cKKey" },
            x: { name: "x", text: "x", class: "cKKey" },
            c: { name: "c", text: "c", class: "cKKey" },
            v: { name: "v", text: "v", class: "cKKey" },
            b: { name: "b", text: "b", class: "cKKey" },
            n: { name: "n", text: "n", class: "cKKey" },
            m: { name: "m", text: "m", class: "cKKey" },
            backspace: { name: "backspace", text: "", class: "cKFunction" },
        },
        {
            numeric_switch: { name: "numeric-switch", text: "123", class: "cKFunction" },
            "@": { name: "@", text: "@", class: "cKKey" },
            ".": { name: ".", text: ".", class: "cKKey" },
            space: { name: "space", text: " ", class: "cKKey" },
            return: { name: "return", text: "Return", class: "cKFunction" },
        },
    ],
    target_numeric: "#keyboard_numeric",
    layout_numeric: [
        {
            1: { name: "1", text: "1", class: "cKKey" },
            2: { name: "2", text: "2", class: "cKKey" },
            3: { name: "3", text: "3", class: "cKKey" },
            " 0 ": { name: "0", text: "0", class: "cKKey" },
            ".": { name: ".", text: ".", class: "cKKey" },
            ",": { name: ",", text: ",", class: "cKKey" },
            "-": { name: "-", text: "-", class: "cKKey" },
            "@": { name: "@", text: "@", class: "cKKey" },
        },
        {
            4: { name: "4", text: "4", class: "cKKey" },
            5: { name: "5", text: "5", class: "cKKey" },
            6: { name: "6", text: "6", class: "cKKey" },
            "/": { name: "/", text: "/", class: "cKKey" },
            ":": { name: ":", text: ":", class: "cKKey" },
            _: { name: "_", text: "_", class: "cKKey" },
            "*": { name: "*", text: "*", class: "cKKey" },
            "#": { name: "#", text: "#", class: "cKKey" },
        },
        {
            7: { name: "7", text: "7", class: "cKKey" },
            8: { name: "8", text: "8", class: "cKKey" },
            9: { name: "9", text: "9", class: "cKKey" },
            "(": { name: "(", text: "(", class: "cKKey" },
            ")": { name: ")", text: ")", class: "cKKey" },
            $: { name: "$", text: "$", class: "cKKey" },
            "?": { name: "?", text: "?", class: "cKKey" },
            "!": { name: "!", text: "!", class: "cKKey" },
        },
        { abc_switch: { name: "abc-switch", text: "abc", class: "cKFunction" }, space: { name: "space", text: " ", class: "cKKey" }, backspace: { name: "backspace", text: "", class: "cKFunction" } },
    ],
};
function cKeyboardNum() {
    $.each(cKeyboardNum_config.layout, function (e, c) {
        $(cKeyboardNum_config.target).append('<ul class="cK cKLine"></ul>');
        var a = $(cKeyboardNum_config.target + " ul")[e];
        $.each(c, function (e, c) {
            $(a).append('<li class="cK ' + c.class + " cKey-" + c.name + '">' + c.text + "</li>");
        });
    }),
        $(cKeyboardNum_config.target_numeric).hide(),
        $.each(cKeyboardNum_config.layout_numeric, function (e, c) {
            $(cKeyboardNum_config.target_numeric).append('<ul class="cK cKLine"></ul>');
            var a = $(cKeyboardNum_config.target_numeric + " ul")[e];
            $.each(c, function (e, c) {
                $(a).append('<li class="cK ' + c.class + " cKey-" + c.name + '">' + c.text + "</li>");
            });
        }),
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKKey", function () {
            cKeyboardNum_config.capslock_state
                ? $(cKeyboardNum_config.input_target).val($(cKeyboardNum_config.input_target).val() + $(this).html().toUpperCase())
                : $(cKeyboardNum_config.input_target).val($(cKeyboardNum_config.input_target).val() + $(this).html());
        }),
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKFunction.cKey-shift", function () {
            (cKeyboardNum_config.capslock_state = !cKeyboardNum_config.capslock_state), cKeyboardNum_config.capslock_state ? $(".cK.cKKey").addClass("uppercase") : $(".cK.cKKey").removeClass("uppercase");
        }),
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKFunction.cKey-backspace", function () {
            $(cKeyboardNum_config.input_target).val($(cKeyboardNum_config.input_target).val().slice(0, -1));
        }),
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKFunction.cKey-numeric-switch", function () {
            $.when($(cKeyboardNum_config.target).fadeOut()).done(function () {
                $(cKeyboardNum_config.target_numeric).fadeIn();
            });
        }),
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKFunction.cKey-abc-switch", function () {
            $.when($(cKeyboardNum_config.target_numeric).fadeOut()).done(function () {
                $(cKeyboardNum_config.target).fadeIn();
            });
        });
}