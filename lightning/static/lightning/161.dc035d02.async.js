(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[161],{m2bc:function(e,t,n){(function(e){e(n("VrN/"))})((function(e){"use strict";e.defineMode("verilog",(function(t,n){var i=t.indentUnit,r=n.statementIndentUnit||i,a=n.dontAlignCalls,l=n.compilerDirectivesUseRegularIndentation,o=n.noIndentKeywords||[],s=n.multiLineStrings,c=n.hooks||{};function d(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}var m,u,f=d("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),p=/[\+\-\*\/!~&|^%=?:<>]/,v=/[\[\]{}()]/,g=/\d[0-9_]*/,h=/\d*\s*'s?d\s*\d[0-9_]*/i,y=/\d*\s*'s?b\s*[xz01][xz01_]*/i,k=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,w=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,b=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,_=/^((`?\w+)|[)}\]])/,x=/[)}\]]/,I=new RegExp("^(`(?:ifdef|ifndef|elsif|else|endif|undef|undefineall|define|include|begin_keywords|celldefine|default|nettype|end_keywords|endcelldefine|line|nounconnected_drive|pragma|resetall|timescale|unconnected_drive))\\b"),C=/^(`(?:ifdef|ifndef|elsif|else))\b/,z=/^(`(?:elsif|else|endif))\b/,S=d("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),E={};for(var j in S)E[j]="end"+j;for(var $ in E["begin"]="end",E["casex"]="endcase",E["casez"]="endcase",E["do"]="while",E["fork"]="join;join_any;join_none",E["covergroup"]="endgroup",E["macro_begin"]="macro_end",o){j=o[$];E[j]&&(E[j]=void 0)}var A=d("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while extern typedef");function B(e,t){var n,i=e.peek();if(c[i]&&0!=(n=c[i](e,t)))return n;if(c.tokenBase&&0!=(n=c.tokenBase(e,t)))return n;if(/[,;:\.]/.test(i))return m=e.next(),null;if(v.test(i))return m=e.next(),"bracket";if("`"==i){if(e.next(),e.eatWhile(/[\w\$_]/)){var r=e.current();if(u=r,r.startsWith("`uvm_")&&r.endsWith("_begin")){var a=u.substr(0,u.length-5)+"end";E[r]=a,m="newblock"}else{e.eatSpace(),"("==e.peek()&&(m="newmacro");var l=e.current();e.backUp(l.length-r.length)}return"def"}return null}if("$"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if("#"==i)return e.next(),e.eatWhile(/[\d_.]/),"def";if("@"==i)return e.next(),e.eatWhile(/[@]/),"def";if('"'==i)return e.next(),t.tokenize=M(i),t.tokenize(e,t);if("/"==i){if(e.next(),e.eat("*"))return t.tokenize=q,q(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(b)||e.match(h)||e.match(y)||e.match(k)||e.match(w)||e.match(g)||e.match(b))return"number";if(e.eatWhile(p))return m=e.current(),"meta";if(e.eatWhile(/[\w\$_]/)){r=e.current();return f[r]?(E[r]&&(m="newblock","fork"===r&&(e.eatSpace(),";"==e.peek()&&(m="newstatement"),e.backUp(e.current().length-r.length))),A[r]&&(m="newstatement"),u=r,"keyword"):"variable"}return e.next(),null}function M(e){return function(t,n){var i,r=!1,a=!1;while(null!=(i=t.next())){if(i==e&&!r){a=!0;break}r=!r&&"\\"==i}return(a||!r&&!s)&&(n.tokenize=B),"string"}}function q(e,t){var n,i=!1;while(n=e.next()){if("/"==n&&i){t.tokenize=B;break}i="*"==n}return"comment"}function W(e,t,n,i,r,a){this.indented=e,this.column=t,this.type=n,this.scopekind=i,this.align=r,this.prev=a}function U(e,t,n,i){var r=e.indented,a=new W(r,t,n,i||"",null,e.context);return e.context=a}function D(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function L(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}function T(e,t){return null!=e&&(e.scopekind===t||T(e.prev,t))}function N(){var e=[];for(var t in E)if(E[t]){var n=E[t].split(";");for(var i in n)e.push(n[i])}var r=new RegExp("[{}()\\[\\]]|("+e.join("|")+")$");return r}return{electricInput:N(),startState:function(e){var t={tokenize:null,context:new W((e||0)-i,0,"top","top",!1),indented:0,compilerDirectiveIndented:0,startOfLine:!0};return c.startState&&c.startState(t),t},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),c.token){var i=c.token(e,t);if(void 0!==i)return i}if(e.eatSpace())return null;m=null,u=null;i=(t.tokenize||B)(e,t);if("comment"==i||"meta"==i||"variable"==i)return"="!==m&&"<="!==m||T(n,"assignment")||(U(t,e.column()+m.length,"assignment","assignment"),null==n.align&&(n.align=!0)),i;null==n.align&&(n.align=!0);var a="assignment"==n.type&&x.test(m)&&n.prev&&n.prev.type===m;if(m==n.type||a){if(a&&(n=D(t)),n=D(t),")"==m){if(n&&"macro"===n.type){n=D(t);while(n&&("statement"==n.type||"assignment"==n.type))n=D(t)}}else if("}"==m&&n&&"statement"===n.type)while(n&&"statement"==n.type)n=D(t)}else if((";"==m||","==m)&&("statement"==n.type||"assignment"==n.type)||n.type&&L(u,n.type)){n=D(t);while(n&&("statement"==n.type||"assignment"==n.type))n=D(t)}else if("{"==m)U(t,e.column(),"}");else if("["==m)U(t,e.column(),"]");else if("("==m)U(t,e.column(),")");else if(n&&"endcase"==n.type&&":"==m)U(t,e.column(),"statement","case");else if("newstatement"==m)U(t,e.column(),"statement",u);else if("newblock"==m)if("function"!=u||!n||"statement"!=n.type&&"endgroup"!=n.type)if("task"==u&&n&&"statement"==n.type);else if("class"==u&&n&&"statement"==n.type);else{var l=E[u];U(t,e.column(),l,u)}else;else("newmacro"==m||u&&u.match(I))&&("newmacro"==m&&U(t,e.column(),"macro","macro"),u.match(z)&&(t.compilerDirectiveIndented-=r),u.match(C)&&(t.compilerDirectiveIndented+=r));return t.startOfLine=!1,i},indent:function(t,n){if(t.tokenize!=B&&null!=t.tokenize)return e.Pass;if(c.indent){var o=c.indent(t);if(o>=0)return o}var s=t.context,d=n&&n.charAt(0);"statement"==s.type&&"}"==d&&(s=s.prev);var m=!1,u=n.match(_);return u&&(m=L(u[0],s.type)),!l&&n.match(I)?n.match(z)?t.compilerDirectiveIndented-r:t.compilerDirectiveIndented:"statement"==s.type?s.indented+("{"==d?0:r):!x.test(s.type)&&"assignment"!=s.type||!s.align||a?")"!=s.type||m?s.indented+(m?0:i):s.indented+r:s.column+(m?0:1)},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}})),e.defineMIME("text/x-verilog",{name:"verilog"}),e.defineMIME("text/x-systemverilog",{name:"verilog"});var t={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"hr","/":"property","/-":"property","@":"variable-3","@-":"variable-3","@++":"variable-3","@+=":"variable-3","@+=-":"variable-3","@--":"variable-3","@-=":"variable-3","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable-2","**":"variable-2","\\":"keyword",'"':"comment"},n={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},i=3,r=!1,a=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,l=/^[! ]  /,o=/^[! ] */,s=/^\/[\/\*]/;function c(e,t,n){var r=t/i;return"tlv-"+e.tlvIndentationStyle[r]+"-"+n}function d(e){var t;return(t=e.match(a,!1))&&t[2].length>0}e.defineMIME("text/x-tlv",{name:"verilog",hooks:{electricInput:!1,token:function(e,m){var u=void 0;if(e.sol()&&!m.tlvInBlockComment){"\\"==e.peek()&&(u="def",e.skipToEnd(),e.string.match(/\\SV/)?m.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(m.tlvCodeActive=!0)),m.tlvCodeActive&&0==e.pos&&0==m.indented&&(k=e.match(o,!1))&&(m.indented=k[0].length);var f=m.indented,p=f/i;if(p<=m.tlvIndentationStyle.length){var v=e.string.length==f,g=p*i;if(g<e.string.length){var h=e.string.slice(g),y=h[0];n[y]&&(k=h.match(a))&&t[k[1]]&&(f+=i,"\\"==y&&g>0||(m.tlvIndentationStyle[p]=n[y],r&&(m.statementComment=!1),p++))}if(!v)while(m.tlvIndentationStyle.length>p)m.tlvIndentationStyle.pop()}m.tlvNextIndent=f}if(m.tlvCodeActive){var k,w=!1;if(r&&(w=" "!=e.peek()&&void 0===u&&!m.tlvInBlockComment&&e.column()==m.tlvIndentationStyle.length*i,w&&(m.statementComment&&(w=!1),m.statementComment=e.match(s,!1))),void 0!==u)u+=" "+c(m,0,"scope-ident");else if(e.pos/i<m.tlvIndentationStyle.length&&(k=e.match(e.sol()?l:/^   /)))u="tlv-indent-"+(e.pos%2==0?"even":"odd")+" "+c(m,e.pos-i,"indent"),"!"==k[0].charAt(0)&&(u+=" tlv-alert-line-prefix"),d(e)&&(u+=" "+c(m,e.pos,"before-scope-ident"));else if(m.tlvInBlockComment)e.match(/^.*?\*\//)?(m.tlvInBlockComment=!1,r&&!e.eol()&&(m.statementComment=!1)):e.skipToEnd(),u="comment";else if((k=e.match(s))&&!m.tlvInBlockComment)"//"==k[0]?e.skipToEnd():m.tlvInBlockComment=!0,u="comment";else if(k=e.match(a)){var b=k[1],_=k[2];t.hasOwnProperty(b)&&(_.length>0||e.eol())?(u=t[b],e.column()==m.indented&&(u+=" "+c(m,e.column(),"scope-ident"))):(e.backUp(e.current().length-1),u="tlv-default")}else e.match(/^\t+/)?u="tlv-tab":e.match(/^[\[\]{}\(\);\:]+/)?u="meta":(k=e.match(/^[mM]4([\+_])?[\w\d_]*/))?u="+"==k[1]?"tlv-m4-plus":"tlv-m4":e.match(/^ +/)?u=e.eol()?"error":"tlv-default":e.match(/^[\w\d_]+/)?u="number":(e.next(),u="tlv-default");w&&(u+=" tlv-statement")}else e.match(/^[mM]4([\w\d_]*)/)&&(u="tlv-m4");return u},indent:function(e){return 1==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1,r&&(e.statementComment=!1)}}})}))}}]);