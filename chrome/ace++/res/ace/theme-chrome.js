define("ace/theme/chrome",[], function(require, exports, module) {


exports.cssClass = "ace-chrome";
exports.cssText = ".ace-chrome .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-chrome .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-chrome .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-chrome .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-chrome .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-chrome .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-chrome .ace_text-layer {\
  cursor: text;\
}\
\
.ace-chrome .ace_cursor {\
  border-left: 2px solid black;\
}\
\
.ace-chrome .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid black;\
}\
        \
.ace-chrome .ace_line .ace_invisible {\
  color: rgb(191, 191, 191);\
}\
\
.ace-chrome .ace_line .ace_keyword {\
  color: blue;\
}\
\
.ace-chrome .ace_line .ace_constant.ace_buildin {\
  color: rgb(88, 72, 246);\
}\
\
.ace-chrome .ace_line .ace_constant.ace_language {\
  color: rgb(88, 92, 246);\
}\
\
.ace-chrome .ace_line .ace_constant.ace_library {\
  color: rgb(6, 150, 14);\
}\
\
.ace-chrome .ace_line .ace_invalid {\
  background-color: rgb(153, 0, 0);\
  color: white;\
}\
\
.ace-chrome .ace_line .ace_fold {\
}\
\
.ace-chrome .ace_line .ace_support.ace_function {\
  color: rgb(60, 76, 114);\
}\
\
.ace-chrome .ace_line .ace_support.ace_constant {\
  color: rgb(6, 150, 14);\
}\
\
.ace-chrome .ace_line .ace_support.ace_type,\
.ace-chrome .ace_line .ace_support.ace_class {\
  color: rgb(109, 121, 222);\
}\
\
.ace-chrome .ace_line .ace_keyword.ace_operator {\
  color: rgb(104, 118, 135);\
}\
\
.ace-chrome .ace_line .ace_string {\
  color: #1919a6;\
}\
\
.ace-chrome .ace_line .ace_comment {\
  color: #236e24;\
}\
\
.ace-chrome .ace_line .ace_comment.ace_doc {\
  color: #236e24;\
}\
\
.ace-chrome .ace_line .ace_comment.ace_doc.ace_tag {\
  color: #236e24;\
}\
\
.ace-chrome .ace_line .ace_constant.ace_numeric {\
  color: rgb(0, 0, 205);\
}\
\
.ace-chrome .ace_line .ace_variable {\
  color: rgb(49, 132, 149);\
}\
\
.ace-chrome .ace_line .ace_xml_pe {\
  color: rgb(104, 104, 91);\
}\
\
.ace-chrome .ace_entity.ace_name.ace_function {\
  color: #0000A2;\
}\
\
.ace-chrome .ace_markup.ace_markupine {\
    text-decoration:underline;\
}\
\
.ace-chrome .ace_markup.ace_heading {\
  color: rgb(12, 7, 255);\
}\
\
.ace-chrome .ace_markup.ace_list {\
  color:rgb(185, 6, 144);\
}\
\
.ace-chrome .ace_marker-layer .ace_selection {\
  background: rgb(181, 213, 255);\
}\
\
.ace-chrome .ace_marker-layer .ace_step {\
  background: rgb(252, 255, 0);\
}\
\
.ace-chrome .ace_marker-layer .ace_stack {\
  background: rgb(164, 229, 101);\
}\
\
.ace-chrome .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgb(192, 192, 192);\
}\
\
.ace-chrome .ace_marker-layer .ace_active_line {\
  background: rgba(0, 0, 0, 0.07);\
}\
\
.ace-chrome .ace_marker-layer .ace_selected_word {\
  background: rgb(250, 250, 255);\
  border: 1px solid rgb(200, 200, 250);\
}\
\
.ace-chrome .ace_meta.ace_tag {\
  color: rgb(147, 15, 128);\
}\
\
.ace-chrome .ace_string.ace_regex {\
  color: rgb(255, 0, 0)\
}\
\
.ace-chrome .ace_entity.ace_other.ace_attribute-name{\
  color: #994409;\
}";

});
