(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[127],{naPG:function(e,t,r){(function(e){"use strict";e(r("VrN/"))})((function(e){"use strict";e.defineMode("powershell",(function(){function e(e,t){t=t||{};for(var r=void 0!==t.prefix?t.prefix:"^",n=void 0!==t.suffix?t.suffix:"\\b",i=0;i<e.length;i++)e[i]instanceof RegExp?e[i]=e[i].source:e[i]=e[i].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(r+"("+e.join("|")+")"+n,"i")}var t="(?=[^A-Za-z\\d\\-_]|$)",r=/[\w\-:]/,n=e([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:t}),i=/[\[\]{},;`\\\.]|@[({]/,o=e(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),a=/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/,s=e([o,a],{suffix:""}),u=/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,c=/^[A-Za-z\_][A-Za-z\-\_\d]*\b/,l=/[A-Z]:|%|\?/i,p=e([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),m=e([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),S=e([l,p,m],{suffix:t}),f={keyword:n,number:u,operator:s,builtin:S,punctuation:i,identifier:c};function P(e,t){var n=t.returnStack[t.returnStack.length-1];if(n&&n.shouldReturnFrom(t))return t.tokenize=n.tokenize,t.returnStack.pop(),t.tokenize(e,t);if(e.eatSpace())return null;if(e.eat("("))return t.bracketNesting+=1,"punctuation";if(e.eat(")"))return t.bracketNesting-=1,"punctuation";for(var i in f)if(e.match(f[i]))return i;var o=e.next();if("'"===o)return d(e,t);if("$"===o)return x(e,t);if('"'===o)return g(e,t);if("<"===o&&e.eat("#"))return t.tokenize=k,k(e,t);if("#"===o)return e.skipToEnd(),"comment";if("@"===o){var a=e.eat(/["']/);if(a&&e.eol())return t.tokenize=w,t.startQuote=a[0],w(e,t);if(e.eol())return"error";if(e.peek().match(/[({]/))return"punctuation";if(e.peek().match(r))return x(e,t)}return"error"}function d(e,t){var r;while(null!=(r=e.peek()))if(e.next(),"'"===r&&!e.eat("'"))return t.tokenize=P,"string";return"error"}function g(e,t){var r;while(null!=(r=e.peek())){if("$"===r)return t.tokenize=v,"string";if(e.next(),"`"!==r){if('"'===r&&!e.eat('"'))return t.tokenize=P,"string"}else e.next()}return"error"}function v(e,t){return h(e,t,g)}function b(e,t){return t.tokenize=w,t.startQuote='"',w(e,t)}function C(e,t){return h(e,t,b)}function h(e,t,r){if(e.match("$(")){var n=t.bracketNesting;return t.returnStack.push({shouldReturnFrom:function(e){return e.bracketNesting===n},tokenize:r}),t.tokenize=P,t.bracketNesting+=1,"punctuation"}return e.next(),t.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:r}),t.tokenize=x,t.tokenize(e,t)}function k(e,t){var r,n=!1;while(null!=(r=e.next())){if(n&&">"==r){t.tokenize=P;break}n="#"===r}return"comment"}function x(e,t){var n=e.peek();return e.eat("{")?(t.tokenize=E,E(e,t)):void 0!=n&&n.match(r)?(e.eatWhile(r),t.tokenize=P,"variable-2"):(t.tokenize=P,"error")}function E(e,t){var r;while(null!=(r=e.next()))if("}"===r){t.tokenize=P;break}return"variable-2"}function w(e,t){var r=t.startQuote;if(e.sol()&&e.match(new RegExp(r+"@")))t.tokenize=P;else if('"'===r)while(!e.eol()){var n=e.peek();if("$"===n)return t.tokenize=C,"string";e.next(),"`"===n&&e.next()}else e.skipToEnd();return"string"}var y={startState:function(){return{returnStack:[],bracketNesting:0,tokenize:P}},token:function(e,t){return t.tokenize(e,t)},blockCommentStart:"<#",blockCommentEnd:"#>",lineComment:"#",fold:"brace"};return y})),e.defineMIME("application/x-powershell","powershell")}))}}]);