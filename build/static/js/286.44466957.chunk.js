"use strict";(self.webpackChunkfrancesco_gruosso_portfolio=self.webpackChunkfrancesco_gruosso_portfolio||[]).push([[286],{3966:function(e,o,n){n.d(o,{Z:function(){return p}});var r="ColourSelector_colours-section__YNGVC",c="ColourSelector_colours-wrapper__u1ZDQ",t="ColourSelector_colours-container__B42CL",a="ColourSelector_canary__WRDxT",l="ColourSelector_leaf__Wzvoo",i="ColourSelector_ocean__bP8lQ",s="ColourSelector_magenta__QiB+a",u=n(2737),d=n(6030),_=n(6355),j=n(184),f=(0,j.jsx)(_.l_A,{size:"50%",style:{transform:"translateY(.12rem) translateX(.04em)"}}),p=function(e){var o=e.backgroundColor,n=(0,d.v9)((function(e){return e.colours.colour})),_=(0,d.I0)();return(0,j.jsx)("section",{className:r,children:(0,j.jsx)("div",{className:c,children:(0,j.jsxs)("div",{className:t,style:{backgroundColor:"".concat(o)},children:[(0,j.jsx)("button",{"aria-label":"Canary colour",onClick:function(){_(u.bd.colourCanary())},className:a,children:"canary"===n&&f}),(0,j.jsx)("button",{"aria-label":"Ocean colour",onClick:function(){_(u.bd.colourOcean())},className:i,children:"ocean"===n&&f}),(0,j.jsx)("button",{"aria-label":"Magenta colour",onClick:function(){_(u.bd.colourMagenta())},className:s,children:"magenta"===n&&f}),(0,j.jsx)("button",{"aria-label":"Leaf colour",onClick:function(){_(u.bd.colourLeaf())},className:l,children:"leaf"===n&&f})]})})})}},2494:function(e,o,n){n.r(o),n.d(o,{default:function(){return B}});var r=n(885),c=n(2695),t=n(3540),a=n(2791),l=n(4880),i="BackButton_backButton__JXqEm",s=n(6355),u=n(184),d=function(e){var o=(0,l.k6)();return void 0===e.endpoint?(0,u.jsx)(s.x_l,{className:i,onClick:function(){return o.goBack()}}):(0,u.jsx)(s.x_l,{className:i,onClick:function(){return o.push("".concat(e.endpoint))}})},_=n(4805),j=n(6030),f="ProjectDetail_design-section__p2Im+",p="ProjectDetail_design__U3pzZ",x="ProjectDetail_project-card__BIPt7",m="ProjectDetail_project-card-section__OEJzg",h="ProjectDetail_project-title__Z4045",g="ProjectDetail_info__UmkDp",v="ProjectDetail_description__QQBly",k="ProjectDetail_logo__0-jtY",b="ProjectDetail_logos__k2nDw",N="ProjectDetail_logo-wrap__VNYM6",C="ProjectDetail_information-wrapper__orpAy",y="ProjectDetail_button-container__V1b1l",D="ProjectDetail_git-btn__pJxI7",P=n(9640),w=n(3966),Z=n(3415),B=function(){var e=(0,l.UO)(),o=(0,j.v9)((function(e){return e.colours})),n=(0,j.v9)((function(e){return e.languages.language})),i=(0,_.useMediaQuery)({query:"(max-width: 900px)"}),B=(0,a.useState)(!1),S=(0,r.Z)(B,2),z=S[0],E=S[1],L=P.Z.find((function(o){return o.endpoint===e.projectID})),Q=z?function(){E(!1)}:"goBack";return(0,c.Z)("Escape",Q),void 0===L?(0,u.jsxs)("section",{style:{color:"white",padding:"6rem",fontSize:"3rem"},children:[(0,u.jsx)("h1",{style:{color:"violet"},children:"No project found"}),(0,u.jsx)("p",{children:"The project you are looking for does not exist or has been removed."}),(0,u.jsx)(d,{endpoint:"/projects"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Z.Z,{}),(0,u.jsx)(w.Z,{backgroundColor:"#0a0f20"}),!i&&(0,u.jsx)(d,{endpoint:"/projects"}),(0,u.jsx)("section",{className:m,children:(0,u.jsx)("div",{className:x,children:(0,u.jsxs)("div",{className:C,children:[(0,u.jsx)("h1",{className:h,children:L["".concat(n)].name}),(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)("div",{className:v,children:L["".concat(n)].description&&(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,t.ZP)(L["".concat(n)].description)})}),(0,u.jsx)("div",{className:b,children:L.icons&&!i&&L.icons.map((function(e){return(0,u.jsx)("div",{className:k,children:(0,u.jsxs)("div",{className:N,children:[e.icon,(0,u.jsx)("p",{children:e.tag})]})},e.id)}))})]}),(0,u.jsx)("div",{className:y,children:(0,u.jsx)("a",{href:L.githubLink,target:"_blank",rel:"noopener noreferrer",className:D,children:(0,u.jsx)(s.hJX,{size:"3rem",style:{alignSelf:"flex-start",color:"var(--".concat(o.colour,"-active)"),cursor:"pointer"}})})})]})})}),(0,u.jsx)("section",{className:f,children:(0,u.jsx)("div",{className:p,style:{background:"linear-gradient(45deg, ".concat(o.hex," 60%, #555)")}})})]})}},2695:function(e,o,n){n.d(o,{Z:function(){return t}});var r=n(2791),c=n(4880);function t(e,o){var n=(0,c.k6)();(0,r.useEffect)((function(){var r=function(r){r.key===e&&"goBack"===o?n.push("/projects"):r.key===e&&o()};return window.addEventListener("keyup",r),function(){return window.removeEventListener("keyup",r)}}),[o,n,e])}}}]);
//# sourceMappingURL=286.44466957.chunk.js.map