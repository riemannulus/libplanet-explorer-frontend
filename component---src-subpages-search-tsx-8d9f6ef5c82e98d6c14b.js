(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,8],{326:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(400),i=t(184),c=t(370),u=t(390),o=t(386),s=t(376),d=t(371),m=t(372),E=function(e){var n=e.txs,t=[{key:"columnId",name:"Id",fieldName:"id",minWidth:50,maxWidth:300,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.id;return r.a.createElement(l.a,{href:"../transaction/?"+n},n)}},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:50,maxWidth:250,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){var n=e.signer;return r.a.createElement(l.a,{href:"../account/?"+n},n)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(e){var n=e.timestamp;return r.a.createElement(m.a,{timestamp:n})}},{key:"columnActionNumber",name:"Action #",minWidth:20,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(e){return r.a.createElement(r.a.Fragment,null,e.actions?e.actions.length:"--")}}];return r.a.createElement(u.a,{items:n,columns:t,selectionMode:o.b.none,getKey:function(e){return e.id},setKey:"set",layoutMode:s.e.justified,isHeaderVisible:!0,onItemInvoked:function(e){return Object(i.navigate)("../transaction/?"+e.id)}})};n.default=function(e){var n=e.location,t=Object(c.a)(n),a=t[0],i=(t[1],a);return r.a.createElement(d.a,{variables:{hash:i}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Failed to load ",i," - ",JSON.stringify(a.message)));var c=n.blockQuery.block;if(!c)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,i)));var u="../account/?"+c.miner;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,c.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,c.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,c.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement(l.a,{href:u},r.a.createElement("code",null,c.miner))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,r.a.createElement(m.a,{timestamp:c.timestamp})),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,c.previousBlock?r.a.createElement(l.a,{href:"./?"+c.previousBlock.hash},r.a.createElement("code",null,c.previousBlock.hash)):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,c.difficulty),r.a.createElement("dt",null,"Transactions"),c.transactions.length>0?r.a.createElement(E,{txs:c.transactions}):r.a.createElement("dd",null,r.a.createElement("i",null,"There is no transactions in this block."))))})}},327:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(370),i=t(371),c=t(400),u=t(372);n.default=function(e){var n=e.location,t=Object(l.a)(n),a=t[0],o=(t[1],a);return r.a.createElement(i.c,{variables:{id:o}},function(e){var n=e.data,t=e.loading,a=e.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"Failed to load ",o," - ",JSON.stringify(a.message)));var l=n.transactionQuery.transaction;if(!l)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("p",null,"No such transaction: ",r.a.createElement("code",null,o)));var i="../account/?"+l.signer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Transaction Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Id"),r.a.createElement("dd",null,r.a.createElement("code",null,l.id)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,l.nonce," "),r.a.createElement("dt",null,"Public Key"),r.a.createElement("dd",null,r.a.createElement("code",null,l.publicKey)),r.a.createElement("dt",null,"Signature"),r.a.createElement("dd",null,r.a.createElement("code",null,l.signature)),r.a.createElement("dt",null,"Signer"),r.a.createElement("dd",null,r.a.createElement(c.a,{href:i},r.a.createElement("code",null,l.signer))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,r.a.createElement(u.a,{timestamp:l.timestamp})),r.a.createElement("dt",null,"Updated Addresses"),l.updatedAddresses.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement(c.a,{href:"../account/?"+e},r.a.createElement("code",null,e)))}),r.a.createElement("dt",null,"Actions"),l.actions.map(function(e,n){return r.a.createElement("dd",{key:n},r.a.createElement("dl",null,e.arguments.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.key},r.a.createElement("dt",null,e.key),r.a.createElement("dd",null,r.a.createElement("pre",null,r.a.createElement("code",null," ",JSON.stringify(e.value,null,2)," "))))})))})))})}},329:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),l=t(370),i=t(326),c=t(327);n.default=function(e){var n=e.location,t=Object(l.a)(n);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Results"),r.a.createElement(i.default,{location:n}),r.a.createElement(c.default,{location:n}))}},370:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(185);var a=t(1),r=t(184);function l(e){return[Object(a.useMemo)(function(){return e.search.substr(1)},[e]),Object(a.useCallback)(function(n){var t=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(n?"?"+n:""))},[e,r.navigate])]}},371:function(e,n,t){"use strict";t.d(n,"b",function(){return y}),t.d(n,"a",function(){return p}),t.d(n,"c",function(){return T}),t.d(n,"d",function(){return $});t(46);var a=t(186),r=t.n(a),l=t(1),i=t(374);t(375);function c(){var e=f(["\n    query TransactionsByAccount($involvedAddress: Address) {\n  transactionQuery {\n    transactions(involvedAddress: $involvedAddress, desc: true) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return c=function(){return e},e}function u(){var e=f(["\n    query TransactionById($id: ID) {\n  transactionQuery {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return u=function(){return e},e}function o(){var e=f(["\n    query TransactionList($signer: Address, $involvedAddress: Address, $desc: Boolean!, $offset: Int!, $limit: Int!) {\n  transactionQuery {\n    transactions(signer: $signer, involvedAddress: $involvedAddress, desc: $desc, offset: $offset, limit: $limit) {\n      ...TransactionCommon\n    }\n  }\n}\n    ",""]);return o=function(){return e},e}function s(){var e=f(["\n    query BlockByHash($hash: ID) {\n  blockQuery {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n}\n    ","\n",""]);return s=function(){return e},e}function d(){var e=f(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blockQuery {\n    blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n}\n    ",""]);return d=function(){return e},e}function m(){var e=f(["\n    fragment TransactionCommon on Transaction {\n  actions {\n    arguments {\n      key\n      value\n    }\n  }\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return e},e}function E(){var e=f(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return E=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var g=r()(E()),h=r()(m()),v=r()(d(),g),y=function(e){return l.createElement(i.b,Object.assign({query:v},e))};var b=r()(s(),g,h),p=function(e){return l.createElement(i.b,Object.assign({query:b},e))};r()(o(),h);var k=r()(u(),h),T=function(e){return l.createElement(i.b,Object.assign({query:k},e))};var S=r()(c(),h),$=function(e){return l.createElement(i.b,Object.assign({query:S},e))}},372:function(e,n,t){"use strict";t(9),t(10),t(5),t(18);var a=t(1),r=t.n(a);var l={hour:"2-digit",minute:"2-digit",year:"2-digit",month:"numeric",day:"numeric"};n.a=function(e){var n=e.timestamp,t=new Date(n),a=new Date;if(a.getFullYear()==t.getFullYear()&&a.getMonth()==t.getMonth()&&a.getDate()==t.getDate()){var i=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(l,["year","month","day"]);return r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,i))}return r.a.createElement("time",{dateTime:t.toISOString(),title:t.toLocaleString()},t.toLocaleString(void 0,l))}}}]);
//# sourceMappingURL=component---src-subpages-search-tsx-8d9f6ef5c82e98d6c14b.js.map