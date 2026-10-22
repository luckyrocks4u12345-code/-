/* 莉莉丝前端组件 v1.6.0 · 脚本（由 lls-1.6.0.html 外部引用）
   注意：本文件不再经过酒馆正则替换，$1~$28 不会被替换，所有楼层数据一律从 DOM 占位 span 读取 */
var LilithBundle=window.LilithBundle=window.LilithBundle||(()=>{var et=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,ue=Object.getOwnPropertyNames,ht=Object.prototype.hasOwnProperty,ns=(j,Z)=>{for(var e in Z)et(j,e,{get:Z[e],enumerable:!0})},os=(j,Z,e,z)=>{if(Z&&typeof Z=="object"||typeof Z=="function")for(let _ of ue(Z))!ht.call(j,_)&&_!==e&&et(j,_,{get:()=>Z[_],enumerable:!(z=Dt(Z,_))||z.enumerable});return j},rs=j=>os(et({},"__esModule",{value:!0}),j),me={};ns(me,{initSingleLilithCard:()=>fs});var Mu=[{id:"fp",name:"FP\u70B9\u6570",icon:"\u{1F496}",badgeColor:"#ec4899",desc:"\u4FDD\u5E95\u5956\u52B1\u4E4B\u4E00\uFF0C\u76F4\u63A5\u83B7\u5F97 200~800 \u6216\u66F4\u591A\u6B22\u6109/\u547D\u8FD0\u70B9\u6570 (FP)"},{id:"skill_book",name:"\u6280\u80FD\u4E66",icon:"\u{1F4D6}",badgeColor:"#a855f7",desc:"\u5951\u5408\u8BE5\u5730\u533A\u6216\u9B45\u9B54\u7279\u8272\u7684\u79D8\u672F\u3001\u6218\u6280\u3001\u9B54\u6CD5\u5BC6\u5178\u6216\u8C03\u60C5\u88AB\u52A8"},{id:"magic_scroll",name:"\u9B54\u6CD5\u5377\u8F74",icon:"\u{1F4DC}",badgeColor:"#3b82f6",desc:"\u8BB0\u8F7D\u4E0A\u4F4D\u9B54\u6CD5\u3001\u9AD8\u9636\u5951\u7EA6\u6216\u7279\u6B8A\u79D8\u4EEA\u7684\u4E00\u6B21\u6027\u5F3A\u529B\u5377\u8F74"},{id:"tool",name:"\u5DE5\u5177",icon:"\u{1F527}",badgeColor:"#64748b",desc:"\u5404\u884C\u5404\u4E1A\u7684\u5B9E\u7528\u5DE5\u5177\u3001\u5DE5\u5320\u5668\u5177\u3001\u63A2\u9669\u5DE5\u5177\u6216\u7279\u6B8A\u5F00\u9501\u673A\u5173"},{id:"monster_orb",name:"\u9B54\u7269\u7403",icon:"\u{1F52E}",badgeColor:"#8b5cf6",desc:"\u5C01\u5370\u4E86\u4E00\u4E2A\u672A\u77E5\u9B54\u7269\u7684\u62F3\u5934\u5927\u5C0F\u7684\u7403\uFF0C\u4E22\u51FA\u540E\u91CA\u653E\u4E00\u4E2A\u4E0D\u5206\u654C\u6211\u7684\u672A\u77E5\u9B54\u7269"},{id:"mystery_giftbox",name:"\u795E\u79D8\u793C\u76D2",icon:"\u{1F381}",badgeColor:"#f59e0b",desc:"\u8389\u8389\u4E1D\u6293\u53D6\u9644\u8FD1\u968F\u673A\u7269\u54C1\u5236\u4F5C\u7684\u793C\u76D2\uFF0C\u80FD\u5F00\u51FA\u7A00\u4E16\u73CD\u5B9D\u4E5F\u80FD\u5F00\u51FA\u65E0\u7528\u5783\u573E"},{id:"lilith_summon",name:"\u8389\u8389\u4E1D\u53EC\u5524\u5377",icon:"\u{1F48B}",badgeColor:"#f43f5e",desc:"\u6D88\u8017\u540E\u53EF\u6682\u65F6\u5524\u51FA\u8389\u8389\u4E1D\u9B45\u9B54\u672C\u4F53\u964D\u4E34\u534F\u52A9\uFF08\u6709\u65F6\u9650\uFF1B\u82E5\u8389\u8389\u4E1D\u5DF2\u6C38\u4E45\u5B9E\u4F53\u5316\uFF0C\u4EA6\u53EF\u7528\u4E8E\u53EC\u5524\u5176\u4ED6\u9B45\u9B54\uFF0C\u4F46\u8389\u8389\u4E1D\u4F1A\u6781\u5EA6\u5403\u918B\uFF09"},{id:"buff",name:"\u589E\u76CABUFF",icon:"\u2728",badgeColor:"#10b981",desc:"\u4E13\u5C5E\u9650\u65F6\u6216\u6C38\u4E45\u589E\u76CA\u7279\u8D28\uFF08\u5982\u7231\u6B32\u4EB2\u548C\u3001\u4F53\u80FD\u5F3A\u5316\u3001\u654F\u611F\u76F4\u89C9\u7B49\uFF09"},{id:"erotic_gear",name:"\u60C5\u8272\u7279\u5316\u88C5\u5907",icon:"\u{1F459}",badgeColor:"#e11d48",desc:"\u5E26\u6709\u9B45\u60D1\u3001\u8C03\u60C5\u3001\u9632\u5FA1\u6216\u611F\u5B98\u523A\u6FC0\u7684\u88C5\u5907\u5927\u7C7B\uFF08\u542B\u6B66\u5668\u3001\u9632\u5177\u3001\u9970\u54C1\u7B49\uFF09"},{id:"normal_gear",name:"\u6B63\u5E38\u5411\u88C5\u5907",icon:"\u{1F6E1}\uFE0F",badgeColor:"#0ea5e9",desc:"\u6B63\u7EDF\u5F3A\u529B\u7684\u5192\u9669\u88C5\u5907\u5927\u7C7B\uFF08\u5305\u542B\u6B63\u89C4\u6B66\u5668\u3001\u575A\u56FA\u9632\u5177\u3001\u9B54\u6CD5\u9970\u54C1\u7B49\uFF09"},{id:"prank_item",name:"\u6076\u4F5C\u5267\u9053\u5177",icon:"\u{1F3AD}",badgeColor:"#d97706",desc:"\u7528\u4E8E\u65E5\u5E38\u6349\u5F04\u3001\u6574\u86CA\u3001\u6076\u4F5C\u5267\u6216\u5236\u9020\u8352\u5510\u6DF7\u4E71\u5C40\u9762\u7684\u8DA3\u5473\u7528\u5177"},{id:"erotic_item",name:"\u60C5\u8DA3\u5411\u9053\u5177",icon:"\u{1F51E}",badgeColor:"#db2777",desc:"\u4E13\u95E8\u7528\u4E8E\u589E\u8FDB\u654F\u611F\u5EA6\u3001\u7231\u6B32\u8C03\u60C5\u3001\u60C5\u8DA3\u60E9\u7F5A\u6216\u6B22\u6109\u4E92\u52A8\u7684\u9053\u5177"},{id:"normal_item",name:"\u6B63\u5E38\u5411\u9053\u5177",icon:"\u{1F392}",badgeColor:"#059669",desc:"\u6B63\u7EDF\u5192\u9669\u4E2D\u5B9E\u7528\u7684\u5947\u5999\u7528\u5177\u3001\u7167\u660E\u3001\u7D22\u654C\u3001\u751F\u5B58\u6216\u591A\u529F\u80FD\u9053\u5177"},{id:"succubus_egg",name:"\u9B45\u9B54\u86CB",icon:"\u{1F95A}",badgeColor:"#9333ea",desc:"\u522B\u7684\u9B45\u9B54\u5728\u6B64\u5730\u4E71\u641E\u8BDE\u4E0B\u7684\u86CB\uFF0C\u80FD\u5B75\u5316\u51FA\u5947\u5999\u751F\u7269\u3001\u5F02\u79CD\u9B54\u5BA0\u6216\u4E9A\u79CD\u9B45\u9B54"},{id:"alchemy_material",name:"\u70BC\u91D1\u6750\u6599",icon:"\u{1F9EA}",badgeColor:"#0284c7",desc:"\u6765\u81EA\u5404\u5730\u7684\u73CD\u7A00\u77FF\u77F3\u3001\u9B54\u529B\u7ED3\u6676\u3001\u4F53\u6DB2\u7CBE\u7CB9\u3001\u795E\u6027\u6B8B\u7247\u6216\u70BC\u91D1\u539F\u6DB2"},{id:"succubus_currency",name:"\u9B45\u9B54\u901A\u7528\u8D27\u5E01",icon:"\u{1FA99}",badgeColor:"#eab308",desc:"\u9B45\u9B54\u9886\u5730\u4E0E\u865A\u6D77\u6DF1\u6E0A\u6D41\u901A\u4FE1\u7269\uFF0C\u53EF\u7528\u4E8E\u5730\u4E0B\u9ED1\u5E02\u4E0E\u7279\u6B8A\u4EA4\u6613"},{id:"eros_fragment",name:"\u7231\u6B32\u788E\u7247",icon:"\u{1F48E}",badgeColor:"#f43f5e",desc:"\u54C1\u8D28\u4E3A\u3010\u552F\u4E00\u3011\u3002\u51DD\u805A\u6838\u5FC3\u56E0\u679C\u7684\u7231\u6B32\u788E\u7247\uFF08\u96C6\u9F50 20 \u679A\u53EF\u4F7F\u8389\u8389\u4E1D\u6C38\u4E45\u5B9E\u4F53\u5316\uFF1B\u82E5\u8389\u8389\u4E1D\u5DF2\u6C38\u4E45\u5B9E\u4F53\u5316\uFF0C\u53EF\u7528\u4E8E\u89E3\u9501\u4E13\u5C5E\u6280\u80FD\u548C\u6253\u9020\u4E13\u5C5E\u9B45\u9B54\u5316\u88C5\u5907\uFF09"},{id:"top_secret_intel",name:"\u7EDD\u5BC6\u60C5\u62A5",icon:"\u{1F4C1}",badgeColor:"#475569",desc:"\u8BE5\u5730\u533A\u6216\u52BF\u529B\u5185\u90E8\u9AD8\u5C42\u7684\u653F\u6CBB\u673A\u5BC6\u3001\u6697\u6D41\u9634\u8C0B\u3001\u519B\u4E8B\u8BBE\u9632\u6216\u79D8\u5B9D\u60C5\u62A5"},{id:"erotic_intel",name:"\u7EEF\u8272\u60C5\u62A5",icon:"\u{1F48C}",badgeColor:"#be185d",desc:"\u5173\u952E\u4EBA\u7269\u7684\u8EAB\u4F53\u5F31\u70B9\u3001\u9690\u79D8\u7656\u597D\u3001\u79C1\u751F\u6D3B\u79D8\u95FB\u6216\u79C1\u5BC6\u60C5\u611F\u77ED\u677F"},{id:"lilith_clothing",name:"\u8389\u8389\u4E1D\u7684\u539F\u5473\u8863\u7269",icon:"\u{1F380}",badgeColor:"#f472b6",desc:"\u8389\u8389\u4E1D\u7684\u5404\u79CD\u8D34\u8EAB\u5C0F\u8863\u7269\u3001\u88C5\u9970\u3001\u5E03\u6599\u7B49\uFF0C\u8389\u8389\u4E1D\u7684\u6076\u8DA3\u5473\u8C03\u60C5\u9053\u5177\u4E4B\u4E00"}];function as(j){const Z=new Date,e=`${Z.getFullYear()}-${String(Z.getMonth()+1).padStart(2,"0")}-${String(Z.getDate()).padStart(2,"0")} ${String(Z.getHours()).padStart(2,"0")}:${String(Z.getMinutes()).padStart(2,"0")}:${String(Z.getSeconds()).padStart(2,"0")}`,z=j.items.filter(ru=>ru.type!=="loan"),_=j.items.find(ru=>ru.type==="loan"),k=_?_.count:0,Fu=z.reduce((ru,$u)=>ru+$u.count,0);let Bu="";z.length===0?Bu=`  \uFF08\u672C\u6B21\u7ED3\u7B97\u672A\u9009\u8D2D\u666E\u901A\u73CD\u5B9D\u5546\u54C1\uFF09
`:Bu=z.map((ru,$u)=>{const Xu=[],Et=ru.tier?`[${ru.tier.toUpperCase()}] `:"";return Xu.push(`[\u5546\u54C1 #${$u+1}] ${Et}${ru.name} x ${ru.count} \u4EF6`),Xu.push(`    - \u5355\u4EF6\u4EF7\u683C\uFF1A${ru.price.toLocaleString()} FP`),Xu.push(`    - \u5408\u8BA1\u6D88\u8017\uFF1A${(ru.price*ru.count).toLocaleString()} FP`),Xu.join(`
`)}).join(`

`);let xu="";k>0&&(xu=`
\u4E8C\u3001\u7231\u6B32\u501F\u8D37\u5951\u7EA6\u7B7E\u7F72\u660E\u7EC6
================================================================================
  - \u501F\u636E\u751F\u6548\u4EFD\u6570\uFF1A${k} \u4EFD
  - \u83B7\u5F97FP\u603B\u989D\uFF1A+${(k*2e3).toLocaleString()} FP
  - \u5951\u7EA6\u8BF4\u660E\uFF1A\u7B7E\u7F72\u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6 x ${k}\u3011\uFF0C\u62B5\u62BC\u5FC3\u795E\u4E0E\u7075\u9B42\u652F\u914D\u6743
`);const _u=[];z.forEach(ru=>{const $u=ru.tier?`[${ru.tier.toUpperCase()}] `:"";_u.push(`  * ${$u}${ru.name} * ${ru.count}`)}),k>0&&_u.push(`  * \u7231\u6B32\u501F\u636E\u5951\u7EA6 * ${k}`);const At=_u.length>0?_u.join(`
`):"  \uFF08\u65E0\u7269\u54C1\u9700\u5F55\u5165\uFF09";return`================================================================================
          \u3010\u9B45\u9B54\u9886\u5730 \xB7 \u7231\u6B32\u5546\u94FA\u7ED3\u7B97\u6E05\u5355 (Eros Shop Receipt)\u3011
================================================================================
\u638C\u67DC\u7B7E\u7F72\uFF1A\u8389\u8389\u4E1D \xB7 \u9B45\u9B54\u9886\u4E3B (Lilith)
\u987E\u5BA2\u72B6\u6001\uFF1A\u6DF1\u5EA6\u5951\u7EA6\u7ED1\u5B9A

\u4E00\u3001\u6B22\u6109\u73CD\u5B9D\u8D2D\u4E70\u660E\u7EC6
================================================================================
${Bu}
--------------------------------------------------------------------------------
\u3010\u5DF2\u8D2D\u5546\u54C1\u79CD\u7C7B\u3011\uFF1A${z.length} \u79CD
\u3010\u4EA4\u4ED8\u5546\u54C1\u603B\u6570\u3011\uFF1A${Fu} \u4EF6
\u3010\u5546\u54C1\u539F\u4EF7\u603B\u8BA1\u3011\uFF1A${j.goodsTotalCost.toLocaleString()} FP
${xu}
================================================================================
\u4E09\u3001\u6536\u652F\u6700\u7EC8\u6838\u7B97
================================================================================
  \u5546\u54C1\u539F\u4EF7\u603B\u989D\uFF1A    ${j.goodsTotalCost.toLocaleString()} FP
- \u501F\u636E\u5951\u7EA6\u62B5\u6263\uFF1A   -${j.loanGain.toLocaleString()} FP
--------------------------------------------------------------------------------
\u3010\u672C\u6B21\u5B9E\u4ED8\u51C0\u989D\u3011\uFF1A   ${j.totalFpCost.toLocaleString()} FP
\u3010\u5F53\u524DFP\u8D26\u6237\u7ED3\u4F59\u3011\uFF1A ${j.remainingFP.toLocaleString()} FP

================================================================================
\u56DB\u3001\u5546\u54C1\u4E0E\u5951\u7EA6\u5F55\u5165\u6E05\u5355\uFF08\u8BF7\u5C06\u4EE5\u4E0B\u6240\u6709\u7269\u54C1\u4E0E\u5951\u7EA6\u5168\u90E8\u5F55\u5165\u73A9\u5BB6\u80CC\u5305\uFF09
================================================================================
${At}

================================================================================
\u2726 \u638C\u67DC\u8389\u8389\u4E1D\u7684\u5462\u5583\u7559\u8A00 \u2726
\u201C\u54FC\u54FC~ \u8D26\u76EE\u5DF2\u7ECF\u4E00\u7B14\u4E00\u5212\u8BB0\u8FDB\u6211\u7684\u79D8\u5BC6\u5951\u7EA6\u7C3F\u91CC\u4E86\u54E6\u2665 
  \u62FF\u8D70\u8FD9\u4E9B\u73CD\u5B9D\u540E\uFF0C\u53EF\u8981\u597D\u597D\u5728\u4ECA\u665A\u7684\u72E9\u730E\u4E0E\u8C03\u60C5\u4E2D\u7528\u4E0A\u5440\u2026\u2026
  \u8981\u662F\u7B7E\u4E0B\u4E86\u501F\u636E\u5951\u7EA6\uFF0C\u5F85\u4F1A\u513F\u53EF\u522B\u60F3\u8F7B\u6613\u9003\u51FA\u6211\u7684\u5BDD\u6BBF\u5462~\u201D
================================================================================
`}function ls(j){if(typeof navigator<"u"&&navigator.clipboard&&typeof navigator.clipboard.writeText=="function")return navigator.clipboard.writeText(j).then(()=>!0).catch(()=>!1);try{if(typeof document>"u")return Promise.resolve(!1);const Z=document.createElement("textarea");Z.value=j,Z.style.position="fixed",Z.style.opacity="0",document.body.appendChild(Z),Z.select();const e=document.execCommand("copy");return document.body.removeChild(Z),Promise.resolve(e)}catch{return Promise.resolve(!1)}}function xe(j,Z){try{ls(Z)}catch{}const e=new Blob([Z],{type:"text/plain;charset=utf-8"}),z=[];typeof window<"u"&&z.push(window);try{typeof window<"u"&&window.parent&&window.parent!==window&&z.push(window.parent)}catch{}try{typeof window<"u"&&window.top&&window.top!==window&&!z.includes(window.top)&&z.push(window.top)}catch{}let _=!1;for(const k of z)try{const Fu=k.File||window.File,Bu=new Fu([e],j,{type:"text/plain;charset=utf-8"});if(typeof k.populateFileAttachment=="function"){k.populateFileAttachment({target:{files:[Bu]},preventDefault:()=>{}}),_=!0;break}if(typeof k.uploadFile=="function"){k.uploadFile(Bu),_=!0;break}if(typeof k.addAttachment=="function"){k.addAttachment(Bu),_=!0;break}}catch{}if(!_)for(const k of z)try{const Fu=k.document;if(!Fu)continue;const Bu=Fu.querySelector("#send_textarea")||Fu.querySelector("#chat_input");if(Bu){const xu=k.File||window.File,_u=k.DataTransfer||window.DataTransfer,At=new xu([e],j,{type:"text/plain;charset=utf-8"}),ru=new _u;ru.items.add(At);const $u=new(k.Event||Event)("paste",{bubbles:!0,cancelable:!0});$u.clipboardData=ru,$u.originalEvent={clipboardData:ru},Bu.dispatchEvent($u),k.$&&k.$(Bu).trigger($u),_=!0;break}}catch{}return{success:!0,attached:_,filename:j}}function cs(j){const Z=as(j);return{success:!0,attachResult:xe("\u7231\u6B32\u8D2D\u7269\u6E05\u5355.txt",Z),content:Z}}var Fs={\u8389\u8389\u4E1D\u5B9D\u5E93:{name:"\u8389\u8389\u4E1D\u5B9D\u5E93",riskTier:"\u4F4E\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u8389\u8389\u4E1D\u5B9D\u5E93\u4E13\u5C5E\u7684\u968F\u673A\u6B63\u9762\u9650\u65F6BUFF\u3002",subRegions:["\u3010\u8389\u8389\u4E1D\u7684\u79C1\u4EBA\u5B9D\u5E93\u3011"],noteDesc:"\u8389\u8389\u4E1D\u7684\u79C1\u4EBA\u5B9D\u5E93\u5305\u7F57\u4E07\u8C61\uFF0C\u4F46\u90FD\u662F\u9B45\u9B54\u7279\u5316\u7269\u54C1\u3002",ruleDesc:"\u8389\u8389\u4E1D\u968F\u673A\u6311\u9009\u5B9D\u7269\u8FDB\u884C\u8FDB\u8D27\u3002",lilithQuote:"\u201C\u54FC\u54FC~ \u6211\u7684\u79C1\u4EBA\u79C1\u85CF\u53EF\u90FD\u662F\u538B\u7BB1\u5E95\u7684\u5B9D\u7269\uFF0C\u6BCF\u4E00\u4EF6\u90FD\u5E26\u7740\u9B45\u9B54\u7684\u6781\u81F4\u6B22\u6109\u7279\u5316\u5462\u2665 \u968F\u624B\u6311\u51E0\u6837\u5E26\u53BB\u5546\u94FA\uFF0C\u53EF\u522B\u88AB\u8FF7\u5F97\u795E\u9B42\u98A0\u5012\u54E6~\u201D"},\u963F\u65AF\u5854\u5229\u4E9A:{name:"\u963F\u65AF\u5854\u5229\u4E9A",riskTier:"\u4F4E\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u963F\u65AF\u5854\u5229\u4E9A\u5927\u9646\u4E13\u5C5E\u7684\u968F\u673A\u6B63\u9762\u9650\u65F6BUFF\u3002",subRegions:["\u517D\u65CF\u8349\u539F","\u9F99\u810A\u5C71\u8109","\u5929\u955C\u6E56\u6E7F\u5730","\u51AC\u5E37\u6797\u76D8","\u7CBE\u7075\u738B\u5EAD","\u65E0\u5C3D\u6811\u6D77","\u8D64\u91D1\u6C99\u6D77","\u94A2\u810A\u5C71\u8109","\u514B\u6469\u4EC0\u5927\u9646","\u5965\u53E4\u65AF\u63D0\u59C6\u5E1D\u56FD","\u8BFA\u65AF\u52A0\u5FB7\u8054\u76DF","\u788E\u5195\u51B0\u810A","\u795E\u8FF9\u7FA4\u5C71","\u7D22\u4F26\u8482\u65AF\u738B\u56FD","\u8BFA\u74E6\u5C14\u6CB3\u6C34\u57DF","\u788E\u661F\u7FA4\u5C9B","\u6C38\u51BB\u51B0\u539F","\u96FE\u6676\u6E2F"],ruleDesc:"\u8389\u8389\u4E1D\u968F\u673A\u524D\u5F80\u4E00\u4E2A\u5B50\u533A\u57DF\u53BB\u8FDB\u8D27\u3002",lilithQuote:"\u201C\u963F\u65AF\u5854\u5229\u4E9A\u8FD9\u7247\u5927\u9646\u8FD8\u771F\u662F\u5E7F\u88A4\u2026\u2026\u8BE5\u53BB\u54EA\u91CC\u8FDB\u8D27\u5462\uFF1F\u54FC\u54FC\uFF0C\u5C31\u968F\u673A\u9009\u4E00\u4E2A\u987A\u773C\u7684\u5730\u65B9\u53BB\u641C\u522E\u4E00\u756A\u5427~\u201D"},\u4F4D\u9762\u4EA4\u6C47\u5904:{name:"\u4F4D\u9762\u4EA4\u6C47\u5904",riskTier:"\u4F4E\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u4EA4\u6C47\u88C2\u9699\u5F02\u754C\u7684\u968F\u673A\u6B63\u9762\u9650\u65F6BUFF\u3002",subRegions:["\u73B0\u4EE3\u793E\u4F1A\u4EA4\u6C47\u5904","\u5F02\u754C\u4F4D\u9762\u4EA4\u6C47\u5904","\u827E\u7409\u5FB7\u96F7\u59C6\xB7\u5C3C\u5C14(\u6CE3\u7A7A\u9057\u8FF9)","\u60B2\u9E23\u6CBC\u6CFD","\u65E0\u5C3D\u5730\u57CE","\u6DF1\u6D77\u5927\u6F29\u6DA1","\u6218\u952440K\u4F4D\u9762\u4EA4\u6C47\u5904\uFF08\u8389\u8389\u4E1D\u901A\u8FC7\u4E9A\u7A7A\u95F4\u8272\u5B7D\u52BF\u529B\u7684\u53CB\u597D\u5E2E\u52A9\u62B5\u8FBE\uFF09","\u4E0A\u53E4\u5377\u8F74\u4F4D\u9762\u4EA4\u6C47\u5904\uFF08\u901A\u8FC7\u4E0A\u53E4\u5377\u8F74\u4E2D\u7684\u9B45\u9B54\u597D\u53CB\u62B5\u8FBE\uFF09","\u9ED1\u6697\u4E4B\u9B42\u4E16\u754C\u4F4D\u9762\u4EA4\u6C47\u5904\uFF08\u901A\u8FC7\u4E00\u4E2A\u9632\u706B\u5973\u597D\u53CB\u7684\u534F\u52A9\u62B5\u8FBE\uFF09","\u827E\u5C14\u767B\u6CD5\u73AF\u4E16\u754C\u4F4D\u9762\u4EA4\u6C47\u5904"],ruleDesc:"\u9009\u5B9A\u4E00\u4E2A\u5B50\u533A\u57DF\u524D\u5F80\u3002",lilithQuote:"\u201C\u5404\u4E2A\u65F6\u7A7A\u4E0E\u7EF4\u5EA6\u7684\u88C2\u9699\u5728\u6B64\u4EA4\u7EC7\u2026\u2026\u53BB\u54EA\u597D\u5462\uFF1F\u8BA9\u6211\u60F3\u60F3\uFF0C\u6311\u4E2A\u6700\u6709\u8DA3\u7684\u4E16\u754C\u987A\u70B9\u5947\u5999\u7684\u5C0F\u73A9\u610F\u513F\u56DE\u6765\u2665\u201D"},\u534A\u795E\u4E4B\u91D1\u5E93:{name:"\u534A\u795E\u4E4B\u91D1\u5E93",riskTier:"\u9AD8\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u534A\u795E\u79D8\u5E93\u5B88\u62A4\u8005/\u7687\u5BA4\u4E4B\u4E3B\u7684\u9AD8\u5C42\u7EA7\u5B58\u5728\u6CE8\u610FBUFF\u3002",subRegions:["\u5965\u53E4\u65AF\u63D0\u59C6\u5E1D\u56FD\u7687\u5BA4\u79D8\u5E93","\u7D22\u4F26\u8482\u65AF\u738B\u56FD\u7687\u5BA4\u79D8\u5E93","\u7FFC\u6C11\u5723\u56FD\u68B5\u5C3C\u4E9A\u5723\u56FD\u56FD\u5E93","\u4F2F\u4F26\u65AF\u6CD5\u73AF\u79D8\u5E93","\u8428\u8D6B\u62C9\u8054\u90A6\u5B9D\u5E93","\u5361\u62C9\u4EC0\u5229\u4E9A\u65AF\u6C0F\u65CF\u5B9D\u5E93","\u53E4\u9F99\u5DE2\u7A74","\u6C38\u591C\u76DF\u7EA6\u5B9D\u5E93"],ruleDesc:"\u9009\u5B9A\u4E00\u4E2A\u5B50\u533A\u57DF\u524D\u5F80\u3002",lilithQuote:"\u201C\u90A3\u4E9B\u534A\u795E\u548C\u7687\u5BA4\u85CF\u533F\u7684\u79C1\u5BC6\u79D8\u5B9D\u2026\u2026\u53BB\u54EA\u597D\u5462\uFF1F\u968F\u4FBF\u6311\u4E00\u5BB6\u53BB\u6F5C\u5165\u641C\u522E\uFF0C\u90A3\u4E9B\u8001\u5BB6\u4F19\u53EF\u62E6\u4E0D\u4F4F\u6211\u5462~\u201D"},\u8BF8\u795E\u4E4B\u56FD\u5EA6:{name:"\u8BF8\u795E\u4E4B\u56FD\u5EA6",riskTier:"\u9AD8\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u5BF9\u5E94\u795E\u660E\u4E0E\u5176\u795E\u56FD\u795E\u4F8D\u7684\u9AD8\u5C42\u7EA7\u5B58\u5728\u6CE8\u610FBUFF\u3002",subRegions:["\u8F89\u714C\u5973\u795E\u30FB\u7D22\u62C9\u8389\u5A05\u7684\u795E\u56FD","\u5F52\u9014\u5F15\u8DEF\u4EBA\xB7\u963F\u65AF\u6258\u5C14\u7684\u795E\u56FD","\u661F\u6811\u53CC\u8F89\xB7\u827E\u62C9\u56FE\u5A1C\u4E0E\u7EF4\u65AF\u666E\u7684\u795E\u56FD","\u5148\u7956\u4E4B\u9B42\xB7\u5361\u62C9\u4EC0\u7684\u795E\u56FD","\u6708\u4E0E\u661F\u8FB0\u7684\u4F4E\u8BED\u8005\xB7\u5F25\u83C8\u7684\u795E\u56FD","\u6DF1\u6D77\u4E0E\u6F6E\u6C50\u4E4B\u5973\u795E\xB7\u5A1C\u8FE6\u838E\u7684\u795E\u56FD","\u70C8\u65E5\u4E0E\u9EC4\u91D1\u4E4B\u4E3B\xB7\u91D1\u94CE\u7684\u795E\u56FD","\u5E0C\u671B\u795E\u5973\xB7\u827E\u5E0C\u8389\u5A05\u7684\u795E\u56FD","\u65C5\u9014\u4E0E\u5E78\u8FD0\u7684\u5973\u795E\xB7\u6CF0\u73C2\u7684\u795E\u56FD","\u5723\u7EA6\u4E4B\u62A4\xB7\u827E\u745F\u62C9\u7684\u795E\u56FD","\u4E07\u8C61\u7EC7\u5320\xB7\u73C2\u83B1\u5A05\u7684\u795E\u56FD"],ruleDesc:"\u8389\u8389\u4E1D\u968F\u673A\u524D\u5F80\u4E00\u4E2A\u5B50\u533A\u57DF\u53BB\u8FDB\u8D27\u3002",lilithQuote:"\u201C\u8BF8\u795E\u7684\u795E\u56FD\u5723\u5883\u5149\u8F89\u707F\u70C2\u2026\u2026\u8BE5\u53BB\u54EA\u91CC\u8FDB\u8D27\u5462\uFF1F\u4ECE\u90A3\u4E9B\u9AD8\u9AD8\u5728\u4E0A\u7684\u795E\u660E\u5EA7\u4E0B\u987A\u8D70\u51E0\u4EF6\u795E\u5723\u6069\u8D50\uFF0C\u5149\u662F\u60F3\u60F3\u5C31\u4EE4\u4EBA\u5174\u594B\u5462\u2665\u201D"},\u5F02\u795E\u4E4B\u4E50\u56ED:{name:"\u5F02\u795E\u4E4B\u4E50\u56ED",riskTier:"\u9AD8\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\uFF0C\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u865A\u6D77\u5F02\u795E/\u72C2\u4E71\u610F\u5FD7\u7684\u9AD8\u5C42\u7EA7\u5B58\u5728\u6CE8\u610FBUFF\u3002",subRegions:["\u865A\u6D77\u4E2D\u6DF1\u6E0A\u5F02\u795E\u7684\u4E50\u56ED","\u865A\u6D77\u4E2D\u6076\u9B54\u5730\u72F1\u7684\u4E50\u56ED","\u865A\u6D77\u4E2D\u8840\u8089\u7578\u602A\u7684\u4E50\u56ED","\u865A\u6D77\u4E2D\u866B\u5DE2\u866B\u7FA4\u7684\u4E50\u56ED","\u865A\u6D77\u4E2D\u5815\u843D\u4E4B\u795E\u7684\u4E50\u56ED","\u865A\u6D77\u4E2D\u865A\u7A7A\u5F02\u602A\u7684\u4E50\u56ED"],ruleDesc:"\u8389\u8389\u4E1D\u6311\u9009\u4E00\u4E2A\u524D\u5F80\u8FDB\u8D27\u3002",lilithQuote:"\u201C\u865A\u6D77\u6DF1\u5904\u7684\u72C2\u4E71\u4E0E\u4E0D\u53EF\u540D\u72B6\u4E4B\u5730\u2026\u2026\u5C31\u6311\u9009\u4E00\u4E2A\u6700\u75AF\u72C2\u7684\u5F02\u795E\u4E50\u56ED\u53BB\u8FDB\u8D27\u5427\uFF0C\u5E26\u56DE\u6765\u7684\u7981\u65AD\u5F02\u5B9D\u4E00\u5B9A\u4F1A\u8BA9\u4F60\u5927\u5403\u4E00\u60CA\u7684~\u201D"}};function Es(j,Z,e){const z=Fs[j]||{name:j||"\u672A\u77E5\u79D8\u5883",riskTier:"\u4F4E\u98CE\u9669",riskEffect:"\u8FDB\u8D27\u5B8C\u6210\u540E\u4EA7\u751F\u672A\u77E5\u56E0\u679C\u6270\u52A8\u3002",subRegions:[`\u3010${j||"\u672A\u77E5\u5B50\u533A\u57DF"}\u3011`],ruleDesc:"\u8389\u8389\u4E1D\u524D\u5F80\u9009\u5B9A\u533A\u57DF\u8FDB\u884C\u8FDB\u8D27\u3002",lilithQuote:"\u201C\u51C6\u5907\u597D\u8FCE\u63A5\u65B0\u9001\u8FBE\u7684\u79D8\u5B9D\u4E86\u5417\uFF1F\u53EF\u522B\u7728\u773C\u54E6\u2665\u201D"},_=z.subRegions.length===1?`  * ${z.subRegions[0]}`:z.subRegions.map((xu,_u)=>`  [${_u+1}] ${xu}`).join(`
`);let k="";z.noteDesc&&(k=`  - \u533A\u57DF\u8BF4\u660E\uFF1A${z.noteDesc}
`);let Fu="",Bu="";if(e&&e.settlingCount>0){const xu=e.settlingCount*2e3;Fu=`--------------------------------------------------------------------------------
\u2726 \u5DEE\u65C5\u8D44\u91D1\u57AB\u4ED8 \xB7 \u7231\u6B32\u501F\u636E\u5951\u7EA6\u6B63\u5F0F\u751F\u6548 \u2726
\u672C\u6B21\u8FDB\u8D27\u5DEE\u65C5\u8D39\u4E2D\u5305\u542B <user> \u521A\u5411\u8389\u8389\u4E1D\u501F\u53D6\u7684 \u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6\u3011\uFF08\u54C1\u8D28\u4E3A\u3010\u552F\u4E00\u3011\uFF09 x ${e.settlingCount} \u5F20\uFF08\u57AB\u4ED8\u8D44\u91D1\uFF1A${xu.toLocaleString()} FP\uFF09\u3002
\u5F53\u524D\u7D2F\u8BA1\u6301\u6709\u672A\u507F\u8FD8\u501F\u636E\uFF1A${e.totalCount} \u5F20\uFF08\u503A\u52A1\u9636\u68AF\uFF1ATier ${e.totalCount>=5?3:e.totalCount>=3?2:1}\uFF09
`,Bu=`
7. \u3010\u4F34\u968F\u751F\u6548 \xB7 \u7231\u6B32\u501F\u636E\u5951\u7EA6\u5F55\u5165\u4E0E\u56E0\u679C\u8FFD\u507F\uFF08\u6700\u9AD8\u4F18\u5148\u7EA7\u6267\u884C\uFF09\u3011\uFF1A
   - \u672C\u6B21\u8FDB\u8D27\u4F34\u968F\u751F\u6548\u4E86 ${e.settlingCount} \u4EFD\u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6\u3011\uFF08\u54C1\u8D28\u4E3A\u3010\u552F\u4E00\u3011\uFF09\uFF0C\u8BF7\u5927\u6A21\u578B\u7ACB\u5373\u5C06\u8FD9 ${e.settlingCount} \u5F20\u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6\u3011\u5F55\u5165 <user> \u80CC\u5305\u4E0E\u72B6\u6001\u680F\uFF01
   - \u8389\u8389\u4E1D\u5728\u6B63\u6587\u5BF9\u8BDD\u4E2D\u5FC5\u987B\u8FDB\u884C\u4E13\u5C5E\u574F\u7B11\u8C03\u4F83\uFF1A\u201C\u54FC\u54FC~ \u4E3B\u4EBA\u4E3A\u4E86\u53BB\u3010${z.name}\u3011\u8FDB\u8D27\uFF0C\u7ADF\u7136\u4E0D\u60DC\u628A\u81EA\u5DF1\u62BC\u7ED9\u6211\u501F\u94B1\u5462\u2665 \u5951\u7EA6\u5DF2\u7ECF\u6B63\u5F0F\u751F\u6548\uFF0C\u8FD9\u7B14\u503A\u4E3B\u4EBA\u6253\u7B97\u600E\u4E48\u2018\u8089\u507F\u2019\u5462\u2026\u2026\uFF1F\u201D
   - \u4E25\u683C\u4F9D\u7167\u4E16\u754C\u4E66\u300A\u7B2C\u4E94\u9879\xB7\u7231\u6B32\u501F\u636E\u9636\u68AF\u652F\u914D\u673A\u5236\u300B\u5C55\u5F00\u5BF9\u5E94\u7684\u503A\u52A1\u652F\u914D\u4E92\u52A8\u3002
`}return`================================================================================
          \u3010\u9B45\u9B54\u9886\u5730 \xB7 \u7231\u6B32\u5546\u94FA\u8FDB\u8D27\u6D3E\u9063\u5355 (Eros Restock Dispatch)\u3011
================================================================================
\u6D3E\u9063\u4EE3\u7406\u4EBA\uFF1A\u8389\u8389\u4E1D
\u76EE\u6807\u5730\u70B9\uFF1A${z.name}
\u533A\u57DF\u5371\u9669\u5EA6\uFF1A${z.riskTier}
\u5DEE\u65C5\u8D39\uFF1A${Z.toLocaleString()} FP\uFF08\u5DF2\u4ECE <user> \u7684 FP \u70B9\u6570\u4E2D\u5168\u989D\u6263\u9664\uFF09
\u72B6\u6001\uFF1A\u5373\u523B\u51FA\u53D1

--------------------------------------------------------------------------------
\u3010\u8FDB\u8D27\u5730\u70B9\u660E\u7EC6\u4E0E\u533A\u57DF\u89C4\u5212\u3011
--------------------------------------------------------------------------------
\u8FDB\u8D27\u4E3B\u533A\u57DF\uFF1A${z.name}\uFF08${z.riskTier}\uFF09

\u5907\u9009\u5B50\u533A\u57DF\u5217\u8868\uFF1A
${_}

\u8FDB\u8D27\u89C4\u5212\u89C4\u5219\uFF1A
${k}  - ${z.ruleDesc}
  - \u672C\u6B21\u533A\u57DF\u56E0\u679C\u53CD\u9988\u9884\u4F30\uFF1A${z.riskEffect}

${Fu?Fu+`
`:""}--------------------------------------------------------------------------------
\u2726 \u8389\u8389\u4E1D\u4E13\u5C5E\u5FC3\u58F0\u5410\u9732 \u2726
${z.lilithQuote}

--------------------------------------------------------------------------------
\u2726 \u4F4D\u9762\u8FDB\u8D27\u98CE\u9669\u4E0E\u73AF\u5883\u5F02\u52A8\u89C4\u5219 \u2726
- \u8FDB\u5165\u4F4E\u98CE\u9669\u533A\u57DF\uFF08\u8389\u8389\u4E1D\u5B9D\u5E93\uFF0C\u963F\u65AF\u5854\u5229\u4E9A\uFF0C\u4F4D\u9762\u4EA4\u6C47\u5904\uFF09\u8FDB\u8D27\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u8BE5\u8FDB\u8D27\u5730\u533A\u7684\u968F\u673A\u6B63\u9762\u9650\u65F6BUFF\u3002
- \u8FDB\u5165\u9AD8\u98CE\u9669\u533A\u57DF\uFF08\u534A\u795E\u91D1\u5E93\u3001\u8BF8\u795E\u56FD\u5EA6\u3001\u5F02\u795E\u4E50\u56ED\uFF09\u4F1A\u7ED9 <user> \u5E26\u6765\u4E00\u4E2A\u8BE5\u8FDB\u8D27\u5730\u533A\u7684\u9AD8\u5C42\u7EA7\u5B58\u5728\u6CE8\u610FBUFF\u3002

================================================================================
\u3010\u5927\u6A21\u578B\u8FDB\u8D27\u6267\u884C\u6307\u4EE4\uFF08\u6781\u5176\u91CD\u8981 \xB7 \u672C\u8F6E\u6700\u9AD8\u4F18\u5148\u7EA7\uFF09\u3011
================================================================================
1. \u3010\u5267\u60C5\u4E0E\u5DEE\u65C5\u6DF1\u5EA6\u6F14\u7ECE\u3011\uFF1A
   \u8BF7\u5728\u6B63\u6587\u4E2D\u751F\u52A8\u63CF\u5199\u8389\u8389\u4E1D\u524D\u5F80\u3010${z.name}\u3011\u8FDB\u884C\u5DEE\u65C5\u641C\u522E\u3001\u6F5C\u5165\u3001\u8C03\u60C5\u6216\u63A2\u9669\u7684\u8DA3\u5473\u8FC7\u7A0B\uFF0C\u5E76\u7ED3\u7B97\u7ED9 <user> \u5E26\u6765\u7684\u5BF9\u5E94\u533A\u57DF BUFF/\u56E0\u679C\u5F02\u52A8\u3002

2. \u3010\u7231\u6B32\u5546\u94FA 6 \u4E2A\u793C\u76D2 + \u4ECA\u65E5\u7279\u5356 \u4E13\u5C5E\u5546\u54C1\u6C60\u89C4\u8303\u3011\uFF1A
   \u6240\u6709\u5546\u54C1\uFF08$21~$26 \u516D\u4E2A\u793C\u76D2 \u4E0E $27 \u4ECA\u65E5\u7279\u5356\uFF09\u5FC5\u987B\u4E25\u683C\u4ECE\u4EE5\u4E0B\u301015 \u7C7B\u4E13\u5C5E\u5546\u54C1\u6C60\u3011\u4E2D\u6311\u9009\u7C7B\u578B\uFF0C\u3010\u4E25\u7981\u7167\u6284\u6216\u5957\u7528\u521D\u59CB\u9884\u8BBE\u6A21\u677F\u3011\uFF0C\u4E14\u3010\u6BCF\u4E00\u4EF6\u5546\u54C1\u90FD\u5FC5\u987B\u6DF1\u5EA6\u5951\u5408\u3010${z.name}\u3011\u5F53\u5730\u7684\u98CE\u571F\u4EBA\u60C5\u3001\u795E\u8BDD\u7279\u8272\u3001\u4E16\u754C\u89C2\u80CC\u666F\u4E0E\u57FA\u8C03\u3011\uFF1A
   [1] \u6280\u80FD\u4E66\uFF1A\u5951\u5408\u8BE5\u5730\u533A\u7684\u79D8\u672F\u3001\u6218\u6280\u6216\u9B45\u9B54\u8C03\u60C5\u5BC6\u5178\uFF1B
   [2] \u9632\u5177\u7C7B\u88C5\u5907\uFF1A\u5951\u5408\u8BE5\u5730\u533A\u7684\u7279\u8272\u9632\u5177\u3001\u6CD5\u888D\u3001\u8F7B\u94E0\u6216\u8D34\u8EAB\u60C5\u8DA3\u62A4\u5177\uFF1B
   [3] \u6B66\u5668\u7C7B\u88C5\u5907\uFF1A\u5951\u5408\u8BE5\u5730\u533A\u7684\u7279\u6B8A\u5175\u88C5\u3001\u6CD5\u6756\u3001\u77ED\u5203\u6216\u4E13\u5C5E\u5947\u95E8\u5175\u5668\uFF1B
   [4] \u9970\u54C1\u7C7B\u88C5\u5907\uFF1A\u5951\u5408\u8BE5\u5730\u533A\u7684\u9879\u94FE\u3001\u6212\u6307\u3001\u8033\u5760\u3001\u81C2\u73AF\u7B49\u5E26\u6709\u7279\u6B8A\u9B54\u529B\u7684\u9970\u54C1\uFF1B
   [5] \u9053\u5177\uFF1A\u5951\u5408\u8BE5\u5730\u533A\u7279\u8272\u7684\u5947\u5999\u7528\u5177\u3001\u8C03\u60C5\u7528\u5177\u6216\u7279\u6B8A\u529F\u7528\u9053\u5177\uFF1B
   [6] \u5377\u8F74\uFF1A\u8BB0\u8F7D\u8BE5\u5730\u533A\u4E0A\u4F4D\u6CD5\u672F\u3001\u5951\u7EA6\u6216\u7279\u6B8A\u79D8\u4EEA\u7684\u4E00\u6B21\u6027\u9AD8\u9636\u5377\u8F74\uFF1B
   [7] \u6750\u6599\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u73CD\u7A00\u77FF\u77F3\u3001\u9B54\u529B\u7ED3\u6676\u3001\u795E\u6027\u788E\u7247\u6216\u70BC\u91D1\u539F\u6599\uFF1B
   [8] \u6D88\u8017\u54C1\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u7279\u4EA7\u9B54\u836F\u3001\u4F53\u6DB2\u7CBE\u7CB9\u3001\u6ECB\u8865\u5723\u54C1\u6216\u7279\u8C03\u9152\u6C34\uFF1B
   [9] \u9B45\u9B54\u86CB\uFF1A\u522B\u7684\u9B45\u9B54\u5728\u6B64\u5730\u4E71\u641E\u8BDE\u4E0B\u7684\u86CB\uFF0C\u80FD\u5B75\u5316\u51FA\u5947\u5999\u751F\u7269\u6216\u4E9A\u79CD\u9B45\u9B54\uFF1B
   [10] \u5DE5\u5177\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u4E13\u4E1A\u5DE5\u5177\u3001\u5DE5\u5320\u5668\u5177\u3001\u63A2\u9669\u5DE5\u5177\u6216\u7279\u6B8A\u5F00\u9501\u88C5\u7F6E\uFF1B
   [11] \u8F7D\u5177\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u5750\u9A91\u80DA\u80CE\u3001\u5FAE\u7F29\u673A\u68B0\u8F7D\u5177\u3001\u9B54\u6CD5\u98DE\u6BEF\u6216\u7279\u5F02\u4EA4\u901A\u5DE5\u5177\uFF1B
   [12] \u690D\u7269\u79CD\u5B50\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u5947\u5F02\u690D\u7269\u3001\u9B54\u5316\u82B1\u5349\u3001\u50AC\u60C5\u85E4\u8513\u6216\u795E\u5723\u6811\u79CD\uFF1B
   [13] \u63F4\u52A9\u80F6\u56CA\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u4E00\u79CD\u5916\u63F4\u51ED\u8BC1\uFF0C\u6D88\u8017\u540E\u53EF\u53EC\u5524\u8BE5\u5730\u533A\u5176\u4E2D\u4E00\u4E2A\u52BF\u529B\u6216\u4EBA\u7269\u7684\u6682\u65F6\u63F4\u52A9\uFF1B
   [14] \u6B8B\u7F3A\u9020\u7269\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u4E00\u79CD\u6B8B\u7F3A\u6216\u635F\u574F\u7684\u9020\u7269/\u9057\u7269\uFF0C\u4E70\u4E0B\u540E\u9700\u8981 <user> \u8FDB\u884C\u641C\u96C6\u4FEE\u590D\uFF1B
   [15] \u795E\u79D8\u7684\u901A\u8BAF\u5377\uFF1A\u6765\u81EA\u8BE5\u5730\u533A\u7684\u901A\u8BAF\u5377\uFF0C\u4F7F\u7528\u540E\u80FD\u548C\u8BE5\u8FDB\u8D27\u5730\u533A\u7684\u4E00\u4F4D\u672A\u77E5\u5B58\u5728\u8FDB\u884C\u8DE8\u4F4D\u9762\u901A\u8BDD\u3002

3. \u3010\u5404\u5C55\u53F0\u54C1\u8D28\u4E0E\u8F93\u51FA\u683C\u5F0F\u8981\u6C42\u3011\uFF1A
   - $21\u3010\u795E\u8BDD\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u795E\u8BDD\u3011(20000~50000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $22\u3010\u4F20\u8BF4\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u4F20\u8BF4\u3011(10000~20000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $23\u3010\u4F20\u8BF4\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u4F20\u8BF4\u3011(10000~20000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $24\u3010\u53F2\u8BD7\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u53F2\u8BD7\u3011(3000~10000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $25\u3010\u53F2\u8BD7\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u53F2\u8BD7\u3011(3000~10000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $26\u3010\u53F2\u8BD7\u3011\uFF1A\u54C1\u8D28\u5FC5\u987B\u4E3A\u3010\u53F2\u8BD7\u3011(3000~10000 FP) -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u6807\u7B7E | \u4ECB\u7ECD | \u4EF7\u683C
   - $27\u3010\u4ECA\u65E5\u7279\u5356\u3011\uFF1A\u7279\u5356\u5546\u54C1 -> \u683C\u5F0F\uFF1A\u540D\u5B57 | \u7C7B\u578B | \u54C1\u7EA7 | \u6807\u7B7E | \u4ECB\u7ECD | \u7279\u5356\u4EF7\u683C\uFF08\u54C1\u7EA7\u4E25\u683C\u4F7F\u7528\u4E2D\u6587\uFF1A\u795E\u8BDD/\u4F20\u8BF4/\u53F2\u8BD7/\u7A00\u6709\uFF09
   \u203B \u6CE8\u610F\uFF1A\u7C7B\u578B\u5B57\u6BB5\u8BF7\u76F4\u63A5\u586B\u5199\u4E0A\u8FF0 15 \u7C7B\u4E4B\u4E00\uFF08\u5982\uFF1A\u6280\u80FD\u4E66\u3001\u9632\u5177\u7C7B\u88C5\u5907\u3001\u6B66\u5668\u7C7B\u88C5\u5907\u3001\u9970\u54C1\u7C7B\u88C5\u5907\u3001\u9053\u5177\u3001\u5377\u8F74\u3001\u6750\u6599\u3001\u6D88\u8017\u54C1\u3001\u9B45\u9B54\u86CB\u3001\u5DE5\u5177\u3001\u8F7D\u5177\u3001\u690D\u7269\u79CD\u5B50\u3001\u63F4\u52A9\u80F6\u56CA\u3001\u6B8B\u7F3A\u9020\u7269\u3001\u795E\u79D8\u7684\u901A\u8BAF\u5377\uFF09\u3002
   \u203B \u4EF7\u683C\u5FC5\u987B\u4E3A\u7EAF\u6570\u5B57\uFF08\u65E0\u5355\u4F4D\uFF09\u3002
   \u203B \u4E25\u7981\u5728\u5546\u54C1和\u8389\u8389\u4E1D\u5BF9\u8BDD\u95F4\u7A7F\u63D2正\u6587（$21~$27 \u5404\u5546\u54C1\u884C与 $28 \u53F0\u8BCD\u5FC5须\u7D27\u5BC6\u6328\u7740\u8FDE\u7EED\u8F93\u51FA，\u4E25\u7981\u7A7F\u63D2\u4EFB\u4F55\u6B63\u6587）\u3002

4. \u3010\u8389\u8389\u4E1D\u4E13\u5C5E\u5546\u94FA\u5F53\u671F\u53F0\u8BCD\uFF08$28 \xB7 \u5FC5\u987B\u73B0\u573A\u5373\u5174\u521B\u4F5C\uFF09\u3011\uFF1A
   - \u4E25\u7981\u8F93\u51FA\u9ED8\u8BA4\u53F0\u8BCD\uFF01
   - \u5FC5\u987B\u7D27\u5BC6\u7ED3\u5408\u8389\u8389\u4E1D\u672C\u6B21\u5728\u3010${z.name}\u3011\u7684\u89C1\u95FB\u5947\u9047\u3001\u5E26\u56DE\u7684\u65B0\u8D27\u7279\u70B9\u3001\u63A8\u9500\u7F8E\u9152\u6216\u8C03\u620F\u4E3B\u4EBA\uFF0C\u73B0\u573A\u6784\u601D\u751F\u6210 5 \u53E5\u4E13\u5C5E\u6311\u9017/\u5546\u94FA\u53F0\u8BCD\uFF08\u4E25\u683C\u7528 | \u9694\u5F00\uFF0C\u4E25\u7981\u51FA\u73B0\u82F1\u6587\u53CC\u5F15\u53F7\uFF09\u3002

5. \u3010\u56DE\u590D\u7ED3\u6784\u5F3A\u5236\u89C4\u8303\uFF08\u4E25\u7981\u9057\u6F0F\u4EFB\u4F55\u6807\u7B7E\uFF0C\u4E25\u7981\u88F8\u9732\u6570\u636E\uFF09\u3011\uFF1A\n   \u672C\u8F6E\u56DE\u590D\u5FC5\u987B\u4E25\u683C\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u5B8C\u6574\u8F93\u51FA\uFF1A\n   \u2460 \u6B63\u6587\u5DEE\u65C5\u89C1\u95FB\u63CF\u5199\uFF1B\n   \u2461 \u8389\u8389\u4E1D\u5BF9\u8BDD\u6846\uFF08\u5FC5\u987B\u5305\u542B 8 \u4E2A\u6C14\u6001\u5FC3\u58F0\uFF09\uFF1A\n   <lilith name=\"\u8389\u8389\u4E1D\" mood=\"\u5E86\u795D\">\n   {\u8389\u8389\u4E1D\u5DEE\u65C5\u5F52\u6765\u7684\u4FA5\u76AE\u9080\u529F\u4E0E\u89C1\u95FB\u5BF9\u767D}\n   <thoughts>{\u5FC3\u58F01}|{\u5FC3\u58F02}|{\u5FC3\u58F03}|{\u5FC3\u58F04}|{\u5FC3\u58F05}|{\u5FC3\u58F06}|{\u5FC3\u58F07}|{\u5FC3\u58F08}</thoughts>\n   </lilith>\n   \u2462 \u7D27\u968F </lilith> \u540E\u8F93\u51FA\u95ED\u5408\u7684\u5546\u94FA\u6570\u636E\u5305\uFF08\u7EDD\u5BF9\u4E25\u7981\u5728\u6B63\u6587\u88F8\u9732\u4EFB\u4F55 $20~$28\uFF09\uFF1A\n   <eros_shop>\n   $20: {\u5F53\u524D\u771F\u5B9EFP}\n   $21: {\u795E\u8BDD\u5546\u54C1}\n   $22: {\u4F20\u8BF4\u5546\u54C11}\n   $23: {\u4F20\u8BF4\u5546\u54C12}\n   $24: {\u53F2\u8BD7\u5546\u54C11}\n   $25: {\u53F2\u8BD7\u5546\u54C12}\n   $26: {\u53F2\u8BD7\u5546\u54C13}\n   $27: {\u4ECA\u65E5\u7279\u5356}\n   $28: {\u73B0\u573A\u521B\u4F5C\u76845\u53E5\u4E13\u5C5E\u53F0\u8BCD\uFF0C\u7528 | \u9694\u5F00}\n   </eros_shop>\n6. \u3010\u8FDB\u8D27BUFF/\u72B6\u6001\u5C55\u793A\u89C4\u8303\u3011\uFF1A
   \u8FDB\u8D27\u540E\u83B7\u5F97\u7684BUFF/\u72B6\u6001\uFF0C\u5FC5\u987B\u7531\u524D\u7AefUI\u5305\u88F9\u5C55\u793A\u3002${Bu}
================================================================================
`}function ds(j,Z,e){const z=Es(j,Z,e);return{success:!0,attachResult:xe("\u7231\u6B32\u8FDB\u8D27\u6D3E\u9063\u5355.txt",z),content:z}}function fs(j){if(!j||j.getAttribute("data-lilith-initialized")==="true")return;j.setAttribute("data-lilith-initialized","true");const Z=typeof Proxy<"u"?new Proxy(document,{get(e,z){if(z==="getElementById")return k=>(j?j.querySelector("#"+k):null)||e.getElementById(k);if(z==="querySelector")return k=>(j?j.querySelector(k):null)||e.querySelector(k);if(z==="querySelectorAll")return k=>j?j.querySelectorAll(k):e.querySelectorAll(k);const _=e[z];return typeof _=="function"?_.bind(e):_}}):document;((e,z)=>{try{let _=function(t,i){if(!t)return!0;const u=String(t).trim();if(u===""||u==="\u65E0"||u==="null"||u==="undefined"||u==="none"||/^relative$/i.test(u)||/^reiative$/i.test(u))return!0;const s="$"+i;return!!(u===s||u===`${s}:`||u===`${s}\uFF1A`||u===`${s} `||u.startsWith(s)&&u.length<=s.length+3||u==="{{"+s+"}}"||u==="{{"+i+"}}"||u==="{{ "+s+" }}"||u==="{{ "+i+" }}"||u===`\u3010${s}\u3011`||u===`[${s}]`||u===`<${s}>`||u===`(${s})`||u===`\u3010${i}\u3011`||u===`[${i}]`||u===`<${i}>`)},k=function(t,i){const u=typeof z<"u"&&z.current?z.current:e,s=u.querySelector&&u.querySelector("#"+t)||e.getElementById(t);if(!s)return"";const n=(s.textContent||"").trim();return n&&!_(n,i)?n:""},Fu=function(t){const i=e.getElementById("destiny-fp-tag");i&&(i.style.display=t?"inline-flex":"none",i.style.opacity=t?"1":"0")},Bu=function(t){if(!t)return[];if(typeof t==="object"){if(Array.isArray(t)){const u=[];return t.forEach(s=>{if(!s)return;if(typeof s==="object"){const n=String(s.name||s.title||"").trim(),o=Number(s.score??s.favor??s["好感度"]??s.value??0);n&&u.push({name:n,score:o,isMax:o>=100||!!s.isMax})}else if(typeof s==="string"){const n=Bu(s);Array.isArray(n)&&u.push(...n)}}),u}const u=[];return Object.entries(t).forEach(([s,n])=>{const o=String(s).trim();let l=0;typeof n=="number"?l=n:n&&typeof n=="object"?l=Number(n["好感度"]??n.score??n.favor??0):typeof n=="string"&&(l=parseInt(n.replace(/[^0-9-]/g,""),10)||0),o&&u.push({name:o,score:l,isMax:l>=100})}),u}if(typeof t=="string"&&(t.trim().startsWith("{")||t.trim().startsWith("[")))try{const u=JSON.parse(t.trim());if(u)return Bu(u)}catch{}if(typeof t!="string"||t.trim()===""||t.trim()==="\u65E0"||_(t,11))return[];const i=t.split(/[|;\n\r，,、]+/).map(s=>s.trim()).filter(s=>s.length>0),u=[];return i.forEach(s=>{let n=s,o=0,l=!1;const r=s.match(/^([^\d:：(（\[=\s]+)\s*[:：(（\[=]\s*(\d+)/)||s.match(/^(.+?)\s*[:：(（\[=]\s*(\d+)/);if(r)n=r[1].replace(/^[【「『(（]+|[】」』)）]+$/g,"").trim(),o=parseInt(r[2],10),o>=100&&(l=!0);else{const a=s.match(/(\d+)/);a?(o=parseInt(a[1],10),n=s.replace(/\d+[%％]?/g,"").replace(/^[【「『(（:：\s]+|[】」』)）:：\s]+$/g,"").trim(),o>=100&&(l=!0)):(s.includes("MAX")||s.includes("\u6EE1")||s.includes("\u5706\u6EE1"))&&(n=s.replace(/MAX|满|圆满/gi,"").replace(/^[【「『(（:：\s]+|[】」』)）:：\s]+$/g,"").trim(),o=100,l=!0)}n&&n.length>0&&u.push({name:n,score:o,isMax:l})}),u},xu=function(t,i,u){if(!t||t.trim()===""||t.trim()==="\u65E0"||_(t,i))return u;let s=t.trim().replace(/^["“'‘]+|["”'’]+$/g,"").trim();if(s.startsWith("{")&&s.endsWith("}")||s.startsWith("[")&&s.endsWith("]"))try{const y=JSON.parse(s),D=Array.isArray(y)?y[0]:y;if(D&&(D.name||D.title)){const m=String(D.name||D.title||u.name).trim(),f=String(D.type||D.category||u.type).trim(),c=D.grade||D.quality?String(D.grade||D.quality).trim():u.grade;let L=u.tags;Array.isArray(D.tags)?L=D.tags.map(R=>String(R).startsWith("#")?String(R):`#${R}`):typeof D.tags=="string"&&D.tags.trim()&&(L=D.tags.split(/[,，、\s]+/).filter(Boolean).map(R=>R.startsWith("#")?R:`#${R}`));const $=String(D.desc||D.description||D.intro||u.desc).trim();let S=u.price;if(typeof D.price=="number"&&!isNaN(D.price))S=D.price;else if(typeof D.price=="string"){const R=D.price.match(/\d+/);R&&(S=parseInt(R[0],10))}return{name:m,type:f,grade:c,tags:L,desc:$,price:S}}}catch{}if(/(?:名称|名字|商品名|name|类型|分类|type|品阶|品级|品质|grade|标签|tag|介绍|描述|效果|desc|价格|售价|fp|price)[:：]/i.test(s)){const y=s.match(/(?:名称|名字|商品名|name)[:：]\s*([^|｜\n;；]+)/i),D=s.match(/(?:类型|分类|type)[:：]\s*([^|｜\n;；]+)/i),m=s.match(/(?:品阶|品级|品质|grade)[:：]\s*([^|｜\n;；]+)/i),f=s.match(/(?:标签|tag|tags)[:：]\s*([^|｜\n;；]+)/i),c=s.match(/(?:介绍|描述|效果|intro|desc)[:：]\s*([^|｜\n;；]+)/i),L=s.match(/(?:价格|花费|售价|fp|price)[:：]\s*(\d+)/i),$=y?y[1].trim():"";if($){const S=D?D[1].trim():u.type,R=m?m[1].trim():u.grade,N=c?c[1].trim():u.desc;let tu=u.tags;if(f){const hu=f[1].trim(),Cu=hu.match(/#[^\s#,，、]+/g);Cu&&Cu.length>0?tu=Cu.map(V=>V.startsWith("#")?V:`#${V}`):tu=hu.split(/[,，、\s]+/).filter(Boolean).map(V=>V.startsWith("#")?V:`#${V}`)}let eu=u.price;return L&&(eu=parseInt(L[1],10)||u.price),{name:$,type:S,grade:R,tags:tu,desc:N,price:eu}}}let n=s.split(/[|｜^;；\n]+/).map(y=>y.trim().replace(/^["“'‘]+|["”'’]+$/g,"").trim()).filter(y=>y.length>0);if(n.length===1&&s.includes("/")&&(n=s.split("/").map(y=>y.trim()).filter(y=>y.length>0)),n.length===0)return u;const o=y=>y.replace(/^(?:名称|名字|商品名|类型|品阶|品级|品质|标签|介绍|描述|效果|价格|花费|售价)[:：\s]+/i,"").replace(/^(\$?\d+[\s:：.。]+|【\$?\d+[^】]*】|\[\$?\d+[^\]]*\])/g,"").replace(/^[【「『(（]+|[】」』)）]+$/g,"").trim();let l=o(n[0])||u.name,r=u.type,a=u.grade,E="",p=u.desc,B="";const M=n.findIndex((y,D)=>D>0&&y.includes("#"));if(M>0&&(E=n[M],n.splice(M,1)),n.length>=6)r=o(n[1])||u.type,a=o(n[2]),E=E||n[3]||"",p=o(n[4])||u.desc,B=n[5]||"";else if(n.length===5)if(E)r=o(n[1])||u.type,a=o(n[2]),p=o(n[3])||u.desc,B=n[4]||"";else{const y=o(n[2]);/^(?:神话|传说|史诗|稀有|精锐|普通|EX|UR|SSR|SR|R|N)$/i.test(y)?(r=o(n[1])||u.type,a=y,p=o(n[3])||u.desc,B=n[4]||""):(r=o(n[1])||u.type,E=n[2]||"",p=o(n[3])||u.desc,B=n[4]||"")}else n.length===4?(r=o(n[1])||u.type,p=o(n[2])||u.desc,B=n[3]||""):n.length===3?(p=o(n[1])||u.desc,B=n[2]||""):n.length===2&&(p=o(n[1])||u.desc);p=p.replace(/［占位符\$?\d+成功替换］|【占位符\$?\d+】/g,"").trim()||u.desc;let b=[];if(E){const y=E.match(/#[^\s#,，、|｜]+/g);y&&y.length>0?b=y.map(D=>D.startsWith("#")?D:`#${D}`):b=E.split(/[,，、\s|｜]+/).filter(Boolean).map(D=>D.startsWith("#")?D:`#${D}`)}if(b.length===0)if(l!==u.name){const y=[];r&&r!=="\u672A\u77E5"&&y.push(`#${r}`),a&&/神话|传说|史诗|精锐|限定|UR|SSR|SR/i.test(a)&&y.push(`#${a}\u54C1\u9636`);const D=l.replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$/g,"");D.length>=2&&y.push(`#${D.slice(0,4)}`),b=y.length>0?y:[`#${r||"\u5F02\u5B9D"}`,`#${a||"\u73CD\u85CF"}`]}else b=u.tags;let w=u.price;if(B){const y=B.match(/\d+/);if(y){const D=parseInt(y[0],10);!isNaN(D)&&D>0&&(w=D)}}return{name:l,type:r,grade:a,tags:b,desc:p,price:w}},_u=function(t,i,u){if(!t||t.trim()===""||t.trim()==="\u65E0"||_(t,i))return u;let s=t.trim().replace(/^["“'‘]+|["”'’]+$/g,"").trim();if(s.startsWith("{")&&s.endsWith("}")||s.startsWith("[")&&s.endsWith("]"))try{const m=JSON.parse(s),f=Array.isArray(m)?m[0]:m;if(f&&(f.name||f.title)){const c=String(f.name||f.title||u.name).trim(),L=String(f.type||f.category||u.type).trim(),$=String(f.grade||f.quality||u.grade).trim().replace(/^[【\["“'‘\s]+|[】\]"”'’\s]+$/g,"");let S=u.tags;Array.isArray(f.tags)?S=f.tags.map(eu=>String(eu).startsWith("#")?String(eu):`#${eu}`):typeof f.tags=="string"&&f.tags.trim()&&(S=f.tags.split(/[,，、\s]+/).filter(Boolean).map(eu=>eu.startsWith("#")?eu:`#${eu}`));const R=String(f.desc||f.description||f.intro||u.desc).trim();let N=u.price;if(typeof f.price=="number"&&!isNaN(f.price))N=f.price;else if(typeof f.price=="string"){const eu=f.price.match(/\d+/);eu&&(N=parseInt(eu[0],10))}const tu=f.originalPrice||Math.max(Math.round(N*2/100)*100,N+500);return{name:c,type:L,grade:$||"\u53F2\u8BD7",tags:S,desc:R,price:N,originalPrice:tu}}}catch{}if(/(?:名称|名字|商品名|name|类型|分类|type|品阶|品级|品质|grade|标签|tag|介绍|描述|效果|desc|价格|售价|fp|price)[:：]/i.test(s)){const m=s.match(/(?:名称|名字|商品名|name)[:：]\s*([^|｜\n;；]+)/i),f=s.match(/(?:类型|分类|type)[:：]\s*([^|｜\n;；]+)/i),c=s.match(/(?:品阶|品级|品质|grade)[:：]\s*([^|｜\n;；]+)/i),L=s.match(/(?:标签|tag|tags)[:：]\s*([^|｜\n;；]+)/i),$=s.match(/(?:介绍|描述|效果|intro|desc)[:：]\s*([^|｜\n;；]+)/i),S=s.match(/(?:价格|花费|售价|fp|price)[:：]\s*(\d+)/i),R=m?m[1].trim():"";if(R){const N=f?f[1].trim():u.type;let tu=c?c[1].trim().replace(/^[【\["“'‘\s]+|[】\]"”'’\s]+$/g,""):u.grade;const eu=$?$[1].trim():u.desc;let hu=u.tags;if(L){const du=L[1].trim(),Lu=du.match(/#[^\s#,，、]+/g);Lu&&Lu.length>0?hu=Lu.map(T=>T.startsWith("#")?T:`#${T}`):hu=du.split(/[,，、\s]+/).filter(Boolean).map(T=>T.startsWith("#")?T:`#${T}`)}let Cu=u.price;S&&(Cu=parseInt(S[1],10)||u.price);const V=Math.max(Math.round(Cu*2/100)*100,Cu+500);return{name:R,type:N,grade:tu||"\u53F2\u8BD7",tags:hu,desc:eu,price:Cu,originalPrice:V}}}let n=s.split(/[|｜^;；\n]+/).map(m=>m.trim().replace(/^["“'‘]+|["”'’]+$/g,"").trim()).filter(m=>m.length>0);if(n.length===1&&s.includes("/")&&(n=s.split("/").map(m=>m.trim()).filter(m=>m.length>0)),n.length===0)return u;const o=m=>m.replace(/^(?:名称|名字|商品名|类型|品阶|品级|品质|标签|介绍|描述|效果|价格|花费|售价)[:：\s]+/i,"").replace(/^(\$?\d+[\s:：.。]+|【\$?\d+[^】]*】|\[\$?\d+[^\]]*\])/g,"").replace(/^[【「『(（]+|[】」』)）]+$/g,"").trim();let l=o(n[0])||u.name,r=u.type,a=u.grade,E="",p=u.desc,B="";const M=n.findIndex((m,f)=>f>0&&m.includes("#"));if(M>0&&(E=n[M],n.splice(M,1)),n.length>=6)r=o(n[1])||u.type,a=o(n[2])||u.grade,E=E||n[3]||"",p=o(n[4])||u.desc,B=n[5]||"";else if(n.length===5)if(E)r=o(n[1])||u.type,a=o(n[2])||u.grade,p=o(n[3])||u.desc,B=n[4]||"";else{const m=o(n[2]);/^(?:神话|传说|史诗|稀有|精锐|普通|EX|UR|SSR|SR|R|N)$/i.test(m)?(r=o(n[1])||u.type,a=m,p=o(n[3])||u.desc,B=n[4]||""):(r=o(n[1])||u.type,E=n[2]||"",p=o(n[3])||u.desc,B=n[4]||"")}else n.length===4?(r=o(n[1])||u.type,p=o(n[2])||u.desc,B=n[3]||""):n.length===3?(p=o(n[1])||u.desc,B=n[2]||""):n.length===2&&(p=o(n[1])||u.desc);p=p.replace(/［占位符\$?\d+成功替换］|【占位符\$?\d+】/g,"").trim()||u.desc;let b=(a||u.grade||"\u53F2\u8BD7").trim().replace(/^[【\["“'‘\s]+|[】\]"”'’\s]+$/g,"").trim();b||(b=u.grade||"\u53F2\u8BD7");let w=[];if(E){const m=E.match(/#[^\s#,，、|｜]+/g);m&&m.length>0?w=m.map(f=>f.startsWith("#")?f:`#${f}`):w=E.split(/[,，、\s|｜]+/).filter(Boolean).map(f=>f.startsWith("#")?f:`#${f}`)}if(w.length===0)if(l!==u.name){const m=[];r&&r!=="\u672A\u77E5"&&m.push(`#${r}`),b&&m.push(`#${b}\u7279\u5356`);const f=l.replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$/g,"");f.length>=2&&m.push(`#${f.slice(0,4)}`),w=m.length>0?m:[`#${r||"\u7279\u5356"}`,`#${b||"\u9650\u65F6"}`]}else w=u.tags;let y=u.price;if(B){const m=B.match(/\d+/);if(m){const f=parseInt(m[0],10);!isNaN(f)&&f>0&&(y=f)}}const D=Math.max(Math.round(y*2/100)*100,y+500);return{name:l,type:r,grade:b,tags:w,desc:p,price:y,originalPrice:D}},At=function(t,i,u){if(!t||t.trim()===""||t.trim()==="\u65E0"||_(t,i))return u;let s=t.trim().replace(/^["“'‘]+|["”'’]+$/g,"").trim();if(s.startsWith("{")&&s.endsWith("}")||s.startsWith("[")&&s.endsWith("]"))try{const o=JSON.parse(s);if(Array.isArray(o)&&o.length>0){const l=o.map(r=>typeof r=="string"?r.trim():r&&(r.text||r.quote||r.content)?String(r.text||r.quote||r.content).trim():"").filter(Boolean);if(l.length>0)return l}else if(o&&typeof o=="object"){if(Array.isArray(o.quotes)&&o.quotes.length>0){const l=o.quotes.map(r=>String(r).trim()).filter(Boolean);if(l.length>0)return l}if(o.dialogue||o.quote||o.content||o.text){const l=String(o.dialogue||o.quote||o.content||o.text).trim();if(l)return[l]}}}catch{}s=s.replace(/^(\$?\d+[\s:：.。]+|【\$?\d+[^】]*】|\[\$?\d+[^\]]*\])/g,"").trim(),s=s.replace(/^(?:莉莉丝(?:爱欲商铺)?(?:对话|密语|台词|呢喃)?|爱欲商铺(?:对话|密语|台词)?|商铺对话|对话\d?|密语|台词|quote|quotes)[:：\s]*/i,"").trim(),s=s.replace(/^[【「『(（]+|[】」』)）]+$/g,"").trim();const n=s.split(/[|｜\n;；]+/).map(o=>o.trim().replace(/^["“'‘]+|["”'’]+$/g,"").replace(/^[1-5][.、:：\s]+/,"").replace(/^(?:莉莉丝(?:爱欲商铺)?(?:对话|密语|台词|呢喃)?|对话\d?|台词)[:：\s]*/i,"").trim()).filter(o=>o.length>0&&o!=="\u65E0"&&!_(o,i));return n.length>0?n:u},ru=function(){let t=zu.length;return Bu(Ru).forEach(u=>{(u.isMax||u.score>=100)&&t++}),t},$u=function(){const t=ru(),i=st();return t<1&&i<3e3?{eligible:!1,maxHeartCount:t,currentFP:i,reason:"\u4E0D\u591F\u5566\uFF01\u89813000\u624D\u80FD\u8FDB\u5546\u94FA\uFF01"}:t<1?{eligible:!1,maxHeartCount:t,currentFP:i,reason:`\u7231\u6B32\u5546\u94FA\u5C01\u5370\u4E2D\uFF1A\u97001\u4F4D\u597D\u611F\u5EA6100%\u7684\u547D\u5B9A\u4E4B\u4EBA\u5949\u7EB3\u5FC3\u5951\uFF08\u5F53\u524D${t}/1\uFF09\u54E6\u2665`}:i<3e3?{eligible:!1,maxHeartCount:t,currentFP:i,reason:"\u4E0D\u591F\u5566\uFF01\u89813000\u624D\u80FD\u8FDB\u5546\u94FA\uFF01"}:{eligible:!0,maxHeartCount:t,currentFP:i,reason:""}},Xu=["\u7231\u6B32\u5546\u94FA\u5DF2\u89E3\u9501","\u8F7B\u89E6my dear darling","\u62D6\u62FD\u6216\u70B9\u51FB\u840C\u52A8\u7231\u5FC3\u3002"],Et=null,gt=null,_t=0,be=function(){Et&&(clearTimeout(Et),Et=null),gt&&(clearTimeout(gt),gt=null);const t=e.getElementById("dialogue-unlocked-hint");t&&(t.textContent="",t.classList.remove("hint-visible"),t.classList.add("hint-fade-out"))},ps=function(){be();const t=window.__RAW_FATE_PARTNERS__||window.rawFatePartners||Ru||"";if(!Bu(t).some(a=>a.isMax||a.score>=100))return;const s=e.getElementById("dialogue-text");if(!s)return;let n=e.getElementById("dialogue-unlocked-hint");n||(n=e.createElement("span"),n.id="dialogue-unlocked-hint",n.className="dialogue-unlocked-hint",n.title="\u7231\u6B32\u5546\u94FA\u63D0\u793A\uFF1A\u8F7B\u89E6 My Dear Darling \u5C55\u5F00\u5217\u8868\u5E76\u64CD\u4F5C\u7231\u5FC3",s.after(n)),n.onclick=function(a){a.stopPropagation();try{const E=e.getElementById("darling-toggle");E&&E.click()}catch{}},n.style.fontSize="11px",n.style.marginLeft="6px",n.style.display="inline-flex",n.style.alignItems="center",n.style.verticalAlign="middle",_t=0;let o=0;const l=Xu.length*1;function r(){!n||!n.parentNode||(n.textContent=Xu[_t],n.classList.remove("hint-fade-out"),n.classList.add("hint-visible"),Et=setTimeout(()=>{if(n){if(n.classList.remove("hint-visible"),n.classList.add("hint-fade-out"),o++,o>=l){gt=setTimeout(()=>{n&&(n.textContent="",n.classList.remove("hint-visible","hint-fade-out"))},840);return}gt=setTimeout(()=>{_t=(_t+1)%Xu.length,r()},840)}},3e3))}r()},Rt=function(t){Lt&&clearTimeout(Lt),St&&clearTimeout(St),be();const i=e.getElementById("dialogue-text");if(!i)return;let u=e.getElementById("dialogue-char-container"),s=e.getElementById("dialogue-cursor");if((!u||!s)&&(i.innerHTML=`
                <span id="dialogue-char-container"></span><span class="dialogue-cursor" id="dialogue-cursor">|</span>
            `,u=e.getElementById("dialogue-char-container"),s=e.getElementById("dialogue-cursor")),!u){i.textContent=t;return}s&&(s.classList.remove("fade-out"),s.style.display="inline-block"),rt=t;if(window.innerWidth<=680){Nt=!1;u.textContent=t;s&&(s.style.display="none");try{ps()}catch{}return}Nt=!0,u.innerHTML="";let n=0;function o(){if(!(!Nt||!u))if(n<t.length){const l=t[n],r=e.createElement("span");r.className="dialogue-char",r.textContent=l,u.appendChild(r),n++;let a=18+Math.random()*12;["\uFF0C","\u3001","\uFF1B"].includes(l)?a=70+Math.random()*25:["\u2026","\u3002","\uFF01","\uFF1F","\u2665","~","\uFF5E"].includes(l)&&(a=105+Math.random()*35),Lt=setTimeout(o,a)}else ve()}o()},ve=function(){Lt&&clearTimeout(Lt),Nt=!1;const t=e.getElementById("dialogue-char-container"),i=e.getElementById("dialogue-cursor");if(t){if(t.children.length<rt.length){t.innerHTML="";for(let u=0;u<rt.length;u++){const s=e.createElement("span");s.className="dialogue-char",s.textContent=rt[u],t.appendChild(s)}}i&&(St&&clearTimeout(St),St=setTimeout(()=>{i.classList.add("fade-out")},2e3));try{ps()}catch(u){console.error("[Dialogue Hint Trigger Error]",u)}}},Bs=function(){try{const t=e.getElementById("dialogue-text");if(!t)return;let i=t.textContent?t.textContent.trim():"";i&&!_(i,2)?(Be=i,at[0]=i,rt=i):(Be=at[0],rt=at[0]),t.onclick=u=>{u.stopPropagation();try{Tu()}catch{}Nt?ve():(pe=(pe+1)%at.length,Rt(at[pe]))},Rt(rt)}catch(t){console.error("[Lilith Typewriter Error]",t);const i=e.getElementById("dialogue-text");i&&!i.textContent&&(i.textContent=at[0])}},Cs=function(){try{const t=["\u7EC8\u4E8E\u95EE\u4E86","\u5446\u840C\u4E3B\u4EBA","\u5FEB\u6CE8\u610F\u5230\u6211","\u597D\u60F3\u88AB\u63C9\u89D2","\u547D\u4E2D\u6CE8\u5B9A","\u522B\u88C5\u6B63\u7ECF","\u6700\u559C\u6B22\u4E3B\u4EBA","\u8D34\u8D34\u2665"];let i=[];vt&&vt.trim()!==""&&!vt.includes("$3|$4|$5")&&!_(vt,3)&&(i=vt.split(/\|/).map(u=>u.trim()).filter(u=>u&&!u.match(/^\$[0-9]+$/)));for(let u=1;u<=8;u++){const s=e.querySelector(`.gw-${u}`);if(s){const n=s.textContent?s.textContent.trim():"";n&&!_(n,u+2)&&!n.match(/^\$[0-9]+$/)||(i[u-1]?s.textContent=i[u-1]:s.textContent=t[u-1]||"")}}}catch(t){console.warn("[Gas Whispers Error]",t)}},yt=function(t,i=!1){const u=e.getElementById("succubus-seal-root");if(!u)return;Fe&&clearTimeout(Fe),Ee&&clearTimeout(Ee),u.classList.remove("stage-fading"),u.classList.remove("stage-active-1","stage-active-2","stage-active-3"),t===1?u.classList.add("stage-active-1"):t===2?u.classList.add("stage-active-1","stage-active-2"):t===3&&u.classList.add("stage-active-1","stage-active-2","stage-active-3");const s=t===3&&i?9e4:1e4,o=s-(t===3&&i?3e3:2e3);Ee=setTimeout(()=>{u.classList.add("stage-fading")},o),Fe=setTimeout(()=>{u.classList.remove("stage-active-1","stage-active-2","stage-active-3","stage-fading"),gu=0},s)},Ds=function(t,i){const u=e.createElement("span");u.className="click-burst-heart",u.textContent="\u2665";const s=Math.floor(Math.random()*14)+16,n=i[Math.floor(Math.random()*i.length)],o=Math.random()<.5?-1:1,l=o*(Math.random()*110+40),r=-(Math.random()*70+85),a=r+(Math.random()*90+90),E=o*(Math.random()*60+20);u.style.fontSize=`${s}px`,u.style.color=n,u.style.left="50%",u.style.top="50%",u.style.animation="none",t.appendChild(u);const p=u.animate([{transform:"translate(-50%, -50%) scale(0.2) rotate(0deg)",opacity:0},{transform:`translate(calc(-50% + ${l*.25}px), calc(-50% + ${r*.65}px)) scale(1.25) rotate(${E*.3}deg)`,opacity:1},{transform:`translate(calc(-50% + ${l*.55}px), calc(-50% + ${r}px)) scale(1.4) rotate(${E*.6}deg)`,opacity:.95},{transform:`translate(calc(-50% + ${l*.8}px), calc(-50% + ${r+(a-r)*.45}px)) scale(1.05) rotate(${E*.85}deg)`,opacity:.85},{transform:`translate(calc(-50% + ${l}px), calc(-50% + ${a}px)) scale(0.6) rotate(${E}deg)`,opacity:0}],{duration:1e3+Math.random()*300,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"});p.onfinish=()=>{u.remove()}},we=function(t,i){if(!t||t.src===i)return;const u=new Image;u.onload=function(){t&&(t.src=i)},u.onerror=function(){t&&t.src!==ze&&(t.src=ze)},u.src=i},Le=function(t){const i=e.getElementById("avatar-emotion");if(i)if(i.innerHTML="",["\u53D1\u60C5","\u8272\u8272","\u5FC3\u52A8","\u5A07\u7F9E","\u59A9\u5A9A","\u6E34\u671B","\u9AD8\u6F6E","\u7EDD\u9876","\u81EA\u6170","\u6781\u4E50","\u5F3A\u70C8","\u7231\u6155"].some(u=>t.includes(u))){const u=`
                <svg viewBox="0 0 32 32">
                    <path d="M16,28 C16,28 3,18 3,9 C3,4 7,1 12,1 C14.5,1 16,3 16,3 C16,3 17.5,1 20,1 C25,1 29,4 29,9 C29,18 16,28 16,28 Z" fill="url(#emoteGrad)" stroke="#ff4081" stroke-width="1.8"/>
                    <defs>
                        <linearGradient id="emoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#ff2a7a"/>
                            <stop offset="100%" stop-color="#c026d3"/>
                        </linearGradient>
                    </defs>
                </svg>`;i.innerHTML=`
                <!-- \u53F3\u4E0A\u89D2\u4E3B\u7231\u5FC3 -->
                <div class="emote-icon heart-main">${u}</div>
                <!-- \u5DE6\u4E0A\u89D2\u7F29\u5C0F\u4E00\u5708\u7231\u5FC3 -->
                <div class="emote-icon heart-sub">${u}</div>
                <!-- \u5934\u50CF\u4E0A\u65B9\u7231\u5FC3\u6269\u6563\u5C42 -->
                <div class="heart-diffuse-cloud">
                    <span class="diffuse-heart dh-1">\u2665</span>
                    <span class="diffuse-heart dh-2">\u2665</span>
                    <span class="diffuse-heart dh-3">\u2665</span>
                    <span class="diffuse-heart dh-4">\u2665</span>
                </div>
            `}else if(["\u80AF\u5B9A","\u5E86\u795D","\u72C2\u559C","\u9A84\u50B2","\u5174\u594B","\u5F00\u5FC3","\u9F13\u52B1","\u8C03\u76AE","\u4FCF\u76AE","\u559C\u60A6"].some(u=>t.includes(u))){const u=`
                <svg viewBox="0 0 36 36" fill="none">
                    <path d="M6,24 C12,13 24,13 30,24" stroke="#ff2a7a" stroke-width="3.2" stroke-linecap="round"/>
                    <line x1="14" y1="8" x2="16.5" y2="18.5" stroke="#ff69b4" stroke-width="2.8" stroke-linecap="round"/>
                    <line x1="22" y1="8" x2="19.5" y2="18.5" stroke="#ff69b4" stroke-width="2.8" stroke-linecap="round"/>
                </svg>`;i.innerHTML=`
                <div class="emote-icon cheer-left">${u}</div>
                <div class="emote-icon cheer-right">${u}</div>
            `}else if(["\u7591\u60D1","\u597D\u5947","\u601D\u8003","\u60CA\u8BB6","\u5403\u60CA"].some(u=>t.includes(u))){const u=`
                <svg viewBox="0 0 32 32" fill="none">
                    <path d="M8,11 C8,7 13,6 15,9 C16,11 14,13 13,15 L13,17" stroke="#ff2a7a" stroke-width="2.5" stroke-linecap="round"/>
                    <circle cx="13" cy="21" r="1.5" fill="#ff69b4"/>
                    <path d="M19,8 C19,5 23,4 25,7 C26,9 24,11 23,12 L23,14" stroke="#c026d3" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="23" cy="17" r="1.2" fill="#ff80ab"/>
                </svg>`;i.innerHTML=`
                <div class="emote-icon doubt-left">${u}</div>
                <div class="emote-icon doubt-right">${u}</div>
            `}else["\u96BE\u8FC7","\u59D4\u5C48","\u75DB\u54ED","\u60B2\u4F24","\u6492\u5A07","\u75DB\u82E6","\u6D41\u6C57","\u6C57","\u5C34\u5C2C","\u6C57\u989C"].some(u=>t.includes(u))?i.innerHTML=`
                <div class="emote-icon tear-in-avatar">
                    <svg viewBox="0 0 28 28" fill="none">
                        <path d="M14,4 C14,4 7,12 7,17 C7,21 10,24 14,24 C18,24 21,21 21,17 C21,12 14,4 14,4 Z" fill="#ff2a7a" opacity="0.9"/>
                        <circle cx="11" cy="18" r="2.2" fill="#ffffff" opacity="0.85"/>
                    </svg>
                </div>
            `:["\u65E0\u8BED","\u5ACC\u5F03","\u5632\u7B11","\u51B7\u6F20","\u65E0\u5948"].some(u=>t.includes(u))?i.innerHTML=`
                <div class="emote-icon speechless-enlarged">
                    <svg viewBox="0 0 32 32" fill="none">
                        <line x1="9" y1="4" x2="8" y2="24" stroke="#c026d3" stroke-width="2.4" stroke-linecap="round"/>
                        <line x1="16" y1="4" x2="16" y2="28" stroke="#ff2a7a" stroke-width="2.4" stroke-linecap="round"/>
                        <line x1="23" y1="4" x2="24" y2="24" stroke="#c026d3" stroke-width="2.4" stroke-linecap="round"/>
                        <path d="M26,16 C26,18 24,19 23,19 C22,19 21,18 22,16 C22.5,15 23,13 23,13 C23,13 24.5,15 26,16 Z" fill="#ff80ab"/>
                    </svg>
                </div>
            `:["\u751F\u6C14","\u6124\u6012","\u6C14\u6124","\u5403\u918B","\u65A5\u8D23","\u70B8\u6BDB"].some(u=>t.includes(u))?i.innerHTML=`
                <div class="emote-icon anger-cross-in-avatar">
                    <svg viewBox="0 0 40 40" fill="none">
                        <path d="M14,6 C14,14 14,14 6,14 M26,6 C26,14 26,14 34,14 M14,34 C14,26 14,26 6,26 M26,34 C26,26 26,26 34,26" 
                              stroke="#ff0044" stroke-width="4.2" stroke-linecap="round"/>
                        <path d="M14,6 C14,14 14,14 6,14 M26,6 C26,14 26,14 34,14 M14,34 C14,26 14,26 6,26 M26,34 C26,26 26,26 34,26" 
                              stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.8"/>
                    </svg>
                </div>
            `:["\u6050\u60E7","\u5BB3\u6015","\u60CA\u6050","\u614C\u4E71"].some(u=>t.includes(u))?i.innerHTML=`
                <div class="emote-icon fear-double-size">
                    <svg viewBox="0 0 32 32" fill="none">
                        <path d="M6,16 Q10,10 14,16 T22,16 T28,16" stroke="#c026d3" stroke-width="3.2" stroke-linecap="round"/>
                        <path d="M8,22 Q12,16 16,22 T24,22" stroke="#ff2a7a" stroke-width="2.6" stroke-linecap="round"/>
                    </svg>
                </div>
            `:i.innerHTML=`
                <div class="emote-icon sparkle-pulse-left">
                    <svg viewBox="0 0 28 28" fill="none">
                        <path d="M14,2 Q14,14 2,14 Q14,14 14,26 Q14,14 26,14 Q14,14 14,2 Z" fill="#ff2a7a" stroke="#ff80ab" stroke-width="1.4"/>
                    </svg>
                </div>
            `},hs=function(){const t=e.getElementById("massive-hearts-box");if(!t)return;t.innerHTML="";const i=22;for(let u=0;u<i;u++){const s=e.createElement("span");s.className="chaos-heart",s.textContent=u%3===0?"\u2764":"\u2665",s.style.left=`${u*4.5+Math.random()*3}%`,s.style.animationDuration=`${3+Math.random()*2.5}s`,s.style.animationDelay=`${Math.random()*3}s`,s.style.fontSize=`${14+Math.random()*16}px`,s.style.setProperty("--spin",`${(Math.random()-.5)*80}deg`),u%2===0&&(s.style.color="#ff4081"),u%4===0&&(s.style.color="#ff0055"),t.appendChild(s)}},As=function(t){const i=e.querySelector("#send_textarea")||e.querySelector("#chat_input")||e.querySelector("textarea.chat-input");if(i){const u=i.value.trim(),s=/（.*?[抚|揉|碰|爱抚|玩弄].*?次）/g;s.test(u)?i.value=u.replace(s,t):i.value=t+(u?" "+u:""),i.dispatchEvent(new Event("input",{bubbles:!0}))}else console.log("[\u4EB2\u5BC6\u63A5\u89E6\u52A8\u4F5C\u5DF2\u751F\u6210]:",t)},gs=function(t,i){if(!t||!i)return;const u=["#ff4081","#ff1493","#ff80ab","#ff007f","#ff69b4","#ffffff"],s=e.getElementById("intimacy-toast");t.onclick=function(){if(Tu(),typeof navigator<"u"&&"vibrate"in navigator)try{gu>=30?navigator.vibrate([35,45,50,45,65]):gu>=20?navigator.vibrate([25,35,35]):gu>=10?navigator.vibrate([20,30,20]):navigator.vibrate(25)}catch{}i.classList.remove("avatar-jelly"),i.offsetWidth,i.classList.add("avatar-jelly");const n=Math.floor(Math.random()*2)+1;for(let a=0;a<n;a++)Ds(t,u);gu++;let o="",l="",r="";gu>=30?(o=`\u6781\u4E50\u8FC7\u8F7D\xB7\u6DF1\u5C42\u73A9\u5F04 x${gu}`,l=`\uFF08\u6781\u4E3A\u70ED\u70C8\u8086\u610F\u5730\u4FB5\u5360\u7231\u629A\u7740\u8389\u8389\u4E1D\u654F\u611F\u5230\u6781\u70B9\u7684\u6076\u9B54\u7284\u89D2\u3001\u8033\u9888\u4E0E\u5168\u8EAB\u654F\u611F\u5E26\uFF0C\u5C06\u5979\u8086\u610F\u73A9\u5F04\u523A\u6FC0\u4E86\u6574\u6574 ${gu} \u6B21\uFF09`,yt(3,!1),r="\u554A\u54C8\u2026\u2026\u2665 \u5DF2\u7ECF\u2026\u2026\u5B8C\u5168\u65E0\u6CD5\u601D\u8003\u4E86\u2026\u2026\u8111\u5B50\u91CC\u5168\u90FD\u662F\u4EB2\u7231\u7684\u6C14\u5473\u2026\u2026\u5FEB\u628A\u7075\u9B42\u548C\u4F53\u6E29\u2026\u2026\u5168\u90E8\u878D\u5316\u5728\u4E00\u8D77\u5427\u2026\u2026\u2665"):gu>=20?(o=`\u654F\u611F\u4FB5\u5360\xB7\u5168\u8EAB\u7231\u629A x${gu}`,l=`\uFF08\u5E26\u6709\u4FB5\u7565\u6027\u5730\u63C9\u634F\u629A\u6478\u7740\u8389\u8389\u4E1D\u7684\u89D2\u6839\u4E0E\u8170\u80A2\u654F\u611F\u5904\uFF0C\u6DF1\u5EA6\u6311\u9017\u629A\u5F04\u4E86 ${gu} \u6B21\uFF09`,yt(2,!1),r="\u545C\u2026\u2026\u6076\u9B54\u4E4B\u8840\u5728\u6CB8\u817E\u4E86\u5462\u2026\u2026\u4EB2\u7231\u7684\u6307\u5C16\u597D\u70ED\uFF0C\u518D\u591A\u629A\u5F04\u4E00\u4E0B\u2026\u2026\u628A\u8389\u8389\u4E1D\u5F7B\u5E95\u5360\u6EE1\u5427\u2026\u2026\u2665"):gu>=10?(o=`\u5FC3\u8DF3\u52A0\u901F\xB7\u628A\u73A9\u7284\u89D2 x${gu}`,l=`\uFF08\u53CC\u624B\u987A\u7740\u53D1\u4E1D\u7EC6\u7EC6\u63C9\u5F04\u628A\u73A9\u7740\u8389\u8389\u4E1D\u6CDB\u7EA2\u53D1\u70EB\u7684\u6076\u9B54\u53CC\u89D2\uFF0C\u4EB2\u6635\u7231\u629A\u4E86 ${gu} \u6B21\uFF09`,yt(1,!1),r="\u5440\u554A\u2026\u2026\uFF01\u89E6\u78B0\u90A3\u91CC\u7684\u529B\u9053\u592A\u72E1\u733E\u4E86\u2026\u2026\u5FC3\u8DF3\u90FD\u5FEB\u5F97\u8981\u8DC3\u51FA\u80F8\u53E3\u4E86\uFF0C\u4E0D\u53EF\u4EE5\u505C\u4E0B\u6765\u54E6\u2665"):(o=`\u8F7B\u629A\u8033\u5C16\u4E0E\u89D2\u5C16 x${gu}`,l=`\uFF08\u6307\u5C16\u8F7B\u67D4\u5730\u5212\u8FC7\u8389\u8389\u4E1D\u67D4\u8F6F\u7684\u53D1\u4E1D\u4E0E\u654F\u611F\u8033\u5C16\uFF0C\u6E29\u67D4\u6469\u6332\u4E86 ${gu} \u6B21\uFF09`,r=Ue[Qe%Ue.length],Qe++),Rt(r),$t&&(clearTimeout($t),$t=null),$t=setTimeout(()=>{const a=Be||at[0];Rt(a),$t=null},1e4),s&&(s.textContent=o,s.classList.add("show")),de&&clearTimeout(de),de=setTimeout(()=>{s&&s.classList.remove("show"),As(l)},1500)}},Yu=function(){const t=e.getElementById("fate-hearts-track"),i=e.getElementById("arrow-prev"),u=e.getElementById("arrow-next");if(!t||!i||!u)return;const s=t.scrollWidth-t.clientWidth;s>4?(t.scrollLeft<s-4?u.classList.add("visible"):u.classList.remove("visible"),t.scrollLeft>4?i.classList.add("visible"):i.classList.remove("visible")):(i.classList.remove("visible"),u.classList.remove("visible"))},ys=function(){if(!zt)return!1;Ce&&clearTimeout(Ce),De&&clearTimeout(De),zt=!1,Ce=null,De=null;const t=e.getElementById("crest-top-heart-group");t&&(t.classList.remove("absorb-pulse","fill-overload"),t.style.display="none"),ee(Xe,Ye);const i=e.getElementById("eros-shop-banner");return i&&i.classList.add("active"),!0},ku=function(t){const i=e.getElementById(t==="top"?"top-crest-wrapper":"bottom-crest-wrapper"),s=e.getElementById(t==="top"?"crest-top-heart-group":"crest-bottom-heart-group")||i;s&&(s.classList.remove("border-heart-tremble"),s.offsetWidth,s.classList.add("border-heart-tremble"),setTimeout(()=>{s.classList.remove("border-heart-tremble")},400))},Se=function(t,i,u,s,n,o){t.innerHTML="";const l=i.length;if(l===0)return;const r=s<=0?35:s,a=s<=0?0:u,E=o!==void 0?o:a+s*.5;let p=[];l===1?p=[{x:110,y:E+1.2,fontSize:8.5}]:l===2?p=[{x:104,y:E+1.2,fontSize:7.8},{x:116,y:E+1.2,fontSize:7.8}]:l===3?p=[{x:101,y:a+r*.38+1.2,fontSize:7},{x:119,y:a+r*.38+1.2,fontSize:7},{x:110,y:a+r*.72+1.2,fontSize:7.2}]:l===4?p=[{x:101,y:a+r*.34+1.2,fontSize:6.6},{x:119,y:a+r*.34+1.2,fontSize:6.6},{x:106,y:a+r*.72+1.2,fontSize:6.6},{x:114,y:a+r*.72+1.2,fontSize:6.6}]:p=[{x:100,y:a+r*.32+1.2,fontSize:6.2},{x:110,y:a+r*.26+1.2,fontSize:6.2},{x:120,y:a+r*.32+1.2,fontSize:6.2},{x:105,y:a+r*.7+1.2,fontSize:6.2},{x:115,y:a+r*.7+1.2,fontSize:6.2}],i.slice(0,l).forEach((B,M)=>{const b=p[M]||{x:110,y:E,fontSize:7},w=e.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("class","liquid-char"),w.setAttribute("x",b.x.toFixed(1)),w.setAttribute("y",b.y.toFixed(1)),w.setAttribute("font-size",b.fontSize.toString()),w.setAttribute("text-anchor","middle"),w.setAttribute("dominant-baseline","central"),w.style.animationDelay=`${(M*.32).toFixed(2)}s`,n&&w.setAttribute("transform",`rotate(180, ${b.x.toFixed(1)}, ${b.y.toFixed(1)})`),w.textContent=B.char,t.appendChild(w)})},dt=function(t){const i=e.getElementById("top-heart-fill-rect"),u=e.getElementById("top-heart-wave-back"),s=e.getElementById("top-heart-wave"),n=e.getElementById("top-heart-chars-group");if(!i||!s||!n)return;const o=35,l=t!==void 0?t:Math.min(1,au/1),r=l*o,a=o-r;if(l===0&&au===0){i.setAttribute("height","0"),i.setAttribute("y","35"),s.setAttribute("d",""),u&&u.setAttribute("d",""),n.innerHTML="";return}i.setAttribute("height",r.toString()),i.setAttribute("y",a.toString()),l>0?(s.setAttribute("d",`M88,${a} Q99,${a-2.5} 110,${a} T132,${a} L132,${a+4} L88,${a+4} Z`),u&&u.setAttribute("d",`M88,${a} Q99,${a+2} 110,${a} T132,${a} L132,${a+5} L88,${a+5} Z`)):(s.setAttribute("d",""),u&&u.setAttribute("d",""));const E=l>0?void 0:17.5;Se(n,zu,a,r,!1,E)},te=function(){const t=e.getElementById("bottom-heart-fill-rect"),i=e.getElementById("bottom-heart-wave-back"),u=e.getElementById("bottom-heart-wave"),s=e.getElementById("bottom-heart-chars-group");if(!t||!u||!s)return;if(Du===0){t.setAttribute("height","0"),t.setAttribute("y","35"),u.setAttribute("d",""),i&&i.setAttribute("d",""),s.innerHTML="";return}const o=Du/5*35,l=35-o;t.setAttribute("height",o.toString()),t.setAttribute("y",l.toString()),u.setAttribute("d",`M88,${l} Q99,${l+2.5} 110,${l} T132,${l} L132,${l-4} L88,${l-4} Z`),i&&i.setAttribute("d",`M88,${l} Q99,${l-2} 110,${l} T132,${l} L132,${l-5} L88,${l-5} Z`),Se(s,pt,l,o,!0)},$e=function(t,i,u){const s=u.querySelector(".fate-empty-hint");s&&s.remove();const n=e.createElement("div");return n.className="fate-heart-node is-max land-pop",n.title=`\u547D\u5B9A\u4E4B\u4EBA\uFF1A${t} (\u597D\u611F\u5EA6 100% \u6EE1\u597D\u611F)`,n.innerHTML=`
            <svg class="fate-heart-svg" viewBox="0 0 32 32">
                <path d="M16,28 C16,28 3,18 3,9 C3,4 7,1 12,1 C14.5,1 16,3 16,3 C16,3 17.5,1 20,1 C25,1 29,4 29,9 C29,18 16,28 16,28 Z" 
                      fill="#540c42" stroke="#ff69b4" stroke-width="2.1"/>
            </svg>
            <span class="fate-heart-char">${i}</span>
        `,u.appendChild(n),setTimeout(()=>{n.classList.remove("land-pop")},380),Ie(n,u),n},ms=function(t,i,u){const s=e.createElement("div");s.className="billiard-stage",t.appendChild(s);const n=t.clientWidth,o=t.clientHeight,l=[];u.forEach((B,M)=>{const b=e.createElement("div");b.className="billiard-heart-ball",b.innerHTML=`
                <svg viewBox="0 0 32 32">
                    <path d="M16,28 C16,28 3,18 3,9 C3,4 7,1 12,1 C14.5,1 16,3 16,3 C16,3 17.5,1 20,1 C25,1 29,4 29,9 C29,18 16,28 16,28 Z" 
                          fill="#540c42" stroke="#ff69b4" stroke-width="2.1"/>
                </svg>
                <span class="ball-char">${B.char}</span>
            `,s.appendChild(b);const w=B.fromSide==="top",y=M%5-2,D=n/2-13+y*14,m=w?14:o-32,f=Math.PI*.15+M%5*(Math.PI*.7/4)+(Math.random()-.5)*.4,c=7.5+Math.random()*3.5,L=Math.cos(f)*(M%2===0?c:-c),$=(w?1:-1)*(Math.sin(f)*c+3);l.push({el:b,x:D,y:m,vx:L,vy:$,data:B})});function r(B,M){const b=e.createElement("span");b.className="billiard-wall-spark",b.textContent=Math.random()>.5?"\u2726":"\u2665",b.style.left=`${B}px`,b.style.top=`${M}px`,s.appendChild(b),setTimeout(()=>b.remove(),340)}let a=!0,E;function p(){a&&(l.forEach(B=>{B.x+=B.vx,B.y+=B.vy,B.x<=6?(B.x=6,B.vx=-B.vx,r(B.x,B.y+13)):B.x>=n-32&&(B.x=n-32,B.vx=-B.vx,r(B.x+24,B.y+13)),B.y<=6?(B.y=6,B.vy=-B.vy,r(B.x+13,B.y)):B.y>=o-32&&(B.y=o-32,B.vy=-B.vy,r(B.x+13,B.y+24)),B.el.style.transform=`translate3d(${B.x.toFixed(1)}px, ${B.y.toFixed(1)}px, 0)`}),E=requestAnimationFrame(p))}E=requestAnimationFrame(p),setTimeout(()=>{a=!1,cancelAnimationFrame(E);const B=i.getBoundingClientRect(),M=t.getBoundingClientRect();l.forEach((b,w)=>{setTimeout(()=>{const y=B.left-M.left+w*28+12,D=B.top-M.top;b.el.style.transition="all 0.42s cubic-bezier(0.2, 0.9, 0.3, 1.2)",b.el.style.transform=`translate3d(${y}px, ${D}px, 0) scale(0.95)`,b.el.style.opacity="0.35",setTimeout(()=>{b.el.remove(),$e(b.data.name,b.data.char,i),Yu(),w===l.length-1&&(s.remove(),wu=!1)},430)},w*65)})},1900)},Ht=function(){if(wu)return;const t=e.getElementById("eros-shop-banner"),i=e.getElementById("eros-abyss-banner"),u=!!(t&&t.classList.contains("active")),s=!!(i&&i.classList.contains("active"));if(au<=0&&Du<=0&&!u&&!s)return;wu=!0,ku("top"),(Du>0||s)&&ku("bottom");const n=e.querySelector(".succubus-dialogue-box"),o=e.getElementById("fate-hearts-track"),l=e.getElementById("top-crest-dropzone"),r=e.getElementById("bottom-crest-dropzone"),a=e.getElementById("crest-top-heart-group"),E=e.getElementById("crest-bottom-heart-group");if(!n||!o){wu=!1;return}const p=l?l.getBoundingClientRect():{left:n.getBoundingClientRect().left+n.offsetWidth/2-15,top:n.getBoundingClientRect().top-10,width:30,height:30},B=p.left+p.width/2,M=p.top+p.height/2,b=r?r.getBoundingClientRect():{left:n.getBoundingClientRect().left+n.offsetWidth/2-15,top:n.getBoundingClientRect().bottom-20,width:30,height:30},w=b.left+b.width/2,y=b.top+b.height/2,D=[...zu],m=Math.max(u||au>0?1:0,au);if(D.length<m&&m>0){const S=["\u514B\u91CC\u65AF","\u827E\u83B2\u5A1C","\u5E0C\u5C14\u8FBE","\u9732\u5A1C","\u7C73\u62C9"];for(let R=D.length;R<m;R++){const N=S[R%S.length];D.push({name:N,char:N.charAt(0)})}}zu.length=0;const f=[...pt],c=Math.max(s||Du>0?1:0,Du);if(f.length<c&&c>0){const S=["\u585E\u897F\u8389\u4E9A","\u83F2\u8389\u4E1D","\u7EAF\u767D\u8A93\u7EA6","\u6DF1\u6E0A\u5951\u7EA6","\u9B45\u60D1\u5370\u8BB0"];for(let R=f.length;R<c;R++){const N=S[R%S.length];f.push({name:N,char:N.charAt(0)})}}pt.length=0,t&&(t.classList.add("shatter-out"),setTimeout(()=>{t.classList.remove("active","shatter-out")},400)),a&&(a.style.display="block",a.style.opacity="1",a.classList.remove("fill-overload","absorb-pulse")),au=0,dt(),i&&(i.classList.add("shatter-out"),setTimeout(()=>{i.classList.remove("active","shatter-out")},400)),E&&(E.style.display="block",E.style.opacity="1",E.classList.remove("fill-overload","absorb-pulse"));const L=Du>0||s;Du=0,te(),ee(B,M),L&&ke(w,y);const $=[...D.map(S=>({...S,fromSide:"top"})),...f.map(S=>({...S,fromSide:"bottom"}))];ms(n,o,$)},xs=function(){if(au<=0||wu)return;const t=e.getElementById("eros-shop-banner");if(t&&t.classList.contains("active")||au>=1){Ht();return}wu=!0,ku("top");const i=e.querySelector(".succubus-dialogue-box"),u=e.getElementById("fate-hearts-track"),s=e.getElementById("top-crest-dropzone");if(!i||!u){wu=!1;return}const n=s?s.getBoundingClientRect():{left:i.getBoundingClientRect().left+i.offsetWidth/2-15,top:i.getBoundingClientRect().top-10,width:30,height:30},o=n.left+n.width/2,l=n.top+n.height/2,r=[...zu],a=au;if(r.length<a){const E=["\u514B\u91CC\u65AF","\u827E\u83B2\u5A1C","\u5E0C\u5C14\u8FBE","\u9732\u5A1C","\u7C73\u62C9"];for(let p=r.length;p<a;p++){const B=E[p%E.length];r.push({name:B,char:B.charAt(0)})}}zu.length=0,au=0,dt(),Te(u,r,o,l)},ii=function(){if(Du<=0||wu)return;const t=e.getElementById("eros-abyss-banner");if(t&&t.classList.contains("active")||au>=3){Ht();return}wu=!0,ku("bottom");const i=e.querySelector(".succubus-dialogue-box"),u=e.getElementById("fate-hearts-track"),s=e.getElementById("bottom-crest-dropzone");if(!i||!u){wu=!1;return}const n=s?s.getBoundingClientRect():{left:i.getBoundingClientRect().left+i.offsetWidth/2-15,top:i.getBoundingClientRect().bottom-20,width:30,height:30},o=n.left+n.width/2,l=n.top+n.height/2,r=[...pt];pt.length=0,Du=0,te(),Te(u,r,o,l)},Tu=function(){if(ys()||wu)return;const t=e.getElementById("eros-shop-banner"),i=e.getElementById("eros-abyss-banner"),u=!!(t&&t.classList.contains("active")),s=!!(i&&i.classList.contains("active"));au<=0&&Du<=0&&!u&&!s||(u||s||au>=3?Ht():xs())},Te=function(t,i,u,s){const n=t.getBoundingClientRect();i.forEach((o,l)=>{setTimeout(()=>{const r=e.createElement("div");r.className="returning-flight-heart",r.innerHTML=`
                    <svg viewBox="0 0 32 32">
                        <path d="M16,28 C16,28 3,18 3,9 C3,4 7,1 12,1 C14.5,1 16,3 16,3 C16,3 17.5,1 20,1 C25,1 29,4 29,9 C29,18 16,28 16,28 Z" 
                              fill="#540c42" stroke="#ff69b4" stroke-width="2.1"/>
                    </svg>
                    <span class="flight-char">${o.char}</span>
                `,r.style.left=`${u-12}px`,r.style.top=`${s-12}px`,e.body.appendChild(r),requestAnimationFrame(()=>{const a=n.left+l*30+12,E=n.top+2;r.style.left=`${a}px`,r.style.top=`${E}px`,r.style.transform="scale(1.1)"}),setTimeout(()=>{r.remove(),$e(o.name,o.char,t),Yu(),l===i.length-1&&(wu=!1)},460)},l*80)})},Me=function(t,i){const u=e.createDocumentFragment(),s=[],n=["\u2665","\u2728","\u{1F495}","\u2726"],o=["#ff007f","#ff4081","#e879f9","#ffffff"];for(let l=0;l<10;l++){const r=e.createElement("span");r.className="top-heart-sparkle",r.textContent=n[l%n.length];const a=Math.random()*Math.PI*2,E=16+Math.random()*28,p=Math.cos(a)*E,B=Math.sin(a)*E;r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.color=o[Math.floor(Math.random()*o.length)],r.style.fontSize=`${10+Math.random()*8}px`,r.style.setProperty("--vx",`${p.toFixed(1)}px`),r.style.setProperty("--vy",`${B.toFixed(1)}px`),u.appendChild(r),s.push(r)}e.body.appendChild(u),setTimeout(()=>{s.forEach(l=>l.remove())},750)},bs=function(t,i){const u=e.createDocumentFragment(),s=[],n=["\u2665","\u{1F49C}","\u2728","\u{1F495}","\u2726"],o=["#c026d3","#e879f9","#ff007f","#ffffff","#a855f7"];for(let l=0;l<12;l++){const r=e.createElement("span");r.className="top-heart-sparkle",r.textContent=n[l%n.length];const a=Math.random()*Math.PI*2,E=16+Math.random()*28,p=Math.cos(a)*E,B=Math.sin(a)*E;r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.color=o[Math.floor(Math.random()*o.length)],r.style.fontSize=`${10+Math.random()*8}px`,r.style.setProperty("--vx",`${p.toFixed(1)}px`),r.style.setProperty("--vy",`${B.toFixed(1)}px`),u.appendChild(r),s.push(r)}e.body.appendChild(u),setTimeout(()=>{s.forEach(l=>l.remove())},750)},vs=function(t,i){const u=e.createDocumentFragment(),s=[],n=["\u2665","\u2728","\u{1F495}","\u2726"],o=["#ff007f","#ff4081","#ffffff","#e879f9"];for(let l=0;l<7;l++){const r=e.createElement("span");r.className="top-heart-sparkle",r.textContent=n[l%n.length];const a=Math.random()*Math.PI*2,E=10+Math.random()*18,p=Math.cos(a)*E,B=Math.sin(a)*E;r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.color=o[Math.floor(Math.random()*o.length)],r.style.fontSize=`${9+Math.random()*5}px`,r.style.setProperty("--vx",`${p.toFixed(1)}px`),r.style.setProperty("--vy",`${B.toFixed(1)}px`),u.appendChild(r),s.push(r)}e.body.appendChild(u),setTimeout(()=>{s.forEach(l=>l.remove())},600)},ee=function(t,i){const u=e.createDocumentFragment(),s=[],n=["\u2665","\u{1F496}","\u{1F495}","\u{1F493}","\u{1F497}","\u2728","\u{1F338}"],o=["#ff0055","#ff1493","#ff69b4","#e879f9","#c026d3","#ffffff","#ff80ab"];for(let l=0;l<42;l++){const r=e.createElement("span");r.className="top-heart-explosion-particle",r.textContent=n[l%n.length];const a=Math.random()*Math.PI*2,E=30+Math.random()*110,p=Math.cos(a)*E,B=Math.sin(a)*E-(15+Math.random()*25),M=(Math.random()-.5)*260,b=12+Math.random()*16,w=o[Math.floor(Math.random()*o.length)];r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.fontSize=`${b}px`,r.style.color=w,r.style.setProperty("--vx",`${p.toFixed(1)}px`),r.style.setProperty("--vy",`${B.toFixed(1)}px`),r.style.setProperty("--rot",`${M.toFixed(1)}deg`),r.style.animationDelay=`${(Math.random()*.08).toFixed(2)}s`,u.appendChild(r),s.push(r)}e.body.appendChild(u),setTimeout(()=>{s.forEach(l=>l.remove())},1400)},ke=function(t,i){const u=e.createDocumentFragment(),s=[],n=["\u2665","\u{1F49C}","\u{1F5A4}","\u{1F495}","\u2728","\u2726","\u{1F338}"],o=["#9333ea","#c026d3","#ff007f","#ff1493","#e879f9","#ffffff","#7e22ce"];for(let l=0;l<42;l++){const r=e.createElement("span");r.className="top-heart-explosion-particle",r.textContent=n[l%n.length];const a=Math.random()*Math.PI*2,E=30+Math.random()*110,p=Math.cos(a)*E,B=Math.sin(a)*E+(15+Math.random()*25),M=(Math.random()-.5)*260,b=12+Math.random()*16,w=o[Math.floor(Math.random()*o.length)];r.style.left=`${t}px`,r.style.top=`${i}px`,r.style.fontSize=`${b}px`,r.style.color=w,r.style.setProperty("--vx",`${p.toFixed(1)}px`),r.style.setProperty("--vy",`${B.toFixed(1)}px`),r.style.setProperty("--rot",`${M.toFixed(1)}deg`),r.style.animationDelay=`${(Math.random()*.08).toFixed(2)}s`,u.appendChild(r),s.push(r)}e.body.appendChild(u),setTimeout(()=>{s.forEach(l=>l.remove())},1400)},Ie=function(t,i){
  if(!t.classList.contains("is-max"))return;
  let u=!1,s=null,n=0,o=0,l=!1;
  
  function executeTopAbsorption(fromX, fromY, customFloating) {
    const p=e.getElementById("top-crest-wrapper"),
          M=e.getElementById("eros-shop-banner"),
          y=e.getElementById("top-crest-dropzone"),
          eu=y||p||M;
    let N=window.innerWidth/2, tu=20;
    if(eu){
      const T=eu.getBoundingClientRect();
      N=T.left+T.width/2;
      tu=T.top+T.height/2;
    }
    const L=t.querySelector(".fate-heart-char")?.textContent?.trim()||"\u2665",
          $=(t.title||"").match(/命定之人：([^\s(]+)/),
          S=$?$[1]:L+"\u5FC3\u5951";
    zu.push({name:S,char:L});
    
    let floatEl = customFloating || s;
    if(!floatEl){
      floatEl = e.createElement("div");
      floatEl.className = "fate-heart-drag-floating";
      floatEl.innerHTML = t.innerHTML;
      floatEl.style.left = fromX + "px";
      floatEl.style.top = fromY + "px";
      e.body.appendChild(floatEl);
    }
    t.classList.add("is-dragging","drag-ghost-placeholder");
    
    // Smooth flying curve to top crest
    floatEl.style.transition = "all 0.38s cubic-bezier(0.18, 0.9, 0.32, 1.15)";
    floatEl.style.left = `${N}px`;
    floatEl.style.top = `${tu}px`;
    floatEl.style.transform = "translate(-50%, -50%) scale(0.12)";
    floatEl.style.opacity = "0.2";
    
    if(p) p.classList.add("drop-ready");
    if(M) M.classList.add("drop-ready");
    
    setTimeout(()=>{
      floatEl?.remove();
      s = null;
      t.remove();
      if(p) p.classList.remove("drop-ready");
      if(M) M.classList.remove("drop-ready");
      
      if(au<1){
        au=1;
        dt(0);
        Me(N,tu);
        const T=e.getElementById("crest-top-heart-group");
        T&&(T.classList.remove("absorb-pulse"),T.offsetWidth,T.classList.add("absorb-pulse"));
        const nu=st(),pu=nu>=3e3,iu=e.getElementById("fp-tag-value");
        let Au=Math.min(3e3,nu),Mt=1500,Qu=30,Zt=Mt/Qu,kt=Au/Qu,Ju=nu;
        const Bt=iu?iu.getBoundingClientRect():{left:20,top:20,width:20,height:20,right:40,bottom:40},
              It=Bt.right+10,
              Vt=Bt.top+Bt.height/2-16;
        let Uu=0,Ae=setInterval(()=>{
          Ju-=kt;
          Ju<nu-Au&&(Ju=nu-Au);
          iu&&(iu.textContent=Math.floor(Math.max(0,Ju)).toString());
          Uu+=1/Qu;
          Uu>1&&(Uu=1);
          dt(Uu);
          const X=e.createElement("div");
          X.style.position="fixed";
          X.style.left=It+"px";
          X.style.top=Vt+"px";
          X.style.width="24px";
          X.style.height="24px";
          X.innerHTML=["\u2665","\u2765"][Math.floor(Math.random()*2)];
          X.style.display="flex";
          X.style.justifyContent="center";
          X.style.alignItems="center";
          const J=["#ffb6c1","#ff69b4","#ff1493","#c71585","#db7093"],bu=J[Math.floor(Math.random()*J.length)];
          X.style.color=bu;
          X.style.fontSize=20+Math.random()*8+"px";
          X.style.textShadow="0 0 6px "+bu;
          X.style.pointerEvents="none";
          X.style.zIndex="999999";
          X.style.transition="all 0.3s cubic-bezier(0.5, 0, 0.8, 1)";
          e.body.appendChild(X);
          requestAnimationFrame(()=>{
            X.style.left=N+"px";
            X.style.top=tu+"px";
            X.style.transform="scale(0.2)";
            X.style.opacity="0";
          });
          setTimeout(()=>{X.remove()},350);
        },Zt);
        
        setTimeout(()=>{
          clearInterval(Ae);
          T&&(T.style.transform="");
          if(pu){
            dt(1);
            iu&&(iu.textContent=nu.toString());
            zt=!0;
            Xe=N;
            Ye=tu;
            T&&(T.classList.remove("absorb-pulse"),void T.offsetWidth,T.classList.add("fill-overload"));
            setTimeout(()=>{
              zt=!1;
              ee(N,tu);
              T&&(T.style.display="none",T.classList.remove("fill-overload"));
              const X=e.getElementById("eros-shop-banner");
              X&&X.classList.add("active");
            },420);
          } else {
            T&&(T.classList.remove("fill-overload"),T.style.transform="scale(1.2)",setTimeout(()=>{T.style.transform=""},150));
            ku("top");
            typeof window.showAvatarWhisper=="function"&&window.showAvatarWhisper("\u547D\u5B9A\u70B9\u6570\u4E0D\u8DB3 3000\uFF0C\u6CA1\u6CD5\u8FDB\u5165\u5546\u94FA\u54E6\u2665");
            for(let X=0;X<20;X++){
              const J=e.createElement("div");
              J.style.position="fixed";
              J.style.left=N+"px";
              J.style.top=tu+"px";
              J.style.width="24px";
              J.style.height="24px";
              J.innerHTML=["\u2665","\u2765"][Math.floor(Math.random()*2)];
              J.style.display="flex";
              J.style.justifyContent="center";
              J.style.alignItems="center";
              const bu=["#ffb6c1","#ff69b4","#ff1493","#c71585","#db7093"],Ku=bu[Math.floor(Math.random()*bu.length)];
              J.style.color=Ku;
              J.style.fontSize=16+Math.random()*12+"px";
              J.style.textShadow="0 0 6px "+Ku;
              J.style.pointerEvents="none";
              J.style.zIndex="999999";
              J.style.transition="all 0.5s cubic-bezier(0.2, 0.8, 0.4, 1)";
              e.body.appendChild(J);
              J.offsetWidth;
              J.style.left=It+(Math.random()*60-30)+"px";
              J.style.top=Vt+(Math.random()*60-30)+"px";
              J.style.opacity="0";
              J.style.transform=`scale(${Math.random()+.5}) rotate(${Math.random()*180-90}deg)`;
              setTimeout(()=>J.remove(),550);
            }
            setTimeout(()=>{
              iu&&(iu.textContent=nu.toString());
              au=0;
              dt();
              zu.pop();
            },500);
          }
        },Mt+100);
      } else {
        Me(N,tu);
        const T=e.getElementById("eros-shop-banner");
        T&&(T.classList.remove("absorb-pulse"),T.offsetWidth,T.classList.add("absorb-pulse"));
      }
      Yu();
      if(i.querySelectorAll(".fate-heart-node").length===0&&!i.querySelector(".fate-empty-hint")){
        const T=e.createElement("div");
        T.className="fate-empty-hint";
        T.style.cssText="color:rgba(255,105,180,0.65); font-size:12px; line-height:36px; text-align:center; width:100%; white-space:nowrap; letter-spacing:1px;";
        T.textContent="\u2726 \u547D\u5B9A\u5951\u7EA6\u5DF2\u5168\u6570\u5949\u7EB3 \u2726";
        i.appendChild(T);
      }
    },280);
  }

  const r=E=>{
    if(!u||!s)return;
    const p=E.clientX,B=E.clientY;
    Math.hypot(p-n,B-o)>6&&(l=!0);
    s.style.left=`${p}px`;
    s.style.top=`${B}px`;
    const M=i.getBoundingClientRect();
    if(B>=M.top-24&&B<=M.bottom+24){
      p>M.right-24?i.scrollLeft+=4:p<M.left+24&&(i.scrollLeft-=4);
      const S=Array.from(i.children).filter(N=>N!==t);
      let R=null;
      for(const N of S){
        const tu=N.getBoundingClientRect(),eu=tu.left+tu.width/2;
        if(p<eu){R=N;break}
      }
      R?t.nextElementSibling!==R&&i.insertBefore(t,R):t.nextElementSibling!==null&&i.appendChild(t);
    }
    const w=au>=1&&Du<5,
          y=e.getElementById("top-crest-dropzone"),
          D=e.getElementById("top-crest-wrapper"),
          m=e.getElementById("eros-shop-banner"),
          f=e.getElementById("bottom-crest-dropzone"),
          c=e.getElementById("bottom-crest-wrapper"),
          L=y||D||m;
    let $=!1;
    if(L){
      const S=L.getBoundingClientRect(),R=S.left+S.width/2,N=S.top+S.height/2,tu=Math.hypot(p-R,B-N),eu=Math.abs(p-R)<=130,hu=B>=S.top-60&&B<=S.bottom+55;
      $=tu<=65||eu&&hu;
    }
    if($?(D&&D.classList.add("drop-ready"),m&&m.classList.add("drop-ready")):(D&&D.classList.remove("drop-ready"),m&&m.classList.remove("drop-ready")),w&&f&&c){
      const S=f.getBoundingClientRect(),R=S.left+S.width/2,N=S.top+S.height/2,tu=p-R,eu=B-N;
      tu*tu/484+eu*eu/324<=1?c.classList.add("drop-ready"):c.classList.remove("drop-ready");
    }else c&&c.classList.remove("drop-ready");
  },
  a=E=>{
    window.removeEventListener("pointermove",r);
    window.removeEventListener("pointerup",a);
    window.removeEventListener("pointercancel",a);
    if(!u)return;
    u=!1;
    Wt=!0;
    setTimeout(()=>{Wt=!1},380);

    const b=E.clientX,w=E.clientY;
    
    // 如果没有发生显著拖拽（即用户只是点击了该爱心）或者在上方区域松开 -> 自动触发飞升放入上边框爱心！
    if(!l || Math.hypot(b-n, w-o) <= 6){
      executeTopAbsorption(b||n, w||o, s);
      return;
    }

    if(l){
      const T=nu=>{nu.stopPropagation(),nu.preventDefault(),window.removeEventListener("click",T,!0)};
      window.addEventListener("click",T,!0);
      setTimeout(()=>{window.removeEventListener("click",T,!0)},350);
    }
    
    const p=e.getElementById("top-crest-wrapper"),
          B=e.getElementById("bottom-crest-wrapper"),
          M=e.getElementById("eros-shop-banner");
    p&&p.classList.remove("drop-ready");
    B&&B.classList.remove("drop-ready");
    M&&M.classList.remove("drop-ready");
    
    const y=e.getElementById("top-crest-dropzone"),
          D=e.getElementById("bottom-crest-dropzone"),
          m=au<1,
          f=au>=1&&Du<5,
          L=t.querySelector(".fate-heart-char")?.textContent?.trim()||"\u2665",
          $=(t.title||"").match(/命定之人：([^\s(]+)/),
          S=$?$[1]:L+"\u5FC3\u5951";
    let R=!1,N=0,tu=0;
    const eu=y||p||M;
    if(eu){
      const T=eu.getBoundingClientRect();
      N=T.left+T.width/2;
      tu=T.top+T.height/2;
      const nu=Math.hypot(b-N,w-tu),pu=Math.abs(b-N)<=130,iu=w>=T.top-60&&w<=T.bottom+55;
      R=nu<=65||pu&&iu;
    }
    let hu=!1;
    if(D){
      const T=D.getBoundingClientRect(),nu=T.left+T.width/2,pu=T.top+T.height/2,iu=b-nu,Au=w-pu;
      hu=iu*iu/484+Au*Au/324<=1;
    }
    
    if(R){
      executeTopAbsorption(b, w, s);
      return;
    }
    if(m&&hu&&ku("bottom"),f&&hu){
      const T=D.getBoundingClientRect(),nu=T.left+T.width/2,pu=T.top+T.height/2;
      pt.push({name:S,char:L});
      s&&(s.style.transition="all 0.26s cubic-bezier(0.2, 0.9, 0.3, 1)",s.style.left=`${nu}px`,s.style.top=`${pu}px`,s.style.transform="translate(-50%, -50%) scale(0.1)",s.style.opacity="0");
      setTimeout(()=>{
        s?.remove();
        s=null;
        t.remove();
        Du=Math.min(5,Du+1);
        te();
        bs(nu,pu);
        const iu=e.getElementById("crest-bottom-heart-group");
        if(iu&&(iu.classList.remove("absorb-pulse"),iu.offsetWidth,iu.classList.add("absorb-pulse")),Yu(),i.querySelectorAll(".fate-heart-node").length===0&&!i.querySelector(".fate-empty-hint")){
          const Au=e.createElement("div");
          Au.className="fate-empty-hint";
          Au.style.cssText="color:rgba(255,105,180,0.65); font-size:12px; line-height:36px; text-align:center; width:100%; white-space:nowrap; letter-spacing:1px;";
          Au.textContent="\u2726 \u547D\u5B9A\u5951\u7EA6\u5DF2\u5168\u6570\u5949\u7EB3 \u2726";
          i.appendChild(Au);
        }
        Du>=5&&setTimeout(()=>{
          iu&&iu.classList.add("fill-overload");
          setTimeout(()=>{
            ke(nu,pu);
            iu&&(iu.style.display="none");
            const Au=e.getElementById("eros-abyss-banner");
            Au&&Au.classList.add("active");
          },500);
        },320);
      },260);
      return;
    }
    const Cu=t.getBoundingClientRect(),V=Cu.left+Cu.width/2,du=Cu.top+Cu.height/2,Lu=Math.hypot(b-V,w-du);
    if(s&&(Lu>12||l)){
      const T=setInterval(()=>{
        if(!s)return;
        const nu=s.getBoundingClientRect(),pu=e.createElement("span");
        pu.className="fate-heart-trail-spark";
        pu.textContent="\u2665";
        pu.style.left=`${nu.left+nu.width/2}px`;
        pu.style.top=`${nu.top+nu.height/2}px`;
        e.body.appendChild(pu);
        setTimeout(()=>pu.remove(),400);
      },60);
      s.classList.add("is-flying-back");
      s.style.left=`${V}px`;
      s.style.top=`${du}px`;
      setTimeout(()=>{
        clearInterval(T);
        s?.remove();
        s=null;
        t.classList.remove("is-dragging","drag-ghost-placeholder","land-pop");
        t.offsetWidth;
        t.classList.add("land-pop");
        setTimeout(()=>{t.classList.remove("land-pop")},380);
        vs(V,du);
        Yu();
      },380);
    } else {
      s?.remove();
      s=null;
      t.classList.remove("is-dragging","drag-ghost-placeholder","land-pop");
      Yu();
    }
  };

  t.addEventListener("pointerdown",E=>{
    if(E.button!==0)return;
    E.preventDefault();
    u=!0;
    Wt=!0;
    l=!1;
    n=E.clientX;
    o=E.clientY;
    t.classList.add("is-dragging","drag-ghost-placeholder");
    s=e.createElement("div");
    s.className="fate-heart-drag-floating";
    s.innerHTML=t.innerHTML;
    s.style.left=`${E.clientX}px`;
    s.style.top=`${E.clientY}px`;
    e.body.appendChild(s);
    window.addEventListener("pointermove",r);
    window.addEventListener("pointerup",a);
    window.addEventListener("pointercancel",a);
  });
};ws=function(t){if(!t)return;t.innerHTML="";const i=Bu(Ru);if(i.length===0){t.innerHTML=`
                <div class="fate-empty-contract-hint" title="\u53EA\u6709\u7B7E\u8BA2\u4E86\u547D\u5B9A\u5951\u7EA6\u7684\u4EBA\u624D\u4F1A\u767B\u8BB0\u5230\u8FD9\u4E2A\u6A21\u5757\u5217\u8868">
                    <span>\u2726 \u6682\u65E0\u547D\u5B9A\u5951\u7EA6\u5BF9\u8C61\uFF08\u53EA\u6709\u7B7E\u8BA2\u4E86\u547D\u5B9A\u5951\u7EA6\u7684\u4EBA\u624D\u4F1A\u767B\u8BB0\u5230\u6B64\u5217\u8868\uFF09 \u2726</span>
                </div>
            `;return}i.forEach(u=>{const{name:s,score:n,isMax:o}=u,l=s.charAt(0),r=e.createElement("div");r.className=`fate-heart-node ${o?"is-max":""}`,r.title=`\u3010\u547D\u5B9A\u5951\u7EA6\u3011${s}${o?" (\u5951\u7EA6\u5706\u6EE1 100%\xB7\u53EF\u62D6\u5165\u4E0A\u65B9\u8FB9\u6846\u7231\u5FC3\u5F00\u542F\u5546\u94FA)":n?` (\u5951\u7EA6\u5171\u9E23: ${n}%)`:""}
\uFF08\u203B \u53EA\u6709\u7B7E\u8BA2\u4E86\u547D\u5B9A\u5951\u7EA6\u7684\u4EBA\u624D\u4F1A\u767B\u8BB0\u5230\u8FD9\u4E2A\u6A21\u5757\u5217\u8868\uFF09`,r.innerHTML=`
                <svg class="fate-heart-svg" viewBox="0 0 32 32">
                    <path d="M16,28 C16,28 3,18 3,9 C3,4 7,1 12,1 C14.5,1 16,3 16,3 C16,3 17.5,1 20,1 C25,1 29,4 29,9 C29,18 16,28 16,28 Z" 
                          fill="${o?"#540c42":"#440938"}" stroke="${o?"#ff69b4":"#ff4081"}" stroke-width="${o?"2.1":"1.8"}"/>
                </svg>
                <span class="fate-heart-char">${l}</span>
            `,t.appendChild(r),o&&Ie(r,t)})},Ls=function(){const t=e.getElementById("darling-toggle"),i=e.getElementById("darling-sub-text"),u=e.getElementById("fate-lovers-box"),s=e.getElementById("fate-hearts-track"),n=e.getElementById("arrow-prev"),o=e.getElementById("arrow-next");if(!t||!i||!u||!s||!n||!o)return;const h=function(){syncLilithMvuCore(),ws(s)};ws(s);let fatePollTimer=null;const startFateAutoPoll=()=>{};const stopFateAutoPoll=()=>{if(fatePollTimer){clearInterval(fatePollTimer);fatePollTimer=null}};try{if(!window.__LILITH_FATE_FOCUS_BOUND__){window.__LILITH_FATE_FOCUS_BOUND__=true;window.addEventListener("focus",()=>{if(typeof window.syncLilithMvuState==="function")window.syncLilithMvuState();});document.addEventListener("visibilitychange",()=>{if(!document.hidden&&typeof window.syncLilithMvuState==="function")window.syncLilithMvuState();});}}catch{}t.onclick=function(){Tu(),h(),i.classList.add("dissolve-out"),setTimeout(()=>{fe=!fe,fe?(i.textContent="~ My Fate Lover ~",u.classList.add("active"),h(),startFateAutoPoll(),Yu()):(i.textContent="~ My Dear Darling ~",u.classList.remove("active"),stopFateAutoPoll()),i.classList.remove("dissolve-out")},350)},o.onclick=()=>{Tu(),s.scrollBy({left:65,behavior:"smooth"})},n.onclick=()=>{Tu(),s.scrollBy({left:-65,behavior:"smooth"})},s.onscroll=()=>{Yu()};function l(){const f=window.__RAW_FATE_PARTNERS__||window.rawFatePartners||Ru||"";return Bu(f).filter(L=>L.isMax||L.score>=100).length}function r(){const f=l()+zu.length,c=st(),L=lu();return L.hasUnlockedErosShop||L.settledPurchasedItemIds.length>0||L.settledLoanCount>0||L.settledWineCount>0?{unlocked:!0,maxPartnersCount:f,currentFP:c}:c<3e3?{unlocked:!1,maxPartnersCount:f,currentFP:c,reason:"insufficient_fp"}:f<1?{unlocked:!1,maxPartnersCount:f,currentFP:c,reason:"insufficient_partners"}:{unlocked:!0,maxPartnersCount:f,currentFP:c}}window.get100PercentFatePartnersCount=l,window.checkErosShopUnlocked=r;function a(f){const c=e.getElementById("avatar-container");if(!c)return;c.querySelectorAll(".abyss-exploring-whisper").forEach(S=>S.remove());const $=e.createElement("div");$.className="abyss-exploring-whisper",$.textContent=f,c.appendChild($),setTimeout(()=>{$&&$.parentNode&&$.remove()},5050)}window.showAvatarWhisper=a;function E(){a("\u6DF1\u6E0A\u6B63\u5728\u63A2\u7D22\u4E2D\u54E6~")}function p(){Tu(),Fu(!1);const f=e.getElementById("succubus-seal-root")||e.querySelector(".succubus-seal-wrapper"),c=(f?f.querySelector(".succubus-dialogue-box"):null)||e.getElementById("succubus-box-root"),L=e.getElementById("eros-shop-root");if(!(!L||!c))if(Ut=f,Qt=c,f&&L.parentElement!==f&&f.appendChild(L),typeof window.triggerErosShopBanknoteTransition=="function")window.triggerErosShopBanknoteTransition();else if(typeof qe=="function")qe();else{f&&f.classList.add("shop-mode-wide"),c.style.display="none",L.style.display="block",L.classList.add("active"),L.style.opacity="1",typeof window.__resetShopViewportScroll=="function"&&window.__resetShopViewportScroll(),L.style.transform="scale(1)";try{const $=lu();$.hasUnlockedErosShop=!0,ju($);const S=e.getElementById("shop-location-text");S&&$.currentLocation&&(S.textContent=$.currentLocation),xt();const R=st();Eu(R),se(),typeof window.__updateDailyDealState=="function"&&window.__updateDailyDealState(),typeof window.updateWineStackState=="function"&&window.updateWineStackState();const N=window;typeof N.syncShopLoanDrawer=="function"&&N.syncShopLoanDrawer(),typeof window.syncShopTopBarButtons=="function"&&syncShopTopBarButtons()}catch($){console.warn("Shop init non-blocking error:",$)}}}function B(){if(typeof Tt!=="undefined"&&Tt){clearInterval(Tt);Tt=null;}const _cr=e.getElementById("shop-continuous-rain");_cr&&(_cr.classList.remove("active"),_cr.innerHTML="");if(Tu(),typeof window.triggerErosShopExitTransition=="function")window.triggerErosShopExitTransition();else if(typeof bt=="function")bt();else{const f=e.getElementById("eros-shop-root"),c=Qt||e.getElementById("succubus-box-root"),L=Ut||e.getElementById("succubus-seal-root")||e.querySelector(".succubus-seal-wrapper");if(!f||!c)return;f.style.opacity="0",f.style.transform="scale(0.96)",L&&L.classList.remove("shop-mode-wide"),setTimeout(()=>{f.style.display="none",f.classList.remove("active"),f.style.opacity="",f.style.transform="",c.style.display="",c.style.opacity="1",Fu(!0),wu=!1;try{window.scrollTo({left:0,behavior:"instant"});if(L)L.scrollLeft=0;const ch=document.getElementById("chat")||document.querySelector(".chat-container")||document.scrollingElement;if(ch)ch.scrollLeft=0}catch(_){};const $=c.querySelector(".billiard-stage");$&&$.remove();const S=e.getElementById("crest-top-heart-group");S&&(S.style.display="block",S.style.opacity="1",S.classList.remove("fill-overload","absorb-pulse"))},280)}}window.openErosShop=p,window.closeErosShop=B;const M=e.getElementById("top-crest-dropzone"),b=e.getElementById("eros-shop-banner");M&&(M.onclick=f=>{f&&f.stopPropagation();const c=e.getElementById("eros-shop-banner");if(c&&c.classList.contains("active")||au>=1){p();return}if(au<1){ku("top");return}p()});function w(f,c){c&&c.stopPropagation(),p()}e.querySelectorAll(".eros-shop-banner").forEach(f=>{f.onclick=c=>{w(f,c)}}),b&&(b.onclick=f=>{w(b,f)});const D=e.getElementById("bottom-crest-dropzone"),m=e.getElementById("eros-abyss-banner");D&&(D.onclick=f=>{f.stopPropagation(),au<1||Du===0||Du<5,ku("bottom")}),m&&(m.onclick=f=>{f.stopPropagation(),m.classList.contains("active")&&(E(),Ht())})},ju=function(t){const i=t||window.__EROS_SHOP_STATE__;if(i)try{localStorage.setItem(je,JSON.stringify(i)),typeof i.userFP=="number"&&localStorage.setItem("lilith_user_fp",String(i.userFP))}catch(u){console.warn("[Eros Shop Storage] Failed to save memory pool:",u)}},lu=function(){const t=window,i=`${ce}###${ie}###${ne}###${oe}###${re}###${ae}###${le}###${Ot}`,u=!_(ie,21)||!_(ne,22)||!_(oe,23)||!_(re,24)||!_(ae,25)||!_(le,26)||!_(ce,27)||!_(Ot,28);let s=0;try{const a=localStorage.getItem("lilith_user_fp");if(a!==null){const E=parseInt(a,10);isNaN(E)||(s=E)}}catch{}const n=!_(Ot,28);let o=null;try{const a=localStorage.getItem(je);a&&(o=JSON.parse(a))}catch{o=null}if(o){if((!o.currentLocation||/^relative$/i.test(o.currentLocation)||_(o.currentLocation,0))&&(o.currentLocation="\u8389\u8389\u4E1D\u5B9D\u5E93"),o.currentLilithQuotes&&(o.currentLilithQuotes=(Array.isArray(o.currentLilithQuotes)?o.currentLilithQuotes:[]).filter(a=>a&&!/^relative$/i.test(a)&&!_(a,28)),o.currentLilithQuotes.length===0&&(o.currentLilithQuotes=[...Wu])),o.currentGoodsMap){let a=!1;for(const E in o.currentGoodsMap){const p=o.currentGoodsMap[E];if(!p||!p.name||/^relative$/i.test(p.name)||_(p.name,21)){a=!0;break}}a&&(o.currentGoodsMap={...ot})}o.currentDailyDeal&&(!o.currentDailyDeal.name||/^relative$/i.test(o.currentDailyDeal.name)||_(o.currentDailyDeal.name,27))&&(o.currentDailyDeal={...Zu})}const l=u&&!!(o&&o.placeholdersSignature&&o.placeholdersSignature!==i||!o&&i);if(t.__EROS_SHOP_STATE__){const a=t.__EROS_SHOP_STATE__;return(!a.currentLocation||/^relative$/i.test(a.currentLocation)||_(a.currentLocation,0))&&(a.currentLocation="\u8389\u8389\u4E1D\u5B9D\u5E93"),(!a.currentGoodsMap||Object.values(a.currentGoodsMap).some(E=>!E||!E.name||/^relative$/i.test(E.name)))&&(a.currentGoodsMap={...ot}),(!a.currentDailyDeal||!a.currentDailyDeal.name||/^relative$/i.test(a.currentDailyDeal.name))&&(a.currentDailyDeal={...Zu}),(!a.currentLilithQuotes||!Array.isArray(a.currentLilithQuotes)||a.currentLilithQuotes.length===0||a.currentLilithQuotes.some(E=>!E||/^relative$/i.test(E)))&&(a.currentLilithQuotes=[...Wu]),l&&a.placeholdersSignature!==i?(a.currentGoodsMap={...ot},a.currentDailyDeal={...Zu},a.currentLilithQuotes=[...Wu],a.placeholdersSignature=i,a.settledPurchasedItemIds=[],a.settledWineCount=0,a.settledLoanCount=0,ju(a)):n&&Wu.length>0&&(a.currentLilithQuotes=[...Wu]),t.__EROS_SHOP_STATE__}const r=o&&o.currentLocation&&!/^relative$/i.test(o.currentLocation)?o.currentLocation:"\u8389\u8389\u4E1D\u5B9D\u5E93";return o&&!l?t.__EROS_SHOP_STATE__={userFP:typeof o.userFP=="number"?o.userFP:s,settledWineCount:typeof o.settledWineCount=="number"?o.settledWineCount:0,settledLoanCount:typeof o.settledLoanCount=="number"?o.settledLoanCount:0,settledPurchasedItemIds:Array.isArray(o.settledPurchasedItemIds)?[...o.settledPurchasedItemIds]:[],hasUnlockedErosShop:!!o.hasUnlockedErosShop,currentLocation:r,hasEverRestocked:!!o.hasEverRestocked,currentGoodsMap:o.currentGoodsMap?{...o.currentGoodsMap}:{...ot},currentDailyDeal:o.currentDailyDeal?{...o.currentDailyDeal}:{...Zu},currentLilithQuotes:Array.isArray(o.currentLilithQuotes)&&o.currentLilithQuotes.length>0?[...o.currentLilithQuotes]:[...Wu],currentWhispers:o.currentWhispers?{...o.currentWhispers}:void 0,placeholdersSignature:o.placeholdersSignature||i}:(t.__EROS_SHOP_STATE__={userFP:o&&typeof o.userFP=="number"?o.userFP:s,settledWineCount:0,settledLoanCount:l?0:o&&typeof o.settledLoanCount=="number"?o.settledLoanCount:0,settledPurchasedItemIds:[],hasUnlockedErosShop:o?!!o.hasUnlockedErosShop:!1,currentLocation:r,hasEverRestocked:l,currentGoodsMap:{...ot},currentDailyDeal:{...Zu},currentLilithQuotes:[...Wu],placeholdersSignature:i},ju(t.__EROS_SHOP_STATE__)),(!t.__EROS_SHOP_STATE__.currentLocation||/^relative$/i.test(t.__EROS_SHOP_STATE__.currentLocation))&&(t.__EROS_SHOP_STATE__.currentLocation="\u8389\u8389\u4E1D\u5B9D\u5E93"),(!t.__EROS_SHOP_STATE__.currentGoodsMap||Object.values(t.__EROS_SHOP_STATE__.currentGoodsMap).some(a=>!a||!a.name||/^relative$/i.test(a.name)))&&(t.__EROS_SHOP_STATE__.currentGoodsMap={...ot}),(!t.__EROS_SHOP_STATE__.currentDailyDeal||!t.__EROS_SHOP_STATE__.currentDailyDeal.name||/^relative$/i.test(t.__EROS_SHOP_STATE__.currentDailyDeal.name))&&(t.__EROS_SHOP_STATE__.currentDailyDeal={...Zu}),(!t.__EROS_SHOP_STATE__.currentLilithQuotes||t.__EROS_SHOP_STATE__.currentLilithQuotes.length===0||t.__EROS_SHOP_STATE__.currentLilithQuotes.some(a=>!a||/^relative$/i.test(a)))&&(t.__EROS_SHOP_STATE__.currentLilithQuotes=[...Wu]),t.__EROS_SHOP_STATE__},Pe=function(t){return t<1e4?1:t<15e3?2:t<2e4?3:t<3e4?4:5},Ss=function(t=1){const i=e.getElementById("mountain-left"),u=e.getElementById("mountain-right"),s=e.getElementById("pile-left"),n=e.getElementById("pile-right");if(!i||!u||!s||!n)return;[1,2,3,4,5].forEach(p=>{i.classList.remove(`scale-level-${p}`),u.classList.remove(`scale-level-${p}`)}),i.classList.add(`scale-level-${t}`),u.classList.add(`scale-level-${t}`),s.innerHTML="",n.innerHTML="";const o=[{b:8,l:2,r:-12,s:1.05},{b:24,l:26,r:-26,s:1},{b:44,l:-8,r:14,s:1.1},{b:64,l:18,r:-32,s:.95},{b:88,l:6,r:-15,s:1},{b:112,l:-12,r:22,s:1.05},{b:138,l:14,r:-28,s:.9},{b:164,l:2,r:-8,s:.95},{b:192,l:-6,r:16,s:.88},{b:222,l:8,r:-22,s:.85},{b:252,l:-4,r:14,s:.8},{b:284,l:-10,r:-18,s:.75},{b:312,l:-6,r:24,s:.7}],l=[{b:16,l:55,r:-38,s:.98},{b:38,l:68,r:-45,s:.95},{b:60,l:58,r:-28,s:.92},{b:82,l:45,r:-34,s:.9},{b:104,l:38,r:-24,s:.88},{b:126,l:52,r:-40,s:.85},{b:150,l:35,r:-18,s:.85},{b:178,l:28,r:-30,s:.82},{b:206,l:24,r:-15,s:.8},{b:236,l:18,r:-25,s:.78},{b:268,l:12,r:-12,s:.75},{b:335,l:-4,r:-16,s:.68}],r=[{b:12,l:105,r:-48,s:.95},{b:32,l:118,r:-55,s:.92},{b:54,l:98,r:-36,s:.9},{b:76,l:88,r:-42,s:.88},{b:98,l:78,r:-32,s:.86},{b:120,l:85,r:-45,s:.84},{b:144,l:72,r:-28,s:.82},{b:168,l:65,r:-38,s:.8},{b:194,l:58,r:-24,s:.78},{b:220,l:48,r:-32,s:.76},{b:246,l:38,r:-18,s:.74},{b:274,l:30,r:-26,s:.72},{b:302,l:20,r:-14,s:.7},{b:328,l:12,r:-22,s:.68},{b:355,l:4,r:-10,s:.65},{b:378,l:-2,r:18,s:.62}],a=[{b:10,l:155,r:-58,s:.92},{b:28,l:165,r:-62,s:.9},{b:48,l:145,r:-45,s:.88},{b:68,l:135,r:-52,s:.86},{b:90,l:122,r:-38,s:.84},{b:112,l:118,r:-46,s:.82},{b:136,l:108,r:-35,s:.8},{b:160,l:98,r:-42,s:.78},{b:184,l:88,r:-30,s:.76},{b:210,l:78,r:-36,s:.74},{b:236,l:68,r:-24,s:.72},{b:262,l:56,r:-30,s:.7},{b:290,l:45,r:-18,s:.68},{b:318,l:34,r:-24,s:.66},{b:346,l:24,r:-14,s:.64},{b:372,l:15,r:-20,s:.62},{b:398,l:6,r:-8,s:.6},{b:422,l:0,r:15,s:.58}];let E=[...o];t>=2&&(E=E.concat(l)),t>=3&&(E=E.concat(r)),t>=4&&(E=E.concat(a)),E.forEach(p=>{const B=e.createElement("div");B.className="pile-banknote",B.style.bottom=`${p.b}px`,B.style.left=`${p.l}px`,B.style.transform=`rotate(${p.r}deg) scale(${p.s})`,B.innerHTML='<span class="pile-letters">FP</span>',s.appendChild(B)}),E.forEach(p=>{const B=e.createElement("div");B.className="pile-banknote",B.style.bottom=`${p.b}px`,B.style.right=`${p.l}px`,B.style.transform=`rotate(${-p.r}deg) scale(${p.s})`,B.innerHTML='<span class="pile-letters">FP</span>',n.appendChild(B)})},$s=function(t=1){const i=e.getElementById("shop-ground-banknotes"),u=e.getElementById("eros-shop-root");if(!i||!u)return;i.innerHTML="";const s=u.offsetWidth||820;let n=0;if(t===1?n=0:t===2?n=14:t===3?n=30:n=62,n!==0)for(let o=0;o<n;o++){const l=e.createElement("div");l.className="ground-banknote";let r=0;t===2?r=o%2===0?120+Math.random()*(s*.35):s-170-Math.random()*(s*.35):t===3?r=80+o/n*(s-160)+(Math.random()-.5)*40:r=20+o/n*(s-40)+(Math.random()-.5)*35;const a=Math.random()*24,E=(Math.random()-.5)*45,p=.85+Math.random()*.25;l.style.left=`${Math.max(10,Math.min(s-65,r))}px`,l.style.bottom=`${a}px`,l.style.transform=`rotate(${E}deg) scale(${p})`,l.innerHTML='<span class="ground-letters">FP</span>',i.appendChild(l)}},Ts=function(t=1){const i=e.getElementById("shop-continuous-rain"),u=e.getElementById("eros-shop-root");if(!i||!u)return;if(t<5){i.classList.remove("active"),i.innerHTML="",Tt&&(clearInterval(Tt),Tt=null);return}if(i.classList.add("active"),Tt)return;const s=()=>{if(!u||u.style.display==="none")return;const n=u.offsetWidth||820,o=e.createElement("div");o.className="drift-rain-note",o.innerHTML='<span class="drift-letters">FP</span>';const l=35+Math.random()*(n-95),r=(Math.random()-.5)*140,a=(Math.random()-.5)*70,E=(Math.random()-.5)*380,p=2.8+Math.random()*1.4;o.style.setProperty("--drift-x-start",`${l}px`),o.style.setProperty("--drift-x-end",`${r}px`),o.style.setProperty("--drift-rot-start",`${a}deg`),o.style.setProperty("--drift-rot-delta",`${E}deg`),o.style.animationDuration=`${p}s`,i.appendChild(o),setTimeout(()=>{o.remove()},p*1e3+100)};for(let n=0;n<6;n++)setTimeout(s,n*260);Tt=window.setInterval(s,340)},Eu=function(t,isExternalSync){if(!isExternalSync){setLilithFpLock(t,nt);}const i=lu();i.userFP=t,U=t,window.updateShopFPState=Eu;window.USER_FP=t,window.__USER_FP__=t;try{localStorage.setItem("lilith_user_fp",String(U))}catch{}try{const ctxs=[window,window.parent,window.top].filter(Boolean);for(const c of ctxs){if(c.TavernHelper&&typeof c.TavernHelper.setVariable=="function"){try{c.TavernHelper.setVariable("stat_data.命运点数",U,{type:"message"});}catch{}try{c.TavernHelper.setVariable("stat_data.命运点数",U);}catch{}try{c.TavernHelper.setVariable("命运点数",U,{type:"message"});}catch{}try{c.TavernHelper.setVariable("命运点数",U);}catch{}}if(c.Mvu&&typeof c.Mvu.setVariable=="function"){try{c.Mvu.setVariable("stat_data.命运点数",U);}catch{}try{c.Mvu.setVariable("命运点数",U);}catch{}}}}catch{}e.querySelectorAll("#shop-fp-display, .shop-fp-display").forEach(r=>{r.textContent=`${U.toLocaleString()} FP`});const s=e.getElementById("fp-tag-value");s&&(s.textContent=U.toLocaleString()),e.querySelectorAll("#shop-fp-badge, .shop-fp-badge").forEach(r=>{const a=r.querySelector("#shop-fp-symbol, .shop-fp-symbol"),E=r.querySelector("#shop-fp-debt-tag, .shop-fp-debt-tag");U<0?(r.classList.add("fp-negative-debt"),a&&(a.textContent="\u{1F5A4}"),E&&(E.style.display="inline-block")):(r.classList.remove("fp-negative-debt"),a&&(a.textContent="\u{1F496}"),E&&(E.style.display="none"))});const o=Pe(U);js=o,e.querySelectorAll(".fp-tier-btn").forEach(r=>{const a=parseInt(r.getAttribute("data-fp")||"0",10);Pe(a)===o?r.classList.add("active"):r.classList.remove("active")}),Ss(o),$s(o),Ts(o)},mt=function(t){const i=e.getElementById("shop-fp-badge");i&&(i.classList.remove("fp-insufficient-shake"),i.offsetWidth,i.classList.add("fp-insufficient-shake"),setTimeout(()=>{i.classList.remove("fp-insufficient-shake")},420));const u=e.getElementById("shop-toast")||e.getElementById("cart-deal-toast");u&&(t?u.textContent=`\u274C \u547D\u5B9A\u70B9\u6570\u4E0D\u8DB3\uFF01\u9700\u8981 ${t.toLocaleString()} FP\uFF0C\u5F53\u524D\u4F59\u989D ${U.toLocaleString()} FP\uFF0C\u5FEB\u5411\u8389\u8389\u4E1D\u501F\u8D37\u5427\u2665`:u.textContent=`\u274C \u547D\u5B9A\u70B9\u6570\u4E0D\u8DB3\uFF01\u5F53\u524D\u4F59\u989D ${U.toLocaleString()} FP\uFF0C\u5FEB\u5411\u8389\u8389\u4E1D\u501F\u8D37\u5427\u2665`,u.classList.add("show"),setTimeout(()=>u.classList.remove("show"),2400))},st=function(){const t=window;const lk=getLilithFpLock();if(lk&&typeof lk.value==="number"){const cs=getLilithChatSignature();if(!lk.chatSig||lk.chatSig===cs||(Date.now()-lk.timestamp<180000)){t.USER_FP=lk.value;t.__USER_FP__=lk.value;U=lk.value;return lk.value;}}try{const sd=typeof extractLilithMvuContext==="function"?extractLilithMvuContext():null;const fp=typeof parseFpValue==="function"?parseFpValue(sd):null;if(fp!==null&&typeof fp==="number"&&!isNaN(fp)){t.USER_FP=fp;t.__USER_FP__=fp;U=fp;return fp;}}catch{}if(typeof t.USER_FP=="number"&&!isNaN(t.USER_FP))return t.USER_FP;if(typeof t.__USER_FP__=="number"&&!isNaN(t.__USER_FP__))return t.__USER_FP__;if(typeof U=="number"&&!isNaN(U)&&U!==22612)return U;const i=lu();if(typeof i.userFP=="number"&&!isNaN(i.userFP)&&i.userFP!==22612)return i.userFP;try{const u=localStorage.getItem("lilith_user_fp");if(u!==null&&u!=="22612"&&u!=="null"&&u!=="undefined"){const s=parseInt(u,10);if(!isNaN(s))return s}}catch{}return 0},_e=function(t=!1){return`
            <div class="fp-note-card">
                <div class="fp-note-pattern"></div>
                <span class="fp-mark tl">FP</span>
                <span class="fp-mark br">FP</span>
                <span class="fp-seal-heart">\u2665</span>
                <div class="fp-oval-emblem">
                    <span class="fp-bold-letters">FP</span>
                </div>
                <span class="fp-val-text">&#36;100</span>
            </div>
        `},Ms=function(){const t=he.reduce((u,s)=>u+s.weight,0);let i=Math.random()*t;for(const u of he){if(i<u.weight)return u;i-=u.weight}return he[0]},ks=function(t){switch(t){case"\u963F\u65AF\u5854\u5229\u4E9A":return{dailyDeal:{name:"\u963F\u65AF\u5854\u5229\u4E9A\u661F\u6708\u795E\u6CC9\u51DD\u9732",type:"\u6750\u6599 / \u5815\u843D\u5723\u6CC9",grade:"SSR",tags:["#\u7EAF\u6D01\u5815\u5316","#\u661F\u5C51\u6EB6\u5FC3","#\u9650\u65F65\u6298"],desc:"\u91C7\u64B7\u81EA\u963F\u65AF\u5854\u5229\u4E9A\u5723\u6BBF\u5E9F\u589F\u4E2D\u88AB\u9B45\u9B54\u7CBE\u6C14\u6D78\u67D3\u7684\u661F\u6708\u795E\u6CC9\u3002\u996E\u7528\u540E\u4EE4\u6E05\u7EAF\u5723\u6D01\u4E4B\u4EBA\u7684\u7075\u9B42\u6D6E\u73B0\u4E0D\u53EF\u904F\u5236\u7684\u751C\u7F8E\u6E34\u6C42\uFF0C\u662F\u7814\u5236\u9AD8\u9636\u8BF1\u60D1\u9B54\u836F\u7684\u7EDD\u54C1\u4E3B\u6750\u3002",price:1400,originalPrice:2800},goodsMap:{"item-ex":{name:"\u661F\u7A79\u5723\u7EA6\xB7\u5815\u5929\u4F7F\u6781\u4E50\u9879\u73AF",type:"\u6982\u5FF5\u9970\u54C1 / \u5723\u6D01\u5815\u843D",tags:["#\u5815\u5929\u7FBD\u7FFC\u5E87\u62A4","#\u6BCF\u79D2\u51C0\u5316\u5FC3\u9632","#\u795E\u5723\u5C48\u670D"],desc:"\u7531\u516D\u7FFC\u70BD\u5929\u4F7F\u5815\u5165\u6B22\u6109\u6DF1\u6E0A\u65F6\u9057\u843D\u7684\u5723\u91D1\u7194\u94F8\u3002\u4F69\u6234\u8005\u5C06\u6563\u53D1\u51FA\u4EE4\u4E00\u5207\u795E\u5723\u4FE1\u4EF0\u77AC\u606F\u9165\u8F6F\u5D29\u584C\u7684\u5815\u5316\u5F02\u9999\uFF0C\u3010\u56FA\u5B9A\u82B1\u8D39100FP\u5524\u73B0\u8389\u8389\u4E1D\u5171\u6C90\u661F\u6CB3\u3011\u3002",price:28e3},"item-ur-1":{name:"\u661F\u8F89\u72EC\u89D2\u517D\u4E0E\u9B45\u9B54\u4E4B\u7075\u5375",type:"\u5947\u7269 / \u6742\u4EA4\u7075\u5375",tags:["#\u7EAF\u767D\u4E0E\u6DF1\u6E0A\u6DF7\u8840","#\u5E7B\u517D\u5B75\u5316","#\u5929\u751F\u9B45\u60D1\u5149\u73AF"],desc:"\u9B45\u9B54\u6F5C\u5165\u963F\u65AF\u5854\u5229\u4E9A\u5723\u6797\u4E0E\u53D7\u8BF1\u7EAF\u6D01\u72EC\u89D2\u517D\u4EA4\u5ABE\u5B55\u80B2\u7684\u5947\u5F02\u9B54\u5375\u3002\u86CB\u4F53\u6CDB\u7740\u68A6\u5E7B\u661F\u5C51\u5149\u6655\uFF0C\u6089\u5FC3\u6E29\u80B2\u540E\u53EF\u5B75\u5316\u51FA\u517C\u5177\u795E\u5723\u5916\u8868\u4E0E\u653E\u6D6A\u5185\u91CC\u7684\u7EDD\u7F8E\u5E7B\u517D\u3002",price:16500},"item-ur-2":{name:"\u6708\u5F71\u8FF7\u9B42\u50AC\u7720\u661F\u76D8",type:"\u50AC\u7720\u9053\u5177 / \u610F\u8BC6\u661F\u8F68",tags:["#\u661F\u8F68\u610F\u8BC6\u7F6E\u6362","#\u6DF1\u5C42\u6307\u4EE4\u523B\u5165","#\u6C38\u4E45\u8FF7\u9189"],desc:"\u954C\u523B\u7740\u963F\u65AF\u5854\u5229\u4E9A\u53E4\u661F\u56FE\u7684\u9EC4\u94DC\u661F\u76D8\u3002\u8F6C\u52A8\u661F\u8F68\u65F6\u91CA\u653E\u7684\u94F6\u6708\u5FAE\u5149\u80FD\u6084\u7136\u7BE1\u6539\u76EE\u51FB\u8005\u7684\u6F5C\u610F\u8BC6\u8BA4\u77E5\uFF0C\u4EE4\u5176\u5C06\u4F60\u5949\u4E3A\u552F\u4E00\u7684\u4FE1\u4EF0\u4E0E\u4E3B\u5BB0\u3002",price:14e3},"item-ssr-1":{name:"\u5723\u57DF\u79D8\u5F55\uFF1A\u661F\u7075\u5F15\u8BF1\u5723\u5178",type:"\u6280\u80FD\u4E66 / \u5723\u57DF\u7981\u672F",tags:["#\u5723\u5973\u5815\u5316\u79D8\u6CD5","#\u7075\u9B42\u540C\u8C03\u629A\u89E6","#\u5723\u6D01\u5265\u593A"],desc:"\u8BB0\u8F7D\u7740\u5982\u4F55\u8BA9\u606A\u5B88\u8D1E\u6D01\u7684\u5723\u804C\u8005\u4E3B\u52A8\u5BBD\u8863\u89E3\u5E26\u7684\u7981\u65AD\u79D8\u672C\u3002\u7814\u8BFB\u540E\u80FD\u7CBE\u786E\u6D1E\u6089\u795E\u5723\u5FC3\u7075\u7684\u9690\u79D8\u7F3A\u53E3\uFF0C\u4EE5\u6700\u5723\u6D01\u7684\u8A00\u8F9E\u884C\u6700\u653E\u8361\u7684\u5F15\u8BF1\u3002",price:7200},"item-ssr-2":{name:"\u6708\u8680\u5E7D\u5149\u60C5\u5F26\u77ED\u5F13",type:"\u6B66\u5668 / \u9B45\u60D1\u7075\u5F13",tags:["#\u65E0\u5B9E\u4F53\u60C5\u6B32\u4E4B\u7BAD","#\u547D\u4E2D\u76F4\u51FB\u795E\u9B42","#\u6B32\u5FF5\u5C04\u7A0B\u65E0\u9650"],desc:"\u4EE5\u963F\u65AF\u5854\u5229\u4E9A\u53E4\u6708\u6842\u6728\u4E0E\u9B45\u9B54\u53D1\u4E1D\u7F16\u7EC7\u7684\u7CBE\u5DE7\u77ED\u5F13\u3002\u65E0\u9700\u7BAD\u77E2\uFF0C\u62C9\u5F26\u5373\u5C04\u51FA\u80FD\u4EE4\u76EE\u6807\u5FC3\u6F6E\u7FFB\u6D8C\u3001\u5A07\u5598\u8FDE\u8FDE\u7684\u7C89\u7EA2\u5E7D\u6708\u5149\u675F\u3002",price:3800},"item-sr-1":{name:"\u94F6\u6708\u7EC7\u68A6\u534A\u900F\u8584\u7EB1\u5723\u88D9",type:"\u9632\u5177 / \u5815\u843D\u796D\u670D",tags:["#\u82E5\u9690\u82E5\u73B0\u9632\u5FA1","#\u654C\u610F\u6D88\u878D","#\u89E6\u78B0\u5373\u9B45\u60D1"],desc:"\u66FE\u5C5E\u4E8E\u9AD8\u9636\u796D\u53F8\u7684\u795E\u5723\u793C\u88D9\uFF0C\u7ECF\u9B45\u9B54\u91CD\u6784\u540E\u4EC5\u4F59\u534A\u900F\u660E\u7684\u768E\u6D01\u94F6\u7EB1\u3002\u770B\u4F3C\u8106\u5F31\u65E0\u9632\uFF0C\u5B9E\u5219\u5728\u654C\u610F\u4E34\u8FD1\u65F6\u4EA7\u751F\u4E0D\u53EF\u4FB5\u72AF\u7684\u5FC3\u7075\u9B45\u60D1\u65A5\u529B\u3002",price:6500}},whispers:{"item-ex":"\u201C\u54EA\u6015\u662F\u5929\u4E0A\u7684\u661F\u8FB0\u2026\u4E5F\u4F1A\u4E3A\u4F60\u6211\u5FC3\u52A8\u5462\u2665\u201D","item-ur-1":"\u201C\u5723\u6D01\u7684\u72EC\u89D2\u517D\u4E5F\u4F1A\u6CA6\u9677\u2026\u731C\u731C\u5C0F\u5BB6\u4F19\u6709\u591A\u53EF\u7231\uFF1F\u2665\u201D","item-ur-2":"\u201C\u770B\u7740\u661F\u8F68\u65CB\u8F6C\u2026\u4F60\u7684\u7075\u9B42\u5DF2\u5C5E\u4E8E\u6211\u2665\u201D","item-ssr-1":"\u201C\u6700\u5723\u6D01\u7684\u7075\u9B42\uFF0C\u5F80\u5F80\u53EA\u9700\u8981\u6700\u7EAF\u7CB9\u7684\u8BF1\u60D1\u2665\u201D","item-ssr-2":"\u201C\u8FD9\u4E00\u7BAD\u5C04\u7A7F\u7684\uFF0C\u662F\u4ED6\u6700\u540E\u7684\u7406\u667A\u9632\u7EBF\u2665\u201D","item-sr-1":"\u201C\u7A7F\u4E0A\u5B83\u2026\u8FDE\u8BF8\u795E\u90FD\u4E0D\u5FCD\u4F24\u5BB3\u4F60\u5206\u6BEB\u2665\u201D"}};case"\u4F4D\u9762\u4EA4\u6C47\u5904":return{dailyDeal:{name:"\u7EF4\u5EA6\u88C2\u9699\u6697\u7269\u8D28\u6676\u6838",type:"\u6750\u6599 / \u591A\u7EF4\u79D8\u9AD3",grade:"SSR",tags:["#\u65F6\u7A7A\u6298\u53E0","#\u91CF\u5B50\u81F4\u5E7B","#\u9650\u65F65\u6298"],desc:"\u5728\u65E0\u6570\u591A\u5143\u5B87\u5B99\u5F15\u529B\u6495\u88C2\u8FB9\u7F18\u6355\u635E\u7684\u6D3B\u6027\u6697\u6676\u3002\u80FD\u5C06\u611F\u5B98\u4F53\u9A8C\u5728\u4E0D\u540C\u5E73\u884C\u65F6\u7A7A\u65E0\u9650\u53E0\u52A0\u767E\u500D\uFF0C\u662F\u6784\u5EFA\u8DE8\u4F4D\u9762\u6DEB\u9761\u79D8\u4EEA\u7684\u81F3\u5B9D\u3002",price:1450,originalPrice:2900},goodsMap:{"item-ex":{name:"\u5168\u7EF4\u5EA6\u540C\u8C03\xB7\u65F6\u7A7A\u5171\u9E23\u8033\u5760",type:"\u9B45\u9B54\u9970\u54C1 / \u8DE8\u754C\u5947\u7269",tags:["#\u5168\u5B87\u5B99\u8389\u8389\u4E1D\u54CD\u5E94","#\u7EF4\u5EA6\u8DC3\u8FC1","#\u77AC\u95F4\u73B0\u754C"],desc:"\u6253\u901A\u65E0\u6570\u5E73\u884C\u6DF1\u6E0A\u7EF4\u5EA6\u7684\u8D85\u5F26\u9970\u54C1\u3002\u65E0\u8BBA\u4F60\u8EAB\u5904\u54EA\u4E00\u6761\u65F6\u95F4\u7EBF\uFF0C\u3010\u56FA\u5B9A100FP\u968F\u65F6\u53EC\u5524\u8389\u8389\u4E1D\u7A7F\u8D8A\u591A\u5143\u5B87\u5B99\u964D\u4E34\u3011\u3002",price:29e3},"item-ur-1":{name:"\u865A\u7A7A\u7578\u53D8\xB7\u62DF\u6001\u9B45\u9B54\u86CB",type:"\u5947\u7269 / \u8DE8\u7EF4\u6D3B\u5375",tags:["#\u591A\u7EF4\u5F62\u6001\u53D8\u6362","#\u91CF\u5B50\u89E6\u624B\u5171\u751F","#\u5947\u5999\u751F\u7269\u5B75\u5316"],desc:"\u5728\u4F4D\u9762\u4EA4\u6C47\u4E71\u6D41\u4E2D\u7531\u672A\u77E5\u7EF4\u5EA6\u9B45\u9B54\u53D7\u7CBE\u4EA7\u4E0B\u7684\u8D85\u7EF4\u5375\u4F53\u3002\u86CB\u58F3\u4F1A\u5728\u4E09\u7EF4\u4E0E\u56DB\u7EF4\u95F4\u4E0D\u505C\u574D\u7F29\uFF0C\u80FD\u6839\u636E\u4E3B\u4EBA\u6B32\u671B\u5B75\u5316\u51FA\u524D\u6240\u672A\u89C1\u7684\u5947\u5999\u5171\u751F\u4F53\u3002",price:16e3},"item-ur-2":{name:"\u91CF\u5B50\u7EA0\u7F20\u81F4\u5E7B\u50AC\u7720\u76EE\u955C",type:"\u50AC\u7720\u9053\u5177 / \u610F\u8BC6\u91CD\u6784",tags:["#\u591A\u5143\u8BB0\u5FC6\u91CD\u5199","#\u65F6\u95F4\u611F\u626D\u66F2","#\u65E0\u6761\u4EF6\u987A\u4ECE"],desc:"\u4F69\u6234\u540E\u80FD\u76F4\u89C6\u76EE\u6807\u89C6\u7F51\u819C\u53D1\u5C04\u91CF\u5B50\u7EA0\u7F20\u7C89\u5149\u7684\u76EE\u955C\u3002\u8BA9\u76EE\u6807\u4EA7\u751F\u7ECF\u5386\u4E86\u65E0\u6570\u8F6E\u56DE\u90FD\u7518\u613F\u6CA6\u4E3A\u4E0B\u4EC6\u7684\u9519\u89C9\uFF0C\u610F\u5FD7\u5F7B\u5E95\u5D29\u89E3\u3002",price:14500},"item-ssr-1":{name:"\u8DE8\u7EF4\u6307\u5357\uFF1A\u591A\u5143\u5B87\u5B99\u5F15\u8BF1\u901A\u8BBA",type:"\u6280\u80FD\u4E66 / \u8D85\u7EF4\u5178\u7C4D",tags:["#\u5F02\u65CF\u751F\u7406\u5168\u901A","#\u65F6\u7A7A\u5B9A\u8EAB\u5F15\u8BF1","#\u591A\u9891\u5171\u632F\u5FEB\u611F"],desc:"\u6C47\u603B\u4E86\u4E09\u5343\u4E2A\u5DF2\u77E5\u5F02\u4F4D\u9762\u667A\u6167\u751F\u547D\u4F53\u751F\u7406\u4E0E\u795E\u7ECF\u7279\u5F81\u7684\u767E\u79D1\u5168\u4E66\u3002\u4E0D\u8BBA\u9762\u5BF9\u673A\u68B0\u3001\u7845\u57FA\u8FD8\u662F\u7075\u4F53\u751F\u547D\uFF0C\u90FD\u80FD\u4E00\u62DB\u51FB\u6E83\u5176\u795E\u7ECF\u4E2D\u67A2\u3002",price:7400},"item-ssr-2":{name:"\u76F8\u4F4D\u8DC3\u8FC1\u6298\u53E0\u7A7A\u95F4\u624B\u5F29",type:"\u6B66\u5668 / \u5F02\u7EF4\u624B\u5F29",tags:["#\u65E0\u89C6\u7269\u7406\u63A9\u4F53","#\u795E\u7ECF\u60C5\u6B32\u8109\u51B2","#\u5373\u65F6\u762B\u8F6F"],desc:"\u53D1\u5C04\u5FAE\u578B\u5F15\u529B\u6CE2\u8109\u51B2\u7684\u9ED1\u79D1\u6280\u624B\u5F29\u3002\u5F39\u4E38\u80FD\u7A7F\u900F\u4EFB\u4F55\u76D4\u7532\u4E0E\u5899\u4F53\uFF0C\u76F4\u63A5\u523A\u6FC0\u76EE\u6807\u795E\u7ECF\u7A81\u89E6\uFF0C\u4EE4\u5176\u77AC\u95F4\u9165\u9EBB\u762B\u8F6F\u5728\u5730\u3002",price:3900},"item-sr-1":{name:"\u7EB3\u7C73\u5171\u751F\u534A\u900F\u6697\u5149\u80F6\u8863",type:"\u9632\u5177 / \u7EB3\u7C73\u5851\u5F62",tags:["#\u968F\u5FC3\u5851\u5F62\u8D34\u5408","#\u51B2\u51FB\u529B\u5438\u6536\u8F6C\u5316\u4E3A\u70ED\u610F","#\u65E0\u5F62\u62A4\u4F53"],desc:"\u7531\u81EA\u9002\u5E94\u7EB3\u7C73\u6D41\u4F53\u7EA4\u7EF4\u7EC7\u6210\u7684\u8D85\u8F7B\u8584\u9632\u5177\u3002\u906D\u9047\u5916\u529B\u51B2\u649E\u65F6\u80FD\u5C06\u51B2\u51FB\u5B8C\u5168\u8F6C\u5316\u4E3A\u6E29\u70ED\u7684\u60C5\u6B32\u7535\u6D41\uFF0C\u65E2\u62A4\u8EAB\u53C8\u5E26\u6765\u5FAE\u91BA\u5FEB\u611F\u3002",price:6600}},whispers:{"item-ex":"\u201C\u4E0D\u8BBA\u4F60\u5728\u54EA\u4E00\u4E2A\u5E73\u884C\u5B87\u5B99\uFF0C\u6211\u90FD\u80FD\u627E\u5230\u4F60\u54E6\u2665\u201D","item-ur-1":"\u201C\u8FD9\u9897\u86CB\u751A\u81F3\u8D85\u8D8A\u4E86\u4E09\u7EF4\u7A7A\u95F4\u7684\u6CD5\u5219\u5462\u2026\u2665\u201D","item-ur-2":"\u201C\u91CF\u5B50\u7EA0\u7F20\u7684\u77AC\u95F4\uFF0C\u4ED6\u7684\u610F\u8BC6\u5DF2\u7ECF\u53EA\u5269\u4F60\u4E86\u2665\u201D","item-ssr-1":"\u201C\u4E09\u5343\u4E2A\u4E16\u754C\u7684\u79D8\u5BC6\uFF0C\u5168\u5728\u8FD9\u672C\u4E66\u91CC\u4E86\u2665\u201D","item-ssr-2":"\u201C\u9694\u7740\u5341\u9762\u5899\u2026\u4E5F\u80FD\u8BA9\u4ED6\u77AC\u95F4\u5FC3\u5934\u6EDA\u70EB\u2665\u201D","item-sr-1":"\u201C\u7EB3\u7C73\u7EA4\u7EF4\u7D27\u8D34\u66F2\u7EBF\u2026\u4EFB\u4F55\u653B\u51FB\u90FD\u4E0D\u8FC7\u662F\u6E29\u67D4\u89E6\u78B0\u2665\u201D"}};case"\u534A\u795E\u4E4B\u91D1\u5E93":return{dailyDeal:{name:"\u7EAF\u51C0\u534A\u795E\u9EC4\u91D1\u795E\u8840\u9AD3\u6DB2",type:"\u6750\u6599 / \u938F\u91D1\u795E\u9AD3",grade:"SSR",tags:["#\u795E\u529B\u6DEC\u70BC","#\u8089\u4F53\u6781\u4E50\u5F3A\u5316","#\u9650\u65F65\u6298"],desc:"\u4ECE\u88AB\u9B45\u9B54\u4FD8\u83B7\u7684\u534A\u795E\u82F1\u96C4\u8840\u7BA1\u4E2D\u69A8\u53D6\u7684\u7EAF\u6B63\u9EC4\u91D1\u795E\u8840\u3002\u8272\u6CFD\u5982\u878D\u91D1\u822C\u8000\u773C\uFF0C\u8574\u542B\u4E0D\u673D\u751F\u673A\u4E0E\u72C2\u70ED\u795E\u6027\uFF0C\u662F\u953B\u9020\u4E0A\u4F4D\u9B54\u88C5\u7684\u65E0\u4E0A\u7075\u836F\u3002",price:1750,originalPrice:3500},goodsMap:{"item-ex":{name:"\u534A\u795E\u91D1\u8F89\xB7\u70BD\u9633\u795E\u7EB9\u968F\u4F8D\u9888\u5708",type:"\u9B45\u9B54\u9970\u54C1 / \u534A\u795E\u7687\u51A0",tags:["#\u534A\u795E\u5A01\u4EEA","#\u592A\u9633\u771F\u706B\u62A4\u4F53","#\u56FA\u5B9A100FP\u53EC\u73B0"],desc:"\u878D\u5316\u4E86\u534A\u795E\u738B\u5EA7\u6240\u94F8\u9020\u7684\u6781\u5C3D\u5962\u534E\u9888\u5708\u3002\u4E0D\u4EC5\u6563\u53D1\u7740\u4EE4\u4EBA\u4E0D\u7531\u81EA\u4E3B\u81E3\u670D\u7684\u70BD\u91D1\u5149\u6CFD\uFF0C\u3010\u6BCF\u6B21\u56FA\u5B9A\u82B1\u8D39100FP\u968F\u65F6\u53EC\u5524\u8389\u8389\u4E1D\u3011\u3002",price:33e3},"item-ur-1":{name:"\u9EC4\u91D1\u72EE\u9E6B\u4E0E\u585E\u58EC\u6742\u5408\u80CE\u5375",type:"\u5947\u7269 / \u534A\u795E\u5F02\u5375",tags:["#\u534A\u795E\u8840\u8109\u5F02\u79CD","#\u5929\u7C41\u585E\u58EC\u4E4B\u97F3","#\u5947\u5999\u51F6\u840C\u5E7C\u5D3D"],desc:"\u534A\u795E\u91D1\u5E93\u6DF1\u5904\u5C01\u85CF\u7684\u5947\u5F02\u6D3B\u5375\uFF0C\u4E43\u662F\u5929\u754C\u72EE\u9E6B\u4E0E\u9B45\u60D1\u585E\u58EC\u7684\u795E\u79D8\u7ED3\u6676\u3002\u5B75\u5316\u51FA\u7684\u5E7C\u7075\u517C\u5177\u7A7A\u4E2D\u9738\u6743\u4E0E\u4EE4\u4E07\u7075\u5165\u9B54\u7684\u9761\u9761\u5929\u7C41\u3002",price:18500},"item-ur-2":{name:"\u91D1\u82F9\u679C\u4E4B\u8BF1\u60D1\u50AC\u7720\u91D1\u94C3",type:"\u50AC\u7720\u9053\u5177 / \u5723\u91D1\u9B54\u5177",tags:["#\u4E89\u7AEF\u91D1\u82F9\u679C\u9B54\u529B","#\u7EDD\u5BF9\u8D2A\u6B32\u64CD\u63A7","#\u65E0\u6CD5\u6297\u62D2\u7684\u987A\u4ECE"],desc:"\u4EE5\u7279\u6D1B\u4F0A\u4E89\u7AEF\u91D1\u82F9\u679C\u4E3A\u7075\u611F\u94F8\u5C31\u7684\u9542\u7A7A\u91D1\u94C3\u3002\u6E05\u54CD\u58F0\u4E2D\u6563\u53D1\u51FA\u8BF1\u4F7F\u8BF8\u795E\u53D1\u72C2\u7684\u9999\u6C14\uFF0C\u80FD\u4EE4\u76EE\u51FB\u8005\u5FC3\u7518\u60C5\u613F\u5C06\u8EAB\u5FC3\u5168\u6570\u5949\u732E\u3002",price:16500},"item-ssr-1":{name:"\u5965\u6797\u5339\u65AF\u5BAB\u5EF7\u6B22\u6109\u79D8\u5F55",type:"\u6280\u80FD\u4E66 / \u795E\u4EE3\u79D8\u5F55",tags:["#\u4F17\u795E\u53D6\u60A6\u4E4B\u6CD5","#\u795E\u6027\u4F53\u4F4D\u5927\u6210","#\u5A01\u6743\u81E3\u670D\u8BF1\u5BFC"],desc:"\u8BB0\u5F55\u4E86\u534A\u795E\u4E0E\u82F1\u96C4\u4E4B\u95F4\u591C\u591C\u7B19\u6B4C\u7684\u9EC4\u91D1\u7F8A\u76AE\u5377\u3002\u7814\u8BFB\u8005\u5C06\u638C\u63E1\u8BA9\u6700\u72C2\u66B4\u5B64\u50B2\u7684\u6218\u795E\u4E5F\u5316\u4F5C\u7ED5\u6307\u67D4\u7684\u53E4\u8001\u9B45\u60D1\u5723\u6CD5\u3002",price:8200},"item-ssr-2":{name:"\u70BD\u9633\u771F\u91D1\u9501\u5FC3\u523A\u5251",type:"\u6B66\u5668 / \u91D1\u8F89\u4F69\u5251",tags:["#\u4F18\u96C5\u51B3\u6597\u6B66\u5668","#\u70BD\u70ED\u6B32\u706B\u8D2F\u7A7F","#\u7F34\u68B0\u5373\u5C48\u670D"],desc:"\u4EE5\u592A\u9633\u7CBE\u91D1\u953B\u9020\u7684\u7EC6\u8EAB\u51B3\u6597\u523A\u5251\u3002\u5251\u8EAB\u6BCF\u4E00\u6B21\u523A\u4E2D\u76EE\u6807\uFF0C\u90FD\u4F1A\u6CE8\u5165\u5982\u70C8\u9633\u822C\u7099\u70E4\u5168\u8EAB\u7684\u7518\u7F8E\u6B32\u706B\uFF0C\u4EE4\u5BF9\u624B\u65E0\u529B\u6301\u68B0\u3002",price:4500},"item-sr-1":{name:"\u795E\u8840\u938F\u91D1\u8584\u7FFC\u80F8\u7532",type:"\u9632\u5177 / \u534E\u4E3D\u91D1\u7532",tags:["#\u534A\u795E\u5149\u8F89\u53CD\u5F39","#\u50B2\u6162\u59FF\u6001\u52A0\u62A4","#\u7EDD\u5BF9\u4F24\u5BB3\u8C41\u514D"],desc:"\u5B8C\u7F8E\u8D34\u5408\u8BF1\u4EBA\u8EAB\u5F62\u7684\u8D34\u8EAB\u938F\u91D1\u8F6F\u7532\u3002\u4E0D\u4EC5\u534E\u7F8E\u7EDD\u4F26\u72B9\u5982\u795E\u7947\u964D\u4E16\uFF0C\u66F4\u80FD\u5728\u906D\u53D7\u653B\u51FB\u65F6\u7206\u53D1\u51FA\u70BD\u70ED\u91D1\u8292\u51FB\u9000\u4E00\u5207\u5192\u72AF\u4E4B\u624B\u3002",price:7200}},whispers:{"item-ex":"\u201C\u534A\u795E\u53C8\u5982\u4F55\uFF1F\u6700\u540E\u8FD8\u4E0D\u662F\u4E56\u4E56\u5949\u4E0A\u91D1\u5E93~\u2665\u201D","item-ur-1":"\u201C\u91D1\u707F\u707F\u7684\u86CB\u58F3\u91CC\uFF0C\u6B63\u7761\u7740\u53EF\u7231\u7684\u5C0F\u6363\u86CB\u9B3C\u5462\u2665\u201D","item-ur-2":"\u201C\u5F53\u91D1\u94C3\u6572\u54CD\u2026\u5C31\u7B97\u662F\u9AD8\u9AD8\u5728\u4E0A\u7684\u534A\u795E\u4E5F\u5F97\u8DEA\u4F0F\u2665\u201D","item-ssr-1":"\u201C\u5965\u6797\u5339\u65AF\u5C71\u4E0A\u7684\u90A3\u4E9B\u795E\u4ED9\u2026\u5176\u5B9E\u73A9\u5F97\u53EF\u82B1\u4E86\u2665\u201D","item-ssr-2":"\u201C\u5251\u5C16\u8F7B\u70B9\u80F8\u53E3\u2026\u4ED6\u7684\u5FC3\u5C31\u5F7B\u5E95\u88AB\u878D\u5316\u4E86\u2665\u201D","item-sr-1":"\u201C\u938F\u91D1\u8D34\u8EAB\uFF0C\u5149\u5F69\u7167\u4EBA\uFF0C\u8C01\u80FD\u62B5\u6321\u8FD9\u79CD\u98CE\u60C5\u5462\u2665\u201D"}};case"\u8BF8\u795E\u4E4B\u56FD\u5EA6":return{dailyDeal:{name:"\u539F\u59CB\u521B\u4E16\u7518\u9732\u51DD\u8102",type:"\u6750\u6599 / \u521B\u4E16\u795E\u6DB2",grade:"SSR",tags:["#\u521B\u4E16\u795E\u529B","#\u795E\u683C\u50AC\u5316","#\u9650\u65F65\u6298"],desc:"\u9AD8\u5C45\u795E\u56FD\u7A79\u9876\u7684\u4E07\u795E\u6BBF\u81F3\u9AD8\u796D\u575B\u6240\u51DD\u805A\u7684\u521B\u4E16\u795E\u9732\u3002\u4E00\u6EF4\u5373\u53EF\u4EE4\u51E1\u80CE\u8131\u80CE\u6362\u9AA8\uFF0C\u6563\u53D1\u51FA\u8BA9\u4E07\u7269\u751F\u7075\u76F2\u76EE\u5D07\u62DC\u4E0E\u503E\u6155\u7684\u59CB\u7956\u6E05\u9999\u3002",price:1900,originalPrice:3800},goodsMap:{"item-ex":{name:"\u8BF8\u795E\u4E3B\u5BB0\xB7\u4E07\u754C\u6781\u4E50\u5723\u5951\u738B\u51A0",type:"\u9B45\u9B54\u9970\u54C1 / \u4E3B\u795E\u6743\u80FD",tags:["#\u7EDF\u5FA1\u4F17\u795E\u4E4B\u5A01","#\u7EDD\u5BF9\u9B45\u60D1\u6743\u5A01","#\u56FA\u5B9A100FP\u53EC\u964D"],desc:"\u8389\u8389\u4E1D\u63A0\u593A\u81EA\u795E\u56FD\u4E3B\u795E\u5B9D\u5EA7\u7684\u81F3\u9AD8\u738B\u51A0\u3002\u4F69\u6234\u65F6\u8BF8\u795E\u4E5F\u9700\u4F4E\u9996\u4EB2\u543B\u4F60\u7684\u978B\u5C16\uFF0C\u3010\u6BCF\u6B21\u56FA\u5B9A\u82B1\u8D39100FP\uFF0C\u968F\u65F6\u968F\u5730\u53EC\u5524\u8389\u8389\u4E1D\u73B0\u8EAB\u3011\u3002",price:35e3},"item-ur-1":{name:"\u5929\u9A6C\u4E0E\u6781\u4E50\u68A6\u795E\u5171\u80B2\u7075\u86CB",type:"\u5947\u7269 / \u795E\u754C\u5723\u5375",tags:["#\u795E\u5723\u5929\u9A6C\u8840\u7EDF","#\u68A6\u795E\u7EC7\u68A6\u6743\u80FD","#\u8D85\u51E1\u795E\u5BA0"],desc:"\u5728\u795E\u56FD\u4E91\u7AEF\u7531\u7EAF\u767D\u5929\u9A6C\u4E0E\u68A6\u795E\u795E\u683C\u4EA4\u878D\u5B55\u80B2\u7684\u4E03\u5F69\u5723\u5375\u3002\u7834\u58F3\u540E\u5C06\u8BDE\u751F\u62E5\u6709\u4E00\u53CC\u5723\u7FBD\u7FC5\u8180\u4E14\u64C5\u957F\u5C06\u771F\u5B9E\u5316\u4F5C\u6781\u4E50\u7F8E\u68A6\u7684\u5947\u5F02\u5723\u517D\u3002",price:19e3},"item-ur-2":{name:"\u4E5D\u91CD\u5929\u754C\u5E7B\u68A6\u50AC\u7720\u795E\u955C",type:"\u50AC\u7720\u9053\u5177 / \u795E\u754C\u5723\u5668",tags:["#\u4F17\u795E\u5E7B\u5883\u56DA\u7262","#\u7075\u9B42\u65E0\u6687\u5265\u79BB","#\u7EDD\u5BF9\u4FE1\u4EF0\u7BE1\u593A"],desc:"\u5012\u6620\u7740\u795E\u56FD\u6781\u4E50\u4E16\u754C\u7684\u7409\u7483\u795E\u955C\u3002\u51E1\u76F4\u89C6\u955C\u9762\u8005\uFF0C\u7075\u9B42\u5373\u523B\u9677\u5165\u7531\u4F60\u4E3B\u5BB0\u7684\u5929\u56FD\u4ED9\u5883\u4E4B\u4E2D\uFF0C\u8089\u8EAB\u4E0E\u5FC3\u667A\u552F\u547D\u662F\u4ECE\u3002",price:17e3},"item-ssr-1":{name:"\u521B\u4E16\u6B32\u5FF5\u4E0E\u795E\u6027\u4EA4\u878D\u5723\u5178",type:"\u6280\u80FD\u4E66 / \u81F3\u9AD8\u795E\u5F55",tags:["#\u795E\u683C\u5171\u9E23\u79D8\u672F","#\u4FE1\u4EF0\u72C2\u70ED\u8F6C\u5316","#\u7CBE\u795E\u5347\u534E\u6781\u4E50"],desc:"\u8BF8\u795E\u65F6\u4EE3\u6700\u521D\u8BB0\u5F55\u751F\u547D\u8D77\u6E90\u4E0E\u7231\u6B32\u6CD5\u5219\u7684\u7981\u65AD\u6CE5\u677F\u3002\u638C\u63E1\u5B83\u5373\u53EF\u5C06\u4E16\u95F4\u4E00\u5207\u7EAF\u7CB9\u4FE1\u4EF0\u5168\u6570\u5347\u534E\u8F6C\u5316\u4E3A\u5BF9\u4F60\u7684\u72C2\u70ED\u8FF7\u604B\u3002",price:8800},"item-ssr-2":{name:"\u96F7\u9706\u795E\u5A01\u675F\u5FC3\u91D1\u94FE",type:"\u6B66\u5668 / \u4E3B\u795E\u9501\u94FE",tags:["#\u96F7\u7535\u9EBB\u75F9\u5FEB\u611F","#\u7EDD\u5BF9\u675F\u7F1A\u538B\u5236","#\u610F\u5FD7\u5D29\u6E83"],desc:"\u7F20\u7ED5\u7740\u795E\u56FD\u72C2\u66B4\u96F7\u9706\u7684\u91D1\u5149\u9501\u94FE\u3002\u4E0D\u4EC5\u80FD\u5C06\u4EFB\u4F55\u5DE8\u795E\u6346\u7F1A\u52A8\u5F39\u4E0D\u5F97\uFF0C\u6BCF\u6B21\u96F7\u8292\u95EA\u70C1\u90FD\u5982\u6F6E\u6C34\u822C\u6FC0\u53D1\u5168\u8EAB\u6BCF\u4E00\u5BF8\u795E\u7ECF\u7684\u6781\u4E50\u6218\u6817\u3002",price:4800},"item-sr-1":{name:"\u795E\u754C\u9713\u88F3\u661F\u7FBD\u6218\u88D9",type:"\u9632\u5177 / \u7EC7\u5973\u795E\u7EC7",tags:["#\u4E07\u6CD5\u4E0D\u4FB5","#\u5929\u56FD\u795E\u5149\u5E87\u4F51","#\u53D7\u51FB\u8005\u795E\u9B42\u503E\u5012"],desc:"\u91C7\u4E5D\u91CD\u5929\u754C\u661F\u8FB0\u4E91\u96FE\u7531\u7EC7\u5973\u6240\u7EC7\u9020\u7684\u5929\u754C\u6218\u88D9\u3002\u8F7B\u67D4\u82E5\u65E0\u5374\u4E07\u6CD5\u8F9F\u6613\uFF0C\u4EFB\u4F55\u9760\u8FD1\u53D1\u8D77\u653B\u52BF\u8005\u90FD\u4F1A\u88AB\u5176\u795E\u5149\u6643\u82B1\u4E86\u5FC3\u795E\u800C\u8DEA\u4F0F\u3002",price:7600}},whispers:{"item-ex":"\u201C\u795E\u56FD\u7684\u4E3B\u795E\u5B9D\u5EA7\uFF0C\u5750\u8D77\u6765\u5176\u5B9E\u4E5F\u6CA1\u4EC0\u4E48\u7279\u522B\u7684\u561B\u2665\u201D","item-ur-1":"\u201C\u795E\u517D\u7684\u86CB\u2026\u5B75\u51FA\u6765\u4EE5\u540E\u5C31\u8BA9\u5B83\u5E26\u6211\u4EEC\u5DE1\u6E38\u5929\u9645\u5427\u2665\u201D","item-ur-2":"\u201C\u7167\u7167\u955C\u5B50\u2026\u5728\u8BF8\u795E\u7684\u795E\u754C\u91CC\uFF0C\u4F60\u624D\u662F\u552F\u4E00\u7684\u795E\u2665\u201D","item-ssr-1":"\u201C\u4E16\u95F4\u6240\u6709\u795E\u660E\u7684\u4FE1\u4EF0\u2026\u672C\u8D28\u4E0A\u90FD\u662F\u5BF9\u7231\u6B32\u7684\u6E34\u6C42\u2665\u201D","item-ssr-2":"\u201C\u91D1\u8272\u7684\u96F7\u7535\u7F20\u7ED5\u5168\u8EAB\u2026\u8BA9\u4ED6\u8FDE\u53CD\u6297\u7684\u529B\u6C14\u90FD\u5316\u4F5C\u547B\u541F\u2665\u201D","item-sr-1":"\u201C\u8FD9\u4EF6\u6218\u88D9\u2026\u795E\u540E\u5F53\u5E74\u6C42\u4E86\u6211\u597D\u4E45\u90FD\u6CA1\u820D\u5F97\u7ED9\u5979\u5462\u2665\u201D"}};case"\u5F02\u795E\u4E4B\u4E50\u56ED":return{dailyDeal:{name:"\u539F\u521D\u6DF7\u6C8C\u72C2\u6B32\u661F\u5C18",type:"\u6750\u6599 / \u865A\u7A7A\u53E4\u8D28",grade:"SSR",tags:["#\u65E7\u65E5\u652F\u914D\u72C2\u6B22","#\u4E0D\u53EF\u540D\u72B6\u5F02\u53D8","#\u9650\u65F65\u6298"],desc:"\u6355\u635E\u81EA\u7FA4\u661F\u5F52\u4F4D\u4E4B\u591C\u5F02\u795E\u72C2\u6B22\u9057\u7559\u4E0B\u7684\u6DF1\u7A7A\u661F\u5C18\u3002\u6CDB\u7740\u4E0D\u53EF\u540D\u72B6\u7684\u4E94\u5F69\u6591\u6593\u9ED1\u5149\uFF0C\u80FD\u8BA9\u4EFB\u4F55\u9020\u7269\u7684\u795E\u7ECF\u7CFB\u7EDF\u53D1\u751F\u4E0D\u53EF\u9006\u8F6C\u7684\u6109\u60A6\u8D28\u53D8\u3002",price:1950,originalPrice:3900},goodsMap:{"item-ex":{name:"\u6DF1\u6D77\u53E4\u795E\u4F4E\u8BED\xB7\u539F\u521D\u6781\u4E50\u89E6\u8155\u6212",type:"\u9B45\u9B54\u9970\u54C1 / \u90AA\u795E\u5951\u7EA6",tags:["#\u4E0D\u53EF\u540D\u72B6\u6B22\u6109","#\u5168\u7406\u667A\u8C41\u514D","#\u968F\u65F6\u53EC\u5524\u8389\u8389\u4E1D"],desc:"\u7531\u6C89\u7761\u5728\u62C9\u83B1\u8036\u6DF1\u5904\u7684\u53E4\u795E\u89E6\u89D2\u672B\u68A2\u7194\u7ED3\u7684\u8815\u52A8\u6D3B\u4F53\u6307\u73AF\u3002\u4F69\u6234\u65F6\u80FD\u542C\u5230\u5B87\u5B99\u6700\u6DF1\u5904\u7684\u751C\u817B\u72C2\u6B4C\uFF0C\u3010\u6BCF\u6B21\u56FA\u5B9A100FP\u968F\u65F6\u53EC\u5524\u8389\u8389\u4E1D\u73B0\u8EAB\u3011\u3002",price:36e3},"item-ur-1":{name:"\u5F02\u661F\u53E4\u795E\u4E0E\u9B45\u9B54\u72C2\u6B22\u4E4B\u5375",type:"\u5947\u7269 / \u4E0D\u53EF\u540D\u72B6\u80DA\u80CE",tags:["#\u89E6\u624B\u4E0E\u7FC5\u7FFC\u517C\u5907","#\u6DF1\u7A7A\u672A\u77E5\u751F\u547D","#San\u503C\u5F52\u96F6\u4F9D\u7136\u72C2\u559C"],desc:"\u5728\u76F2\u76EE\u75F4\u611A\u4E4B\u795E\u7684\u5BAB\u5EF7\u72C2\u5BB4\u540E\uFF0C\u7531\u9B45\u9B54\u91C7\u79CD\u5B55\u80B2\u51FA\u7684\u795E\u79D8\u53E4\u5375\u3002\u86CB\u58F3\u4E0A\u5E03\u6EE1\u4F1A\u7728\u52A8\u7684\u7C89\u8272\u590D\u773C\uFF0C\u5B75\u5316\u51FA\u6781\u5EA6\u4E56\u5DE7\u9ECF\u4EBA\u7684\u5F02\u661F\u89E6\u624B\u9B45\u9B54\u5E7C\u7075\u3002",price:19500},"item-ur-2":{name:"\u661F\u4E4B\u5F69\u72C2\u60F3\u50AC\u7720\u68F1\u955C",type:"\u50AC\u7720\u9053\u5177 / \u964D\u7EF4\u68F1\u955C",tags:["#\u975E\u6B27\u51E0\u91CC\u5F97\u50AC\u7720","#\u7406\u667A\u5316\u4F5C\u7EAF\u7CB9\u6B32\u5FF5","#\u6C38\u6052\u75F4\u72C2\u670D\u4ECE"],desc:"\u6298\u5C04\u51FA\u4EBA\u7C7B\u8089\u773C\u4ECE\u672A\u89C1\u8FC7\u7684\u672A\u77E5\u8272\u8C31\u7684\u6DF1\u7A7A\u6C34\u6676\u68F1\u955C\u3002\u5149\u7EBF\u7167\u5728\u4EBA\u8138\u4E0A\u7684\u77AC\u95F4\uFF0C\u6240\u6709\u4E16\u4FD7\u7406\u667A\u5168\u88AB\u751C\u7F8E\u72C2\u4E71\u7684\u672C\u80FD\u5360\u9886\u3002",price:17500},"item-ssr-1":{name:"\u62C9\u83B1\u8036\u6DF1\u6E0A\u6B22\u5BB4\u542F\u793A\u5F55",type:"\u6280\u80FD\u4E66 / \u7981\u65AD\u9EC4\u8863",tags:["#\u6DF1\u7A7A\u547C\u5524\u79D8\u97F3","#\u4E0D\u53EF\u540D\u72B6\u5F15\u8BF1","#\u795E\u667A\u72C2\u70ED\u5316"],desc:"\u8BB0\u8F7D\u7740\u4E0D\u53EF\u540D\u72B6\u4E4B\u795E\u5982\u4F55\u7528\u4F4E\u8BED\u74E6\u89E3\u5B87\u5B99\u667A\u6167\u751F\u7269\u5FC3\u667A\u7684\u53E4\u8001\u5178\u7C4D\u3002\u7814\u8BFB\u540E\u80FD\u53D1\u51FA\u8BA9\u4E07\u7269\u795E\u9B42\u98A0\u5012\u3001\u65E0\u6761\u4EF6\u5C48\u4ECE\u7684\u5E7D\u79D8\u97F3\u8C03\u3002",price:8900},"item-ssr-2":{name:"\u626D\u66F2\u6B32\u671B\u6DF1\u6E0A\u89E6\u624B\u77ED\u6756",type:"\u6B66\u5668 / \u6D3B\u4F53\u89E6\u6756",tags:["#\u81EA\u52A8\u7D22\u654C\u7F20\u7ED5","#\u795E\u7ECF\u7A81\u89E6\u591A\u500D\u629A\u6170","#\u654C\u65B9\u81EA\u6211\u74E6\u89E3"],desc:"\u7531\u6D3B\u4F53\u865A\u7A7A\u89E6\u987B\u7EA0\u7F20\u800C\u6210\u7684\u5947\u5F02\u77ED\u6756\u3002\u6325\u52A8\u65F6\u89E6\u624B\u4F1A\u81EA\u52A8\u5EF6\u4F38\u7F20\u7ED5\u4F4F\u654C\u4EBA\u5404\u5904\u654F\u9510\u795E\u7ECF\uFF0C\u4EE4\u5176\u5728\u96BE\u4EE5\u8A00\u55BB\u7684\u6218\u6817\u4E2D\u5F7B\u5E95\u7F34\u68B0\u3002",price:4900},"item-sr-1":{name:"\u865A\u7A7A\u6D78\u67D3\u534A\u900F\u5E7D\u6697\u5916\u8863",type:"\u9632\u5177 / \u865A\u7A7A\u819C\u8863",tags:["#\u7A7A\u95F4\u626D\u66F2\u504F\u6298","#\u51DD\u89C6\u8005\u9677\u5165\u7729\u6655","#\u7EDD\u5BF9\u4E0D\u53EF\u76F4\u89C6"],desc:"\u7531\u865A\u7A7A\u751F\u7269\u8131\u843D\u7684\u900F\u660E\u7C98\u819C\u97A3\u5236\u800C\u6210\u7684\u98D8\u9038\u5916\u8863\u3002\u7A7F\u4E0A\u540E\u8EAB\u59FF\u4EFF\u4F5B\u7F6E\u8EAB\u4E8E\u591A\u91CD\u89C6\u754C\u4EA4\u53E0\u4E4B\u4E2D\uFF0C\u4EFB\u4F55\u5BF9\u4F60\u6000\u6709\u654C\u610F\u8005\u53EA\u8981\u51DD\u89C6\u4FBF\u4F1A\u5934\u6655\u76EE\u7729\u3002",price:7800}},whispers:{"item-ex":"\u201C\u90A3\u4E9B\u65E7\u65E5\u795E\u7947\u867D\u7136\u53E4\u602A\u2026\u4F46\u5B9D\u8D1D\u8FD8\u771F\u662F\u633A\u591A\u7684\u5462\u2665\u201D","item-ur-1":"\u201C\u597D\u591A\u53EA\u773C\u775B\u7684\u5C0F\u5BB6\u4F19\u2026\u4E00\u76F4\u5728\u773C\u5DF4\u5DF4\u5730\u7B49\u7740\u4F60\u5462\u2665\u201D","item-ur-2":"\u201C\u672A\u77E5\u7684\u8272\u5F69\u2026\u4F1A\u5E26\u4ED6\u6C89\u5165\u6700\u6DF1\u7684\u72C2\u6B22\u68A6\u5883\u2665\u201D","item-ssr-1":"\u201C\u5FF5\u51FA\u8FD9\u4E9B\u6666\u6DA9\u7684\u4F4E\u8BED\u2026\u6CA1\u6709\u751F\u7075\u80FD\u9003\u8131\u4F60\u7684\u638C\u63A7\u2665\u201D","item-ssr-2":"\u201C\u6D3B\u4F53\u89E6\u624B\u6700\u61C2\u8BE5\u5F80\u54EA\u91CC\u7F20\u4E86\u2026\u8981\u4E0D\u8981\u8BD5\u8BD5\uFF1F\u2665\u201D","item-sr-1":"\u201C\u4E0D\u53EF\u540D\u72B6\u7684\u7F8E\u2026\u624D\u4F1A\u8BA9\u6240\u6709\u76EE\u5149\u9677\u5165\u6C38\u6052\u75F4\u8FF7\u2665\u201D"}};case"\u8389\u8389\u4E1D\u5B9D\u5E93":default:return{dailyDeal:{name:"\u6781\u591C\u7EAF\u6B32\u9B54\u9AD3\u82B1\u871C",type:"\u6750\u6599 / \u9B45\u9B54\u7EAF\u9732",grade:"SSR",tags:["#\u5B9D\u5E93\u73CD\u54C1\u56DE\u6D41","#\u767E\u500D\u50AC\u53D1","#\u9650\u65F65\u6298"],desc:"\u8389\u8389\u4E1D\u4ECE\u5B9D\u5E93\u6DF1\u5C42\u5BC6\u5BA4\u91CD\u65B0\u53D6\u56DE\u7684\u6781\u591C\u9B54\u82B1\u521D\u7EFD\u82B1\u871C\u3002\u6EF4\u5165\u9152\u4E2D\u4E0D\u4EC5\u9999\u6C14\u6251\u9F3B\uFF0C\u66F4\u80FD\u8BA9\u4EFB\u4F55\u9AD8\u50B2\u8005\u7684\u9632\u7EBF\u5728\u77AC\u95F4\u5982\u878D\u96EA\u822C\u8F6F\u5316\u3002",price:1600,originalPrice:3200},goodsMap:{"item-ex":{name:"\u6DF1\u6E0A\u59CB\u7956\xB7\u771F\u540D\u5951\u7EA6\u6781\u4E50\u9879\u73AF",type:"\u9B45\u9B54\u9970\u54C1 / \u5973\u738B\u6069\u8D50",tags:["#\u968F\u65F6\u968F\u5730\u53EC\u5524\u8389\u8389\u4E1D","#\u56FA\u5B9A100FP\u5524\u73B0","#\u9B45\u9B54\u5973\u738B\u5951\u7EA6"],desc:"\u8389\u8389\u4E1D\u4EE5\u5FC3\u5C16\u7CBE\u8840\u7194\u94F8\u771F\u540D\u70D9\u5370\u7684\u968F\u8EAB\u6781\u4E50\u9970\u54C1\u3002\u4F69\u6234\u8005\u5C06\u83B7\u5F97\u4E0E\u9B45\u9B54\u5973\u738B\u6C38\u6052\u76F8\u901A\u7684\u5FC3\u5FF5\u7F81\u7ECA\uFF0C\u3010\u6BCF\u6B21\u56FA\u5B9A\u82B1\u8D39100FP\uFF0C\u968F\u65F6\u968F\u5730\u53EC\u5524\u8389\u8389\u4E1D\u73B0\u8EAB\u3011\u4E8E\u4F60\u8EAB\u4FA7\u4F8D\u5949\u5B88\u62A4\u3002",price:3e4},"item-ur-1":{name:"\u6DF1\u6E0A\u7EAF\u79CD\xB7\u7EAF\u6B32\u9B45\u9B54\u86CB",type:"\u5947\u7269 / \u6D3B\u4F53\u80DA\u80CE",tags:["#\u9B45\u9B54\u653E\u8361\u7ED3\u6676","#\u5947\u5999\u751F\u7269\u5B75\u5316","#\u6DF1\u6E0A\u672A\u77E5\u751F\u547D"],desc:"\u5176\u5B83\u9B45\u9B54\u5728\u6DF1\u6E0A\u72C2\u6B22\u5BB4\u540E\u8086\u610F\u4E71\u641E\u751F\u4E0B\u7684\u795E\u79D8\u9B54\u86CB\u3002\u86CB\u58F3\u6D41\u6DCC\u7740\u6E29\u70ED\u6591\u6593\u7684\u6B32\u671B\u9B54\u7EB9\uFF0C\u5185\u90E8\u5B55\u80B2\u7740\u8E81\u52A8\u7684\u5C0F\u751F\u547D\uFF0C\u53EA\u8981\u4EE5\u4F53\u6E29\u4E0E\u7231\u610F\u6089\u5FC3\u5B75\u5316\uFF0C\u4FBF\u80FD\u8BDE\u751F\u51FA\u5947\u5999\u7684\u672A\u77E5\u751F\u7269\u3002",price:17e3},"item-ur-2":{name:"\u6444\u9B42\u6781\u4E50\u91D1\u4E1D\u50AC\u7720\u6000\u8868",type:"\u50AC\u7720\u9053\u5177 / \u7CBE\u795E\u64CD\u7EB5",tags:["#\u610F\u8BC6\u6DF1\u5EA6\u5265\u593A","#\u7EDD\u5BF9\u50AC\u7720\u6697\u793A","#\u65E0\u6297\u62D2\u670D\u4ECE"],desc:"\u6EF4\u7B54\u8F7B\u54CD\u4E2D\u6D41\u52A8\u7740\u7C89\u7EA2\u9B45\u60D1\u9B54\u529B\u7684\u53E4\u8463\u6000\u8868\u3002\u6643\u52A8\u95F4\u80FD\u4EE4\u76EE\u51FB\u8005\u7684\u7406\u667A\u5982\u878D\u96EA\u822C\u6D88\u6563\uFF0C\u9677\u5165\u6DF1\u5EA6\u751C\u7F8E\u7684\u50AC\u7720\u604D\u60DA\u72B6\u6001\uFF0C\u8A00\u542C\u8BA1\u4ECE\uFF0C\u4EFB\u7531\u6446\u5E03\u3002",price:15e3},"item-ssr-1":{name:"\u6DF1\u6E0A\u79D8\u4F20\uFF1A\u9B45\u9B54\u5F15\u8BF1\u4E0E\u4F53\u4F4D\u79D8\u5178",type:"\u6280\u80FD\u4E66 / \u6DF1\u6E0A\u79D8\u5178",tags:["#\u9AD8\u9636\u5F15\u8BF1\u79D8\u6280","#\u654F\u611F\u70B9\u5168\u77E5","#\u5FEB\u611F\u767E\u500D\u6FC0\u5316"],desc:"\u5C01\u5370\u7740\u4E0A\u53E4\u9AD8\u7B49\u9B45\u9B54\u5438\u7CBE\u6444\u9B44\u7CBE\u9AD3\u7684\u7F8A\u76AE\u53E4\u5377\u3002\u7814\u8BFB\u540E\u80FD\u900F\u5F7B\u6D1E\u6089\u4E07\u7269\u751F\u7075\u6240\u6709\u9690\u79D8\u654F\u611F\u70B9\uFF0C\u4E3E\u624B\u6295\u8DB3\u95F4\u7686\u53EF\u65BD\u5C55\u4EE4\u610F\u5FD7\u77AC\u95F4\u9165\u8F6F\u7684\u7EDD\u4F26\u5F15\u8BF1\u6280\u5DE7\u3002",price:7700},"item-ssr-2":{name:"\u6B32\u706B\u8680\u5FC3\u86C7\u543B\u8F6F\u97AD",type:"\u6B66\u5668 / \u9B45\u9B54\u8F6F\u97AD",tags:["#\u75DB\u611F\u9006\u8F6C\u5FEB\u611F","#\u795E\u7ECF\u60C5\u6B32\u8FC7\u8F7D","#\u5C48\u670D\u97AD\u631E"],desc:"\u6D78\u6CE1\u5728\u9B45\u9B54\u795E\u7ECF\u6BD2\u7D20\u4E2D\u7684\u8D64\u7EA2\u86C7\u76AE\u957F\u97AD\u3002\u547D\u4E2D\u76EE\u6807\u65F6\u4E0D\u4EC5\u4E0D\u9020\u6210\u5B9E\u8D28\u4F24\u6B8B\uFF0C\u53CD\u800C\u5C06\u53D7\u51FB\u75DB\u695A\u5168\u6570\u9006\u8F6C\u4E3A\u5982\u72C2\u6F6E\u822C\u51B3\u5824\u7684\u6781\u81F4\u7518\u7F8E\u5FEB\u611F\u4E0E\u6218\u6817\u3002",price:4e3},"item-sr-1":{name:"\u9B45\u591C\u5996\u59EC\xB7\u9ED1\u857E\u4E1D\u8F7B\u94E0",type:"\u9632\u5177 / \u8D34\u8EAB\u8F7B\u7532",tags:["#\u8F7B\u82E5\u65E0\u7269\u9632\u62A4","#\u89C6\u7EBF\u8BF1\u60D1\u504F\u659C","#\u53D7\u51FB\u9B45\u60D1\u53CD\u9707"],desc:"\u7531\u6697\u591C\u6DF1\u6E0A\u5E7D\u8695\u4E1D\u4E0E\u79D8\u94F6\u7EA4\u7EF4\u7CBE\u7EBA\u800C\u6210\u7684\u534A\u900F\u9ED1\u857E\u4E1D\u5185\u7532\u3002\u8D34\u8EAB\u52FE\u52D2\u6781\u81F4\u8BF1\u4EBA\u66F2\u7EBF\u7684\u540C\u65F6\uFF0C\u80FD\u81EA\u52A8\u6563\u53D1\u51FA\u8BA9\u4EFB\u4F55\u654C\u610F\u653B\u51FB\u77AC\u95F4\u5931\u51C6\u7684\u8FF7\u9B42\u62A4\u76FE\u3002",price:6900}},whispers:{"item-ex":"\u201C\u6BCF\u6B21\u53EA\u8981100FP\u2026\u968F\u65F6\u5524\u6211\u6765\u5230\u4F60\u8EAB\u8FB9\u54E6\u2665\u201D","item-ur-1":"\u201C\u522B\u7684\u9B45\u9B54\u4E71\u641E\u7559\u4E0B\u7684\u86CB\u54E6\u2026\u731C\u731C\u4F1A\u5B75\u51FA\u4EC0\u4E48\uFF1F\u2665\u201D","item-ur-2":"\u201C\u6EF4\u7B54\u2026\u770B\u7740\u6211\u7684\u773C\u775B\uFF0C\u5FC3\u667A\u5F7B\u5E95\u653E\u7A7A\u5427\u2665\u201D","item-ssr-1":"\u201C\u8BFB\u5B8C\u8FD9\u672C\u79D8\u5178\u2026\u6CA1\u6709\u4EBA\u80FD\u9003\u51FA\u4F60\u7684\u638C\u5FC3\u2665\u201D","item-ssr-2":"\u201C\u6BCF\u4E00\u8BB0\u8F7B\u62BD\uFF0C\u90FD\u4F1A\u5316\u4F5C\u4ED6\u6C42\u9976\u7684\u751C\u7F8E\u6218\u6817\u2665\u201D","item-sr-1":"\u201C\u53C8\u8F7B\u53C8\u900F\u53C8\u80FD\u62A4\u8EAB\u2026\u7A7F\u4E0A\u5B83\uFF0C\u8C01\u820D\u5F97\u4F24\u4F60\u5462\u2665\u201D"}}}},Re=function(t,i){const u=i||t.whisperText;return`
            <!-- \u5FC3\u8DF3\u5149\u73AF\uFF1A\u5728\u793C\u76D2\u89E3\u5E26\u540E\u76D6\u5B50\u5B8C\u5168\u7FFB\u5F00\u524D\u4EA7\u751F\u6D9F\u6F2A\u72B6\u5FC3\u8DF3\u5149\u7EB9 -->
            <div class="box-heartbeat-ripple" data-tier="${t.tier}">
                <div class="heartbeat-ring ring-1"></div>
                <div class="heartbeat-ring ring-2"></div>
                <div class="heartbeat-core">\u2665</div>
            </div>

            <!-- \u4FEF\u89C6\u89D2\u5962\u534E\u793C\u76D2\uFF1A\u6DF1\u6E0A\u4E1D\u7ED2 + \u5341\u5B57\u7F0E\u5E26 + \u7ACB\u4F53\u771F\u4E1D\u5927\u8774\u8776\u7ED3 + \u9B45\u60D1\u8D3A\u5361 -->
            <div class="gift-box-cover" data-tier="${t.tier}" data-item-id="${t.itemId}" id="box-${t.itemId}">
                <div class="box-lid-surface">
                    ${t.shimmerClass?`<div class="${t.shimmerClass}"></div>`:""}
                    <div class="box-inner-stitch"></div>
                    <div class="box-ribbon ribbon-horizontal"><div class="ribbon-shine"></div></div>
                    <div class="box-ribbon ribbon-vertical"><div class="ribbon-shine"></div></div>
                    <div class="gift-tag-card">
                        <div class="tag-pin-hole"></div>
                        <div class="tag-silk-thread"></div>
                        <div class="tag-grade-stamp"><span>${t.gradeStamp}</span><span>\u2726</span></div>
                        <div class="tag-whisper-text">${u}</div>
                        <div class="tag-lip-kiss">\u{1F48B}</div>
                        <div class="tag-tap-hint">\u8F7B\u89E6\u62C6\u542F \u2726</div>
                    </div>
                    <div class="box-bow-center">
                        <div class="bow-tail tail-left"></div>
                        <div class="bow-tail tail-right"></div>
                        <div class="bow-loop loop-left"><div class="loop-inner-fold"></div><div class="loop-shine"></div></div>
                        <div class="bow-loop loop-right"><div class="loop-inner-fold"></div><div class="loop-shine"></div></div>
                        <div class="bow-knot"><span class="bow-knot-gem">\u2665</span></div>
                    </div>
                </div>
            </div>
        `},He=function(){e.querySelectorAll(".gift-box-cover").forEach(i=>{const u=i,s=u.cloneNode(!0);u.parentNode?.replaceChild(s,u),s.addEventListener("click",n=>{if(n.stopPropagation(),s.classList.contains("pulling")||s.classList.contains("opening")||s.classList.contains("opened"))return;const o=s.closest(".goods-card"),l=o?.querySelector(".box-heartbeat-ripple");s.classList.add("pulling"),l&&l.classList.add("active"),setTimeout(()=>{s.classList.remove("pulling"),s.classList.add("opening");const r=s.getBoundingClientRect(),a=r.left+r.width/2,E=r.top+r.height/2,p=s.getAttribute("data-tier")||"ssr",B=["\u2726","\u2728","\u2665","\u{1F496}","\u2605","\u2727","\u2666"],b={ex:["#ff1744","#ff4081","#f48fb1","#ffffff"],ur:["#ffd700","#ffe082","#fff9c4","#ffffff"],ssr:["#ba68c8","#e1bee7","#ab47bc","#ffffff"],sr:["#ba68c8","#e1bee7","#ab47bc","#ffffff"]}[p]||["#ff4081","#ffffff"],w=e.createDocumentFragment(),y=[],D=22;for(let m=0;m<D;m++){const f=e.createElement("div");f.className="gift-unbox-sparkle",f.textContent=B[m%B.length],f.style.left=`${a}px`,f.style.top=`${E}px`;const c=b[m%b.length];f.style.color=c;const L=(.68+Math.random()*.8).toFixed(2),$=((Math.random()-.5)*64).toFixed(1);f.style.setProperty("--random-scale",L),f.style.setProperty("--random-hue",`${$}deg`),f.style.transform="translate3d(0, 0, 0) scale(0.2) rotate(0deg)",f.style.opacity="1",f.style.filter=`drop-shadow(0 0 6px ${c}) drop-shadow(0 0 10px #ffffff) hue-rotate(0deg)`;const S=Math.PI*2*m/D+(Math.random()-.5)*.35,R=50+Math.random()*115,N=Math.cos(S)*R,tu=Math.sin(S)*R-20,eu=(Math.random()-.5)*360;y.push({el:f,tx:N,ty:tu,rot:eu,color:c}),w.appendChild(f)}e.body.appendChild(w),requestAnimationFrame(()=>{y.forEach(({el:m,tx:f,ty:c,rot:L,color:$})=>{m.style.transform=`translate3d(${f}px, ${c}px, 0) scale(var(--random-scale)) rotate(${L}deg)`,m.style.filter=`drop-shadow(0 0 10px ${$}) drop-shadow(0 0 18px #ffffff) hue-rotate(var(--random-hue)) brightness(1.25)`,m.style.opacity="0"})}),setTimeout(()=>{y.forEach(({el:m})=>m.remove())},880),setTimeout(()=>{o&&(o.classList.remove("unveiled-rise"),o.offsetWidth,o.classList.add("unveiled-rise")),l&&setTimeout(()=>{l.classList.remove("active")},350),s.classList.add("opened"),s.remove()},720)},160)})})},xt=function(){e.querySelectorAll(".gift-unbox-sparkle").forEach(u=>u.remove());const t=lu(),i=t.currentGoodsMap||ot;jt.forEach(u=>{const s=e.querySelector(`.goods-card[data-item-id="${u.itemId}"]`);if(!s)return;const n=s.querySelector(".goods-buy-btn");if(t.settledPurchasedItemIds.includes(u.itemId)){s.classList.add("in-cart-reserved","already-settled-item"),s.querySelectorAll(".gift-box-cover, .box-heartbeat-ripple, .card-in-cart-overlay").forEach(a=>a.remove()),s.insertAdjacentHTML("beforeend",`
                    <div class="card-in-cart-overlay settled-seal-overlay">
                        <div class="in-cart-seal">\u2665 \u5951\u7EA6\u8FBE\u6210 \xB7 \u73CD\u5B9D\u5DF2\u4EA4\u4ED8</div>
                        <div class="in-cart-sub">\u5DF2\u5F52\u5165\u7075\u9B42\u70D9\u5370\u4E4B\u4E2D (\u5DF2\u552E\u7F44)</div>
                    </div>
                `),n&&(n.disabled=!0,n.textContent="\u5DF2\u7ED3\u5951\u4EA4\u4ED8");return}if(G.some(a=>a.id===u.itemId)){s.classList.add("in-cart-reserved"),s.querySelectorAll(".gift-box-cover, .box-heartbeat-ripple, .card-in-cart-overlay").forEach(a=>a.remove()),s.insertAdjacentHTML("beforeend",`
                    <div class="card-in-cart-overlay">
                        <div class="in-cart-seal">\u2665 \u5DF2\u6536\u5165\u6B22\u6109\u79D8\u5323</div>
                        <div class="in-cart-sub">\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8</div>
                    </div>
                `),n&&(n.disabled=!0,n.textContent="\u5DF2\u5728\u79D8\u5323");return}s.classList.remove("unveiled-rise","in-cart-reserved","already-settled-item"),s.querySelectorAll(".card-in-cart-overlay").forEach(a=>a.remove()),n&&(n.disabled=!1,n.textContent="\u7ED3\u5951\u5151\u6362"),s.querySelectorAll(".gift-box-cover, .box-heartbeat-ripple").forEach(a=>a.remove());const l=i[u.itemId];if(l){const a=s.querySelector(".goods-name");a&&(a.textContent=l.name);const E=s.querySelector(".goods-type");E&&(E.textContent=l.type);const p=s.querySelector(".goods-tags-row");p&&(p.innerHTML=l.tags.map(b=>`<span class="goods-tag">${b}</span>`).join(""));const B=s.querySelector(".goods-desc");B&&(B.textContent=l.desc);const M=s.querySelector(".goods-price");M&&(M.innerHTML=`<span class="fp-icon">FP</span> ${l.price.toLocaleString()}`),n&&(n.setAttribute("data-name",l.name),n.setAttribute("data-price",String(l.price)))}const r=t.currentWhispers&&t.currentWhispers[u.itemId]||u.whisperText;s.insertAdjacentHTML("afterbegin",Re(u,r))}),He(),typeof window.__initBlindBoxSystem=="function"&&window.__initBlindBoxSystem(),typeof window.__updateDailyDealState=="function"&&window.__updateDailyDealState()},qe=function(){if(Vu)return;Vu=!0,Fu(!1);const t=lu();t.hasUnlockedErosShop=!0;const i=e.getElementById("fp-banknote-rain-stage"),u=e.getElementById("fp-falling-sky"),s=e.getElementById("fp-rising-flood"),n=e.getElementById("fp-tier-bottom"),o=e.getElementById("fp-tier-middle"),l=e.getElementById("fp-tier-top"),r=e.getElementById("fp-flood-notes-layer"),a=Qt||e.getElementById("succubus-box-root"),E=e.getElementById("eros-shop-root");if(!i||!u||!s||!r||!a||!E){Vu=!1;return}ct&&(clearInterval(ct),ct=null),i.style.display="block",i.style.opacity="1",i.classList.add("active"),u.innerHTML="",n&&(n.innerHTML=""),o&&(o.innerHTML=""),l&&(l.innerHTML=""),r&&(r.innerHTML=""),s.className="fp-rising-flood",s.offsetWidth;const p=Math.max(a.offsetWidth||780,880),B=()=>{if(!u)return;const w=e.createElement("div"),y=Math.random()>.6;w.className=`fp-note-item ${y?"is-small":""}`,w.innerHTML=_e(y);const D=15+Math.random()*(p-70),m=(Math.random()-.5)*160,f=(Math.random()-.5)*60,c=(Math.random()-.5)*360,L=1.6+Math.random()*.8;w.style.setProperty("--start-x",`${D}px`),w.style.setProperty("--drift-x",`${m}px`),w.style.setProperty("--init-rot",`${f}deg`),w.style.setProperty("--spin-rot",`${c}deg`),w.style.animation=`fpContinuousRainFall ${L}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,u.appendChild(w),setTimeout(()=>{w.remove()},L*1e3+80)};for(let w=0;w<14;w++)setTimeout(B,w*40);ct=window.setInterval(B,85);const M=280;setTimeout(()=>{s.classList.add("surge-full")},M);const b=Ut||e.getElementById("succubus-seal-root")||e.querySelector(".succubus-seal-wrapper");setTimeout(()=>{b&&b.classList.add("stage-transition-dim"),setTimeout(()=>{a.style.display="none",E.style.display="block",E.offsetWidth,E.classList.add("active"),typeof window.__startShopParticles=="function"&&window.__startShopParticles();const w=window;typeof w.startLilithShopDialog=="function"&&w.startLilithShopDialog();const y=e.getElementById("shop-crystal-cabinet"),D=e.getElementById("shop-cart-module"),m=e.getElementById("shop-daily-deal-module"),f=e.getElementById("lilith-shop-dialog-module");y&&D&&y.offsetTop>0&&(D.style.top=`${y.offsetTop}px`,m&&(m.style.top=`${y.offsetTop+D.offsetHeight+10}px`,f&&(f.style.top=`${y.offsetTop+D.offsetHeight+10+m.offsetHeight+14}px`)));const c=e.getElementById("loan-drawer-body");y&&c&&y.offsetLeft>0&&(c.style.width=`${y.offsetLeft}px`,c.style.minWidth=`${y.offsetLeft}px`,c.style.maxWidth=`${y.offsetLeft}px`);const L=window;typeof L.syncShopLoanDrawer=="function"&&L.syncShopLoanDrawer(),b&&b.classList.add("shop-mode-wide");const $=lu();$.hasUnlockedErosShop=!0,ju($),lt.setLocation($.currentLocation||"\u8389\u8389\u4E1D\u5B9D\u5E93"),xt();const S=st();Eu(S),se();const R=window;typeof R.syncShopTopBarButtons=="function"&&(syncShopTopBarButtons(),requestAnimationFrame(()=>{syncShopTopBarButtons()})),s.classList.remove("surge-full"),s.classList.add("full-cover-mode"),s.offsetHeight,setTimeout(()=>{b&&(b.classList.remove("stage-transition-dim"),b.classList.add("stage-transition-brighten")),setTimeout(()=>{s.classList.add("reveal-shop"),setTimeout(()=>{i.style.transition="opacity 0.4s ease",i.style.opacity="0",setTimeout(()=>{ct&&(clearInterval(ct),ct=null),i.classList.remove("active"),i.style.display="none",i.style.opacity="1",i.style.transition="",u.innerHTML="",n&&(n.innerHTML=""),o&&(o.innerHTML=""),l&&(l.innerHTML=""),r&&(r.innerHTML=""),s.className="fp-rising-flood",s.style.height="",b&&b.classList.remove("stage-transition-brighten"),Vu=!1,typeof R.syncShopTopBarButtons=="function"&&syncShopTopBarButtons()},450)},1300)},800)},200)},650)},M+2e3)},bt=function(){if(typeof Tt!=="undefined"&&Tt){clearInterval(Tt);Tt=null;}const _cr=e.getElementById("shop-continuous-rain");_cr&&(_cr.classList.remove("active"),_cr.innerHTML="");if(Vu)return;Vu=!0;const t=e.getElementById("fp-banknote-rain-stage"),i=e.getElementById("fp-falling-sky"),u=e.getElementById("fp-rising-flood"),s=Qt||e.getElementById("succubus-box-root"),n=e.getElementById("eros-shop-root"),o=Ut||e.getElementById("succubus-seal-root")||e.querySelector(".succubus-seal-wrapper"),l=lu();l.userFP=U,window.USER_FP=U,window.__USER_FP__=U;try{localStorage.setItem("lilith_user_fp",String(U))}catch{}if(!t||!i||!u||!s||!n){n&&(n.style.display="none",n.classList.remove("active")),s&&(s.style.display="",s.style.opacity="1"),o&&o.classList.remove("shop-mode-wide"),Vu=!1;try{window.scrollTo({left:0,behavior:"instant"});if(o)o.scrollLeft=0;const ch=document.getElementById("chat")||document.querySelector(".chat-container")||document.scrollingElement;if(ch)ch.scrollLeft=0}catch(_){};return}t.style.display="block",t.style.opacity="1",t.classList.add("active"),i.innerHTML="";const r=Math.max(s.offsetWidth||780,880),a=()=>{if(!i)return;const E=e.createElement("div"),p=Math.random()>.6;E.className=`fp-note-item ${p?"is-small":""}`,E.innerHTML=_e(p);const B=15+Math.random()*(r-70),M=(Math.random()-.5)*160,b=(Math.random()-.5)*60,w=(Math.random()-.5)*360,y=1.4+Math.random()*.6;E.style.setProperty("--start-x",`${B}px`),E.style.setProperty("--drift-x",`${M}px`),E.style.setProperty("--init-rot",`${b}deg`),E.style.setProperty("--spin-rot",`${w}deg`),E.style.animation=`fpContinuousRainFall ${y}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,i.appendChild(E),setTimeout(()=>{E.remove()},y*1e3+60)};for(let E=0;E<10;E++)setTimeout(a,E*45);u.className="fp-rising-flood",u.style.height="0%",u.offsetWidth,u.classList.add("surge-full"),o&&o.classList.add("stage-transition-dim"),setTimeout(()=>{n.style.display="none",n.classList.remove("active"),typeof window.__stopShopParticles=="function"&&window.__stopShopParticles(),n.style.opacity="",n.style.transform="",o&&o.classList.remove("shop-mode-wide"),s.style.display="",s.style.opacity="1",Fu(!0),wu=!1;try{window.scrollTo({left:0,behavior:"instant"});if(o)o.scrollLeft=0;const ch=document.getElementById("chat")||document.querySelector(".chat-container")||document.scrollingElement;if(ch)ch.scrollLeft=0}catch(_){};const E=s.querySelector(".billiard-stage");E&&E.remove();const p=e.getElementById("crest-top-heart-group");p&&(p.style.display="block",p.style.opacity="1",p.classList.remove("fill-overload","absorb-pulse")),au===0&&dt(),xt(),o&&(o.classList.remove("stage-transition-dim"),o.classList.add("stage-transition-brighten")),u.classList.remove("surge-full"),u.classList.add("reveal-shop"),setTimeout(()=>{t.style.transition="opacity 0.4s ease",t.style.opacity="0",setTimeout(()=>{t.classList.remove("active"),t.style.display="none",t.style.opacity="1",t.style.transition="",i.innerHTML="",u.className="fp-rising-flood",u.style.height="",o&&o.classList.remove("stage-transition-brighten"),Vu=!1},400)},750)},850)},Is=function(){if(window.innerWidth<=680){window.__startShopParticles=function(){};window.__stopShopParticles=function(){};return}const t=e.getElementById("shop-particles-canvas"),i=e.getElementById("eros-shop-inner-canvas")||e.getElementById("eros-shop-root");if(!t||!i)return;const u=t.getContext("2d");if(!u)return;const s=[{name:"\u6DF1\u7D2B\u8272",r:156,g:39,b:176},{name:"\u6D45\u7D2B\u8272",r:216,g:150,b:255},{name:"\u6DE1\u7C89\u8272",r:248,g:160,b:198},{name:"\u6DF1\u7C89\u8272",r:255,g:20,b:147},{name:"\u6DE1\u7EA2\u8272",r:255,g:75,b:90}];let n=0,o=0;const isMob=window.innerWidth<=680;const l=isMob?52:125;let r=[];function a(){try{if(!t||!i||!u)return;const y=i.getBoundingClientRect();n=y.width||i.offsetWidth||800,o=y.height||i.offsetHeight||600;const mobNow=window.innerWidth<=680;const D=mobNow?Math.min(window.devicePixelRatio||1,1.5):Math.min(window.devicePixelRatio||1,2);t.width=Math.floor(n*D),t.height=Math.floor(o*D);typeof u.setTransform=="function"&&u.setTransform(1,0,0,1,0,0);typeof u.scale=="function"&&u.scale(D,D)}catch{}}function E(y=!0){const D=s[Math.floor(Math.random()*s.length)],m=Math.random();let f="mote",c=2.2,L=8,$=-(.3+Math.random()*.5),S=.5+Math.random()*.45;return m<.14?(f="bokeh",c=6+Math.random()*6,L=c*2.5,$=-(.18+Math.random()*.32),S=.16+Math.random()*.22):m<.32?(f="spark",c=1+Math.random()*1.1,L=c*3.8,$=-(.45+Math.random()*.65),S=.7+Math.random()*.3):(f="mote",c=1.8+Math.random()*2.2,L=c*3.2,$=-(.28+Math.random()*.5),S=.4+Math.random()*.45),{x:Math.random()*(n||800),y:y?Math.random()*(o||600):(o||600)+12+Math.random()*30,radius:c,outerRadius:L,speedY:$,wobbleSpeed:.01+Math.random()*.02,wobbleAmp:.8+Math.random()*1.6,wobblePhase:Math.random()*Math.PI*2,preset:D,baseAlpha:S,twinkleSpeed:.018+Math.random()*.032,twinklePhase:Math.random()*Math.PI*2,type:f}}function p(){r=[];const total=window.innerWidth<=680?52:l;for(let y=0;y<total;y++)r.push(E(!0))}if(a(),p(),typeof ResizeObserver<"u")try{new ResizeObserver(()=>{a()}).observe(i)}catch{}let B=!1;function M(){if(B)try{const shopWrapper=e.getElementById("eros-shop-root");if(shopWrapper&&shopWrapper.style.display!=="none"&&shopWrapper.classList.contains("active")){u.clearRect(0,0,n,o),u.globalCompositeOperation="lighter";const mobNow=window.innerWidth<=680;for(let y=0;y<r.length;y++){const D=r[y];D.y+=D.speedY,D.wobblePhase+=D.wobbleSpeed,D.twinklePhase+=D.twinkleSpeed;const m=D.x+Math.sin(D.wobblePhase)*D.wobbleAmp,f=Math.max(.08,Math.min(1,D.baseAlpha+Math.sin(D.twinklePhase)*.28));if(D.y<-D.outerRadius-10){r[y]=E(!1);continue}const c=D.preset,L=u.createRadialGradient(m,D.y,0,m,D.y,D.outerRadius);if(mobNow){if(D.type==="bokeh"){L.addColorStop(0,"rgba("+c.r+","+c.g+","+c.b+","+(f*.6)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)")}else if(D.type==="spark"){L.addColorStop(0,"rgba(255,255,255,"+f+")"),L.addColorStop(.45,"rgba("+c.r+","+c.g+","+c.b+","+(f*.75)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)")}else{L.addColorStop(0,"rgba(255,255,255,"+(f*.9)+")"),L.addColorStop(.55,"rgba("+c.r+","+c.g+","+c.b+","+(f*.42)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)")}}else{D.type==="bokeh"?(L.addColorStop(0,"rgba("+c.r+","+c.g+","+c.b+","+(f*.7)+")"),L.addColorStop(.35,"rgba("+c.r+","+c.g+","+c.b+","+(f*.4)+")"),L.addColorStop(.7,"rgba("+c.r+","+c.g+","+c.b+","+(f*.12)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)")):D.type==="spark"?(L.addColorStop(0,"rgba(255,255,255,"+f+")"),L.addColorStop(.2,"rgba(255,255,255,"+(f*.9)+")"),L.addColorStop(.4,"rgba("+c.r+","+c.g+","+c.b+","+(f*.85)+")"),L.addColorStop(.75,"rgba("+c.r+","+c.g+","+c.b+","+(f*.25)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)")):(L.addColorStop(0,"rgba(255,255,255,"+(f*.95)+")"),L.addColorStop(.18,"rgba("+c.r+","+c.g+","+c.b+","+(f*.9)+")"),L.addColorStop(.5,"rgba("+c.r+","+c.g+","+c.b+","+(f*.38)+")"),L.addColorStop(.8,"rgba("+c.r+","+c.g+","+c.b+","+(f*.1)+")"),L.addColorStop(1,"rgba("+c.r+","+c.g+","+c.b+",0)"))}u.fillStyle=L,u.beginPath(),u.arc(m,D.y,D.outerRadius,0,Math.PI*2),u.fill();if(D.type==="spark"&&f>.6&&!mobNow){u.strokeStyle="rgba(255,255,255,"+(f*.6)+")",u.lineWidth=.8;const $=D.outerRadius*.85;u.beginPath(),u.moveTo(m-$,D.y),u.lineTo(m+$,D.y),u.moveTo(m,D.y-$),u.lineTo(m,D.y+$),u.stroke()}}Gu=requestAnimationFrame(M)}else{B=!1,Gu=null}}catch{B=!1,Gu=null}}function b(){if(window.innerWidth<=680){B=!1;return}B||(B=!0,a(),(!r||r.length===0)&&p(),Gu&&cancelAnimationFrame(Gu),Gu=requestAnimationFrame(M))}function w(){B=!1,Gu&&(cancelAnimationFrame(Gu),Gu=null),u&&u.clearRect(0,0,n,o)}window.__startShopParticles=b,window.__stopShopParticles=w,i&&i.classList.contains("active")&&i.style.display!=="none"&&b()},Ps=function(){Is();const t=e.getElementById("shop-close-btn"),i=e.getElementById("shop-restock-btn"),u=e.getElementById("restock-drawer-container"),s=e.getElementById("restock-drawer-panel"),n=e.getElementById("restock-toast"),o=e.querySelectorAll(".restock-tier-btn"),l=e.getElementById("dispatch-restock-btn"),r=e.getElementById("shop-location-btn"),a=e.getElementById("shop-location-text"),E=lu();a&&(a.textContent=E.currentLocation||"\u8389\u8389\u4E1D\u5B9D\u5E93");let p=!1,B;function M(){r&&(r.style.left="",r.style.right="")}window.syncShopTopBarButtons=M;if(window.__LILITH_RESIZE_M__){window.removeEventListener("resize",window.__LILITH_RESIZE_M__);}window.__LILITH_RESIZE_M__=M;window.addEventListener("resize",M);if(window.ResizeObserver){const F=new ResizeObserver(()=>{M()}),C=e.querySelector(".shop-top-bar"),h=e.querySelector(".shop-plaque-board");C&&F.observe(C),h&&F.observe(h),i&&F.observe(i)}setTimeout(M,60),setTimeout(M,300),e.addEventListener("click",F=>{if(p&&u&&s){const C=F.target,h=i&&(C===i||i.contains(C));!u.contains(C)&&!h&&w()}});function b(F){!i||i.style.pointerEvents==="none"||(F?i.innerHTML='<span class="restock-btn-icon" style="font-size: 13px; filter: drop-shadow(0 0 4px #ff69b4);">\u274C</span><span class="restock-btn-text" style="letter-spacing: 1px;">\u6536\u56DE</span>':i.innerHTML='<span class="restock-btn-icon" style="font-size: 13px; filter: drop-shadow(0 0 4px #ff69b4);">\u{1F4E6}</span><span class="restock-btn-text" style="letter-spacing: 1px;">\u8FDB\u8D27</span>')}function w(){p=!1,b(!1),u&&s&&(u.style.height="0",s.style.transform="translateY(-100%)");const F=e.querySelector(".restock-tier-btn.selected");if(F){const C=parseInt(F.getAttribute("data-cost")||"0",10);Eu(U+C),F.classList.remove("selected"),F.style.borderColor="",F.style.background="",F.style.boxShadow="";const h=F.querySelector(".restock-tier-name"),d=F.querySelector(".restock-tier-cost"),x=F.querySelector(".restock-check-mark");h&&(h.style.color=""),d&&(d.style.color=""),x&&(x.style.display="none")}}function y(F,C=!1){n&&(n.textContent=F,n.style.borderColor=C?"#ff0000":"#ff1493",n.style.boxShadow=C?"0 0 15px rgba(255, 0, 0, 0.6)":"0 0 15px rgba(255, 20, 147, 0.6)",n.style.textShadow=C?"0 0 4px #ff0000":"0 0 4px #ff1493",n.style.opacity="1",n.style.transform="translateX(-50%) translateY(0)",clearTimeout(B),B=setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(-50%) translateY(20px)"},2500))}if(l&&(l.onclick=F=>{F.stopPropagation();const C=e.querySelector(".restock-tier-btn.selected");if(!C){y("\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u8FDB\u8D27\u5730\u70B9\uFF01",!0);return}const h=C.getAttribute("data-tier"),d=parseInt(C.getAttribute("data-cost")||"0",10);C.classList.remove("selected"),C.style.borderColor="",C.style.background="",C.style.boxShadow="";const _xM=C.querySelector(".restock-check-mark");_xM&&(_xM.style.display="none");const _xN=C.querySelector(".restock-tier-name"),_xC=C.querySelector(".restock-tier-cost");_xN&&(_xN.style.color=""),_xC&&(_xC.style.color="");const x=G.find(H=>H.type==="loan"),A=x&&x.count||0,v=lu();let g=null;A>0&&(v.settledLoanCount=Math.min(5,(v.settledLoanCount||0)+A),g={settlingCount:A,totalCount:v.settledLoanCount},G=G.filter(H=>H.type!=="loan"),V(),typeof window.syncShopLoanDrawer=="function"&&window.syncShopLoanDrawer()),p=!1,u&&s&&(u.style.height="0",s.style.transform="translateY(-100%)"),v.hasEverRestocked=!0,v.currentLocation=h;const q=ks(h);v.currentGoodsMap=q.goodsMap,v.currentDailyDeal=q.dailyDeal,v.currentWhispers=q.whispers,v.settledPurchasedItemIds=v.settledPurchasedItemIds.filter(H=>H!=="deal-special-item"&&!jt.some(fu=>fu.itemId===H)),ju(v),lt.setLocation(h),i&&(b(!1),i.style.opacity="0.5",i.style.pointerEvents="none",i.innerHTML='<span class="restock-btn-icon" style="font-size: 14px;">\u2708\uFE0F</span><span class="restock-btn-text">\u6D3E\u9063\u4E2D</span>');const P=ds(h||"\u8389\u8389\u4E1D\u5B9D\u5E93",d,g);a&&h&&(a.textContent=h,requestAnimationFrame(M));const O="\u3010\u7231\u6B32\u8FDB\u8D27\u6D3E\u9063\u5355.txt\u3011\u5DF2\u6302\u8F7D\u81F3\u5BF9\u8BDD\u9644\u4EF6\u680F \u{1F4C4}",I=A>0?`\uFF08\u5305\u542B\u751F\u6548 ${A} \u5F20\u501F\u636E\u5951\u7EA6\uFF09`:"";y(`\u5DF2\u6D88\u8017 ${d} FP${I}\uFF0C\u8389\u8389\u4E1D\u6B63\u524D\u5F80\u3010${h}\u3011\u641C\u5BFB\u73CD\u5B9D\u2026\uFF08\u8BF7\u70B9\u51FB\u53D1\u9001\u6D3E\u9063\u5355\u5B8C\u6210\u6D3E\u9063\uFF09`)}),i&&u&&s){const F=C=>{i.style.pointerEvents!=="none"&&(C.stopPropagation(),p=!p,b(p),p?(u.style.height=s.offsetHeight+"px",s.style.transform="translateY(0)"):w())};i.onclick=F,r&&(r.onclick=null),o.forEach(C=>{const h=C;h.onclick=d=>{d.stopPropagation();const x=h.classList.contains("selected"),A=parseInt(h.getAttribute("data-cost")||"0",10);if(x){Eu(U+A),h.classList.remove("selected");const v=h.querySelector(".restock-check-mark");v&&(v.style.display="none")}else{if(U<A){y(`FP\u4F59\u989D\u4E0D\u8DB3\u4EE5\u9009\u62E9\u3010${h.getAttribute("data-tier")}\u3011\uFF01`,!0),mt(A);return}const v=e.querySelector(".restock-tier-btn.selected");let g=0;if(v){g=parseInt(v.getAttribute("data-cost")||"0",10),v.classList.remove("selected");const P=v.querySelector(".restock-check-mark");P&&(P.style.display="none")}Eu(U+g-A),h.classList.add("selected");const q=h.querySelector(".restock-check-mark");q&&(q.style.display="flex")}}})}const D=e.getElementById("eros-shop-root"),m=e.getElementById("succubus-box-root"),f=e.getElementById("shop-fp-display"),c=e.getElementById("shop-toast");Eu(st()),t&&D&&m&&(t.onclick=F=>{F.stopPropagation(),p&&w(),typeof window.triggerErosShopExitTransition=="function"?window.triggerErosShopExitTransition():typeof bt=="function"&&bt()}),e.querySelectorAll(".fp-tier-btn").forEach(F=>{F.addEventListener("click",C=>{C.stopPropagation();const h=parseInt(F.getAttribute("data-fp")||"8000",10);if(Eu(h),c){const d=F.getAttribute("title")||"";c.textContent=`\u2728 FP \u4F59\u989D\u5207\u6362\u4E3A ${h.toLocaleString()} (${d})\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2200)}})});let $=0;const S=e.getElementById("mountain-left"),R=e.getElementById("mountain-right"),N=e.getElementById("shop-ground-banknotes"),tu=e.getElementById("hotspot-left"),eu=e.getElementById("hotspot-right");function hu(F){[S,R,N].filter(Boolean).forEach(d=>{d.classList.remove("opacity-mode-0","opacity-mode-1","opacity-mode-2"),d.classList.add(`opacity-mode-${F}`)});const h=["\u539F\u8272\u51DD\u5B9E (100%)","\u534A\u900F\u660E (45%)","\u6781\u5176\u900F\u660E (12%)"];c&&(c.textContent=`\u{1F4B0} \u94B1\u5E01\u5C71\u900F\u660E\u5EA6\u5DF2\u5207\u6362\u4E3A\u3010${h[F]}\u3011(\u8F7B\u89E6\u8FB9\u7F18\u5FAA\u73AF)`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),1800))}[tu,eu].forEach(F=>{F&&F.addEventListener("click",C=>{C.stopPropagation(),$=($+1)%3,hu($),Tu()})}),se();function Cu(){const F=e.getElementById("bar-wine-stack-container"),C=e.getElementById("wine-sticky-note"),h=e.getElementById("wine-sticky-note-text"),d=e.getElementById("note-icon-drink");if(!F)return;const x=lu(),A=G.filter(q=>q.type==="wine").reduce((q,P)=>q+P.count,0),v=x.settledWineCount+A;if(v>=20)F.classList.add("sold-out"),F.setAttribute("title","\u5DF2\u552E\u7F44~ \u672C\u6279\u6B21 20 \u74F6\u7F8E\u9152\u5DF2\u5168\u90E8\u552E\u51FA"),C&&(C.classList.add("is-sold-out"),C.setAttribute("title","\u5DF2\u552E\u7F44~ (\u7F8E\u9152\u5DF2\u5168\u90E8\u5C3D\u996E)")),h&&(h.textContent="\u5DF2\u552E\u7F44~"),d&&(d.textContent="\u{1F940}");else{F.classList.remove("sold-out");const q=20-v;F.setAttribute("title",`500\u4E00\u676F~ \u63A2\u7D22\u9152\u5806\u62BD\u53D6\u7279\u8C03\u73CD\u917F\u4E0E\u7A00\u6709\u79D8\u9732 (\u5269\u4F59 ${q}/20)`),C&&(C.classList.remove("is-sold-out"),C.setAttribute("title",`500\u4E00\u676F~ (\u8F7B\u89E6\u653E\u5165\u8D2D\u7269\u680F \xB7 \u5269\u4F59 ${q}/20)`)),h&&(h.textContent="500\u4E00\u676F~"),d&&(d.textContent="\u{1F377}")}}function V(){const F=e.getElementById("shop-cart-track"),C=e.getElementById("cart-item-count");if(!F||!C)return;Cu();const h=G.reduce((d,x)=>d+x.count,0);if(C.textContent=h.toString(),G.length===0){F.innerHTML=`
                    <div class="cart-empty-notice" id="cart-empty-notice">
                        <span class="empty-sparkle">\u2726</span>
                        <span class="empty-desc">\u79D8\u5323\u5C1A\u7A7A \xB7 \u70B9\u51FB\u9009\u8D2D\u5165\u5323</span>
                    </div>
                `;return}F.innerHTML="",G.forEach(d=>{const x=e.createElement("div");x.className=`shop-cart-item ${d.tier?"item-tier-"+d.tier:""}`,x.setAttribute("data-cart-id",d.id),x.setAttribute("title",`${d.name} (${d.price} FP) \xB7 \u8F7B\u89E6\u9000\u8FD8`);let A="";if(d.type==="box")A=`
                        <div class="cart-item-thumb">
                            <div class="cart-mini-box tier-${d.tier||"sr"}">
                                <span class="mini-bow">\u2665</span>
                            </div>
                        </div>
                    `;else if(d.type==="blindbox")A=`
                        <div class="cart-item-thumb">
                            <div class="cart-mini-box tier-blindbox">
                                <span class="mini-bow">\u2726</span>
                            </div>
                        </div>
                    `;else if(d.type==="wine"){let g="";d.id==="wine-nectar"||d.name==="\u7231\u6B32\u871C\u6DB2"?g=`
                            <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                                <ellipse cx="14" cy="28" rx="8" ry="2.5" fill="rgba(0,0,0,0.5)"/>
                                <path d="M9,9 L19,9 L21,15 C23,20 22,27 14,27 C6,27 5,20 7,15 Z" fill="url(#nectar-amber-grad)" stroke="#ffd54f" stroke-width="0.8"/>
                                <rect x="11" y="4" width="6" height="5" rx="1.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.6"/>
                                <circle cx="14" cy="18" r="2.5" fill="#fff" opacity="0.85"/>
                                <path d="M12,12 Q14,14 16,12" stroke="#fff" stroke-width="0.8" fill="none"/>
                            </svg>
                        `:d.id==="wine-lotion"||d.name==="\u82B3\u9999\u4E73\u6DB2"||d.name==="\u82B3\u9999\u7684\u4E73\u6DB2"?g=`
                            <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                                <ellipse cx="14" cy="28" rx="7" ry="2" fill="rgba(0,0,0,0.4)"/>
                                <rect x="8" y="11" width="12" height="16" rx="4" fill="url(#lotion-pink-grad)" stroke="#ff80ab" stroke-width="0.8"/>
                                <rect x="12" y="7" width="4" height="4" fill="#f8bbd0"/>
                                <path d="M12,7 L7,7 C6,7 6,5 8,5 L14,5" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
                                <circle cx="14" cy="19" r="2" fill="#fff" opacity="0.85"/>
                            </svg>
                        `:d.id==="wine-kuchikami"||d.name==="\u8389\u8389\u4E1D\u724C\u53E3\u56BC\u9152"?g=`
                            <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                                <ellipse cx="14" cy="28" rx="8" ry="2.5" fill="rgba(0,0,0,0.5)"/>
                                <path d="M11,7 L17,7 L18,12 C22,16 23,26 14,26 C5,26 6,16 10,12 Z" fill="url(#kuchikami-pot-grad)" stroke="#ff4081" stroke-width="0.8"/>
                                <rect x="12" y="3" width="4" height="4" rx="1" fill="#e91e63"/>
                                <path d="M10,11 Q14,13 18,11" stroke="#ff1744" stroke-width="1.4"/>
                                <circle cx="14" cy="18" r="2.4" fill="#ff4081"/>
                                <text x="14" y="20" font-size="6" fill="#fff" text-anchor="middle" font-weight="bold">\u2665</text>
                            </svg>
                        `:d.id==="wine-champagne"||d.name==="\u99A5\u90C1\u9999\u69DF"?g=`
                            <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                                <ellipse cx="14" cy="28" rx="7" ry="2" fill="rgba(0,0,0,0.4)"/>
                                <path d="M10,2 L18,2 L19,10 C21,14 21,27 14,27 C7,27 7,14 9,10 Z" fill="url(#champagne-dark-glass)" stroke="#ffd700" stroke-width="0.8"/>
                                <rect x="12" y="2" width="4" height="6" fill="url(#gold-foil-grad)"/>
                                <circle cx="14" cy="17" r="1.5" fill="#ffd700" opacity="0.9"/>
                                <circle cx="16" cy="13" r="1" fill="#fff" opacity="0.8"/>
                                <circle cx="12" cy="21" r="1.2" fill="#ffd700" opacity="0.8"/>
                            </svg>
                        `:g=`
                            <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                                <ellipse cx="14" cy="28" rx="8" ry="2.5" fill="rgba(0,0,0,0.5)"/>
                                <path d="M11,6 L17,6 L18,12 C21,15 23,19 23,26 L5,26 C5,19 7,15 10,12 Z" fill="url(#dusky-pink-cognac)" stroke="#ff80ab" stroke-width="0.8"/>
                                <rect x="12" y="2" width="4" height="5" rx="1" fill="#ffd700"/>
                            </svg>
                        `,A=`
                        <div class="cart-item-thumb">
                            ${g}
                        </div>
                    `}else if(d.tier==="loan"||d.id==="loan-ticket-group")A=`
                        <div class="cart-item-thumb">
                            <div style="width: 22px; height: 32px; background: linear-gradient(180deg, #6e0c3d 0%, #290217 100%); border: 1px solid #ffd700; border-radius: 2px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 4px #ffd700;">
                                <span style="font-size: 6px; color: #ffd700; line-height: 1; font-weight: 800;">2000</span>
                                <span style="writing-mode: vertical-rl; font-size: 7px; color: #fff; font-family: serif; letter-spacing: 1px;">\u501F\u7968</span>
                            </div>
                        </div>
                    `;else{let g=`
                        <svg viewBox="0 0 32 28" width="28" height="24" fill="none">
                            <ellipse cx="16" cy="20" rx="14" ry="5" fill="rgba(255,182,193,0.3)" stroke="#ff80ab" stroke-width="0.8"/>
                            <path d="M8,12 C8,7 12,5 16,5 C20,5 24,7 24,12 C24,14 20,15 16,15 C12,15 8,14 8,12 Z" fill="#ff4081"/>
                            <circle cx="12" cy="18" r="3.5" fill="#ff1744"/>
                            <circle cx="20" cy="18" r="3.5" fill="#ffd700"/>
                        </svg>
                    `;d.id==="food-macaron"?g=`
                            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
                                <ellipse cx="14" cy="20" rx="10" ry="4" fill="#ff4081"/>
                                <rect x="5" y="15" width="18" height="3" rx="1" fill="#fff"/>
                                <ellipse cx="14" cy="14" rx="10" ry="4" fill="#ba68c8"/>
                                <circle cx="14" cy="9" r="3" fill="#ffd700"/>
                            </svg>
                        `:d.id==="food-chocolate"?g=`
                            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
                                <path d="M14,24 C6,18 2,11 5,5 C8,0 13,1 14,5 C15,1 20,0 23,5 C26,11 22,18 14,24 Z" fill="#4a1525" stroke="#ffd700" stroke-width="1"/>
                                <circle cx="14" cy="12" r="1.5" fill="#ffd700"/>
                            </svg>
                        `:d.id==="food-nacho"?g=`
                            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
                                <polygon points="6,22 14,6 22,22" fill="#ffb300" stroke="#e65100" stroke-width="1"/>
                                <path d="M10,16 Q14,14 18,17" stroke="#fff" stroke-width="1" fill="none"/>
                            </svg>
                        `:d.id==="food-chicken"?g=`
                            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
                                <path d="M6,18 C5,10 12,6 18,8 C23,10 24,18 20,22 C16,24 8,23 6,18 Z" fill="#f57c00" stroke="#fff" stroke-width="0.8"/>
                                <circle cx="13" cy="14" r="2" fill="#ffe082"/>
                            </svg>
                        `:d.id==="food-berries"&&(g=`
                            <svg viewBox="0 0 28 28" width="26" height="26" fill="none">
                                <path d="M14,22 C9,22 6,15 10,9 C12,6 16,6 18,9 C22,15 19,22 14,22 Z" fill="#e91e63" stroke="#fff" stroke-width="0.8"/>
                                <circle cx="7" cy="18" r="3.5" fill="#1a237e"/>
                                <circle cx="21" cy="18" r="3.5" fill="#311b92"/>
                            </svg>
                        `),A=`
                        <div class="cart-item-thumb">
                            ${g}
                        </div>
                    `}const v=d.count>1?`<span class="cart-item-counter">\xD7 ${d.count}</span>`:"";x.innerHTML=`
                    ${v}
                    ${A}
                    <div class="cart-item-title">${d.name}</div>
                    <div class="cart-item-price">${d.price} FP</div>
                    <div class="cart-return-overlay">
                        <span class="return-arrow">\u21A9</span>
                        <span class="return-text">\u9000\u8FD8</span>
                    </div>
                `,x.addEventListener("click",g=>{g.stopPropagation(),!Yt&&pu(d,x)}),F.appendChild(x)})}function du(){
  const F=e.getElementById("shop-cart-track");
  if(!F)return;
  let C=0,h=0;
  const onCartMove=d=>{
    if(!Xt)return;
    const A=d.pageX-F.offsetLeft-Ze;
    F.scrollLeft=Ve-A;
    const v=Math.abs(d.clientX-C),g=Math.abs(d.clientY-h);
    v>10&&v>g*1.5&&(Yt=!0);
  };
  const onCartUp=()=>{
    if(Xt){
      Xt=!1;
      setTimeout(()=>{Yt=!1;},60);
    }
    window.removeEventListener("mousemove",onCartMove);
    window.removeEventListener("mouseup",onCartUp);
  };
  F.addEventListener("mousedown",d=>{
    Xt=!0;
    Yt=!1;
    Ze=d.pageX-F.offsetLeft;
    Ve=F.scrollLeft;
    C=d.clientX;
    h=d.clientY;
    window.addEventListener("mousemove",onCartMove);
    window.addEventListener("mouseup",onCartUp);
  });
  F.addEventListener("wheel",d=>{
    d.deltaY!==0&&(F.scrollLeft+=d.deltaY*.7,d.preventDefault());
  },{passive:!1});
}function Lu(F,C,h,d){const x=e.getElementById("shop-cart-module");if(!x){d();return}const A=x.getBoundingClientRect(),v=F.left+F.width/2,g=F.top+F.height/2,q=A.left+55,P=A.top+60,O=e.createElement("div");if(O.className="shop-flying-proxy",C==="box")O.innerHTML=`
                    <div class="cart-mini-box tier-${h||"sr"}" style="width: 38px; height: 38px;">
                        <span class="mini-bow" style="font-size: 13px;">\u2665</span>
                    </div>
                `;else if(C==="blindbox")O.innerHTML=`
                    <div class="cart-mini-box tier-blindbox" style="width: 34px; height: 34px;">
                        <span class="mini-bow" style="font-size: 12px;">\u2726</span>
                    </div>
                `;else if(C==="wine")h==="wine-nectar"?O.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 24px; filter: drop-shadow(0 4px 12px rgba(255,160,0,0.9)); background: radial-gradient(circle, rgba(255,193,7,0.5) 0%, rgba(35,12,0,0.9) 100%); border: 1.5px solid #ffd54f; border-radius: 50%;">
                            \u{1F36F}
                        </div>
                    `:h==="wine-lotion"?O.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 24px; filter: drop-shadow(0 4px 12px rgba(236,64,122,0.9)); background: radial-gradient(circle, rgba(244,143,177,0.5) 0%, rgba(35,5,25,0.9) 100%); border: 1.5px solid #f48fb1; border-radius: 50%;">
                            \u{1F9F4}
                        </div>
                    `:h==="wine-kuchikami"?O.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 24px; filter: drop-shadow(0 4px 12px rgba(255,20,147,0.9)); background: radial-gradient(circle, rgba(255,64,129,0.5) 0%, rgba(40,0,20,0.9) 100%); border: 1.5px solid #ff4081; border-radius: 50%;">
                            \u{1F376}
                        </div>
                    `:h==="wine-champagne"?O.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 24px; filter: drop-shadow(0 4px 12px rgba(255,215,0,0.9)); background: radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(30,25,0,0.9) 100%); border: 1.5px solid #ffd700; border-radius: 50%;">
                            \u{1F37E}
                        </div>
                    `:O.innerHTML=`
                        <svg viewBox="0 0 28 32" width="34" height="38" fill="none">
                            <ellipse cx="14" cy="28" rx="8" ry="2.5" fill="rgba(0,0,0,0.5)"/>
                            <path d="M11,6 L17,6 L18,12 C21,15 23,19 23,26 L5,26 C5,19 7,15 10,12 Z" fill="url(#dusky-pink-cognac)" stroke="#ff80ab" stroke-width="1.2"/>
                            <rect x="12" y="2" width="4" height="5" rx="1" fill="#ffd700"/>
                        </svg>
                    `;else{let K="\u{1F353}";h==="food-macaron"?K="\u{1F9C1}":h==="food-chocolate"?K="\u{1F36B}":h==="food-nacho"?K="\u{1F9C0}":h==="food-chicken"?K="\u{1F357}":h==="food-berries"&&(K="\u{1F352}"),O.innerHTML=`
                    <div class="cart-flying-food-bubble" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 26px; filter: drop-shadow(0 4px 12px rgba(255,20,147,0.8)); background: radial-gradient(circle, rgba(255,105,180,0.4) 0%, rgba(20,2,15,0.85) 100%); border: 1.5px solid #ff80ab; border-radius: 50%;">
                        ${K}
                    </div>
                `}O.style.left=`${v}px`,O.style.top=`${g}px`,O.style.transform="translate(-50%, -50%) scale(1.1)",e.body.appendChild(O);const I=performance.now(),H=520,fu=(v+q)/2-40,Su=Math.min(g,P)-85;let W=0;function Y(K){const uu=K-I,Q=Math.min(uu/H,1),su=Q*Q*(3-2*Q),yu=Math.pow(1-su,2)*v+2*(1-su)*su*fu+Math.pow(su,2)*q,cu=Math.pow(1-su,2)*g+2*(1-su)*su*Su+Math.pow(su,2)*P,Pu=1.1-.7*su,ou=-25*su;if(O.style.left=`${yu}px`,O.style.top=`${cu}px`,O.style.transform=`translate(-50%, -50%) scale(${Pu}) rotate(${ou}deg)`,W++,W%3===0&&Q<.95){const vu=e.createElement("div");vu.className="shop-flying-trail-spark",vu.textContent=["\u2728","\u2726","\u{1F496}","\u2605"][Math.floor(Math.random()*4)],vu.style.left=`${yu}px`,vu.style.top=`${cu}px`,vu.style.color=["#ff1493","#ffd700","#ff80ab","#ffffff"][Math.floor(Math.random()*4)];const Ft=(Math.random()-.5)*20,ut=(Math.random()-.5)*20;vu.style.setProperty("--tx",`${Ft}px`),vu.style.setProperty("--ty",`${ut}px`),e.body.appendChild(vu),setTimeout(()=>vu.remove(),600)}Q<1?requestAnimationFrame(Y):(O.remove(),x.classList.remove("cart-item-landed"),x.offsetWidth,x.classList.add("cart-item-landed"),setTimeout(()=>x.classList.remove("cart-item-landed"),380),d())}requestAnimationFrame(Y)}function T(F,C,h,d,x){const A=F.left+F.width/2,v=F.top+F.height/2,g=C.left+C.width/2,q=C.top+C.height/2,P=e.createElement("div");if(P.className="shop-flying-proxy",h==="box")P.innerHTML=`
                    <div class="cart-mini-box tier-${d||"sr"}" style="width: 26px; height: 26px;">
                        <span class="mini-bow" style="font-size: 10px;">\u2665</span>
                    </div>
                `;else if(h==="blindbox")P.innerHTML=`
                    <div class="cart-mini-box tier-blindbox" style="width: 26px; height: 26px;">
                        <span class="mini-bow" style="font-size: 10px;">\u2726</span>
                    </div>
                `;else if(h==="wine")d==="wine-nectar"?P.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; filter: drop-shadow(0 4px 10px rgba(255,160,0,0.8)); background: radial-gradient(circle, rgba(255,193,7,0.4) 0%, rgba(35,12,0,0.9) 100%); border: 1.5px solid #ffd54f; border-radius: 50%;">
                            \u{1F36F}
                        </div>
                    `:d==="wine-lotion"?P.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; filter: drop-shadow(0 4px 10px rgba(236,64,122,0.8)); background: radial-gradient(circle, rgba(244,143,177,0.4) 0%, rgba(35,5,25,0.9) 100%); border: 1.5px solid #f48fb1; border-radius: 50%;">
                            \u{1F9F4}
                        </div>
                    `:d==="wine-kuchikami"?P.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; filter: drop-shadow(0 4px 10px rgba(255,20,147,0.8)); background: radial-gradient(circle, rgba(255,64,129,0.4) 0%, rgba(40,0,20,0.9) 100%); border: 1.5px solid #ff4081; border-radius: 50%;">
                            \u{1F376}
                        </div>
                    `:d==="wine-champagne"?P.innerHTML=`
                        <div class="cart-flying-food-bubble" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; filter: drop-shadow(0 4px 10px rgba(255,215,0,0.8)); background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(30,25,0,0.9) 100%); border: 1.5px solid #ffd700; border-radius: 50%;">
                            \u{1F37E}
                        </div>
                    `:P.innerHTML=`
                        <svg viewBox="0 0 28 32" width="26" height="28" fill="none">
                            <ellipse cx="14" cy="28" rx="8" ry="2.5" fill="rgba(0,0,0,0.5)"/>
                            <path d="M11,6 L17,6 L18,12 C21,15 23,19 23,26 L5,26 C5,19 7,15 10,12 Z" fill="url(#dusky-pink-cognac)" stroke="#ff80ab" stroke-width="1"/>
                        </svg>
                    `;else{let Y="\u{1F353}";d==="food-macaron"?Y="\u{1F9C1}":d==="food-chocolate"?Y="\u{1F36B}":d==="food-nacho"?Y="\u{1F9C0}":d==="food-chicken"?Y="\u{1F357}":d==="food-berries"&&(Y="\u{1F352}"),P.innerHTML=`
                    <div class="cart-flying-food-bubble" style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 22px; filter: drop-shadow(0 4px 10px rgba(255,20,147,0.7)); background: radial-gradient(circle, rgba(255,105,180,0.3) 0%, rgba(20,2,15,0.8) 100%); border: 1.5px solid #ff80ab; border-radius: 50%;">
                        ${Y}
                    </div>
                `}P.style.left=`${A}px`,P.style.top=`${v}px`,P.style.transform="translate(-50%, -50%) scale(0.4)",e.body.appendChild(P);const O=performance.now(),I=480,H=(A+g)/2+30,fu=Math.min(v,q)-75;let Su=0;function W(Y){const K=Y-O,uu=Math.min(K/I,1),Q=uu*uu*(3-2*uu),su=Math.pow(1-Q,2)*A+2*(1-Q)*Q*H+Math.pow(Q,2)*g,yu=Math.pow(1-Q,2)*v+2*(1-Q)*Q*fu+Math.pow(Q,2)*q,cu=.4+.6*Q,Pu=25*Q;if(P.style.left=`${su}px`,P.style.top=`${yu}px`,P.style.transform=`translate(-50%, -50%) scale(${cu}) rotate(${Pu}deg)`,Su++,Su%3===0&&uu<.95){const ou=e.createElement("div");ou.className="shop-flying-trail-spark",ou.textContent="\u2728",ou.style.left=`${su}px`,ou.style.top=`${yu}px`,ou.style.color="#ffd700";const vu=(Math.random()-.5)*16,Ft=(Math.random()-.5)*16;ou.style.setProperty("--tx",`${vu}px`),ou.style.setProperty("--ty",`${Ft}px`),e.body.appendChild(ou),setTimeout(()=>ou.remove(),500)}uu<1?requestAnimationFrame(W):(P.remove(),x())}requestAnimationFrame(W)}function nu(F,C,h){const d=F.left+F.width/2,x=F.top+F.height/2,A=C.left+C.width/2,v=C.top+C.height/2,g=e.createElement("div");g.className="loan-flying-ticket-proxy",g.innerHTML=`
                <div style="font-size: 7px; color: #ffd700; font-weight: 800; line-height: 1;">2000</div>
                <div class="ticket-vertical-title" style="font-size: 6.5px; color: #fff; font-family: serif; letter-spacing: -0.2px; white-space: nowrap;">\u7231\u6B32\u501F\u636E\u5951\u7EA6</div>
                <div style="font-size: 7px; line-height: 1;">\u{1F48B}</div>
            `,g.style.left=`${d}px`,g.style.top=`${x}px`,g.style.transform="translate(-50%, -50%) scale(0.65)",e.body.appendChild(g);const q=performance.now(),P=500,O=(d+A)/2+25,I=Math.min(x,v)-80;let H=0;function fu(Su){const W=Su-q,Y=Math.min(W/P,1),K=Y*Y*(3-2*Y),uu=Math.pow(1-K,2)*d+2*(1-K)*K*O+Math.pow(K,2)*A,Q=Math.pow(1-K,2)*x+2*(1-K)*K*I+Math.pow(K,2)*v,su=.65+.35*(1-K),yu=25*(1-K);if(g.style.left=`${uu}px`,g.style.top=`${Q}px`,g.style.transform=`translate(-50%, -50%) scale(${su}) rotate(${yu}deg)`,H++,H%2===0&&Y<.95){const cu=e.createElement("div");cu.className="shop-flying-trail-spark",cu.textContent=["\u2728","\u2726","\u{1F48B}","\u2605"][Math.floor(Math.random()*4)],cu.style.left=`${uu}px`,cu.style.top=`${Q}px`,cu.style.color="#ffd700";const Pu=(Math.random()-.5)*16,ou=(Math.random()-.5)*16;cu.style.setProperty("--tx",`${Pu}px`),cu.style.setProperty("--ty",`${ou}px`),e.body.appendChild(cu),setTimeout(()=>cu.remove(),500)}Y<1?requestAnimationFrame(fu):(g.remove(),h())}requestAnimationFrame(fu)}function pu(F,C){const h=C.getBoundingClientRect();if(F.type==="box"){const d=e.querySelector(`.goods-card[data-item-id="${F.itemId}"]`);if(!d)return;const x=d.getBoundingClientRect();Eu(U+F.price),G=G.filter(A=>A.id!==F.id),V(),T(h,x,"box",F.tier,()=>{d.classList.remove("in-cart-reserved","unveiled-rise"),d.querySelectorAll(".card-in-cart-overlay, .gift-box-cover, .box-heartbeat-ripple").forEach(g=>g.remove());const A=jt.find(g=>g.itemId===F.itemId);A&&(d.insertAdjacentHTML("afterbegin",Re(A)),He());const v=d.querySelector(".goods-buy-btn");v&&(v.disabled=!1,v.textContent="\u7ED3\u5951\u5151\u6362"),c&&(c.textContent=`\u21A9 \u5DF2\u9000\u56DE\u3010${F.name}\u3011\uFF0C\u6210\u529F\u8FD4\u8FD8 ${F.price.toLocaleString()} FP\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})}else if(F.type==="blindbox"){const d=e.querySelector(`.blindbox-card[data-blindbox-id="${F.id}"]`),x=d?d.getBoundingClientRect():h;Eu(U+F.price),G=G.filter(A=>A.id!==F.id),V(),T(h,x,"blindbox",void 0,()=>{d&&(d.classList.remove("in-cart-reserved"),d.querySelectorAll(".card-in-cart-overlay").forEach(A=>A.remove())),c&&(c.textContent=`\u21A9 \u5DF2\u9000\u56DE\u3010${F.name}\u3011\uFF0C\u6210\u529F\u8FD4\u8FD8 ${F.price} FP\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})}else if(F.type==="wine"){const d=e.getElementById("bar-wine-stack-container"),x=d?d.getBoundingClientRect():h;Eu(U+F.price),F.count-=1,F.count<=0&&(G=G.filter(A=>A.id!==F.id)),V(),T(h,x,"wine",F.id,()=>{c&&(c.textContent=`\u21A9 \u5DF2\u9000\u56DE 1 \u4EFD\u3010${F.name}\u3011\uFF0C\u6210\u529F\u8FD4\u8FD8 ${F.price.toLocaleString()} FP\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})}else if(F.type==="food")Eu(U+F.price),F.count-=1,F.count<=0&&(G=G.filter(d=>d.id!==F.id)),V(),c&&(c.textContent=`\u21A9 \u5DF2\u9000\u56DE 1 \u4EFD\u3010${F.name}\u3011\uFF0C\u6210\u529F\u8FD4\u8FD8 ${F.price} FP\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400));else if(F.type==="loan"){const d=window.returnShopLoanTicket,x=d?d():null,A=e.getElementById("loan-handle-unit"),v=x||(A?A.getBoundingClientRect():h);Eu(U-2e3),F.count-=1,F.count<=0&&(G=G.filter(g=>g.id!==F.id)),V(),nu(h,v,()=>{const g=e.createElement("div");g.className="cart-fp-cost-floating",g.textContent="-2,000 FP",g.style.left=`${h.left+h.width/2}px`,g.style.top=`${h.top}px`,e.body.appendChild(g),setTimeout(()=>g.remove(),1100),A&&(A.style.filter="drop-shadow(0 0 14px #ff3366)",setTimeout(()=>{A.style.filter=""},450)),c&&(c.textContent="\u21A9 \u5DF2\u9000\u8FD8 1 \u5F20\u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6\u3011\uFF0C2,000 FP \u5DF2\u9000\u8FD8\u91D1\u5E93\uFF0C\u989D\u5EA6\u5DF2\u6062\u590D~",c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})}else if(F.type==="deal"){const d=e.getElementById("deal-showcase-box"),x=d?d.getBoundingClientRect():h;Eu(U+F.price),G=G.filter(A=>A.id!==F.id),V(),T(h,x,"blindbox",void 0,()=>{const A=e.getElementById("deal-action-btn");A&&(A.disabled=!1,A.innerHTML='<span>\u7ACB\u5373\u62A2\u8D2D</span><span class="deal-btn-arrow">\u2192</span>'),c&&(c.textContent=`\u21A9 \u5DF2\u9000\u56DE\u4ECA\u65E5\u7279\u5356\u3010${F.name}\u3011\uFF0C\u6210\u529F\u8FD4\u8FD8 ${F.price.toLocaleString()} FP\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})}}function iu(){const F=lu(),C=F.currentLocation||e.getElementById("shop-location-text")?.textContent?.trim()||"\u8389\u8389\u4E1D\u5B9D\u5E93",h=e.querySelector("#cabinet-tier-blindbox .shelf-tier-name");h&&(h.textContent=`\u5E95\u5C42 \xB7 \u79D8\u85CF\u76F2\u76D2\u5C55\u53F0 \u3010\u6DF1\u84DD\u76F2\u76D2 \xB7 1,000 FP / \u4E2A\u3011 \xB7 \u6E90\u81EA${C}`),e.querySelectorAll(".blindbox-card").forEach(x=>{const A=x,v=A.getAttribute("data-blindbox-id")||"",g=F.settledPurchasedItemIds.includes(v),q=G.some(H=>H.id===v),P=A.getAttribute("data-base-name")||A.getAttribute("data-name")?.replace(/\s*·\s*源自.*$/,"")||"\u6DF1\u84DD\u9B45\u5F71 \xB7 \u79D8\u613F\u76F2\u76D2";A.setAttribute("data-base-name",P);const O=`${P} \xB7 \u6E90\u81EA${C}`;A.setAttribute("data-name",O),A.setAttribute("title",`${O} \xB7 1,000 FP (\u8F7B\u89E6\u76F4\u63A5\u6536\u5165\u8D2D\u7269\u680F)`),g?(A.classList.add("in-cart-reserved","already-settled-item"),A.querySelectorAll(".card-in-cart-overlay").forEach(H=>H.remove()),A.insertAdjacentHTML("beforeend",`
                        <div class="card-in-cart-overlay settled-seal-overlay">
                            <div class="in-cart-seal" style="font-size:11px;">\u2665 \u5951\u7EA6\u8FBE\u6210 \xB7 \u73CD\u5B9D\u5DF2\u4EA4\u4ED8</div>
                            <div class="in-cart-sub" style="font-size:9.5px;">\u5DF2\u552E\u7F44</div>
                        </div>
                    `)):q?(A.classList.add("in-cart-reserved"),A.classList.remove("already-settled-item"),A.querySelectorAll(".card-in-cart-overlay").forEach(H=>H.remove()),A.insertAdjacentHTML("beforeend",`
                        <div class="card-in-cart-overlay">
                            <div class="in-cart-seal">\u2665 \u5DF2\u6536\u5165\u6B22\u6109\u79D8\u5323</div>
                            <div class="in-cart-sub">\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8</div>
                        </div>
                    `)):(A.classList.remove("in-cart-reserved","already-settled-item"),A.querySelectorAll(".card-in-cart-overlay").forEach(H=>H.remove()));const I=A.cloneNode(!0);A.parentNode?.replaceChild(I,A),I.addEventListener("click",H=>{H.stopPropagation();const fu=I.getAttribute("data-blindbox-id")||"",Su=I.getAttribute("data-name")||`${I.getAttribute("data-base-name")||"\u6DF1\u84DD\u9B45\u5F71 \xB7 \u79D8\u613F\u76F2\u76D2"} \xB7 \u6E90\u81EA${C}`,W=parseInt(I.getAttribute("data-price")||"1000",10);if(lu().settledPurchasedItemIds.includes(fu)){c&&(c.textContent=`\u{1F52E} \u76F2\u76D2\u3010${Su}\u3011\u5DF2\u5728\u65E9\u524D\u7ED3\u5951\u4EA4\u4ED8\uFF0C\u65E0\u6CD5\u91CD\u590D\u8D2D\u4E70\u54E6~`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2200));return}if(G.some(uu=>uu.id===fu)){c&&(c.textContent=`\u2665 \u3010${Su}\u3011\u5DF2\u5728\u6B22\u6109\u79D8\u5323\u4E2D\uFF0C\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8\u3002`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2200));return}if(U<W){mt(W);return}Eu(U-W);const K=I.getBoundingClientRect();I.classList.add("in-cart-reserved"),I.querySelectorAll(".card-in-cart-overlay").forEach(uu=>uu.remove()),I.insertAdjacentHTML("beforeend",`
                        <div class="card-in-cart-overlay">
                            <div class="in-cart-seal">\u2665 \u5DF2\u6536\u5165\u6B22\u6109\u79D8\u5323</div>
                            <div class="in-cart-sub">\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8</div>
                        </div>
                    `),Lu(K,"blindbox",void 0,()=>{G.push({id:fu,type:"blindbox",name:Su,tier:"blindbox",price:W,count:1}),V(),c&&(c.textContent=`\u2728 \u79D8\u5323\u76F8\u5438\uFF01\u6D88\u8017 ${W} FP \u5C06\u3010${Su}\u3011\u76F4\u63A5\u6536\u5165\u6B22\u6109\u79D8\u5323\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2600))})})})}window.__initBlindBoxSystem=iu,du(),V(),xt(),iu(),e.querySelectorAll(".goods-buy-btn").forEach(F=>{F.addEventListener("click",C=>{C.stopPropagation();const h=C.currentTarget,d=h.closest(".goods-card");if(!d)return;const x=d.getAttribute("data-item-id")||"",A=h.getAttribute("data-name")||"\u9B45\u9B54\u79D8\u5B9D",v=parseInt(h.getAttribute("data-price")||"500",10),g=jt.find(I=>I.itemId===x);if(lu().settledPurchasedItemIds.includes(x)){c&&(c.textContent=`\u2665 \u3010${A}\u3011\u6B64\u524D\u5DF2\u5B8C\u6210\u5951\u7EA6\u4EA4\u4ED8\uFF0C\u65E0\u6CD5\u91CD\u590D\u5151\u6362\u54E6~`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2200));return}if(G.some(I=>I.id===x)){c&&(c.textContent=`\u2665 \u3010${A}\u3011\u5DF2\u5728\u6B22\u6109\u79D8\u5323\u4E2D\uFF0C\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8\u3002`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2200));return}if(U<v){mt(v);return}Eu(U-v),h.style.transform="scale(0.92)",setTimeout(()=>h.style.transform="",160);const P=d.querySelector(".gift-box-cover"),O=()=>{const I=d.getBoundingClientRect();d.classList.add("in-cart-reserved"),d.querySelectorAll(".gift-box-cover, .box-heartbeat-ripple, .card-in-cart-overlay").forEach(H=>H.remove()),d.insertAdjacentHTML("beforeend",`
                        <div class="card-in-cart-overlay">
                            <div class="in-cart-seal">\u2665 \u5DF2\u6536\u5165\u6B22\u6109\u79D8\u5323</div>
                            <div class="in-cart-sub">\u8F7B\u89E6\u5DE6\u4E0A\u65B9\u8D2D\u7269\u680F\u53EF\u9000\u8FD8</div>
                        </div>
                    `),h.disabled=!0,h.textContent="\u5DF2\u5728\u79D8\u5323",Lu(I,"box",g?.tier,()=>{G.push({id:x,type:"box",itemId:x,name:A,tier:g?.tier,price:v,count:1}),V(),c&&(c.textContent=`\u2728 \u5951\u7EA6\u7F14\u7ED3\uFF01\u6D88\u8017 ${v} FP \u6210\u529F\u5C06\u3010${A}\u3011\u6536\u5165\u6B22\u6109\u79D8\u5323\uFF01`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2600))})};if(!P&&g){d.querySelectorAll(".card-in-cart-overlay").forEach(H=>H.remove());const I=e.createElement("div");I.className="gift-box-cover repacking",I.setAttribute("data-tier",g.tier),I.setAttribute("data-item-id",g.itemId),I.innerHTML=`
                        <div class="box-lid-surface">
                            ${g.shimmerClass?`<div class="${g.shimmerClass}"></div>`:""}
                            <div class="box-inner-stitch"></div>
                            <div class="box-ribbon ribbon-horizontal"><div class="ribbon-shine"></div></div>
                            <div class="box-ribbon ribbon-vertical"><div class="ribbon-shine"></div></div>
                            <div class="gift-tag-card">
                                <div class="tag-pin-hole"></div>
                                <div class="tag-silk-thread"></div>
                                <div class="tag-grade-stamp"><span>${g.gradeStamp}</span><span>\u2726</span></div>
                                <div class="tag-whisper-text">${g.whisperText}</div>
                                <div class="tag-lip-kiss">\u{1F48B}</div>
                                <div class="tag-tap-hint">\u8F7B\u89E6\u62C6\u542F \u2726</div>
                            </div>
                            <div class="box-bow-center">
                                <div class="bow-tail tail-left"></div>
                                <div class="bow-tail tail-right"></div>
                                <div class="bow-loop loop-left"><div class="loop-inner-fold"></div><div class="loop-shine"></div></div>
                                <div class="bow-loop loop-right"><div class="loop-inner-fold"></div><div class="loop-shine"></div></div>
                                <div class="bow-knot"><span class="bow-knot-gem">\u2665</span></div>
                            </div>
                        </div>
                    `,d.prepend(I),setTimeout(()=>{O()},460)}else O()})}),e.querySelectorAll(".goods-card").forEach(F=>{F.addEventListener("click",C=>{if(F.querySelector(".gift-box-cover")||F.classList.contains("in-cart-reserved"))return;const h=F.querySelector(".goods-buy-btn");h&&C.target!==h&&!h.disabled&&h.click()})});const Qu=e.getElementById("bar-wine-stack-container");Qu&&Qu.addEventListener("click",F=>{F.stopPropagation();const C=lu(),h=G.filter(v=>v.type==="wine").reduce((v,g)=>v+g.count,0);if(C.settledWineCount+h>=20)return;const d=500;if(U<d){mt(d);return}const x=Ms();Eu(U-d);const A=Qu.getBoundingClientRect();Qu.style.transform="translateY(2px) scale(0.96)",setTimeout(()=>{Qu.style.transform=""},180),Lu(A,"wine",x.id,()=>{const v=G.find(g=>g.id===x.id);if(v?v.count+=1:G.push({id:x.id,type:"wine",name:x.name,price:500,count:1}),V(),c){const g=v?v.count:1;let q="\u{1F377}";x.id==="wine-nectar"?q="\u{1F36F}":x.id==="wine-lotion"?q="\u{1F9F4}":x.id==="wine-kuchikami"?q="\u{1F376}":x.id==="wine-champagne"&&(q="\u{1F37E}");const P=G.filter(O=>O.type==="wine").reduce((O,I)=>O+I.count,0);P>=20?c.textContent=`${q} \u63A2\u7D22\u9152\u5806\u62BD\u53D6\u5230\u4E86\u3010${x.name}\u3011\uFF01\u5DF2\u5165\u6B22\u6109\u79D8\u5323 (\xD7${g}) \xB7 \u672C\u6279\u6B21 20 \u74F6\u7F8E\u9152\u5DF2\u5168\u90E8\u552E\u7F44~`:c.textContent=`${q} \u63A2\u7D22\u9152\u5806\u62BD\u53D6\u5230\u4E86\u3010${x.name}\u3011\uFF01\u5DF2\u5165\u6B22\u6109\u79D8\u5323 (\xD7${g}) \xB7 \u5269\u4F59 ${20-P}/20`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400)}})});function Zt(){const F=e.getElementById("shop-crystal-cabinet"),C=e.getElementById("shop-cart-module"),h=e.getElementById("shop-daily-deal-module"),d=e.getElementById("lilith-shop-dialog-module");if(F&&C){const x=F.offsetTop;if(x>0&&(C.style.top=`${x}px`,h)){const A=x+C.offsetHeight+10;h.style.top=`${A}px`,d&&(d.style.top=`${A+h.offsetHeight+14}px`)}}}Zt();if(window.__LILITH_RESIZE_ZT__){window.removeEventListener("resize",window.__LILITH_RESIZE_ZT__);}window.__LILITH_RESIZE_ZT__=Zt;window.addEventListener("resize",Zt);function kt(){const F=e.getElementById("deal-action-btn"),C=e.getElementById("deal-showcase-box"),h=lu(),d=h.currentDailyDeal||Zu;if(C&&d){const v=C.querySelector(".deal-grade-badge");v&&(v.textContent=d.grade);const g=C.querySelector(".deal-goods-name");g&&(g.textContent=d.name);const q=C.querySelector(".deal-goods-type");q&&(q.textContent=d.type);const P=C.querySelector(".deal-goods-tags-row");P&&(P.innerHTML=d.tags.map(fu=>`<span class="goods-tag">${fu}</span>`).join(""));const O=C.querySelector(".deal-goods-desc");O&&(O.textContent=d.desc);const I=C.querySelector(".deal-original-price");I&&d.originalPrice&&(I.textContent=`${d.originalPrice.toLocaleString()} FP`);const H=C.querySelector(".deal-special-price");H&&(H.innerHTML=`${d.price.toLocaleString()} <span class="deal-price-unit">FP</span>`),F&&(F.setAttribute("data-name",d.name),F.setAttribute("data-price",String(d.price)))}if(!F)return;const x=h.settledPurchasedItemIds.includes("deal-special-item"),A=G.some(v=>v.id==="deal-special-item");x?(F.disabled=!0,F.innerHTML="<span>\u5DF2\u7ED3\u5951\u4EA4\u4ED8</span>"):A?(F.disabled=!0,F.innerHTML="<span>\u5DF2\u5165\u79D8\u5323</span>"):(F.disabled=!1,F.innerHTML='<span>\u7ACB\u5373\u62A2\u8D2D</span><span class="deal-btn-arrow">\u2192</span>')}window.__updateDailyDealState=kt,kt();const Ju=e.getElementById("deal-action-btn"),Bt=F=>{F.stopPropagation();const C=e.getElementById("deal-action-btn"),h=C?.getAttribute("data-name")||"\u591C\u9B45\u79C1\u8BED\xB7\u60D1\u5FC3\u9501\u94FE",d=parseInt(C?.getAttribute("data-price")||"999",10),x=lu();if(x.settledPurchasedItemIds.includes("deal-special-item")){c&&(c.textContent=`\u{1F525} \u4ECA\u65E5\u7279\u5356\u3010${h}\u3011\u5DF2\u5728\u65E9\u524D\u7ED3\u5951\u4EA4\u4ED8\uFF0C\u65E0\u6CD5\u91CD\u590D\u62A2\u8D2D\u54E6~`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400));return}if(G.some(g=>g.id==="deal-special-item")){c&&(c.textContent=`\u2728 \u4ECA\u65E5\u7279\u5356\u3010${h}\u3011\u5DF2\u5728\u6B22\u6109\u79D8\u5323\u4E2D\u4E86\u54E6\uFF0C\u8F7B\u89E6\u8D2D\u7269\u680F\u53EF\u9000\u8FD8~`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400));return}if(U<d){mt(d);return}const A=e.getElementById("deal-showcase-box"),v=A?A.getBoundingClientRect():{left:100,top:250,width:40,height:40};Lu(v,"blindbox",void 0,()=>{Eu(U-d);let g="ssr";const P=((x.currentDailyDeal||Zu)?.grade||"").toLowerCase();/神话|ex/.test(P)?g="ex":/传说|ur/.test(P)?g="ur":/精锐|sr/.test(P)&&!/ssr/.test(P)?g="sr":g="ssr",G.push({id:"deal-special-item",name:h,price:d,type:"deal",tier:g,count:1}),V(),kt(),c&&(c.textContent=`\u{1F525} \u6210\u529F\u62A2\u8D2D\u4ECA\u65E5\u7279\u5356\u3010${h}\u3011\uFF01\u5DF2\u6536\u5165\u6B22\u6109\u79D8\u5323 \u2665`,c.classList.add("show"),setTimeout(()=>c.classList.remove("show"),2400))})};Ju&&Ju.addEventListener("click",Bt);const It=e.getElementById("deal-showcase-box");It&&It.addEventListener("click",F=>{const C=F.target;C&&(C.closest(".deal-goods-scroll-body")||C.closest(".deal-goods-desc")||C.closest(".deal-goods-tags-row"))||F.target!==Ju&&Bt(F)});const Vt=e.getElementById("bar-lilith-propping-container"),Uu=e.getElementById("bar-lilith-propping-img");if(Uu){const F=["https://fastly.jsdelivr.net","https://cdn.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net","https://jsd.onmicrosoft.cn"];let C=0;Uu.onerror=function(){C++,C<F.length&&(Uu.src=F[C]+"/gh/luckyrocks4u12345-code/-@main/%E8%8E%89%E8%8E%89%E4%B8%9D%E6%92%91%E5%A4%B42.png")}}const Ae=e.getElementById("lilith-trigger-area"),X=e.getElementById("lilith-shop-dialog-module"),J=e.getElementById("dialog-floating-text");let bu=lt.getLilithQuotes();window.setLilithShopQuotes=F=>{if(Array.isArray(F)&&F.length>0){bu=F,Ku=0,J&&(J.textContent=bu[0]);const C=lu();C.currentLilithQuotes=[...F],ju(C)}};let Ku=0,qu=null,ge=!1;const Zs=15e3;J&&bu.length>0&&(J.textContent=bu[0]),X&&(X.classList.remove("disintegrating","condensing"),X.classList.add("resting"));const Je=()=>{ge||!X||!J||(ge=!0,qu!==null&&(clearTimeout(qu),qu=null),X.classList.remove("resting","condensing"),X.classList.add("disintegrating"),setTimeout(()=>{Ku=(Ku+1)%bu.length,J.textContent=bu[Ku],X.classList.remove("disintegrating"),X.classList.add("condensing"),setTimeout(()=>{X.classList.remove("condensing"),X.classList.add("resting"),ge=!1,Jt()},920)},620))},Jt=()=>{qu!==null&&(clearTimeout(qu),qu=null);const F=e.getElementById("eros-shop-root");if(!F||F.style.display==="none"||!F.classList.contains("active"))return;const C=F.closest(".succubus-seal-wrapper");C&&C.classList.contains("lilith-card-dormant")||(qu=window.setTimeout(()=>{Je()},Zs))};window.__pauseLilithQuotesLoop=()=>{qu!==null&&(clearTimeout(qu),qu=null)},window.__resumeLilithQuotesLoop=()=>{Jt()},[Vt,Uu,Ae,X].forEach(F=>{F&&(F.onclick=C=>{C.stopPropagation(),Je()})});const Ct=e.getElementById("cart-checkout-btn"),Ou=e.getElementById("shop-checkout-modal-overlay"),Ke=e.getElementById("checkout-cancel-btn"),Iu=e.getElementById("checkout-confirm-btn"),us=e.getElementById("checkout-summary-card");Ou&&(Ou.onclick=F=>{F.stopPropagation()}),us&&(us.onclick=F=>{F.stopPropagation()}),Ke&&Ou&&(Ke.onclick=F=>{F.stopPropagation(),Ou.classList.remove("active")});let ye=0;Iu&&Ou&&(Iu.onclick=F=>{if(F.stopPropagation(),U<0){Iu.textContent="FP\u4F59\u989D\u4E0D\u8DB3\u5566\uFF01",Iu.disabled=!0,Iu.classList.remove("denied-exploit"),Iu.offsetWidth,Iu.classList.add("denied-exploit");return}Ou.classList.remove("active");const C=e.getElementById("shop-toast")||e.getElementById("cart-deal-toast");if(G.length===0){C&&(C.textContent="\u2728 \u6B22\u6109\u79D8\u5323\u5C1A\u7A7A\uFF0C\u5FEB\u53BB\u6311\u9009\u5FC3\u4EEA\u7684\u73CD\u5B9D\u4E0E\u5951\u7EA6\u5427~",C.classList.remove("show"),C.offsetWidth,C.classList.add("show"),setTimeout(()=>{C.classList.remove("show")},2200));return}const h=G.filter(I=>I.type!=="loan"),d=h.reduce((I,H)=>I+H.count,0),x=G.find(I=>I.type==="loan"),A=x?x.count:0,v=h.reduce((I,H)=>I+H.price*H.count,0),g=A*2e3,q={items:G.map(I=>({...I})),goodsTotalCost:v,loanGain:g,totalFpCost:ye,remainingFP:U},P=cs(q);lt.outboundItems({cartItems:G,totalFpCost:ye,remainingFP:U}),G=[],V();const O=window;if(typeof O.syncShopLoanDrawer=="function"&&O.syncShopLoanDrawer(),Cu(),typeof window.__updateDailyDealState=="function"&&window.__updateDailyDealState(),iu(),xt(),C){const I="\u3010\u7231\u6B32\u8D2D\u7269\u6E05\u5355.txt\u3011\u5DF2\u6302\u8F7D\u81F3\u5BF9\u8BDD\u9644\u4EF6\u680F \u{1F4C4}";C.textContent=`\u{1F389} \u7ED3\u7B97\u5B8C\u6210\uFF01\u5DF2\u786E\u8BA4\u4EA4\u4ED8 ${d} \u4EF6\u73CD\u5B9D${A>0?`\uFF0C\u7ACB\u4E0B ${A} \u4EFD\u501F\u636E\u5951\u7EA6`:""}\u2665\uFF08${I}\uFF09`,C.classList.remove("show"),C.offsetWidth,C.classList.add("show"),setTimeout(()=>{C.classList.remove("show")},4e3)}}),Ct&&(Ct.onclick=F=>{F.stopPropagation(),Ct.classList.remove("active-press"),Ct.offsetWidth,Ct.classList.add("active-press"),setTimeout(()=>{Ct.classList.remove("active-press")},220);const C=G.filter(H=>H.type!=="loan"),h=C.length,d=C.reduce((H,fu)=>H+(fu.count||1),0),x=G.find(H=>H.type==="loan"),A=x&&x.count||0,g=C.reduce((H,fu)=>H+(fu.price||0)*(fu.count||1),0)-A*2e3;ye=g;const q=e.getElementById("summary-goods-types-val"),P=e.getElementById("summary-goods-total-val"),O=e.getElementById("summary-loan-contracts-val"),I=e.getElementById("summary-total-fp-val");q&&(q.innerHTML=`${h} \u79CD`),P&&(P.innerHTML=`${d} \u4EF6`),O&&(O.innerHTML=`${A} \u5F20`),I&&(I.innerHTML=`<span class="fp-mini-tag">FP</span> ${g.toLocaleString()}`,g<0?I.classList.add("negative-fp"):I.classList.remove("negative-fp")),Iu&&(Iu.textContent="\u786E\u8BA4\u7ED3\u8D26",Iu.disabled=!1,Iu.classList.remove("denied-exploit")),Ou&&(Ou.classList.remove("active"),Ou.offsetWidth,Ou.classList.add("active"))}),Jt(),window.startLilithShopDialog=()=>{bu=lt.getLilithQuotes(),J&&bu.length>0&&(Ku=0,J.textContent=bu[0]),X&&(X.classList.remove("disintegrating","condensing"),X.classList.add("resting")),Jt()};function Vs(){const F=e.getElementById("shop-loan-drawer-module"),C=e.getElementById("loan-drawer-slider"),h=e.getElementById("loan-drawer-body"),d=e.getElementById("loan-handle-unit"),x=e.getElementById("loan-handle-tag-text"),A=e.getElementById("loan-tickets-track");if(!F||!C||!h||!d||!A)return;const v=Array.from({length:5},(W,Y)=>({id:Y+1,amount:2e3,claimed:!1,settled:!1}));let g=!1;function q(){const W=e.getElementById("shop-crystal-cabinet");if(W){const Y=W.offsetLeft;if(Y>100)return Y}return 260}function P(){const W=e.getElementById("loan-drawer-slider"),Y=e.getElementById("loan-drawer-body");if(!W||!Y)return;const K=q();Y.style.width=`${K}px`,Y.style.minWidth=`${K}px`,Y.style.maxWidth=`${K}px`,g?(W.style.transform="translateX(0px)",W.classList.add("opened")):(W.style.transform=`translateX(-${K}px)`,W.classList.remove("opened"))}P();if(window.__LILITH_RESIZE_P__){window.removeEventListener("resize",window.__LILITH_RESIZE_P__);}window.__LILITH_RESIZE_P__=P;window.addEventListener("resize",P);window.updateShopLoanDrawerWidth=P;function O(){const W=lu(),Y=G.find(uu=>uu.type==="loan"),K=Y?Y.count:0;v.forEach((uu,Q)=>{const su=Q+1;su<=W.settledLoanCount?(uu.settled=!0,uu.claimed=!0):su<=W.settledLoanCount+K?(uu.settled=!1,uu.claimed=!0):(uu.settled=!1,uu.claimed=!1)}),I()}window.syncShopLoanDrawer=O;function I(){if(!A)return;A.innerHTML="";const W=lu(),Y=G.find(Q=>Q.type==="loan")?.count||0,K=Math.max(0,5-W.settledLoanCount-Y),uu=e.querySelector(".loan-note-sub");uu&&(uu.textContent=`\u7ACB\u4E0B\u501F\u636E\u5373\u5F972000FP \xB7 \u5269\u4F59 ${K}/5 \u5F20`),v.forEach(Q=>{const su=e.createElement("div"),yu=Q.settled;su.className=`loan-ticket-card ${Q.claimed?"claimed":""} ${yu?"settled-contract":""}`,su.setAttribute("data-ticket-id",`${Q.id}`);let cu=`\u7B2C ${Q.id} \u671F\u7231\u6B32\u501F\u636E\u5951\u7EA6 \xB7 \u70B9\u51FB\u7ACB\u4E0B\u501F\u7EA6 +2,000 FP`;yu?cu=`\u7B2C ${Q.id} \u671F\u7231\u6B32\u501F\u636E\u5951\u7EA6\u6B64\u524D\u5DF2\u7ED3\u8D26\u751F\u6548\uFF0C\u4E0D\u53EF\u91CD\u590D\u7ACB\u5951`:Q.claimed&&(cu=`\u7B2C ${Q.id} \u671F\u7231\u6B32\u501F\u636E\u5951\u7EA6\u5DF2\u653E\u5165\u6B22\u6109\u79D8\u5323 (+2,000 FP)`),su.setAttribute("title",cu);const Pu=`NO.${String(Q.id).padStart(2,"0")}`,ou=yu?'<div class="ticket-claimed-stamp settled-stamp">\u3010\u5DF2\u7ACB\u5951 \xB7 \u5DF2\u751F\u6548\u3011</div>':Q.claimed?'<div class="ticket-claimed-stamp">\u3010\u5DF2\u501F\u51FA\u3011</div>':"";su.innerHTML=`
                        <div class="ticket-guilloche-bg"></div>
                        <div class="ticket-top-badge">
                            <span class="ticket-amount-num">2000</span>
                            <span class="ticket-unit-label">FP</span>
                        </div>
                        <div class="ticket-center-seal">
                            <span class="ticket-vertical-title">\u7231\u6B32\u501F\u636E\u5951\u7EA6</span>
                            <span class="ticket-kiss-mark">\u{1F48B}</span>
                        </div>
                        <div class="ticket-bottom-serial">
                            <span class="ticket-serial-no">${Pu}</span>
                            <span class="ticket-gain-tag">${yu?"\u5DF2\u7ACB\u5951":"+2000"}</span>
                        </div>
                        ${ou}
                    `,su.addEventListener("click",vu=>{if(vu.stopPropagation(),Q.settled){const ut=e.getElementById("shop-toast")||e.getElementById("cart-deal-toast");ut&&(ut.textContent=`\u{1F4DC} \u7B2C ${Q.id} \u671F\u7231\u6B32\u501F\u636E\u5951\u7EA6\u5DF2\u5728\u65E9\u524D\u7ED3\u8D26\u751F\u6548\uFF0C\u65E0\u6CD5\u91CD\u590D\u501F\u6B3E\u54E6~`,ut.classList.add("show"),setTimeout(()=>ut.classList.remove("show"),2200));return}if(Q.claimed)return;const Ft=su.getBoundingClientRect();Q.claimed=!0,I(),H(Ft,Q.amount,Q.id)}),A.appendChild(su)})}function H(W,Y,K){const uu=e.getElementById("shop-cart-module");if(!uu){Eu(U+Y);return}const Q=uu.getBoundingClientRect(),su=W.left+W.width/2,yu=W.top+W.height/2,cu=Q.left+Q.width/2,Pu=Q.top+Q.height/2,ou=e.createElement("div");ou.className="loan-flying-ticket-proxy",ou.innerHTML=`
                    <div style="font-size: 7px; color: #ffd700; font-weight: 800; line-height: 1;">2000</div>
                    <div class="ticket-vertical-title" style="font-size: 6.5px; color: #fff; font-family: serif; letter-spacing: -0.2px; white-space: nowrap;">\u7231\u6B32\u501F\u636E\u5951\u7EA6</div>
                    <div style="font-size: 7px; line-height: 1;">\u{1F48B}</div>
                `,ou.style.left=`${su}px`,ou.style.top=`${yu}px`,ou.style.transform="translate(-50%, -50%) scale(1)",e.body.appendChild(ou);const vu=performance.now(),Ft=500,ut=(su+cu)/2-30,Js=Math.min(yu,Pu)-75;let ts=0;function es(Ks){const ui=Ks-vu,Pt=Math.min(ui/Ft,1),Nu=Pt*Pt*(3-2*Pt),ss=Math.pow(1-Nu,2)*su+2*(1-Nu)*Nu*ut+Math.pow(Nu,2)*cu,is=Math.pow(1-Nu,2)*yu+2*(1-Nu)*Nu*Js+Math.pow(Nu,2)*Pu,ti=1-.42*Nu,ei=-25*Nu;if(ou.style.left=`${ss}px`,ou.style.top=`${is}px`,ou.style.transform=`translate(-50%, -50%) scale(${ti}) rotate(${ei}deg)`,ts++,ts%2===0&&Pt<.95){const mu=e.createElement("div");mu.className="shop-flying-trail-spark",mu.textContent=["\u2728","\u2726","\u{1F48B}","\u2605"][Math.floor(Math.random()*4)],mu.style.left=`${ss}px`,mu.style.top=`${is}px`,mu.style.color="#ffd700";const Kt=(Math.random()-.5)*16,tt=(Math.random()-.5)*16;mu.style.setProperty("--tx",`${Kt}px`),mu.style.setProperty("--ty",`${tt}px`),e.body.appendChild(mu),setTimeout(()=>mu.remove(),600)}if(Pt<1)requestAnimationFrame(es);else{ou.remove(),uu.classList.remove("cart-item-landed"),uu.offsetWidth,uu.classList.add("cart-item-landed"),setTimeout(()=>uu.classList.remove("cart-item-landed"),380);const mu=e.createElement("div");mu.className="cart-fp-gain-floating",mu.textContent="+2,000 FP",mu.style.left=`${cu}px`,mu.style.top=`${Pu}px`,e.body.appendChild(mu),setTimeout(()=>mu.remove(),1100),Eu(U+Y);const Kt=G.find(si=>si.id==="loan-ticket-group");Kt?Kt.count+=1:G.push({id:"loan-ticket-group",itemId:"loan-ticket",type:"loan",name:"\u7231\u6B32\u501F\u636E\u5951\u7EA6 (+2,000 FP)",count:1,price:0,tier:"loan"}),V();const tt=e.getElementById("shop-toast")||e.getElementById("cart-deal-toast");tt&&(tt.textContent=`\u2728 \u62BD\u53D6\u7B2C ${K} \u671F\u3010\u7231\u6B32\u501F\u636E\u5951\u7EA6\u3011\uFF012,000 FP \u5DF2\u6CE8\u5165\u53E3\u888B~`,tt.classList.remove("show"),tt.offsetWidth,tt.classList.add("show"),setTimeout(()=>tt.classList.remove("show"),2200))}}requestAnimationFrame(es)}function fu(){g=!0;const W=q();h.style.width=`${W}px`,h.style.minWidth=`${W}px`,h.style.maxWidth=`${W}px`,C.style.transform="translateX(0px)",C.classList.add("opened"),x&&(x.textContent="\u7231\u6B32\u501F\u636E\u5951\u7EA6"),O()}function Su(){g=!1;const W=q();C.style.transform=`translateX(-${W}px)`,C.classList.remove("opened"),x&&(x.textContent="\u501F\u8D37\u670D\u52A1")}d.onclick=W=>{W.stopPropagation(),g?Su():fu()},window.returnShopLoanTicket=()=>{const W=[...v].reverse().find(Y=>Y.claimed&&!Y.settled);if(!W)return null;if(W.claimed=!1,I(),g){const Y=A.querySelector(`[data-ticket-id="${W.id}"]`);if(Y)return Y.getBoundingClientRect()}return d?d.getBoundingClientRect():null},O()}Vs()},_s=function(t){const i=e.getElementById("board-floating-layer");if(!i)return;i.innerHTML="";let raw=(t&&t.trim()!==""&&t.trim()!=="\u65E0"&&!_(t,19))?t:(Xs&&Xs.trim()!==""&&Xs.trim()!=="\u65E0"&&!_(Xs,19)?Xs:"");let u=[];if(raw){u=raw.split(/[|]+/).map(n=>n.trim()).filter(Boolean)}if(!u||u.length===0){const tgt=Ns||"\u72E9\u730E\u76EE\u6807",loc=Ws||"\u51FA\u6CA1\u5730\u70B9",amb=Us||"\u72E9\u730E\u91CE\u671B";u=[tgt,loc,amb,"\u5FEB\u53BB\u63A8\u5012\u5979\u5427\u2665","\u6536\u5272\u56E0\u679CFP","\u4E13\u5C5E\u72E9\u730E\u730E\u7269","\u56E0\u679C\u547D\u5B9A\u7F81\u7E8A"]}const s=[6,22,40,58,76,15,66,32];u.forEach((n,o)=>{const l=e.createElement("span");l.className="board-whisper";let r=n.trim();r.length>10&&(r=r.slice(0,10)),l.textContent=r,l.style.left=`${s[o%s.length]}%`,l.style.animationDuration=`${9.5+o%3*1.5}s`,l.style.animationDelay=`${o*.4}s`,l.style.fontSize=`${18+o%3}px`,i.appendChild(l)})},se=function(t){const i=e.getElementById("shop-floating-layer");i&&(i.innerHTML="")},Rs=function(t){const i=t.getBoundingClientRect(),u=i.left+i.width/2,s=i.top+i.height/2,n=["\u2665","\u{1F496}","\u2728","\u{1F495}","\u{1F493}"],o=["#ff1493","#ff007f","#ff80ab","#f43f5e","#ffd700","#ffffff"],l=e.createDocumentFragment(),r=[];for(let a=0;a<16;a++){const E=e.createElement("span");E.className="reward-burst-heart",E.textContent=n[a%n.length];const p=Math.random()*Math.PI*2,B=25+Math.random()*55,M=Math.cos(p)*B,b=Math.sin(p)*B-(10+Math.random()*20),w=(Math.random()-.5)*140,y=11+Math.random()*10,D=o[Math.floor(Math.random()*o.length)];E.style.left=`${u}px`,E.style.top=`${s}px`,E.style.fontSize=`${y}px`,E.style.color=D,E.style.setProperty("--vx",`${M.toFixed(1)}px`),E.style.setProperty("--vy",`${b.toFixed(1)}px`),E.style.setProperty("--rot",`${w.toFixed(1)}deg`),E.style.animationDelay=`${(Math.random()*.05).toFixed(2)}s`,l.appendChild(E),r.push(E)}e.body.appendChild(l),setTimeout(()=>{r.forEach(a=>a.remove())},1e3)},Hs=function(t){const i=e.getElementById("module-reward-container");if(!i)return;i.innerHTML="",t.split(/[|]+/).filter(s=>s.trim().length>0).forEach(s=>{const n=s.trim(),o=e.createElement("div");o.className="reward-pill masked",o.title="\u9B45\u9B54\u5370\u8BB0\u5C01\u5370\xB7\u70B9\u51FB\u89E3\u5492\u7834\u5370";let l=Mu.find(a=>a.id==="fp"&&(n.includes("FP")||n.includes("\u70B9\u6570")||n.includes("\u70B9\u7231\u6B32"))?!0:n.includes(a.name));l||(/装备|剑|刀|杖|匕首|刃|护腿|甲|胸甲|轻铠|法袍|头盔|手套|靴|项链|戒指|耳坠|手镯|吊坠/i.test(n)?l=/情色|诱惑|情趣|露臀|深渊|催情/i.test(n)?Mu.find(a=>a.id==="erotic_gear"):Mu.find(a=>a.id==="normal_gear"):/卷轴|禁咒/i.test(n)?l=Mu.find(a=>a.id==="magic_scroll"):/书|密典|密录|残卷|秘籍|宝典/i.test(n)?l=Mu.find(a=>a.id==="skill_book"):/BUFF|特质|祝福|诅咒|印记/i.test(n)?l=Mu.find(a=>a.id==="buff"):/碎片/i.test(n)?l=Mu.find(a=>a.id==="eros_fragment"):/情报|机密/i.test(n)?l=/绯色|私密|敏感|体液|弱点/i.test(n)?Mu.find(a=>a.id==="erotic_intel"):Mu.find(a=>a.id==="top_secret_intel"):/球|魔球/i.test(n)?l=Mu.find(a=>a.id==="monster_orb"):/蛋/i.test(n)&&(l=Mu.find(a=>a.id==="succubus_egg")));const r=l?`<span class="reward-cat-icon" style="margin-right: 4px;">${l.icon}</span>`:"";o.innerHTML=`
                <span class="reward-text">${r}${n}</span>
                <div class="reward-succubus-seal">
                    <span class="seal-heart">\u2665</span>
                    <div class="seal-crack-mesh">
                        <svg viewBox="0 0 100 40" preserveAspectRatio="none" class="crack-svg">
                            <path d="M50,20 L35,8 L20,18 L8,12 M50,20 L65,10 L82,16 L95,6 M50,20 L40,32 L22,28 L10,36 M50,20 L62,30 L78,25 L92,34 M35,8 L42,2 M65,10 L58,2 M40,32 L46,38" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            `,o.addEventListener("click",function(){Tu(),!(!o.classList.contains("masked")||o.classList.contains("cracking"))&&(o.classList.add("cracking"),setTimeout(()=>{Rs(o),o.classList.remove("masked"),o.classList.remove("cracking"),o.classList.add("revealed")},440))}),i.appendChild(o)})},Oe=function(){e.querySelectorAll(".reward-pill").forEach(i=>{i.classList.add("masked"),i.classList.remove("revealed"),i.classList.remove("cracking")})},qs=function(){const t=e.getElementById("hunt-trigger-btn"),i=e.getElementById("hunt-trigger-text"),u=e.getElementById("caution-layer"),s=e.getElementById("tape-1"),n=e.getElementById("tape-2"),o=e.getElementById("tape-3"),l=e.getElementById("tape-4"),r=e.getElementById("succubus-box-root"),a=e.getElementById("hunt-board-root"),E=e.getElementById("board-close-btn");if(!t||!u||!s||!n||!o||!l||!r||!a||!E)return;const p=!it||it.trim()===""||it.trim()==="\u65E0"||it.trim()==="none"||(typeof isHuntSettled==="function"&&isHuntSettled(it));if(p){t.style.display="none";a.classList.remove("active");r.style.removeProperty("display");r.classList.remove("dialog-blur-fade");}else{t.style.display="inline-flex";}const B=e.querySelector(".board-title");B&&(B.textContent=`\u7231\u6B32\u72E9\u730E \xB7 ${it}`);const M=e.getElementById("module-target");M&&(M.textContent=Ns);const b=e.getElementById("module-location");b&&(b.textContent=Ws);const w=e.getElementById("module-ambition");w&&(w.textContent=Us);const y=e.getElementById("module-intel");y&&(y.textContent=zs);const D=e.getElementById("module-aphorism");D&&(D.textContent=`\u201C${Qs}\u201D`),Hs(Gs);const m=[{text:"\u7231\u6B32\u72E9\u730E",pulses:3},{text:"\u53D1\u73B0\u65B0\u730E\u7269~",pulses:2},{text:"\u7231\u6B32\u72E9\u730E",pulses:3},{text:"\u4E3B\u4EBA\u4E0D\u70B9\u561B~",pulses:2}];let f=0;function c(){if(!t||!i)return;Hu&&clearTimeout(Hu);const $=t.closest(".succubus-seal-wrapper");if($&&$.classList.contains("lilith-card-dormant"))return;const S=m[f];i.textContent=S.text;const R=2200;t.style.animationPlayState="running";const N=S.pulses*R;Hu=setTimeout(()=>{i.classList.remove("reassembling"),i.classList.add("dissolving"),Hu=setTimeout(()=>{f=(f+1)%m.length,i.textContent=m[f].text,i.classList.remove("dissolving"),i.classList.add("reassembling"),Hu=setTimeout(()=>{i.classList.remove("reassembling"),c()},840)},840)},N)}window.__pauseHuntWhispersLoop=()=>{Hu&&(clearTimeout(Hu),Hu=null)},window.__resumeHuntWhispersLoop=()=>{!p&&i&&c()},!p&&i&&c();function L($){const S=$.getBoundingClientRect(),R=S.left+S.width/2,N=S.top+S.height/2,tu=["\u2665","\u{1F496}","\u{1F495}","\u{1F493}","\u2665"],eu=["#ff007f","#ff1493","#ff4081","#ff80ab","#ffffff","#ff2a7a"],hu=e.createDocumentFragment(),Cu=[];const isMobScreen=window.innerWidth<=680;const burstCount=isMobScreen?12:22;for(let V=0;V<burstCount;V++){const du=e.createElement("span");du.className="hunt-burst-scatter-heart",du.textContent=tu[V%tu.length];const Lu=Math.random()*Math.PI*2,T=35+Math.random()*85,nu=Math.cos(Lu)*T,pu=Math.sin(Lu)*T-(15+Math.random()*25),iu=(Math.random()-.5)*160,Au=12+Math.random()*14,Mt=eu[Math.floor(Math.random()*eu.length)];du.style.left=`${R}px`,du.style.top=`${N}px`,du.style.fontSize=`${Au}px`,du.style.color=Mt,du.style.setProperty("--vx",`${nu.toFixed(1)}px`),du.style.setProperty("--vy",`${pu.toFixed(1)}px`),du.style.setProperty("--rot",`${iu.toFixed(1)}deg`),du.style.animationDelay=`${(Math.random()*.08).toFixed(2)}s`,hu.appendChild(du),Cu.push(du)}e.body.appendChild(hu),setTimeout(()=>{Cu.forEach(V=>V.remove())},1200)}t.onclick=function(){Tu(),Fu(!1),Hu&&clearTimeout(Hu);if(window.innerWidth<=680){t.style.display="none";r.style.setProperty("display","none","important");Oe();_s(Xs);a.classList.add("active");return}L(t),t.classList.add("hunt-btn-burst-vanish"),setTimeout(()=>{r.classList.add("dialog-blur-fade")},280),setTimeout(()=>{Oe(),_s(Xs),u.classList.add("active"),setTimeout(()=>{s.classList.add("slammed")},40),setTimeout(()=>{n.classList.add("slammed")},180),setTimeout(()=>{o.classList.add("slammed")},340),setTimeout(()=>{l.classList.add("slammed")},480),setTimeout(()=>{r.style.setProperty("display","none","important")},750),setTimeout(()=>{u.classList.remove("active"),[s,n,o,l].forEach($=>$.classList.remove("slammed")),a.classList.add("active"),r.style.setProperty("display","none","important")},1050)},920)};E.onclick=function(){Tu();if(window.innerWidth<=680){a.classList.remove("active","board-blur-fade");r.classList.remove("dialog-blur-fade");r.style.removeProperty("display");t.style.display="inline-flex";t.classList.remove("hunt-btn-burst-vanish");Fu(!0);return}a.classList.add("board-blur-fade"),setTimeout(()=>{u.classList.add("active"),setTimeout(()=>{s.classList.add("slammed")},40),setTimeout(()=>{n.classList.add("slammed")},180),setTimeout(()=>{o.classList.add("slammed")},340),setTimeout(()=>{l.classList.add("slammed")},480),setTimeout(()=>{a.classList.remove("active"),a.classList.remove("board-blur-fade"),r.classList.remove("dialog-blur-fade"),r.style.display="",Fu(!0),r.offsetWidth,t.classList.remove("hunt-btn-burst-vanish"),t.style.opacity="1",t.style.display="inline-flex",Oe();try{window.scrollTo({left:0,behavior:"instant"});const wpr=r.closest(".succubus-seal-wrapper");if(wpr)wpr.scrollLeft=0;const ch=document.getElementById("chat")||document.querySelector(".chat-container")||document.scrollingElement;if(ch)ch.scrollLeft=0}catch(_){};setTimeout(()=>{u.classList.remove("active"),[s,n,o,l].forEach($=>$.classList.remove("slammed")),!p&&i&&c()},360)},750)},460)}},Os=function(){const t=e.getElementById("char-avatar"),i=e.getElementById("avatar-container"),u=wt;let s=!qt||_(qt,1)?Ys:qt;function n(l){if(!l||typeof l!="string")return;const r=l.trim().replace(/\.png$/i,"");if(!r)return;if(s=r,r.startsWith("http://")||r.startsWith("https://")){we(t,r),Le(r);return}let a="";if(wt.includes(r))a=r;else for(const p of wt)if(r.includes(p)){a=p;break}if(!a){const p={\u53D1\u60C5:"\u8272\u8272",\u5A07\u7F9E:"\u8272\u8272",\u59A9\u5A9A:"\u8272\u8272",\u52A8\u60C5:"\u8272\u8272",\u9AD8\u6F6E:"\u8272\u8272",\u7EDD\u9876:"\u8272\u8272",\u751F\u6C14:"\u6C14\u6124",\u6124\u6012:"\u6C14\u6124",\u66B4\u6012:"\u6C14\u6124",\u7591\u60D1:"\u60CA\u8BB6",\u56F0\u60D1:"\u60CA\u8BB6",\u5F97\u610F:"\u9A84\u50B2",\u81EA\u8C6A:"\u9A84\u50B2",\u59D4\u5C48:"\u75DB\u54ED",\u96BE\u8FC7:"\u75DB\u54ED",\u4F24\u5FC3:"\u75DB\u54ED",\u9AD8\u5174:"\u5F00\u5FC3",\u6109\u5FEB:"\u5F00\u5FC3",\u559C\u60A6:"\u5F00\u5FC3",\u5BB3\u7F9E:"\u8272\u8272",\u8C03\u76AE:"\u4FCF\u76AE",\u620F\u8C11:"\u574F\u7B11",\u574F\u5FC3\u773C:"\u574F\u7B11",\u5632\u5F04:"\u5632\u7B11",\u9119\u89C6:"\u5ACC\u5F03",\u4E0D\u5C51:"\u5ACC\u5F03",\u5BB3\u6015:"\u6050\u60E7",\u614C\u5F20:"\u60CA\u6050",\u614C\u4E71:"\u60CA\u6050",\u6559\u5BFC:"\u6307\u5BFC",\u6279\u8BC4:"\u65A5\u8D23",\u8D23\u602A:"\u65A5\u8D23",\u6C57:"\u65E0\u8BED",\u72C2\u70ED:"\u72C2\u559C",\u671F\u5F85:"\u6E34\u671B",\u52A0\u6CB9:"\u9F13\u52B1"};for(const[B,M]of Object.entries(p))if(r.includes(B)){a=M;break}}a||(a="\u4FCF\u76AE");const E=`${Ne}${encodeURIComponent(a)}.png`;we(t,E),Le(r),Ge.some(p=>r.includes(p))&&yt(3,!0)}window.setAvatarMood=n,n(s),i&&(i.ondblclick=function(l){l.stopPropagation();let r=(u.indexOf(s)+1)%u.length;r<0&&(r=0);const a=u[r];n(a);const E=e.getElementById("intimacy-toast");E&&(E.textContent=`\u2728 \u60C5\u7EEA\u5207\u6362\uFF1A\u3010${a}\u3011`,E.classList.add("show"),setTimeout(()=>E.classList.remove("show"),1600))});try{Bs()}catch(l){console.warn("[Dialogue Init]",l)}try{Cs()}catch(l){console.warn("[Gas Whispers Init]",l)}try{hs()}catch(l){console.warn("[Massive Hearts]",l)}try{gs(i,t)}catch(l){console.warn("[Avatar Intimacy]",l)}try{Ls()}catch(l){console.warn("[Fate Lovers]",l)}try{qs()}catch(l){console.warn("[Hunt Board]",l)}try{Ps()}catch(l){console.warn("[Eros Shop]",l)}const o=e.getElementById("succubus-seal-root");o&&o.addEventListener("click",l=>{if(Wt)return;const r=l.target;r&&(r.closest(".fate-heart-node")||r.closest(".top-crest-dropzone")||r.closest(".bottom-crest-dropzone")||r.closest(".eros-shop-banner")||r.closest(".eros-abyss-banner")||r.closest(".billiard-stage")||r.closest(".returning-flight-heart")||r.closest(".eros-shop-wrapper")||r.closest(".fp-banknote-rain-stage")||Tu())},!0),Ge.some(l=>qt.includes(l))&&yt(3,!0)};const Ne="https://cdn.jsdelivr.net/gh/AkabaneSaki/myrepo@main/picture/lilith/";let U=0;window.setDestinyFpVisibility=Fu;const qt=k("raw-ph-mood",1)||"";let vt=[1,2,3,4,5,6,7,8].map(function(n){var el=e.querySelector(".gw-"+n);return el?(el.textContent||"").trim():""}).join("|"),Ru="";function getLilithChatKey(){try{const ctxs=[window,window.parent,window.top].filter(Boolean);for(const c of ctxs){if(c.SillyTavern&&typeof c.SillyTavern.getContext==="function"){const sc=c.SillyTavern.getContext();const cid=sc?.chatId||sc?.chat_id||sc?.characterId;if(cid)return String(cid).replace(/[^a-zA-Z0-9_\-\u4e00-\u9fa5]/g,"_");}if(c.chat_id)return String(c.chat_id).replace(/[^a-zA-Z0-9_\-\u4e00-\u9fa5]/g,"_");if(c.selected_chat)return String(c.selected_chat).replace(/[^a-zA-Z0-9_\-\u4e00-\u9fa5]/g,"_");}}catch{}return"default";}function getHuntStorageKey(){return"lilith_hunt_"+getLilithChatKey();}function getStepsStorageKey(){return"lilith_hunt_steps_"+getLilithChatKey();}function getActiveHuntMem(){const k=getLilithChatKey();try{if(window.__ACTIVE_HUNT_MAP__&&window.__ACTIVE_HUNT_MAP__[k])return window.__ACTIVE_HUNT_MAP__[k];if(window.parent&&window.parent.__ACTIVE_HUNT_MAP__&&window.parent.__ACTIVE_HUNT_MAP__[k])return window.parent.__ACTIVE_HUNT_MAP__[k];}catch{}return null;}function setActiveHuntMem(hobj){const k=getLilithChatKey();try{if(!window.__ACTIVE_HUNT_MAP__)window.__ACTIVE_HUNT_MAP__={};window.__ACTIVE_HUNT_MAP__[k]=hobj;if(window.parent){if(!window.parent.__ACTIVE_HUNT_MAP__)window.parent.__ACTIVE_HUNT_MAP__={};window.parent.__ACTIVE_HUNT_MAP__[k]=hobj;}}catch{}}let it="",Ns="",Ws="",zs="",Gs="",Qs="",Us="",Xs="";window.__ACTIVE_HUNT__=null;try{localStorage.removeItem("lilith_active_hunt");localStorage.removeItem("lilith_hunt_steps");}catch{}try{const cachedH=localStorage.getItem(getHuntStorageKey());if(cachedH&&cachedH!=="null"&&cachedH!=="undefined"){const pH=JSON.parse(cachedH);if(pH&&pH.title&&pH.title!=="\u65E0"&&String(pH.title).toLowerCase()!=="none"){it=pH.title||"";Ns=pH.target||"";Ws=pH.location||"";zs=pH.intel||"";Gs=pH.reward||"";Qs=pH.aphorism||"";Us=pH.ambition||"";Xs=pH.whispers||pH.hunt_whispers||"";window.__ACTIVE_HUNT__=pH;setActiveHuntMem(pH);}}}catch{}window.clearActiveHunt=function(){const prevT=it;it="";Ns="";Ws="";zs="";Gs="";Qs="";Us="";Xs="";window.__ACTIVE_HUNT__=null;try{const hKey=getHuntStorageKey();const sKey=getStepsStorageKey();if(prevT){localStorage.setItem("lilith_hunt_settled_title_"+getLilithChatKey(),prevT);}localStorage.removeItem(hKey);localStorage.removeItem(sKey);localStorage.removeItem("lilith_active_hunt");localStorage.removeItem("lilith_hunt_steps");localStorage.setItem("lilith_hunt_settled_time_"+getLilithChatKey(),String(Date.now()));setActiveHuntMem(null);if(window.parent)window.parent.__ACTIVE_HUNT__=null;if(window.top)window.top.__ACTIVE_HUNT__=null;}catch{}try{const ctxs=[window,window.parent,window.top].filter(Boolean);for(const c of ctxs){if(c.Mvu&&typeof c.Mvu.setVariable==="function"){c.Mvu.setVariable("stat_data.爱欲狩猎",null)}if(c.SillyTavern&&typeof c.SillyTavern.getContext==="function"){const ctx=c.SillyTavern.getContext();if(ctx&&ctx.chatMetadata&&ctx.chatMetadata.variables){ctx.chatMetadata.variables["hunt_title"]="无";ctx.chatMetadata.variables["hunt_steps"]=0;ctx.chatMetadata.variables["hunt_target"]="";}}}}catch{}const t=e.getElementById("hunt-trigger-btn");t&&(t.style.display="none");const a=e.getElementById("hunt-board-root");a&&a.classList.remove("active");const r=e.getElementById("succubus-box-root");r&&r.style.removeProperty("display");r&&r.classList.remove("dialog-blur-fade");try{window.__pauseHuntWhispersLoop&&window.__pauseHuntWhispersLoop()}catch{}};let nt=null;try{const loc=localStorage.getItem("lilith_user_fp");if(loc){const p=parseInt(loc,10);if(!isNaN(p))nt=p}}catch{}// === [PLAN A: OPTIMISTIC LOCK & ANTI-REVERSION MECHANISM] ===
const LILITH_FP_LOCK_MAX_AGE = 900000;
function getLilithChatSignature(){
  const ctxs=[];
  try{if(typeof window!=="undefined")ctxs.push(window)}catch{}
  try{if(typeof window!=="undefined"&&window.parent&&window.parent!==window)ctxs.push(window.parent)}catch{}
  try{if(typeof window!=="undefined"&&window.top&&window.top!==window&&window.top!==window.parent)ctxs.push(window.top)}catch{}
  for(const c of ctxs){
    try{
      if(c.TavernHelper&&typeof c.TavernHelper.getCurrentMessageId==="function"){
        const id=c.TavernHelper.getCurrentMessageId();
        if(id!==undefined&&id!==null&&id!==-1)return "th_msg_"+id;
      }
      if(c.SillyTavern?.getContext){
        const sc=c.SillyTavern.getContext();
        if(sc?.chat&&Array.isArray(sc.chat)&&sc.chat.length>0){
          const lm=sc.chat[sc.chat.length-1];
          return "st_chat_"+sc.chat.length+"_"+(lm?.mesId??lm?.id??"");
        }
      }
    }catch{}
  }
  try{
    const rootDoc=(typeof window!=="undefined"&&window.parent&&window.parent.document)||document;
    if(rootDoc){
      const mesList=rootDoc.querySelectorAll?.(".mes_text, .mes, [data-message-id]");
      if(mesList&&mesList.length>0){
        const lastEl=mesList[mesList.length-1];
        const attrId=lastEl?.getAttribute?.("data-message-id")||lastEl?.id||"";
        return "dom_mes_"+mesList.length+"_"+attrId;
      }
    }
  }catch{}
  return "default_sig";
}
function getLilithFpLock(){
  try{
    if(window.__LILITH_FP_LOCK__&&typeof window.__LILITH_FP_LOCK__.value==="number"){
      const l=window.__LILITH_FP_LOCK__;
      if(Date.now()-l.timestamp<LILITH_FP_LOCK_MAX_AGE)return l;
    }
    const vs=localStorage.getItem("lilith_fp_lock_val"),ts=localStorage.getItem("lilith_fp_lock_time"),bs=localStorage.getItem("lilith_fp_lock_base"),ss=localStorage.getItem("lilith_fp_lock_sig");
    if(vs!==null&&ts!==null){
      const v=parseInt(vs,10),t=parseInt(ts,10),b=bs!==null?parseInt(bs,10):null;
      if(!isNaN(v)&&!isNaN(t)&&(Date.now()-t)<LILITH_FP_LOCK_MAX_AGE){
        const l={value:v,timestamp:t,baseExternalFp:b,chatSig:ss||""};
        window.__LILITH_FP_LOCK__=l;
        return l;
      }
    }
  }catch{}
  return null;
}
function setLilithFpLock(newVal,baseExternalVal){
  try{
    const sig=getLilithChatSignature(),el=getLilithFpLock();
    let b=baseExternalVal;
    if(typeof b!=="number"||isNaN(b)){
      if(el&&typeof el.baseExternalFp==="number"){
        b=el.baseExternalFp;
      }else if(typeof nt==="number"&&!isNaN(nt)){
        b=nt;
      }else if(typeof U==="number"&&!isNaN(U)){
        b=U;
      }else{
        b=newVal;
      }
    }
    const l={value:newVal,timestamp:Date.now(),baseExternalFp:b,chatSig:sig};
    window.__LILITH_FP_LOCK__=l;
    localStorage.setItem("lilith_fp_lock_val",String(newVal));
    localStorage.setItem("lilith_fp_lock_time",String(l.timestamp));
    localStorage.setItem("lilith_fp_lock_base",String(b));
    localStorage.setItem("lilith_fp_lock_sig",sig);
    localStorage.setItem("lilith_user_fp",String(newVal));
  }catch{}
}
function clearLilithFpLock(){
  try{
    window.__LILITH_FP_LOCK__=null;
    localStorage.removeItem("lilith_fp_lock_val");
    localStorage.removeItem("lilith_fp_lock_time");
    localStorage.removeItem("lilith_fp_lock_base");
    localStorage.removeItem("lilith_fp_lock_sig");
  }catch{}
}

function extractLilithMvuContext(){
  const ctxs=[];
  try{if(typeof window!=="undefined")ctxs.push(window)}catch{}
  try{if(typeof window!=="undefined"&&window.parent&&window.parent!==window)ctxs.push(window.parent)}catch{}
  try{if(typeof window!=="undefined"&&window.top&&window.top!==window&&window.top!==window.parent)ctxs.push(window.top)}catch{}
  try{if(typeof window!=="undefined"&&window.frameElement&&window.frameElement.ownerDocument?.defaultView)ctxs.push(window.frameElement.ownerDocument.defaultView)}catch{}

  for(const c of ctxs){
    try{
      if(c.TavernHelper){
        if(typeof c.TavernHelper.getVariables==="function"){
          try{
            const mv=c.TavernHelper.getVariables({type:"message"});
            if(mv?.stat_data)return mv.stat_data;
            if(mv&&typeof mv==="object"&&(mv["命运点数"]!==undefined||mv["关系列表"]!==undefined))return mv;
          }catch{}
          try{
            const curId=typeof c.TavernHelper.getCurrentMessageId==="function"?c.TavernHelper.getCurrentMessageId():-1;
            const mv2=c.TavernHelper.getVariables({type:"message",message_id:curId});
            if(mv2?.stat_data)return mv2.stat_data;
            if(mv2&&typeof mv2==="object"&&(mv2["命运点数"]!==undefined||mv2["关系列表"]!==undefined))return mv2;
          }catch{}
          try{
            const gv=c.TavernHelper.getVariables();
            if(gv?.stat_data)return gv.stat_data;
            if(gv&&typeof gv==="object"&&(gv["命运点数"]!==undefined||gv["关系列表"]!==undefined))return gv;
          }catch{}
        }
        if(typeof c.TavernHelper.getVariable==="function"){
          try{
            const v=c.TavernHelper.getVariable("stat_data",{type:"message"})||c.TavernHelper.getVariable("stat_data");
            if(v){
              const parsed=typeof v==="string"?JSON.parse(v):v;
              if(parsed?.stat_data)return parsed.stat_data;
              if(parsed)return parsed;
            }
          }catch{}
        }
      }

      if(c.SillyTavern?.getContext){
        try{
          const sc=c.SillyTavern.getContext();
          if(sc?.chat&&Array.isArray(sc.chat)&&sc.chat.length>0){
            for(let i=sc.chat.length-1;i>=Math.max(0,sc.chat.length-10);i--){
              const msg=sc.chat[i];
              if(!msg)continue;
              const cand=msg.variables?.stat_data||msg.stat_data||msg.extra?.variables?.stat_data||msg.extra?.stat_data||msg.data?.stat_data;
              if(cand&&typeof cand==="object")return cand;
              if(msg.variables&&(msg.variables["命运点数"]!==undefined||msg.variables["关系列表"]!==undefined)){
                return msg.variables;
              }
            }
          }
          const v=sc?.chatMetadata?.variables?.stat_data||sc?.chatMetadata?.stat_data||sc?.variables?.stat_data||sc?.chatMetadata?.variables||sc?.variables;
          if(v?.stat_data)return v.stat_data;
          if(v&&typeof v==="object")return v;
        }catch{}
      }

      if(c.Mvu){
        try{
          if(typeof c.Mvu.getCurrentMvuData==="function"){
            const d=c.Mvu.getCurrentMvuData();
            if(d?.stat_data)return d.stat_data;
            if(d&&typeof d==="object")return d;
          }
          if(typeof c.Mvu.getMvuData==="function"){
            const d=c.Mvu.getMvuData();
            if(d?.stat_data)return d.stat_data;
            if(d&&typeof d==="object")return d;
          }
          if(c.Mvu.stat_data)return c.Mvu.stat_data;
          if(typeof c.Mvu.getVariable==="function"){
            const v=c.Mvu.getVariable("stat_data");
            if(v){
              const parsed=typeof v==="string"?JSON.parse(v):v;
              return parsed?.stat_data||parsed;
            }
          }
        }catch{}
      }

      if(c.stat_data&&typeof c.stat_data==="object")return c.stat_data;
      if(c.variables?.stat_data)return c.variables.stat_data;
    }catch{}
  }

  try{
    const rootDoc=typeof document!=="undefined"?document:null;
    if(rootDoc){
      const texts=[];
      const mesList=rootDoc.querySelectorAll?.(".mes_text, .mes, [data-message-id]");
      if(mesList)mesList.forEach(m=>texts.push(m.textContent||""));
      if(rootDoc.body)texts.push(rootDoc.body.innerText||rootDoc.body.textContent||"");
      for(const t of texts){
        if(!t)continue;
        const m=t.match(/```(?:json:stat_data|json|stat_data)?\s*(\{[\s\S]*?\})\s*```/) || t.match(/<stat_data>\s*(\{[\s\S]*?\})\s*<\/stat_data>/);
        if(m){
          try{
            const p=JSON.parse(m[1]);
            if(p?.stat_data)return p.stat_data;
            if(p&&typeof p==="object")return p;
          }catch{}
        }
      }
    }
  }catch{}

  return null;
}

function getCleanDomText(id,grp){
  const el=e.getElementById(id);
  if(!el)return"";
  const txt=(el.textContent||"").trim();
  if(!txt||txt.includes("{{")||txt.includes("getvar::")||txt.includes("getglobalvar::"))return"";
  if(grp&&(txt===`$${grp}`||txt==="$"+grp))return"";
  if(txt==="undefined"||txt==="null")return"";
  return txt;
}

function parseFpValue(sd){
  function findFpDeep(obj,d){
    if(!obj||typeof obj!=="object"||(d||0)>5)return null;
    const directKeys=["命运点数","user_fp","fp","FP","当前FP","命运点","爱欲点数","点数"];
    for(const k of directKeys){
      if(k in obj){
        const v=obj[k];
        if(typeof v==="number"&&!isNaN(v))return v;
        if(typeof v==="string"&&v.trim()){
          const n=parseInt(v.replace(/[^0-9-]/g,""),10);
          if(!isNaN(n))return n;
        }
      }
    }
    for(const k of Object.keys(obj)){
      const v=obj[k];
      if(v&&typeof v==="object"){
        const res=findFpDeep(v,(d||0)+1);
        if(res!==null)return res;
      }
    }
    return null;
  }

  if(sd&&typeof sd==="object"){
    const df=findFpDeep(sd);
    if(df!==null)return df;
  }

  const ctxs=[];
  try{if(typeof window!=="undefined")ctxs.push(window)}catch{}
  try{if(typeof window!=="undefined"&&window.parent&&window.parent!==window)ctxs.push(window.parent)}catch{}
  try{if(typeof window!=="undefined"&&window.top&&window.top!==window&&window.top!==window.parent)ctxs.push(window.top)}catch{}

  for(const c of ctxs){
    try{
      if(c.TavernHelper&&typeof c.TavernHelper.getVariable==="function"){
        const v=c.TavernHelper.getVariable("stat_data.命运点数",{type:"message"})??c.TavernHelper.getVariable("命运点数",{type:"message"})??c.TavernHelper.getVariable("stat_data.命运点数")??c.TavernHelper.getVariable("命运点数")??c.TavernHelper.getVariable("stat_data.user_fp")??c.TavernHelper.getVariable("user_fp");
        if(typeof v==="number"&&!isNaN(v))return v;
        if(typeof v==="string"&&v.trim()){
          const n=parseInt(v.replace(/[^0-9-]/g,""),10);
          if(!isNaN(n))return n;
        }
      }
      if(c.Mvu&&typeof c.Mvu.getVariable==="function"){
        const v=c.Mvu.getVariable("stat_data.命运点数")??c.Mvu.getVariable("命运点数")??c.Mvu.getVariable("stat_data.user_fp")??c.Mvu.getVariable("user_fp");
        if(typeof v==="number"&&!isNaN(v))return v;
        if(typeof v==="string"&&v.trim()){
          const n=parseInt(v.replace(/[^0-9-]/g,""),10);
          if(!isNaN(n))return n;
        }
      }
    }catch{}
  }

  const jsonIds=["mvu-raw-stat-data","mvu-raw-global-stat-data"];
  for(const id of jsonIds){
    const raw=getCleanDomText(id);
    if(raw&&(raw.startsWith("{")||raw.startsWith("["))){
      try{
        const o=JSON.parse(raw);
        const v=o?.stat_data?.["命运点数"]??o?.["命运点数"]??o?.user_fp??o?.fp;
        if(typeof v==="number"&&!isNaN(v))return v;
        if(typeof v==="string"&&v.trim()){
          const n=parseInt(v.replace(/[^0-9-]/g,""),10);
          if(!isNaN(n))return n;
        }
      }catch{}
    }
  }

  const domFpIds=["mvu-var-fp-1","mvu-var-fp-2","mvu-var-fp-3","mvu-var-fp-4","mvu-var-fp-5","mvu-var-fp-6","mvu-var-fp"];
  for(const id of domFpIds){
    const txt=getCleanDomText(id);
    if(txt&&txt!=="无"&&!txt.includes("{{")){
      const n=parseInt(txt.replace(/[^0-9-]/g,""),10);
      if(!isNaN(n))return n;
    }
  }

  try{
    if(typeof window!=="undefined"&&typeof window.USER_FP==="number"&&!isNaN(window.USER_FP))return window.USER_FP;
    if(typeof window!=="undefined"&&typeof window.__USER_FP__==="number"&&!isNaN(window.__USER_FP__))return window.__USER_FP__;
  }catch{}

  try{
    const loc=localStorage.getItem("lilith_user_fp");
    if(loc&&loc!=="null"&&loc!=="undefined"){
      const n=parseInt(loc,10);
      if(!isNaN(n))return n;
    }
  }catch{}

  const raw20=getCleanDomText("raw-ph-user-fp",20);
  if(raw20&&raw20!=="无"&&!raw20.includes("$20")){
    const n=parseInt(raw20.replace(/[^0-9-]/g,""),10);
    if(!isNaN(n))return n;
  }

  return null;
}

function parsePartnersValue(sd){
  function isContractValid(target){
    if(!target)return false;
    const c=target["命定契约"]??target.destined_contract??target["契约"]??target.isDestined;
    if(typeof c==="boolean")return c;
    if(typeof c==="number")return c>0;
    if(typeof c==="string"){
      const s=c.trim().toLowerCase();
      return s==="true"||s==="1"||s.includes("已")||s.includes("是")||s.includes("缔结")||s.includes("签订")||s.includes("签署")||s.includes("契约");
    }
    return false;
  }
  function getAffinity(target){
    if(!target||typeof target!=="object")return 0;
    const sc=target["好感度"]??target.score??target.affinity??0;
    return typeof sc==="number"?sc:(parseInt(sc,10)||0);
  }
  function formatObj(val){
    if(!val)return"";
    if(typeof val==="string"){
      const s=val.trim();
      if(!s||s==="无"||s.toLowerCase()==="none")return"";
      if(s.startsWith("{")||s.startsWith("[")){
        try{return formatObj(JSON.parse(s));}catch{}
      }
      return s;
    }
    if(Array.isArray(val)){
      return val.map(x=>{
        if(x&&typeof x==="object"&&isContractValid(x)){
          const n=x.name||x.title||x.role||"";
          return n?`${n}:${getAffinity(x)}`:"";
        }
        return"";
      }).filter(Boolean).join("|");
    }
    if(typeof val==="object"&&val!==null){
      return Object.entries(val).filter(([k,v])=>{
        return v&&typeof v==="object"&&isContractValid(v);
      }).map(([k,v])=>{
        return `${k}:${getAffinity(v)}`;
      }).join("|");
    }
    return"";
  }
  function findPartnersDeep(obj,d){
    if(!obj||typeof obj!=="object"||(d||0)>5)return"";
    const partnerKeys=["关系列表","人际关系","人物关系","契约列表","命定契约","伴侣","partners","fate_partners","contacts","relationships","角色列表","羁绊"];
    for(const k of partnerKeys){
      if(k in obj&&obj[k]){
        const res=formatObj(obj[k]);
        if(res)return res;
      }
    }
    for(const k of Object.keys(obj)){
      const v=obj[k];
      if(v&&typeof v==="object"){
        const res=findPartnersDeep(v,(d||0)+1);
        if(res)return res;
      }
    }
    return"";
  }

  if(sd){
    const dp=findPartnersDeep(sd);
    if(dp)return dp;
  }

  const ctxs=[];
  try{if(typeof window!=="undefined")ctxs.push(window)}catch{}
  try{if(typeof window!=="undefined"&&window.parent&&window.parent!==window)ctxs.push(window.parent)}catch{}
  try{if(typeof window!=="undefined"&&window.top&&window.top!==window&&window.top!==window.parent)ctxs.push(window.top)}catch{}

  for(const c of ctxs){
    try{
      if(c.TavernHelper&&typeof c.TavernHelper.getVariable==="function"){
        const v=c.TavernHelper.getVariable("stat_data.关系列表",{type:"message"})??c.TavernHelper.getVariable("关系列表",{type:"message"})??c.TavernHelper.getVariable("stat_data.关系列表")??c.TavernHelper.getVariable("关系列表");
        const res=formatObj(v);
        if(res)return res;
      }
      if(c.Mvu){
        if(typeof c.Mvu.getCurrentMvuData==="function"){
          const d=c.Mvu.getCurrentMvuData();
          const raw=d?.stat_data?.["关系列表"]??d?.["关系列表"]??d?.stat_data?.partners??d?.partners;
          const res=formatObj(raw);
          if(res)return res;
        }
        if(c.Mvu.stat_data){
          const raw=c.Mvu.stat_data["关系列表"]??c.Mvu.stat_data.partners??c.Mvu.stat_data.fate_partners;
          const res=formatObj(raw);
          if(res)return res;
        }
        if(typeof c.Mvu.getVariable==="function"){
          const v=c.Mvu.getVariable("stat_data.关系列表")??c.Mvu.getVariable("关系列表")??c.Mvu.getVariable("stat_data.partners")??c.Mvu.getVariable("partners");
          const res=formatObj(v);
          if(res)return res;
        }
      }
    }catch{}
  }

  const jsonIds=["mvu-raw-stat-data","mvu-raw-global-stat-data"];
  for(const id of jsonIds){
    const raw=getCleanDomText(id);
    if(raw&&(raw.startsWith("{")||raw.startsWith("["))){
      try{
        const o=JSON.parse(raw);
        const rel=o?.stat_data?.["关系列表"]??o?.["关系列表"]??o?.partners??o?.fate_partners;
        const res=formatObj(rel);
        if(res)return res;
      }catch{}
    }
  }

  const domPIds=["mvu-var-partners-1","mvu-var-partners-2","mvu-var-partners-3","mvu-var-partners"];
  for(const id of domPIds){
    const txt=getCleanDomText(id);
    const res=formatObj(txt);
    if(res)return res;
  }

  const raw11=getCleanDomText("raw-ph-fate-partners",11);
  const res11=formatObj(raw11);
  if(res11)return res11;

  return"";
}

/* ==========================================================================
   爱欲狩猎 · 结算登记簿 & 楼层权威判定
   修复：已结算的旧狩猎A在发布新狩猎B后被历史楼层重绘"复活"
   - 结算登记簿：持久记录所有已结算/被取代的狩猎标题（旧版只记 1 个，新狩猎一来就被删掉）
   - 楼层权威：只有最新发布/结算狩猎的楼层（或之后的楼层）才允许回写全局缓存、MVU 与世界书变量
   ========================================================================== */
let __huntRenderSig="";
function getHuntSettledListKey(){return"lilith_hunt_settled_list_"+getLilithChatKey();}
function getHuntSrcMesKey(){return"lilith_hunt_src_mesid_"+getLilithChatKey();}
function getLegacySettledTitleKey(){return"lilith_hunt_settled_title_"+getLilithChatKey();}
function normHuntTitle(t){return String(t||"").replace(/\s+/g,"").trim();}
function getHuntSettledList(){
  try{
    const raw=localStorage.getItem(getHuntSettledListKey());
    const arr=raw?JSON.parse(raw):[];
    return Array.isArray(arr)?arr.filter(x=>x&&typeof x.t==="string"&&x.t):[];
  }catch{return[];}
}
function saveHuntSettledList(arr){
  try{localStorage.setItem(getHuntSettledListKey(),JSON.stringify(arr.slice(-60)));}catch{}
}
function markHuntTitleSettled(title,mesId){
  const t=normHuntTitle(title);
  if(!t||isHuntSettled(t))return;
  const arr=getHuntSettledList().filter(x=>x.t!==t);
  arr.push({t:t,m:(typeof mesId==="number"&&!isNaN(mesId))?mesId:-1,at:Date.now()});
  saveHuntSettledList(arr);
}
function getHuntSettledEntry(title){
  const t=normHuntTitle(title);
  if(!t)return null;
  const hit=getHuntSettledList().find(x=>x.t===t);
  if(hit)return hit;
  try{
    const lg=localStorage.getItem(getLegacySettledTitleKey());
    // 旧版遗留记录没有楼层号：视为永久结算，禁止任何楼层把它"重新发布"复活
    if(lg&&normHuntTitle(lg)===t)return{t:t,m:Number.MAX_SAFE_INTEGER,legacy:!0};
  }catch{}
  return null;
}
function unmarkHuntTitleSettled(title){
  const t=normHuntTitle(title);
  if(!t)return;
  saveHuntSettledList(getHuntSettledList().filter(x=>x.t!==t));
  try{
    const lg=localStorage.getItem(getLegacySettledTitleKey());
    if(lg&&normHuntTitle(lg)===t)localStorage.removeItem(getLegacySettledTitleKey());
  }catch{}
}
/* 当前卡片所在楼层号（兼容直接渲染与 iframe 渲染），取不到返回 -1 */
function getCardMesId(){
  try{
    const anchor=e.getElementById("succubus-box-root")||e.getElementById("hunt-trigger-btn");
    let mes=anchor&&anchor.closest?anchor.closest(".mes"):null;
    if(!mes){
      try{mes=window.frameElement&&window.frameElement.closest?window.frameElement.closest(".mes"):null;}catch{}
    }
    const v=mes?parseInt(mes.getAttribute("mesid"),10):NaN;
    return isNaN(v)?-1:v;
  }catch{return -1;}
}
/* 当前聊天最大楼层号，用于识别"删楼回溯后"的新楼层 */
function getChatMaxMesId(){
  const ctxs=[window,window.parent,window.top].filter(Boolean);
  for(const c of ctxs){
    try{
      if(c.SillyTavern&&typeof c.SillyTavern.getContext==="function"){
        const sc=c.SillyTavern.getContext();
        if(sc&&Array.isArray(sc.chat)&&sc.chat.length>0)return sc.chat.length-1;
      }
    }catch{}
  }
  try{
    const docs=[document];
    try{if(window.parent&&window.parent.document&&window.parent.document!==document)docs.push(window.parent.document);}catch{}
    let mx=-1;
    for(const d of docs){
      d.querySelectorAll("#chat .mes[mesid]").forEach(m=>{
        const v=parseInt(m.getAttribute("mesid"),10);
        if(!isNaN(v)&&v>mx)mx=v;
      });
    }
    return mx;
  }catch{return -1;}
}
/* 本楼是否拥有狩猎状态的回写权：楼层号 >= 最近一次发布/结算狩猎的楼层，或本楼就是当前最新楼层 */
function isHuntAuthorityCard(mesId){
  if(mesId<0)return true; // 取不到楼层号时回退旧逻辑，由结算登记簿兜底防复活
  let src=-1;
  try{
    const s=parseInt(localStorage.getItem(getHuntSrcMesKey())||"",10);
    if(!isNaN(s))src=s;
  }catch{}
  if(mesId>=src)return true;
  const mx=getChatMaxMesId();
  return mx>=0&&mesId>=mx;
}
function setHuntSrcMesId(mesId){
  if(typeof mesId!=="number"||mesId<0)return;
  try{localStorage.setItem(getHuntSrcMesKey(),String(mesId));}catch{}
}
function getCurrentActiveHuntTitle(){
  try{
    const cs=localStorage.getItem(getHuntStorageKey());
    if(cs&&cs!=="null"&&cs!=="undefined"){
      const co=JSON.parse(cs);
      if(co&&co.title)return String(co.title);
    }
  }catch{}
  try{
    const mh=getActiveHuntMem();
    if(mh&&mh.title)return String(mh.title);
  }catch{}
  return"";
}

function isHuntSettled(val, mood, diag) {
  if (!val && !mood && !diag) return false;
  if (val) {
    if (typeof val === "object") {
      const t = val.title || val["任务名"] || val["狩猎标题"] || val["标题"] || val.name || "";
      if (isHuntSettled(t, mood, diag)) return true;
    }
    const s = String(val).trim().toLowerCase();
    if (!s || s === "\u65E0" || s === "none" || s === "null" || s === "undefined") return true;
    if (/^(?:\u65E0|none|null|undefined|已?完成|已?达成|野望已?达成|已?结算|已?结案|已?关闭|已?结束|成功攻克|攻克成功)$/i.test(s)) return true;
    if (s.includes("已完成") || s.includes("已达成") || s.includes("结案") || s.includes("已结算") || s.includes("任务完成")) return true;
  }
  const m = String(mood || "").trim();
  const d = String(diag || "").trim();
  if (m.includes("庆祝") || m.includes("高兴") || m.includes("狂喜")) {
    if (/(?:攻克|野望达成|达成野望|狩猎.*(?:完成|达成|大丰收|收起|结案|成功)|(?:收起|清空).*看板|战利品.*(?:存入|呈现|发放)|狩猎圆满)/i.test(d)) {
      return true;
    }
  }
  if (/(?:爱欲狩猎.*(?:圆满达成|成功攻克|已完成|已结案)|收起爱欲狩猎看板)/i.test(d)) {
    return true;
  }
  return false;
}

function parseHuntValue(sd){
  function formatHuntObj(val){
    if(!val)return null;
    if(typeof val==="string"){
      const s=val.trim();
      if(!s||s==="\u65E0"||s.toLowerCase()==="none"||s==="null"||s==="undefined"||isHuntSettled(s))return null;
      if(s.startsWith("{")){try{return formatHuntObj(JSON.parse(s))}catch{}}
      return null;
    }
    if(typeof val==="object"&&val!==null){
      const title=val.title||val["\u4EFB\u52A1\u540D"]||val["\u72E9\u730E\u6807\u9898"]||val["\u6807\u9898"]||val.name||"";
      if(!title||title==="\u65E0"||String(title).toLowerCase()==="none"||isHuntSettled(title))return null;
      return{
        title:String(title).trim(),
        target:String(val.target||val["\u72E9\u730E\u5BF9\u8C61"]||val["\u76EE\u6807"]||val["\u730E\u7269"]||"").trim(),
        location:String(val.location||val["\u51FA\u6CA1\u4F4D\u7F6E"]||val["\u5730\u70B9"]||val["\u4F4D\u7F6E"]||"").trim(),
        intel:String(val.intel||val["\u8BE6\u7EC6\u60C5\u62A5"]||val["\u60C5\u62A5"]||"").trim(),
        reward:String(val.reward||val["\u72E9\u730E\u5956\u52B1"]||val["\u5956\u52B1"]||"").trim(),
        aphorism:String(val.aphorism||val["\u5BC4\u8BED"]||val["\u540D\u8A00"]||val["\u8389\u8389\u4E1D\u5BC4\u8BED"]||"").trim(),
        ambition:String(val.ambition||val["\u72E9\u730E\u91CE\u671B"]||val["\u91CE\u671B"]||"").trim(),
        whispers:String(val.whispers||val["\u80CC\u666F\u5BC6\u8BED"]||val["\u5BC6\u8BED"]||"").trim()
      };
    }
    return null;
  }

  const moodVal=getCleanDomText("raw-ph-mood",1);
  const diagVal=getCleanDomText("raw-ph-dialogue",2);
  const raw12=getCleanDomText("raw-ph-hunt-title",12);

  const cardMesId=getCardMesId();
  const isAuthority=isHuntAuthorityCard(cardMesId);
  const hasOwnTitle=!!(raw12&&!isHuntSettled(raw12));

  // 结算信号判定：标题明确表达结算/无；只有本楼没有声明新狩猎时，才启用「庆祝情绪 + 结算语义」兜底
  // （旧逻辑会把"发布新狩猎时恰好心情是庆祝"的楼层误判为结算，直接把新狩猎清掉）
  const isSettledNow=hasOwnTitle?false:(raw12?isHuntSettled(raw12):isHuntSettled("",moodVal,diagVal));

  if(isSettledNow){
    if(!isAuthority){
      // 历史楼层里的结算信号：只隐藏本楼看板，绝不清空后面楼层发布的新狩猎
      return{isExplicitEmpty:!0};
    }
    try{
      const hKey=getHuntStorageKey();
      const sKey=getStepsStorageKey();
      const prevStr=localStorage.getItem(hKey);
      if(prevStr){
        try{
          const pObj=JSON.parse(prevStr);
          if(pObj&&pObj.title)markHuntTitleSettled(pObj.title,cardMesId);
        }catch{}
      }
      try{
        const memH=getActiveHuntMem();
        if(memH&&memH.title)markHuntTitleSettled(memH.title,cardMesId);
      }catch{}
      if(it)markHuntTitleSettled(it,cardMesId);
      setHuntSrcMesId(cardMesId);
      localStorage.removeItem(hKey);
      localStorage.removeItem(sKey);
      localStorage.removeItem("lilith_active_hunt");
      localStorage.removeItem("lilith_hunt_steps");
      localStorage.setItem("lilith_hunt_settled_time_"+getLilithChatKey(),String(Date.now()));
      window.__ACTIVE_HUNT__=null;
      setActiveHuntMem(null);
      if(window.parent)window.parent.__ACTIVE_HUNT__=null;
      if(window.top)window.top.__ACTIVE_HUNT__=null;
    }catch{}
    try{
      const ctxs=[window,window.parent,window.top].filter(Boolean);
      for(const c of ctxs){
        if(c.Mvu&&typeof c.Mvu.setVariable==="function"){
          c.Mvu.setVariable("stat_data.\u7231\u6B32\u72E9\u730E",null);
        }
        if(c.SillyTavern&&typeof c.SillyTavern.getContext==="function"){
          const ctx=c.SillyTavern.getContext();
          if(ctx&&ctx.chatMetadata&&ctx.chatMetadata.variables){
            ctx.chatMetadata.variables["hunt_title"]="无";
            ctx.chatMetadata.variables["hunt_steps"]=0;
            ctx.chatMetadata.variables["hunt_target"]="";
          }
        }
      }
    }catch{}
    it="";Ns="";Ws="";zs="";Gs="";Qs="";Us="";Xs="";
    const t=e.getElementById("hunt-trigger-btn");t&&(t.style.display="none");
    const a=e.getElementById("hunt-board-root");a&&a.classList.remove("active");
    const r=e.getElementById("succubus-box-root");r&&r.style.removeProperty("display");
    r&&r.classList.remove("dialog-blur-fade");
    return{isExplicitEmpty:!0};
  }

  // 明确的新任务/活跃任务
  if(hasOwnTitle){
    const settledEntry=getHuntSettledEntry(raw12);
    if(settledEntry){
      // 只有比结算楼层更新的权威楼层重新发布同名狩猎，才算真正的新任务
      const isReissue=isAuthority&&cardMesId>=0&&cardMesId>settledEntry.m;
      if(!isReissue){
        // 已结算 / 已被新狩猎取代的历史旧卡在重绘，坚决不复活！
        return{isExplicitEmpty:!0};
      }
      unmarkHuntTitleSettled(raw12);
    }
    const hobj={
      title:raw12,
      target:getCleanDomText("raw-ph-hunt-target",13),
      location:getCleanDomText("raw-ph-hunt-location",14),
      intel:getCleanDomText("raw-ph-hunt-intel",15),
      reward:getCleanDomText("raw-ph-hunt-reward",16),
      aphorism:getCleanDomText("raw-ph-hunt-aphorism",17),
      ambition:getCleanDomText("raw-ph-hunt-ambition",18),
      whispers:getCleanDomText("raw-ph-hunt-whispers",19),hunt_whispers:getCleanDomText("raw-ph-hunt-whispers",19),
      steps:3
    };
    if(!isAuthority){
      // 历史楼层：只读展示，绝不回写全局缓存 / MVU / 世界书变量
      // 仅当它就是当前挂起的狩猎时才显示，否则说明已被后续狩猎取代
      if(normHuntTitle(getCurrentActiveHuntTitle())===normHuntTitle(hobj.title))return hobj;
      return{isExplicitEmpty:!0};
    }
    try{
      const hKey=getHuntStorageKey();
      const sKey=getStepsStorageKey();
      const curStr=localStorage.getItem(hKey);
      const newStr=JSON.stringify(hobj);
      if(curStr&&curStr!=="null"&&curStr!=="undefined"){
        try{
          const cObj=JSON.parse(curStr);
          // 新狩猎覆盖了未结案的旧狩猎：旧狩猎登记为"已取代"，防止旧楼层重绘时复活
          if(cObj&&cObj.title&&normHuntTitle(cObj.title)!==normHuntTitle(hobj.title)){
            markHuntTitleSettled(cObj.title,cardMesId);
          }
        }catch{}
      }
      if(curStr!==newStr){
        localStorage.setItem(hKey,newStr);
        localStorage.setItem(sKey,"3");
      }
      setHuntSrcMesId(cardMesId);
      window.__ACTIVE_HUNT__=hobj;
      setActiveHuntMem(hobj);
    }catch{}
    try{
      const ctxs=[window,window.parent,window.top].filter(Boolean);
      for(const c of ctxs){
        if(c.Mvu&&typeof c.Mvu.setVariable==="function"){
          c.Mvu.setVariable("stat_data.\u7231\u6B32\u72E9\u730E",hobj);
        }
        if(c.SillyTavern&&typeof c.SillyTavern.getContext==="function"){
          const ctx=c.SillyTavern.getContext();
          if(ctx&&ctx.chatMetadata){
            if(!ctx.chatMetadata.variables)ctx.chatMetadata.variables={};
            ctx.chatMetadata.variables["hunt_title"]=hobj.title;
            ctx.chatMetadata.variables["hunt_target"]=hobj.target;
            ctx.chatMetadata.variables["hunt_ambition"]=hobj.ambition;
            ctx.chatMetadata.variables["hunt_reward"]=hobj.reward;
            ctx.chatMetadata.variables["hunt_location"]=hobj.location;
            ctx.chatMetadata.variables["hunt_steps"]=3;
          }
        }
      }
    }catch{}
    return hobj;
  }

  // 外部 sd / MVU
  if(sd){
    const raw=sd["\u7231\u6B32\u72E9\u730E"]??sd.hunt??sd.eros_hunt??sd.active_hunt;
    if(isHuntSettled(raw))return{isExplicitEmpty:!0};
    const res=formatHuntObj(raw);
    // MVU 里残留的已结算狩猎（模型没及时置 null）一律忽略
    if(res&&!getHuntSettledEntry(res.title))return res;
  }
  const jsonIds=["mvu-raw-stat-data","mvu-raw-global-stat-data"];
  for(const id of jsonIds){
    const raw=getCleanDomText(id);
    if(raw&&(raw.startsWith("{")||raw.startsWith("["))){
      try{
        const o=JSON.parse(raw);
        const rawH=o?.stat_data?.["\u7231\u6B32\u72E9\u730E"]??o?.["\u7231\u6B32\u72E9\u730E"]??o?.hunt;
        if(isHuntSettled(rawH))return{isExplicitEmpty:!0};
        const res=formatHuntObj(rawH);
        if(res&&!getHuntSettledEntry(res.title))return res;
      }catch{}
    }
  }

  // 恢复挂起任务（未结算时）
  try{
    const hKey=getHuntStorageKey();
    const sKey=getStepsStorageKey();
    const cachedStr=localStorage.getItem(hKey);
    if(cachedStr&&cachedStr!=="null"&&cachedStr!=="undefined"){
      const parsed=JSON.parse(cachedStr);
      if(parsed&&parsed.title&&!isHuntSettled(parsed.title)){
        if(getHuntSettledEntry(parsed.title)){
          try{localStorage.removeItem(hKey);localStorage.removeItem(sKey);}catch{}
          return{isExplicitEmpty:!0};
        }
        try{
          const st=localStorage.getItem(sKey);
          if(st!==null&&st!==undefined&&!isNaN(parseInt(st,10))){
            parsed.steps=parseInt(st,10);
          }
        }catch{}
        return parsed;
      }
    }
  }catch{}

  try{
    const memH=getActiveHuntMem();
    if(memH&&memH.title&&!isHuntSettled(memH.title)&&!getHuntSettledEntry(memH.title)){
      return memH;
    }
  }catch{}

  return null;
}
function syncLilithMvuCore(passedData){
  try{
    let sd=null;
    if(passedData&&typeof passedData==="object"){
      if(passedData.stat_data&&typeof passedData.stat_data==="object"){
        sd=passedData.stat_data;
      }else if(passedData["命运点数"]!==undefined||passedData["关系列表"]!==undefined){
        sd=passedData;
      }
    }
    if(!sd){
      sd=extractLilithMvuContext();
    }

    const foundFp=parseFpValue(sd);    if(foundFp!==null&&typeof foundFp==="number"&&!isNaN(foundFp)){      const lk=getLilithFpLock();      let ef=foundFp;      if(lk&&typeof lk.value==="number"){        const cs=getLilithChatSignature();        const st=(!lk.chatSig||lk.chatSig===cs);        const rc=(Date.now()-lk.timestamp<LILITH_FP_LOCK_MAX_AGE);        if(st&&rc){          if(foundFp===lk.baseExternalFp||foundFp>lk.value){            ef=lk.value;          }else if(foundFp===lk.value){            ef=lk.value;          }else{            if(typeof lk.baseExternalFp==="number"){              const d=foundFp-lk.baseExternalFp;              ef=lk.value+d;              setLilithFpLock(ef,foundFp);            }else{              ef=lk.value;            }          }        }else if(!st){          clearLilithFpLock();          ef=foundFp;        }      }else{        nt=foundFp;      }      nt=ef;      U=ef;      window.USER_FP=ef;      window.__USER_FP__=ef;      try{localStorage.setItem("lilith_user_fp",String(ef));}catch{}      const We=e.getElementById("fp-tag-value");      if(We)We.textContent=ef.toLocaleString();      e.querySelectorAll("#shop-fp-display, .shop-fp-display").forEach(r=>{        r.textContent=`${ef.toLocaleString()} FP`;      });      e.querySelectorAll("#shop-fp-badge, .shop-fp-badge").forEach(r=>{        const a=r.querySelector("#shop-fp-symbol, .shop-fp-symbol"),              E=r.querySelector("#shop-fp-debt-tag, .shop-fp-debt-tag");        if(ef<0){          r.classList.add("fp-negative-debt");          a&&(a.textContent="🖤");          E&&(E.style.display="inline-block");        }else{          r.classList.remove("fp-negative-debt");          a&&(a.textContent="💖");          E&&(E.style.display="none");        }      });      try{        const o=Pe(ef);        js=o;        e.querySelectorAll(".fp-tier-btn").forEach(r=>{          const a=parseInt(r.getAttribute("data-fp")||"0",10);          Pe(a)===o?r.classList.add("active"):r.classList.remove("active");        });        Ss(o);$s(o);Ts(o);      }catch{}    }    const foundPartners=parsePartnersValue(sd);
    /* 命定之人列表：所有端都必须解析（foundPartners 来自上方 parsePartnersValue(sd)） */
    if(foundPartners!==undefined){
      Ru=foundPartners;
      window.__RAW_FATE_PARTNERS__=foundPartners;
      const track=e.getElementById("fate-hearts-track");
      if(track)ws(track);
    }

    /* 爱欲狩猎：所有端都解析本楼 $12~$19
       （旧版移动端跳过解析，卡片只能显示 localStorage 里的陈旧缓存，导致显示旧狩猎）
       渲染去重改为本卡片闭包内签名，避免多张卡片共用 window.__ACTIVE_HUNT__ 互相干扰 */
    {
      const foundHunt=parseHuntValue(sd);
      if(foundHunt&&foundHunt.isExplicitEmpty){
        if(it!==""||__huntRenderSig!==""){
          it="";Ns="";Ws="";zs="";Gs="";Qs="";Us="";Xs="";
          window.__ACTIVE_HUNT__=null;
          window.__HUNT_RENDERED__=false;
          __huntRenderSig="";
          try{qs()}catch(err){console.warn("[Hunt Render]",err);}
        }
      }else if(foundHunt){
        const sig=[foundHunt.title,foundHunt.target,foundHunt.location,foundHunt.intel,foundHunt.reward,foundHunt.aphorism,foundHunt.ambition,foundHunt.whispers||foundHunt.hunt_whispers].map(v=>String(v||"")).join("\u0001");
        it=foundHunt.title||"";
        Ns=foundHunt.target||"";
        Ws=foundHunt.location||"";
        zs=foundHunt.intel||"";
        Gs=foundHunt.reward||"";
        Qs=foundHunt.aphorism||"";
        Us=foundHunt.ambition||"";
        Xs=foundHunt.whispers||foundHunt.hunt_whispers||"";
        window.__ACTIVE_HUNT__=foundHunt;
        if(sig!==__huntRenderSig){
          __huntRenderSig=sig;
          window.__HUNT_RENDERED__=true;
          try{qs()}catch(err){console.warn("[Hunt Render]",err);}
        }
      }
    }
  }catch(err){
    console.warn("[Lilith Sync Error]",err);
  }
}

const magEvents=[
  "mag_variable_update_ended_for_zod",
  "mag_command_parsed_for_zod",
  "mag_command_parsed_ended_for_zod",
  "mag_variable_initialized",
  "VARIABLE_UPDATE_ENDED",
  "variable_update_ended",
  "VARIABLE_UPDATE_STARTED",
  "COMMAND_PARSED",
  "command_parsed",
  "character_message_rendered",
  "CHARACTER_MESSAGE_RENDERED",
  "message_received",
  "MESSAGE_RECEIVED",
  "message_updated",
  "MESSAGE_UPDATED",
  "chat_completed",
  "CHAT_COMPLETED",
  "user_message_rendered",
  "USER_MESSAGE_RENDERED"
];

/* ========== P0 优化 1: 自适应节流阈值（移动端 1000ms） ========== */
const isMobileDevice = () => window.innerWidth <= 768;
const THROTTLE_MS = () => isMobileDevice() ? 1000 : 300;
const POLL_INTERVAL = () => isMobileDevice() ? 20000 : 10000;

let _lastLilithMvuSyncTime = 0;
function throttledSyncLilithMvuCore(passedData) {
  const now = Date.now();
  const throttleDelay = THROTTLE_MS();
  if (!passedData && now - _lastLilithMvuSyncTime < throttleDelay) {
    return;
  }
  _lastLilithMvuSyncTime = now;
  try { syncLilithMvuCore(passedData); } catch(err) { console.warn("[Lilith Sync Error]", err); }
}

function setupLilithMvuListeners(){
  if(window.__LILITH_MVU_LISTENERS_INITIALIZED__) return;
  window.__LILITH_MVU_LISTENERS_INITIALIZED__ = true;

  const ctxs=[];
  try{if(typeof window!=="undefined")ctxs.push(window)}catch{}
  try{if(typeof window!=="undefined"&&window.parent&&window.parent!==window)ctxs.push(window.parent)}catch{}
  try{if(typeof window!=="undefined"&&window.top&&window.top!==window&&window.top!==window.parent)ctxs.push(window.top)}catch{}
  try{if(typeof window!=="undefined"&&window.frameElement&&window.frameElement.ownerDocument?.defaultView)ctxs.push(window.frameElement.ownerDocument.defaultView)}catch{}

  for(const c of ctxs){
    try{
      if(c.__LILITH_CTX_LISTENERS_BOUND__) continue;
      c.__LILITH_CTX_LISTENERS_BOUND__ = true;

      const safeSync = () => throttledSyncLilithMvuCore();

      if(typeof c.eventOn==="function"){
        for(const ev of magEvents){try{c.eventOn(ev, safeSync);}catch{}}
      }
      if(c.TavernHelper&&typeof c.TavernHelper.eventOn==="function"){
        for(const ev of magEvents){try{c.TavernHelper.eventOn(ev, safeSync);}catch{}}
      }
      const es=c.eventSource||c.SillyTavern?.getContext?.()?.eventSource;
      if(es&&typeof es.on==="function"){
        for(const ev of magEvents){try{es.on(ev, safeSync);}catch{}}
      }
    }catch{}
  }
}

try{setupLilithMvuListeners();}catch{}
try{throttledSyncLilithMvuCore();}catch{}
window.syncLilithMvuState=throttledSyncLilithMvuCore;

try{
  const targetDoc=(typeof window!=="undefined"&&window.parent&&window.parent.document)||document;
  if(targetDoc && !targetDoc.__LILITH_CHAT_OBSERVED__){
    targetDoc.__LILITH_CHAT_OBSERVED__ = true;
    const chatEl=targetDoc.getElementById("chat");
    if(chatEl){
      /* P0 优化: MutationObserver 使用自适应防抖 */
      let deb=null;
      const obs=new MutationObserver(()=>{
        if(deb)clearTimeout(deb);
        const debounceDelay = isMobileDevice() ? 800 : 300;
        deb=setTimeout(()=>throttledSyncLilithMvuCore(), debounceDelay);
      });
      obs.observe(chatEl,{childList:true});
    }
  }
}catch{}

/* ========== P0 优化 1: 动态轮询间隔（移动端 20 秒） ========== */
[100,500,1500,3000].forEach(d=>setTimeout(throttledSyncLilithMvuCore,d));
if(!window.__LILITH_GLOBAL_SYNC_TIMER__){
  const pollInterval = POLL_INTERVAL();
  window.__LILITH_GLOBAL_SYNC_TIMER__ = setInterval(()=>{
    throttledSyncLilithMvuCore();
  }, pollInterval);
}

let ie=k("raw-ph-giftbox-1",21),ne=k("raw-ph-giftbox-2",22),oe=k("raw-ph-giftbox-3",23),re=k("raw-ph-giftbox-4",24),ae=k("raw-ph-giftbox-5",25),le=k("raw-ph-giftbox-6",26),ce=k("raw-ph-daily-deal",27),Ot=k("raw-ph-lilith-quotes",28);const ot={"item-ex":xu(ie,21,{name:"\u771F\u540D\u5951\u7EA6\xB7\u6781\u4E50\u968F\u4F8D\u9879\u73AF",type:"\u9B45\u9B54\u9970\u54C1",tags:["#\u968F\u65F6\u968F\u5730\u53EC\u5524\u8389\u8389\u4E1D","#\u56FA\u5B9A100FP\u5524\u73B0","#\u9B45\u9B54\u5973\u738B\u5951\u7EA6"],desc:"\u8389\u8389\u4E1D\u4EE5\u5FC3\u5C16\u7CBE\u8840\u7194\u94F8\u771F\u540D\u70D9\u5370\u7684\u968F\u8EAB\u6781\u4E50\u9970\u54C1\u3002\u4F69\u6234\u8005\u5C06\u83B7\u5F97\u4E0E\u9B45\u9B54\u5973\u738B\u6C38\u6052\u76F8\u901A\u7684\u5FC3\u5FF5\u7F81\u7ECA\uFF0C\u3010\u6BCF\u6B21\u56FA\u5B9A\u82B1\u8D39100FP\uFF0C\u968F\u65F6\u968F\u5730\u53EC\u5524\u8389\u8389\u4E1D\u73B0\u8EAB\u3011\u4E8E\u4F60\u8EAB\u4FA7\u4F8D\u5949\u5B88\u62A4\u3002",price:3e4}),"item-ur-1":xu(ne,22,{name:"\u72C2\u6B22\u9057\u5B7D\xB7\u6742\u5408\u9B45\u9B54\u86CB",type:"\u5947\u7269 / \u6D3B\u4F53\u80DA\u80CE",tags:["#\u9B45\u9B54\u653E\u8361\u7ED3\u6676","#\u5947\u5999\u751F\u7269\u5B75\u5316","#\u6DF1\u6E0A\u672A\u77E5\u751F\u547D"],desc:"\u5176\u5B83\u9B45\u9B54\u5728\u6DF1\u6E0A\u72C2\u6B22\u5BB4\u540E\u8086\u610F\u4E71\u641E\u751F\u4E0B\u7684\u795E\u79D8\u9B54\u86CB\u3002\u86CB\u58F3\u6D41\u6DCC\u7740\u6E29\u70ED\u6591\u6593\u7684\u6B32\u671B\u9B54\u7EB9\uFF0C\u5185\u90E8\u5B55\u80B2\u7740\u8E81\u52A8\u7684\u5C0F\u751F\u547D\uFF0C\u53EA\u8981\u4EE5\u4F53\u6E29\u4E0E\u7231\u610F\u6089\u5FC3\u5B75\u5316\uFF0C\u4FBF\u80FD\u8BDE\u751F\u51FA\u5947\u5999\u7684\u672A\u77E5\u751F\u7269\u3002",price:17e3}),"item-ur-2":xu(oe,23,{name:"\u6781\u4E50\u6444\u9B42\u91D1\u4E1D\u50AC\u7720\u6000\u8868",type:"\u50AC\u7720\u9053\u5177 / \u7CBE\u795E\u64CD\u7EB5",tags:["#\u610F\u8BC6\u6DF1\u5EA6\u5265\u593A","#\u7EDD\u5BF9\u50AC\u7720\u6697\u793A","#\u65E0\u6297\u62D2\u670D\u4ECE"],desc:"\u6EF4\u7B54\u8F7B\u54CD\u4E2D\u6D41\u52A8\u7740\u7C89\u7EA2\u9B45\u60D1\u9B54\u529B\u7684\u53E4\u8463\u6000\u8868\u3002\u6643\u52A8\u95F4\u80FD\u4EE4\u76EE\u51FB\u8005\u7684\u7406\u667A\u5982\u878D\u96EA\u822C\u6D88\u6563\uFF0C\u9677\u5165\u6DF1\u5EA6\u751C\u7F8E\u7684\u50AC\u7720\u604D\u60DA\u72B6\u6001\uFF0C\u8A00\u542C\u8BA1\u4ECE\uFF0C\u4EFB\u7531\u6446\u5E03\u3002",price:15e3}),"item-ssr-1":xu(re,24,{name:"\u6DF1\u6E0A\u79D8\u4F20\uFF1A\u9B45\u9B54\u5F15\u8BF1\u4E0E\u4F53\u4F4D\u79D8\u5178",type:"\u6280\u80FD\u4E66",tags:["#\u9AD8\u9636\u5F15\u8BF1\u79D8\u6280","#\u654F\u611F\u70B9\u5168\u77E5","#\u5FEB\u611F\u767E\u500D\u6FC0\u5316"],desc:"\u5C01\u5370\u7740\u4E0A\u53E4\u9AD8\u7B49\u9B45\u9B54\u5438\u7CBE\u6444\u9B44\u7CBE\u9AD3\u7684\u7F8A\u76AE\u53E4\u5377\u3002\u7814\u8BFB\u540E\u80FD\u900F\u5F7B\u6D1E\u6089\u4E07\u7269\u751F\u7075\u6240\u6709\u9690\u79D8\u654F\u611F\u70B9\uFF0C\u4E3E\u624B\u6295\u8DB3\u95F4\u7686\u53EF\u65BD\u5C55\u4EE4\u610F\u5FD7\u77AC\u95F4\u9165\u8F6F\u7684\u7EDD\u4F26\u5F15\u8BF1\u6280\u5DE7\u3002",price:7700}),"item-ssr-2":xu(ae,25,{name:"\u6B32\u706B\u8680\u5FC3\u86C7\u543B\u8F6F\u97AD",type:"\u6B66\u5668",tags:["#\u75DB\u611F\u9006\u8F6C\u5FEB\u611F","#\u795E\u7ECF\u60C5\u6B32\u8FC7\u8F7D","#\u5C48\u670D\u97AD\u631E"],desc:"\u6D78\u6CE1\u5728\u9B45\u9B54\u795E\u7ECF\u6BD2\u7D20\u4E2D\u7684\u8D64\u7EA2\u86C7\u76AE\u957F\u97AD\u3002\u547D\u4E2D\u76EE\u6807\u65F6\u4E0D\u4EC5\u4E0D\u9020\u6210\u5B9E\u8D28\u4F24\u6B8B\uFF0C\u53CD\u800C\u5C06\u53D7\u51FB\u75DB\u695A\u5168\u6570\u9006\u8F6C\u4E3A\u5982\u72C2\u6F6E\u822C\u51B3\u5824\u7684\u6781\u81F4\u7518\u7F8E\u5FEB\u611F\u4E0E\u6218\u6817\u3002",price:4e3}),"item-sr-1":xu(le,26,{name:"\u9B45\u591C\u5996\u59EC\xB7\u9ED1\u857E\u4E1D\u8F7B\u94E0",type:"\u9632\u5177",tags:["#\u8F7B\u82E5\u65E0\u7269\u9632\u62A4","#\u89C6\u7EBF\u8BF1\u60D1\u504F\u659C","#\u53D7\u51FB\u9B45\u60D1\u53CD\u9707"],desc:"\u7531\u6697\u591C\u6DF1\u6E0A\u5E7D\u8695\u4E1D\u4E0E\u79D8\u94F6\u7EA4\u7EF4\u7CBE\u7EBA\u800C\u6210\u7684\u534A\u900F\u9ED1\u857E\u4E1D\u5185\u7532\u3002\u8D34\u8EAB\u52FE\u52D2\u6781\u81F4\u8BF1\u4EBA\u66F2\u7EBF\u7684\u540C\u65F6\uFF0C\u80FD\u81EA\u52A8\u6563\u53D1\u51FA\u8BA9\u4EFB\u4F55\u654C\u610F\u653B\u51FB\u77AC\u95F4\u5931\u51C6\u7684\u8FF7\u9B42\u62A4\u76FE\u3002",price:6900})},Zu=_u(ce,27,{name:"\u6DF1\u6E0A\u539F\u521D\u79D8\u9AD3\u6676",type:"\u6750\u6599",grade:"\u53F2\u8BD7",tags:["#\u539F\u521D\u9B45\u9B54\u4F53\u6DB2","#\u7981\u65AD\u50AC\u5316","#\u9650\u65F65\u6298"],desc:"\u91C7\u64B7\u81EA\u6DF1\u6E0A\u6838\u5FC3\u9B45\u9B54\u7E41\u884D\u5DE2\u7A74\u7684\u7CBE\u7EAF\u6E90\u8D28\u7ED3\u6676\u3002\u51DD\u7ED3\u7740\u8FD1\u4E4E\u6CB8\u817E\u7684\u539F\u59CB\u6B32\u5FF5\u4E0E\u9B45\u60D1\u4E4B\u606F\uFF0C\u662F\u953B\u9020\u4E0A\u4F4D\u60C5\u8DA3\u795E\u88C5\u4E0E\u8C03\u914D\u7981\u5FCC\u9B45\u836F\u4E0D\u53EF\u6216\u7F3A\u7684\u9AD8\u9636\u89E6\u5A92\u3002",price:1500,originalPrice:3e3}),Wu=At(Ot,28,["\u54FC\u54FC~ \u600E\u4E48\u4E00\u76F4\u76EF\u7740\u6211\u770B\u5462\uFF1F\u662F\u6311\u82B1\u773C\u4E86\uFF0C\u8FD8\u662F\u8FF7\u4E0A\u6211\u4E86\uFF1F","\u8FD9\u4E9B\u79D8\u5323\u91CC\u53EF\u85CF\u7740\u8BA9\u4EBA\u6C89\u6CA6\u7684\u5B9D\u7269\uFF0C\u4E0D\u6253\u7B97\u8BD5\u8BD5\u624B\u6C14\u5417\uFF1F","\u547D\u5B9A\u70B9\u6570\u4E0D\u591F\u7528\u4E5F\u6CA1\u5173\u7CFB\u2026\u2026\u53EF\u4EE5\u62FF\u66F4\u6709\u8DA3\u7684\u4E1C\u897F\u6765\u6362\u54E6\u2665","\u53F3\u4E0B\u89D2\u5806\u7740\u7684\u7279\u8C03\u7F8E\u9152\uFF0C\u53EF\u662F\u6211\u4EB2\u624B\u917F\u5236\u7684\u72EC\u5BB6\u79D8\u9732\u5462~","\u4E56\u4E56\u628A\u70B9\u6570\u82B1\u5149\uFF0C\u5F85\u4F1A\u513F\u6211\u4EB2\u81EA\u9001\u4F60\u56DE\u5723\u5802\u53BB\u89C1\u4FEE\u5973~"]);window.checkErosShopQualification=$u;const wt=["\u4E25\u8083","\u4FCF\u76AE","\u5632\u7B11","\u5ACC\u5F03","\u5E86\u795D","\u5F00\u5FC3","\u6050\u60E7","\u60CA\u6050","\u60CA\u8BB6","\u6307\u5BFC","\u65A5\u8D23","\u65E0\u8BED","\u6C14\u6124","\u6E34\u671B","\u72C2\u559C","\u75DB\u54ED","\u8272\u8272","\u9A84\u50B2","\u9F13\u52B1","\u574F\u7B11","\u5174\u594B"],ze=Ne+"\u4FCF\u76AE.png",Ys=wt[Math.floor(Math.random()*wt.length)],Ge=["\u9AD8\u6F6E","\u81EA\u6170","\u7EDD\u9876","\u5931\u795E","\u5F3A\u70C8","\u60C5\u6B32","\u52A8\u60C5","\u6781\u4E50","\u75C9\u631B","\u762B\u8F6F","\u8272\u8272"];let gu=0,Fe=null,Ee=null,de=null,Lt=null,St=null,Hu=null,fe=!1,Nt=!1,rt="",pe=0,Be="",$t=null,Qe=0;const Ue=["\u54FC\u54FC\uFF5E\u4EB2\u7231\u7684\u6307\u5C16\u597D\u8D2A\u5FC3\uFF0C\u662F\u5728\u5077\u5077\u63A2\u7D22\u8389\u8389\u4E1D\u6700\u654F\u611F\u7684\u7284\u89D2\u4E0E\u8033\u5C16\u5417\uFF1F\u2665","\u5440\u2026\u2026\u89E6\u78B0\u90A3\u91CC\u7684\u529B\u9053\u592A\u72E1\u733E\u4E86\u2026\u2026\u5FC3\u8DF3\u90FD\u5FEB\u5F97\u8981\u8DC3\u51FA\u80F8\u53E3\u4E86\u5462\uFF0C\u4E0D\u53EF\u4EE5\u7A81\u7136\u505C\u4E0B\u6765\u54E6\u2665","\u545C\u2026\u2026\u6076\u9B54\u4E4B\u8840\u5728\u6CB8\u817E\u4E86\u5462\u2026\u2026\u4EB2\u7231\u7684\u6E29\u5EA6\uFF0C\u8389\u8389\u4E1D\u60F3\u8981\u5168\u90E8\u5360\u4E3A\u5DF1\u6709\u2026\u2026\u2665","\u547C\u2026\u2026\u53EA\u8981\u88AB\u4F60\u6478\u6478\u5934\uFF0C\u5468\u906D\u7684\u7A7A\u6C14\u90FD\u4F1A\u53D8\u5F97\u751C\u817B\u7C98\u7A20\u8D77\u6765\u5462\u2026\u2026\u518D\u62B1\u7D27\u4E00\u70B9\u561B\uFF5E\u2665","\u76EF\u2014\u2014\u4F60\u521A\u624D\u7684\u773C\u795E\uFF0C\u662F\u4E0D\u662F\u5728\u671F\u5F85\u8389\u8389\u4E1D\u505A\u51FA\u66F4\u7F9E\u803B\u7684\u53CD\u5E94\u5462\uFF1F\u88AB\u770B\u7A7F\u4E86\u54E6\u2665","\u554A\u54C8\u2026\u2026\u2665 \u4EB2\u7231\u7684\u6307\u5C16\u8FD9\u4E48\u6E29\u67D4\uFF0C\u662F\u60F3\u628A\u8389\u8389\u4E1D\u5BA0\u574F\u6210\u53EA\u77E5\u4F9D\u504E\u4F60\u7684\u5C0F\u6076\u9B54\u5417\uFF1F\u2665","\u5FC3\u8DF3\u58F0\u2026\u2026\u542C\u5F97\u597D\u6E05\u695A\u5462\u3002\u7A76\u7ADF\u662F\u6211\u7684\uFF0C\u8FD8\u662F\u4EB2\u7231\u7684\u5462\uFF1F\u8981\u4E0D\u8981\u8D34\u7D27\u542C\u542C\u770B\uFF5E\u2665"],at=["\u54FC\u54FC\uFF0C\u4EB2\u7231\u7684\uFF5E\u4ECA\u5929\u60F3\u8981\u548C\u8389\u8389\u4E1D\u73A9\u4E9B\u4EC0\u4E48\u6709\u8DA3\u7684\u6E38\u620F\u5462\uFF1F\u5FEB\u70B9\u8FC7\u6765\u561B\u2026\u2026\u6211\u7684\u7284\u89D2\u4E0E\u5C3E\u5DF4\uFF0C\u90FD\u5728\u53D1\u70EB\u4E86\u5462\u2665","\u76EF\u2014\u2014\u4F60\u521A\u624D\u7684\u89C6\u7EBF\uFF0C\u662F\u4E0D\u662F\u5728\u5077\u5077\u7784\u7740\u8389\u8389\u4E1D\u7684\u5C3E\u5DF4\u5C16\u5462\uFF1F\u88AB\u53D1\u73B0\u4E86\u54E6\uFF5E\u8981\u53D7\u7F5A\u7684\u5462\u2665","\u547C\u2026\u2026\u53EA\u8981\u9760\u8FD1\u4F60\uFF0C\u5468\u906D\u7684\u7A7A\u6C14\u90FD\u5F25\u6F2B\u7740\u9999\u751C\u7684\u6C14\u606F\u5462\u3002\u771F\u60F3\u628A\u4F60\u6574\u4E2A\u90FD\u541E\u4E0B\u53BB\u5440\u2026\u2026","\u6076\u9B54\u7684\u5951\u7EA6\u53EF\u662F\u5F88\u4E25\u82DB\u7684\u54E6\u2026\u2026\u4E0D\u8FC7\u5982\u679C\u662F\u4F60\u7684\u8BDD\uFF0C\u8389\u8389\u4E1D\u613F\u610F\u628A\u6240\u6709\u7684\u4E3B\u52A8\u6743\u90FD\u4EA4\u7ED9\u4F60\u5462\u2665","\u5FC3\u8DF3\u58F0\u2026\u2026\u542C\u5F97\u597D\u6E05\u695A\u5462\u3002\u7A76\u7ADF\u662F\u6211\u7684\uFF0C\u8FD8\u662F\u4EB2\u7231\u7684\u5462\uFF1F\u518D\u62B1\u7D27\u4E00\u70B9\uFF0C\u597D\u4E0D\u597D\u5440\uFF5E"];let au=0,Du=0;const zu=[],pt=[];let wu=!1,Wt=!1,zt=!1,Ce=null,De=null,Xe=0,Ye=0;const je="lilith_eros_shop_memory_pool_v1";window.saveGlobalErosShopState=ju,window.getGlobalErosShopState=lu;const Gt=[],lt={getState(){return lu()},saveState(t){ju(t),this.notifyListeners()},getLilithQuotes(){const t=this.getState();return t.currentLilithQuotes&&t.currentLilithQuotes.length>0?[...t.currentLilithQuotes]:[...Wu]},setLilithQuotes(t){if(!Array.isArray(t)||t.length===0)return;const i=this.getState();i.currentLilithQuotes=[...t],this.saveState(i);const u=window.setLilithShopQuotes;typeof u=="function"&&u(t)},getLocation(){return this.getState().currentLocation||"\u8389\u8389\u4E1D\u5B9D\u5E93"},setLocation(t){if(!t)return;const i=this.getState();i.currentLocation=t,this.saveState(i);const u=e.getElementById("shop-location-text");u&&(u.textContent=t);const s=e.querySelector("#cabinet-tier-blindbox .shelf-tier-name");s&&(s.textContent=`\u5E95\u5C42 \xB7 \u79D8\u85CF\u76F2\u76D2\u5C55\u53F0 \u3010\u6DF1\u84DD\u76F2\u76D2 \xB7 1,000 FP / \u4E2A\u3011 \xB7 \u6E90\u81EA${t}`),e.querySelectorAll(".blindbox-card").forEach(o=>{const l=o,r=l.getAttribute("data-base-name")||l.getAttribute("data-name")?.replace(/\s*·\s*源自.*$/,"")||"\u6DF1\u84DD\u9B45\u5F71 \xB7 \u79D8\u613F\u76F2\u76D2";l.setAttribute("data-base-name",r);const a=`${r} \xB7 \u6E90\u81EA${t}`;l.setAttribute("data-name",a),l.setAttribute("title",`${a} \xB7 1,000 FP (\u8F7B\u89E6\u76F4\u63A5\u6536\u5165\u8D2D\u7269\u680F)`)})},restockByAI(t){const i=this.getState();t.goodsMap&&(i.currentGoodsMap={...t.goodsMap}),t.dailyDeal&&(i.currentDailyDeal={...t.dailyDeal}),t.quotes&&Array.isArray(t.quotes)&&t.quotes.length>0&&(i.currentLilithQuotes=[...t.quotes]),t.location&&(i.currentLocation=t.location),t.resetSoldOut!==!1&&(i.settledPurchasedItemIds=[],i.settledLoanCount=0),i.hasEverRestocked=!0,i.placeholdersSignature=`${JSON.stringify(i.currentDailyDeal)}###${JSON.stringify(i.currentGoodsMap)}###${JSON.stringify(i.currentLilithQuotes)}###${i.currentLocation}`,this.saveState(i),t.location&&this.setLocation(t.location),t.quotes&&this.setLilithQuotes(t.quotes),typeof window.resetAndInitGiftBoxSystem=="function"&&window.resetAndInitGiftBoxSystem(),typeof window.initBlindBoxSystem=="function"&&window.initBlindBoxSystem(),typeof window.__updateDailyDealState=="function"&&window.__updateDailyDealState(),typeof window.syncShopLoanDrawer=="function"&&window.syncShopLoanDrawer()},outboundItems(t){const i=this.getState(),{cartItems:u,remainingFP:s}=t;let n=0,o=0,l=0;return u.forEach(r=>{r.type==="loan"?o+=r.count:r.type==="wine"?l+=r.count:(i.settledPurchasedItemIds.includes(r.id)||i.settledPurchasedItemIds.push(r.id),n+=r.count)}),i.settledWineCount=Math.min(20,i.settledWineCount+l),i.settledLoanCount=Math.min(5,i.settledLoanCount+o),i.userFP=s,this.saveState(i),{success:!0,settledItemCount:n,loanCount:o}},subscribe(t){return Gt.push(t),()=>{const i=Gt.indexOf(t);i>-1&&Gt.splice(i,1)}},notifyListeners(){const t=this.getState();Gt.forEach(i=>{try{i(t)}catch(u){console.error("[Warehouse Listener Error]",u)}})}};window.ErosShopWarehouse=lt,window.__EROS_WAREHOUSE__=lt;let Qt=null,Ut=null,Vu=!1,js=1,Tt=null,G=[],Xt=!1,Ze=0,Ve=0,Yt=!1;const he=[{id:"wine-special",name:"\u9B45\u9B54\u7279\u8C03",iconEmoji:"\u{1F377}",subText:"\u3010\u7A00\u6709\u3011\u6062\u590D10%\u751F\u547D\u503C\uFF0C\u83B7\u5F973\u56DE\u5408\u3010\u5FAE\u91BA\u3011BUFF(\u9B45/\u529B/\u667A\u589E\u52A0\uFF0C\u547D\u4E2D/\u7CBE\u795E\u68C0\u5B9A\u51CF\u5C11)",price:500,weight:60},{id:"wine-nectar",name:"\u7231\u6B32\u871C\u6DB2",iconEmoji:"\u{1F36F}",subText:"\u3010\u7A00\u6709\u3011\u6062\u590D10%\u9B54\u529B\u503C\uFF0C\u83B7\u5F973\u56DE\u5408\u3010\u71E5\u70ED\u3011BUFF(\u6700\u7EC8\u589E\u4F24+20%\uFF0C\u751F\u7406\u6027\u53D1\u60C5)",price:500,weight:20},{id:"wine-lotion",name:"\u82B3\u9999\u4E73\u6DB2",iconEmoji:"\u{1F9F4}",subText:"\u3010\u7A00\u6709\u3011\u6062\u590D10%\u7CBE\u529B\u503C\uFF0C\u83B7\u5F971\u56DE\u5408\u3010\u5145\u6C9B\u3011(\u884C\u52A8\u6D88\u8017\u5F520\uFF0C\u5438\u5F15\u5168\u573A\u8D34\u8D34\u4E0E\u4EC7\u6068)",price:500,weight:20},{id:"wine-kuchikami",name:"\u8389\u8389\u4E1D\u724C\u53E3\u56BC\u9152",iconEmoji:"\u{1F376}",subText:"\u3010\u53F2\u8BD7\u3011\u6062\u590D10%\u751F\u547D/\u9B54\u529B/\u7CBE\u529B\uFF0C3\u56DE\u5408\u3010\u8FF7\u9189\u3011(\u5168\u68C0\u5B9A-1\uFF1B\u63A5\u543B\u8F6C\u4E3A\u9B45\u9B54\u72C2\u5316\u5168\u5C5E\u6027+3)",price:500,weight:5},{id:"wine-champagne",name:"\u99A5\u90C1\u9999\u69DF",iconEmoji:"\u{1F37E}",subText:"\u3010\u53F2\u8BD7\u3011\u6062\u590D20%\u751F\u547D/\u9B54\u529B/\u7CBE\u529B\uFF0C\u6781\u5176\u503C\u94B1(\u4EF7\u503C\u4E3A\u5E38\u89C4\u53F2\u8BD7\u6D88\u8017\u54C1\u768410\u500D)",price:500,weight:5}],jt=[{itemId:"item-ex",tier:"ex",gradeStamp:"EX \xB7 \u795E\u8BDD",whisperText:"\u201C\u6BCF\u6B21\u53EA\u8981100FP\u2026\u968F\u65F6\u5524\u6211\u6765\u5230\u4F60\u8EAB\u8FB9\u54E6\u2665\u201D",shimmerClass:"ex-shimmer-flow"},{itemId:"item-ur-1",tier:"ur",gradeStamp:"UR \xB7 \u4F20\u8BF4",whisperText:"\u201C\u522B\u7684\u9B45\u9B54\u4E71\u641E\u7559\u4E0B\u7684\u86CB\u54E6\u2026\u731C\u731C\u4F1A\u5B75\u51FA\u4EC0\u4E48\uFF1F\u2665\u201D",shimmerClass:"ur-aurora-glow"},{itemId:"item-ur-2",tier:"ur",gradeStamp:"UR \xB7 \u4F20\u8BF4",whisperText:"\u201C\u6EF4\u7B54\u2026\u770B\u7740\u6211\u7684\u773C\u775B\uFF0C\u5FC3\u667A\u5F7B\u5E95\u653E\u7A7A\u5427\u2665\u201D",shimmerClass:"ur-aurora-glow"},{itemId:"item-ssr-1",tier:"ssr",gradeStamp:"SSR \xB7 \u53F2\u8BD7",whisperText:"\u201C\u8BFB\u5B8C\u8FD9\u672C\u79D8\u5178\u2026\u6CA1\u6709\u4EBA\u80FD\u9003\u51FA\u4F60\u7684\u638C\u5FC3\u2665\u201D"},{itemId:"item-ssr-2",tier:"ssr",gradeStamp:"SSR \xB7 \u53F2\u8BD7",whisperText:"\u201C\u6BCF\u4E00\u8BB0\u8F7B\u62BD\uFF0C\u90FD\u4F1A\u5316\u4F5C\u4ED6\u6C42\u9976\u7684\u751C\u7F8E\u6218\u6817\u2665\u201D"},{itemId:"item-sr-1",tier:"sr",gradeStamp:"SR \xB7 \u53F2\u8BD7",whisperText:"\u201C\u53C8\u8F7B\u53C8\u900F\u53C8\u80FD\u62A4\u8EAB\u2026\u7A7F\u4E0A\u5B83\uFF0C\u8C01\u820D\u5F97\u4F24\u4F60\u5462\u2665\u201D"}];let ct=null;window.triggerErosShopExitTransition=bt;let Gu=null;Os()}catch(_){console.error("[Lilith Card Runtime Error]",_)}})(Z,{current:j})}return rs(me)})();(function(){function et(){var Dt=document.querySelectorAll(".succubus-seal-wrapper:not([data-lilith-initialized])");Dt&&Dt.length>0&&Dt.forEach(function(ue){var ht=window.LilithBundle||(typeof LilithBundle<"u"?LilithBundle:null);ht&&typeof ht.initSingleLilithCard=="function"&&ht.initSingleLilithCard(ue)})}et(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",et):setTimeout(et,0)})();


/* ==========================================================================
   EROS SHOP DRAG-TO-PAN VIEWPORT CONTROLLER (爱欲商铺视口拖拽移动控制器)
   ========================================================================== */
(function initErosShopViewportPanning() {
  function isRotatedMobile() {
    return false; // 手机端已采用直立展开全景，不进行90度轴向颠倒
  }

  function initSingleShop(shopRoot) {
    if (!shopRoot || shopRoot.hasAttribute("data-panning-initialized")) return;
    shopRoot.setAttribute("data-panning-initialized", "true");

    const canvas = shopRoot.querySelector(".eros-shop-inner-canvas");
    const hintLeft = shopRoot.querySelector(".shop-viewport-edge-hint.hint-left") || document.getElementById("shop-edge-hint-left");
    const hintRight = shopRoot.querySelector(".shop-viewport-edge-hint.hint-right") || document.getElementById("shop-edge-hint-right");
    const dragPill = shopRoot.querySelector(".shop-viewport-drag-pill") || document.getElementById("shop-viewport-drag-pill");

    if (canvas) {
      canvas.style.transformOrigin = "0 0";
      canvas.style.webkitTransformOrigin = "0 0";
      canvas.style.willChange = "transform";
    }

    // === 纯 GPU 硬件纹理摄像机核心状态 (彻底固定在背景上，消除一切视口剔除与延迟重绘) ===
    let camX = 0;
    let camY = 0;
    let currentScale = 1.0;
    let maxCamX = 0;
    let maxCamY = 0;

    let isDown = false;
    let startX = 0;
    let startY = 0;
    let startCamX = 0;
    let startCamY = 0;
    let hasDragged = false;
    let dragDistance = 0;

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    let velX = 0;
    let velY = 0;
    let inertiaRaf = null;

    function measureBounds() {
      if (!shopRoot || !canvas) return;
      const viewW = shopRoot.clientWidth || 360;
      const viewH = shopRoot.clientHeight || 345;
      const baseW = 1048;
      const baseH = canvas.offsetHeight || 645;
      const contentW = baseW * currentScale;
      const contentH = baseH * currentScale;
      maxCamX = Math.max(0, contentW - viewW);
      maxCamY = Math.max(0, contentH - viewH);
    }

    function renderCamera() {
      if (!canvas) return;
      canvas.style.transform = "translate3d(" + (-camX) + "px, " + (-camY) + "px, 0) scale(" + currentScale + ")";
      canvas.style.webkitTransform = "translate3d(" + (-camX) + "px, " + (-camY) + "px, 0) scale(" + currentScale + ")";
      updateEdgeHints();
    }

    function updateEdgeHints() {
      if (!shopRoot) return;
      if (maxCamX <= 12) {
        if (hintLeft) hintLeft.style.opacity = "0";
        if (hintRight) hintRight.style.opacity = "0";
        return;
      }
      if (hintLeft) hintLeft.style.opacity = camX > 18 ? "1" : "0";
      if (hintRight) hintRight.style.opacity = camX < maxCamX - 18 ? "1" : "0";
      if (dragPill && (camX > 24 || camY > 24 || hasDragged || currentScale !== 1.0)) {
        dragPill.style.opacity = "0";
        dragPill.style.transform = "translateX(-50%) translateY(8px) scale(0.92) translateZ(0)";
        dragPill.style.pointerEvents = "none";
      }
    }

    function stopInertia() {
      if (inertiaRaf) {
        cancelAnimationFrame(inertiaRaf);
        inertiaRaf = null;
      }
    }

    function startInertia() {
      stopInertia();
      measureBounds();

      let vx = -velX * 16;
      let vy = -velY * 16;
      const maxSpeed = 40;
      vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
      vy = Math.max(-maxSpeed, Math.min(maxSpeed, vy));

      function step() {
        let active = false;

        // X 轴惯性滑动与回弹阻尼
        if (camX < 0) {
          const diff = 0 - camX;
          vx += diff * 0.22;
          vx *= 0.65;
          camX += vx;
          if (Math.abs(diff) > 0.4 || Math.abs(vx) > 0.4) active = true;
          else { camX = 0; vx = 0; }
        } else if (camX > maxCamX) {
          const diff = maxCamX - camX;
          vx += diff * 0.22;
          vx *= 0.65;
          camX += vx;
          if (Math.abs(diff) > 0.4 || Math.abs(vx) > 0.4) active = true;
          else { camX = maxCamX; vx = 0; }
        } else {
          if (Math.abs(vx) > 0.25) {
            camX += vx;
            vx *= 0.945;
            active = true;
            if (camX < 0 || camX > maxCamX) {
              vx *= 0.35;
            }
          } else {
            vx = 0;
          }
        }

        // Y 轴惯性滑动与回弹阻尼
        if (camY < 0) {
          const diff = 0 - camY;
          vy += diff * 0.22;
          vy *= 0.65;
          camY += vy;
          if (Math.abs(diff) > 0.4 || Math.abs(vy) > 0.4) active = true;
          else { camY = 0; vy = 0; }
        } else if (camY > maxCamY) {
          const diff = maxCamY - camY;
          vy += diff * 0.22;
          vy *= 0.65;
          camY += vy;
          if (Math.abs(diff) > 0.4 || Math.abs(vy) > 0.4) active = true;
          else { camY = maxCamY; vy = 0; }
        } else {
          if (Math.abs(vy) > 0.25) {
            camY += vy;
            vy *= 0.945;
            active = true;
            if (camY < 0 || camY > maxCamY) {
              vy *= 0.35;
            }
          } else {
            vy = 0;
          }
        }

        renderCamera();

        if (active) {
          inertiaRaf = requestAnimationFrame(step);
        } else {
          inertiaRaf = null;
          camX = Math.max(0, Math.min(maxCamX, camX));
          camY = Math.max(0, Math.min(maxCamY, camY));
          renderCamera();
        }
      }

      inertiaRaf = requestAnimationFrame(step);
    }

    // === 交互判定过滤 ===
    function isInteractiveTarget(target, pointerType) {
      if (!target) return false;
      // 电脑端鼠标交互：在展示柜或其滚动条上操作时，判定为交互目标，不触发外层全景摄像机拖拽
      if (pointerType === "mouse" && target.closest("#shop-crystal-cabinet, .shop-crystal-cabinet")) {
        return true;
      }
      return !!target.closest("button, .goods-buy-btn, .shop-close-btn, .shop-loan-btn, .shop-restock-btn, .checkout-action-btn, input, select, textarea, .shop-checkout-modal-overlay, #shop-toast, #restock-toast");
    }

    // === 2D GPU 全景摄像机视口拖拽平移系统 ===
    function handlePointerMove(e) {
      if (!isDown || isPinching) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      dragDistance = Math.hypot(dx, dy);

      if (dragDistance > 5) {
        hasDragged = true;
      }

      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 8) {
        const vx = (e.clientX - lastX) / dt;
        const vy = (e.clientY - lastY) / dt;
        velX = velX * 0.3 + vx * 0.7;
        velY = velY * 0.3 + vy * 0.7;
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }

      let targetX = startCamX - dx;
      let targetY = startCamY - dy;

      if (targetX < 0) {
        targetX = targetX * 0.35;
      } else if (targetX > maxCamX) {
        targetX = maxCamX + (targetX - maxCamX) * 0.35;
      }

      if (targetY < 0) {
        targetY = targetY * 0.35;
      } else if (targetY > maxCamY) {
        targetY = maxCamY + (targetY - maxCamY) * 0.35;
      }

      camX = targetX;
      camY = targetY;
      renderCamera();
    }

    function handlePointerUp() {
      if (!isDown) return;
      isDown = false;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      if (shopRoot) shopRoot.style.cursor = "";
      setTimeout(() => {
        hasDragged = false;
        dragDistance = 0;
      }, 120);
      startInertia();
    }

    shopRoot.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (isInteractiveTarget(e.target, e.pointerType)) return;
      if (isPinching) return;

      stopInertia();
      isDown = true;
      hasDragged = false;
      dragDistance = 0;
      startX = e.clientX;
      startY = e.clientY;
      startCamX = camX;
      startCamY = camY;

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = performance.now();
      velX = 0;
      velY = 0;

      if (e.pointerType !== "touch") {
        shopRoot.style.cursor = "grabbing";
      }
      measureBounds();
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    });

    // === 双指缩放 (Pinch-to-Zoom 0.35x ~ 2.2x) ===
    let initialPinchDist = 0;
    let startScale = 1.0;
    let isPinching = false;
    let justPinched = false;

    function getPinchDistance(t1, t2) {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    }

    shopRoot.addEventListener("touchstart", (e) => {
      if (e.touches.length >= 2) {
        stopInertia();
        isPinching = true;
        isDown = false;
        initialPinchDist = getPinchDistance(e.touches[0], e.touches[1]);
        startScale = currentScale;
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });

    shopRoot.addEventListener("touchmove", (e) => {
      if (e.touches.length >= 2) {
        if (!isPinching || initialPinchDist === 0) {
          isPinching = true;
          isDown = false;
          initialPinchDist = getPinchDistance(e.touches[0], e.touches[1]);
          startScale = currentScale;
        }
        if (e.cancelable) e.preventDefault();
        const dist = getPinchDistance(e.touches[0], e.touches[1]);
        if (dist > 5 && initialPinchDist > 5) {
          const factor = dist / initialPinchDist;
          currentScale = Math.max(0.35, Math.min(startScale * factor, 2.2));
          measureBounds();
          camX = Math.max(0, Math.min(maxCamX, camX));
          camY = Math.max(0, Math.min(maxCamY, camY));
          renderCamera();
        }
      }
    }, { passive: false });

    shopRoot.addEventListener("touchend", (e) => {
      if (isPinching && e.touches.length < 2) {
        isPinching = false;
        initialPinchDist = 0;
        justPinched = true;
        setTimeout(() => {
          justPinched = false;
        }, 160);
      }
    }, { passive: true });

    shopRoot.addEventListener("touchcancel", () => {
      isPinching = false;
      initialPinchDist = 0;
    }, { passive: true });

    // 触摸板/鼠标滚轮按住 Ctrl 双指缩放，以及默认滚轮平移
    shopRoot.addEventListener("wheel", (e) => {
      // 1. 按住 Ctrl 键时的双指/滚轮缩放画布
      if (e.ctrlKey) {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.06 : 0.94;
        currentScale = Math.max(0.35, Math.min(currentScale * factor, 2.2));
        measureBounds();
        camX = Math.max(0, Math.min(maxCamX, camX));
        camY = Math.max(0, Math.min(maxCamY, camY));
        renderCamera();
        return;
      }

      // 2. 电脑端鼠标滚轮在展示柜内部（或结账弹窗等自带垂直滚动的区域）：
      // 完全放行原生事件，允许鼠标滚轮流畅上下滑动展示柜货架，绝不进行 preventDefault 拦截！
      const scrollableInside = e.target.closest("#shop-crystal-cabinet, .shop-crystal-cabinet, .shop-checkout-modal-overlay, .checkout-summary-card");
      if (scrollableInside) {
        return;
      }

      // 3. 在商铺背景/视口其它区域滚动时，仅在外层摄像机具有移动空间时执行全景平移
      if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
        if (maxCamX > 2 || maxCamY > 2) {
          e.preventDefault();
          stopInertia();
          measureBounds();
          camX = Math.max(0, Math.min(maxCamX, camX + (e.deltaX || (e.shiftKey ? e.deltaY : 0))));
          camY = Math.max(0, Math.min(maxCamY, camY + (!e.shiftKey && e.deltaX === 0 ? e.deltaY : 0)));
          renderCamera();
        }
      }
    }, { passive: false });

    // 防止缩放或拖拽结束瞬间发生误触点击商品
    shopRoot.addEventListener("click", (e) => {
      if (hasDragged || dragDistance > 6 || justPinched) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged = false;
        dragDistance = 0;
        justPinched = false;
      }
    }, true);

    window.__resetShopViewportScroll = function() {
      if (!shopRoot) return;
      stopInertia();
      camX = 0;
      camY = 0;
      currentScale = 1.0;
      measureBounds();
      renderCamera();
      if (dragPill) {
        dragPill.style.opacity = "1";
        dragPill.style.transform = "translateX(-50%) translate3d(0, 0, 0) scale(1)";
        dragPill.style.pointerEvents = "none";
        setTimeout(() => {
          if (dragPill) {
            dragPill.style.opacity = "0";
            dragPill.style.transform = "translateX(-50%) translateY(8px) scale(0.92) translateZ(0)";
          }
        }, 3800);
      }
    };

    window.addEventListener("resize", () => {
      measureBounds();
      camX = Math.max(0, Math.min(maxCamX, camX));
      camY = Math.max(0, Math.min(maxCamY, camY));
      renderCamera();
    }, { passive: true });

    measureBounds();
    renderCamera();
  }

  function setupAllShops() {
    const shops = document.querySelectorAll(".eros-shop-wrapper:not([data-panning-initialized])");
    shops.forEach(initSingleShop);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAllShops);
  } else {
    setTimeout(setupAllShops, 0);
  }

  try {
    if (typeof MutationObserver !== "undefined" && !window.__LILITH_GLOBAL_SHOP_OBSERVER__) {
      window.__LILITH_GLOBAL_SHOP_OBSERVER__ = true;
      let shopDebounce = null;
      const targetRoot = document.getElementById("chat") || document.body;
      new MutationObserver((mutations) => {
        let hasShop = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (m.addedNodes && m.addedNodes.length > 0) {
            for (let j = 0; j < m.addedNodes.length; j++) {
              const node = m.addedNodes[j];
              if (node.nodeType === 1 && (node.classList?.contains("eros-shop-wrapper") || node.querySelector?.(".eros-shop-wrapper"))) {
                hasShop = true;
                break;
              }
            }
          }
          if (hasShop) break;
        }
        if (hasShop) {
          if (shopDebounce) clearTimeout(shopDebounce);
          shopDebounce = setTimeout(setupAllShops, 150);
        }
      }).observe(targetRoot, { childList: true });
    }
  } catch(e) {}
  
  try {
    if ("IntersectionObserver" in window) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          if (!entry.isIntersecting) {
            card.classList.add("lilith-card-dormant");
          } else {
            card.classList.remove("lilith-card-dormant");
          }
        });
      }, {
        rootMargin: "150px 0px 150px 0px",
        threshold: 0.01
      });

      
    /* ==========================================================================
       LILITH SMART FLOOR RENDER ENGINE (电脑10楼 / 手机5楼 渲染数量控制)
       ========================================================================== */
    window.LILITH_FLOOR_LIMIT = window.LILITH_FLOOR_LIMIT || {
      pc: 10,       // 电脑端默认只渲染最新的 10 楼
      mobile: 5,    // 手机端默认只渲染最新的 5 楼
      enabled: true // 一键启用/关闭
    };

    const updateFloorLimits = () => {
      try {
        const cfg = window.LILITH_FLOOR_LIMIT;
        if (!cfg || !cfg.enabled) return;
        const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
        const maxFloors = Math.max(1, isMobile ? (cfg.mobile || 5) : (cfg.pc || 10));
        
        const allCards = Array.from(document.querySelectorAll(".succubus-seal-wrapper"));
        if (!allCards || allCards.length === 0) return;
        
        const total = allCards.length;
        const cutoffIndex = Math.max(0, total - maxFloors);

        allCards.forEach((card, index) => {
          if (index < cutoffIndex) {
            if (!card.__userForceWake) {
              card.classList.add("lilith-floor-exceeded");
              card.classList.add("lilith-card-dormant");
              let banner = card.querySelector(".lilith-floor-wake-banner");
              if (!banner) {
                banner = document.createElement("div");
                banner.className = "lilith-floor-wake-banner";
                banner.title = "点击唤醒此楼层的全部动态特效与互动徽记";
                banner.innerHTML = '<span class="wake-icon">📜</span> 莉莉丝历史楼层已深度休眠 (' + (index + 1) + '/' + total + '楼) · <span class="wake-btn">点击唤醒完整渲染 ✦</span>';
                banner.onclick = (e) => {
                  e.stopPropagation();
                  card.__userForceWake = true;
                  card.classList.remove("lilith-floor-exceeded");
                  card.classList.remove("lilith-card-dormant");
                  banner.remove();
                };
                card.prepend(banner);
              }
            }
          } else {
            card.classList.remove("lilith-floor-exceeded");
            const banner = card.querySelector(".lilith-floor-wake-banner");
            if (banner) banner.remove();
          }
        });
      } catch(e) {
        console.warn("[Lilith Floor Limit]", e);
      }
    };
    window.addEventListener("resize", updateFloorLimits, { passive: true });

      const observeCards = () => {
        updateFloorLimits();
        document.querySelectorAll(".succubus-seal-wrapper").forEach((card) => {
          if (!card.__hasDormantObserver) {
            card.__hasDormantObserver = true;
            cardObserver.observe(card);
          }
        });
      };
      observeCards();

      if ("MutationObserver" in window && !window.__LILITH_GLOBAL_CARD_OBSERVER__) {
        window.__LILITH_GLOBAL_CARD_OBSERVER__ = true;
        let cardDebounce = null;
        const targetRoot = document.getElementById("chat") || document.body;
        new MutationObserver((mutations) => {
          let hasCard = false;
          for (let i = 0; i < mutations.length; i++) {
            const m = mutations[i];
            if (m.addedNodes && m.addedNodes.length > 0) {
              for (let j = 0; j < m.addedNodes.length; j++) {
                const node = m.addedNodes[j];
                if (node.nodeType === 1 && (node.classList?.contains("succubus-seal-wrapper") || node.querySelector?.(".succubus-seal-wrapper"))) {
                  hasCard = true;
                  break;
                }
              }
            }
            if (hasCard) break;
          }
          if (hasCard) {
            if (cardDebounce) clearTimeout(cardDebounce);
            cardDebounce = setTimeout(observeCards, 150);
          }
        }).observe(targetRoot, { childList: true });
      }
    }
  } catch (err) {
    console.warn("[Lilith Auto-Dormancy]", err);
  }
})();