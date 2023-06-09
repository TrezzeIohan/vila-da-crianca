var cKeyboardNum_config = {
    input_target: "input",
    interation_mode: "pointerdown",
    target: "#keyboardNum",
    capslock_state: !1,
    layout: [
        {
            
        }, 
        {
            
            1: { name: "1", text: "1", class: "cKKey" },
            2: { name: "2", text: "2", class: "cKKey" },
            3: { name: "3", text: "3", class: "cKKey" },
            4: { name: "4", text: "4", class: "cKKey" },
            5: { name: "5", text: "5", class: "cKKey" },
        },
        {
            
            
            6: { name: "6", text: "6", class: "cKKey" },
            7: { name: "7", text: "7", class: "cKKey" },
            8: { name: "8", text: "8", class: "cKKey" },
            9: { name: "9", text: "9", class: "cKKey" },
            " 0 ": { name: "0", text: "0", class: "cKKey" }, 
            
        },
        {          
            backspace: { name: "backspace", text: "", class: "cKFunction" },        
            return: { name: "return", text: "Return", class: "cKFunction" },      
        },


        
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
        $("body").on(cKeyboardNum_config.interation_mode, ".cK.cKFunction.cKey-backspace", function () {
            $(cKeyboardNum_config.input_target).val($(cKeyboardNum_config.input_target).val().slice(0));
        })
}
