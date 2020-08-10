(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{328:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(370),o=t(41),s=t(400),c=t(390),u=t(386),d=t(376),l=t(166),m=t(371),f=t(372),v=function(n){var e=n.transactions,t=[{key:"coulmnNonce",name:"Nonce",fieldName:"nonce",minWidth:5,maxWidth:50,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnId",name:"ID",fieldName:"id",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0,onRender:function(n){var e=n.id;return a.a.createElement(s.a,{href:"../transaction/?"+e},e)}},{key:"columnSignature",name:"Signature",fieldName:"signature",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0,onRender:function(n){var e=n.signer;return a.a.createElement(s.a,{href:"./?"+e},e)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0,onRender:function(n){var e=n.timestamp;return a.a.createElement(f.a,{timestamp:e})}}];return a.a.createElement(c.a,{items:e,columns:t,selectionMode:u.b.none,getKey:function(n){return n.id},setKey:"set",layoutMode:d.e.justified,isHeaderVisible:!0,onItemInvoked:function(n){var e=n.id;return Object(o.navigate)("../transaction/?"+e)}})};e.default=function(n){var e=n.location,t=Object(i.a)(e),r=t[0];t[1];return a.a.createElement(l.a,null,a.a.createElement("h1",null,"Account Details"),a.a.createElement("p",null,"Account Number: ",a.a.createElement("b",null,r)),a.a.createElement(m.d,{variables:{involvedAddress:r}},function(n){var e=n.data,t=n.loading,i=n.error;if(t)return a.a.createElement("p",null,"loading…");if(i)return a.a.createElement("p",null,"error!");var o=e.transactionQuery.transactions;if(!o)return a.a.createElement("p",null,"There are no transactions.");var s=[],c=[];o.forEach(function(n){n.signer===r?s.push(n):c.push(n)});for(var u=[],d=1;d<s.length;++d){var l=s[d-1].nonce,m=s[d].nonce;if(l!==m-1)for(var f=l+1;f<m;++f)u.push(f)}var g=s.length,h=c.length,b=u.length;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Signed Transactions: ",g),g>0?a.a.createElement(v,{transactions:t?[]:s}):a.a.createElement("div",null,"No transactions of this type"),a.a.createElement("h2",null,"Involved Transactions: ",h),h?a.a.createElement(v,{transactions:t?[]:c}):a.a.createElement("div",null,"No transactions of this type"),a.a.createElement("h2",null,"Missing Nonces: ",b),b?u.map(function(n){return a.a.createElement("p",null,n)}):a.a.createElement("div",null,"No missing nonces."))}))}},370:function(n,e,t){"use strict";t.d(e,"a",function(){return i});t(185);var r=t(1),a=t(184);function i(n){return[Object(r.useMemo)(function(){return n.search.substr(1)},[n]),Object(r.useCallback)(function(e){var t=n.pathname.substr(Object(a.withPrefix)("/").length-1);Object(a.navigate)(t+(e?"?"+e:""))},[n,a.navigate])]}},371:function(n,e,t){"use strict";t.d(e,"b",function(){return y}),t.d(e,"a",function(){return p}),t.d(e,"c",function(){return k}),t.d(e,"d",function(){return T});t(46);var r=t(186),a=t.n(r),i=t(1),o=t(374);t(375);function s(){var n=v(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress, desc: true) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return s=function(){return n},n}function c(){var n=v(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return c=function(){return n},n}function u(){var n=v(["\n    query TransactionList($signer: Address, $involvedAddress: Address, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, involvedAddress: $involvedAddress, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return u=function(){return n},n}function d(){var n=v(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return d=function(){return n},n}function l(){var n=v(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return l=function(){return n},n}function m(){var n=v(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return n},n}function f(){var n=v(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return f=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),n.raw=e,n}var g=a()(f()),h=a()(m()),b=a()(l(),g),y=function(n){return i.createElement(o.b,Object.assign({query:b},n))};var E=a()(d(),g,h),p=function(n){return i.createElement(o.b,Object.assign({query:E},n))};a()(u(),h);var S=a()(c(),h),k=function(n){return i.createElement(o.b,Object.assign({query:S},n))};var $=a()(s(),h),T=function(n){return i.createElement(o.b,Object.assign({query:$},n))}},372:function(n,e,t){"use strict";t(9),t(10),t(5),t(18);var r=t(1),a=t.n(r);var i={hour:"2-digit",minute:"2-digit",year:"2-digit",month:"numeric",day:"numeric"};e.a=function(n){var e=n.timestamp,t=new Date(e),r=new Date;if(r.getFullYear()==t.getFullYear()&&r.getMonth()==t.getMonth()&&r.getDate()==t.getDate()){var o=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(i,["year","month","day"]);return a.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,o))}return a.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,i))}}}]);
//# sourceMappingURL=component---src-subpages-account-tsx-6d39ab5eafdcaec43e9d.js.map