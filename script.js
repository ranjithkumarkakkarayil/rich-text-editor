
(function($) {
    $.fn.passage = function(options) {
        var settings = $.extend({
            
        }, options);

        var $this = $(this);

        $this.attr('contenteditable', 'true');
        $this.addClass("passage_editor_basic");

        passage_setup_controls($this);

        $("a.passage_action").click(function(){
            document.execCommand($(this).attr("data-format"), false);
        });

        $(".passage_font_change").change(function(){
            document.execCommand("fontSize", false, "7");
            var fontElements = document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].size == "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $(this).val() + "px";
                }
            }
        });
    };
}(jQuery));

function passage_setup_controls(pass) {
    var bold = '<a href="#/" data-format="bold" class="passage_action"><i class="fas fa-bold"></i></a>';
    var italic = '<a href="#/" data-format="italic" class="passage_action"><i class="fas fa-italic"></i></a>';
    var underline = '<a href="#/" data-format="underline" class="passage_action"><i class="fas fa-underline"></i></a>';
    var strikethrough = '<a href="#/" data-format="strikethrough" class="passage_action"><i class="fas fa-strikethrough"></i></a>';
    var superscript = '<a href="#/" data-format="superscript" class="passage_action"><i class="fas fa-superscript"></i></a>';
    var subscript = '<a href="#/" data-format="subscript" class="passage_action"><i class="fas fa-subscript"></i></a>';
    
    var hvalues = '<select class="passage_h_actions passage_font_change">'
                        +'<option value="12">Heading</option>'
                        +'<option value="32">H1</option>'
                        +'<option value="24">H2</option>'
                        +'<option value="18.72">H3</option>'
                        +'<option value="16">H4</option>'
                        +'<option value="13.28">H5</option>'
                        +'<option value="10.72">H6</option>'
                    '</select>';
    
    var alignleft = '<a href="#/" data-format="justifyLeft" class="passage_action"><i class="fas fa-align-left"></i></a>';
    var alignright = '<a href="#/" data-format="justifyRight" class="passage_action"><i class="fas fa-align-right"></i></a>';
    var aligncenter = '<a href="#/" data-format="justifyCenter" class="passage_action"><i class="fas fa-align-center"></i></a>';
    var alignjustify = '<a href="#/" data-format="justifyFull" class="passage_action"><i class="fas fa-align-justify"></i></a>';

    var ol = '<a href="#/" data-format="insertOrderedList" class="passage_action"><i class="fas fa-list-ol"></i></a>';
    var outdent = '<a href="#/" data-format="outdent" class="passage_action"><i class="fas fa-outdent"></i></a>';
    var indent = '<a href="#/" data-format="indent" class="passage_action"><i class="fas fa-indent"></i></a>';

    var cut = '<a href="#/" data-format="cut" class="passage_action"><i class="fas fa-cut"></i></a>';
    var copy = '<a href="#/" data-format="copy" class="passage_action"><i class="fas fa-copy"></i></a>';
    var paste = '<a href="#/" data-format="paste" class="passage_action"><i class="fas fa-paste"></i></a>';

    var fsize = '<span><input type="number" class="passage_f_actions passage_font_change" min="6" max="999" /></span><span>px</span>';

    var table_container = '<div class="row">'
            +'<div class="col">'+bold+'</div>'
            +'<div class="col">'+italic+'</div>'
            +'<div class="col">'+underline+'</div>'
            +'<div class="col">'+strikethrough+'</div>'
            +'<div class="col">'+superscript+'</div>'
            +'<div class="col">'+subscript+'</div>'
            +'<div class="col">'+alignleft+'</div>'
            +'<div class="col">'+alignright+'</div>'
            +'<div class="col">'+aligncenter+'</div>'
            +'<div class="col">'+alignjustify+'</div>'
            +'<div class="col">'+ol+'</div>'
            +'<div class="col">'+outdent+'</div>'
            +'<div class="col">'+indent+'</div>'
            +'<div class="col">'+cut+'</div>'
            +'<div class="col">'+copy+'</div>'
            +'<div class="col">'+paste+'</div>'
            +'<div class="col div_f_size">'+fsize+'</div>'
            +'<div class="col div_h_size">'+hvalues+'</div>'
        +'</div>';

    var passage_action_container = '<div class="passage_action_container">'+table_container+'</div>';

    pass.before(passage_action_container);
}