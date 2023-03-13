"use strict";(self.webpackChunkfrancesco_gruosso_portfolio=self.webpackChunkfrancesco_gruosso_portfolio||[]).push([[286],{3966:function(e,o,n){n.d(o,{Z:function(){return f}});var r="ColourSelector_colours-section__YNGVC",c="ColourSelector_colours-wrapper__u1ZDQ",t="ColourSelector_colours-container__B42CL",a="ColourSelector_canary__WRDxT",s="ColourSelector_leaf__Wzvoo",i="ColourSelector_ocean__bP8lQ",l="ColourSelector_magenta__QiB+a",u=n(2737),d=n(6030),_=n(6355),j=n(184),x=(0,j.jsx)(_.l_A,{size:"50%",style:{transform:"translateY(.13rem) translateX(.03em)"}}),f=function(e){var o=e.backgroundColor,n=(0,d.v9)((function(e){return e.colours.colour})),_=(0,d.I0)();return(0,j.jsx)("section",{className:r,children:(0,j.jsx)("div",{className:c,children:(0,j.jsxs)("div",{className:t,style:{backgroundColor:"".concat(o)},children:[(0,j.jsx)("button",{"aria-label":"Canary colour",onClick:function(){_(u.bd.colourCanary())},className:a,children:"canary"===n&&x}),(0,j.jsx)("button",{"aria-label":"Ocean colour",onClick:function(){_(u.bd.colourOcean())},className:i,children:"ocean"===n&&x}),(0,j.jsx)("button",{"aria-label":"Magenta colour",onClick:function(){_(u.bd.colourMagenta())},className:l,children:"magenta"===n&&x}),(0,j.jsx)("button",{"aria-label":"Leaf colour",onClick:function(){_(u.bd.colourLeaf())},className:s,children:"leaf"===n&&x})]})})})}},2494:function(e,o,n){n.r(o),n.d(o,{default:function(){return S}});var r=n(885),c=n(2695),t=n(3540),a=n(2791),s=n(4880),i="BackButton_backButton__JXqEm",l=n(6355),u=n(184),d=function(e){var o=(0,s.k6)();return void 0===e.endpoint?(0,u.jsx)(l.x_l,{className:i,onClick:function(){return o.goBack()}}):(0,u.jsx)(l.x_l,{className:i,onClick:function(){return o.push("".concat(e.endpoint))}})},_=n(4805),j=n(6030),x=n(3728),f="ProjectDetail_design-section__p2Im+",p="ProjectDetail_design__U3pzZ",h="ProjectDetail_project-card__BIPt7",m="ProjectDetail_project-card-section__OEJzg",v="ProjectDetail_project-title__Z4045",k="ProjectDetail_info__UmkDp",g="ProjectDetail_description__QQBly",b="ProjectDetail_project-btn__wrapper__sSFNl",N="ProjectDetail_logo__0-jtY",y="ProjectDetail_logos__k2nDw",C="ProjectDetail_logo-wrap__VNYM6",D="ProjectDetail_information-wrapper__orpAy",P="ProjectDetail_buttons-container__ddrC9",w="ProjectDetail_git-btn__pJxI7",Z=n(9640),B=n(3966),L=n(3415),S=function(){var e=(0,s.UO)(),o=(0,j.v9)((function(e){return e.colours})),n=(0,j.v9)((function(e){return e.languages.language})),i=(0,_.useMediaQuery)({query:"(max-width: 900px)"}),S=(0,a.useState)(!1),z=(0,r.Z)(S,2),E=z[0],Q=z[1],I=Z.Z.find((function(o){return o.endpoint===e.projectID})),J=E?function(){Q(!1)}:"goBack";return(0,c.Z)("Escape",J),void 0===I?(0,u.jsxs)("section",{style:{color:"white",padding:"6rem",fontSize:"3rem"},children:[(0,u.jsx)("h1",{style:{color:"violet"},children:"No project found"}),(0,u.jsx)("p",{children:"The project you are looking for does not exist or has been removed."}),(0,u.jsx)(d,{endpoint:"/projects"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L.Z,{}),(0,u.jsx)(B.Z,{backgroundColor:"#0a0f20"}),!i&&(0,u.jsx)(d,{endpoint:"/projects"}),(0,u.jsx)("section",{className:m,children:(0,u.jsx)("div",{className:h,children:(0,u.jsxs)("div",{className:D,children:[(0,u.jsx)("h1",{className:v,children:I["".concat(n)].name}),(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)("div",{className:g,children:I["".concat(n)].description&&(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,t.ZP)(I["".concat(n)].description)})}),(0,u.jsx)("div",{className:y,children:I.icons&&!i&&I.icons.map((function(e){return(0,u.jsx)("div",{className:N,children:(0,u.jsxs)("div",{className:C,children:[e.icon,(0,u.jsx)("p",{children:e.tag})]})},e.id)}))})]}),(0,u.jsxs)("div",{style:{justifyContent:I.extraLink?"space-between":"flex-end"},className:P,children:[I.extraLink&&(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("a",{href:I.extraLink.link,target:"_blank",rel:"noopener noreferrer",className:w,children:(0,u.jsx)(x.NFo,{size:"3rem",style:{color:"var(--".concat(o.colour,"-active)"),cursor:"pointer"}})}),(0,u.jsxs)("p",{children:[I.extraLink.buttonText," "]})]}),(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("a",{href:I.githubLink,target:"_blank",rel:"noopener noreferrer",className:w,children:(0,u.jsx)(l.hJX,{size:"3rem",style:{color:"var(--".concat(o.colour,"-active)"),cursor:"pointer"}})}),(0,u.jsx)("p",{children:"GitHub"})]})]})]})})}),(0,u.jsx)("section",{className:f,children:(0,u.jsx)("div",{className:p,style:{background:"linear-gradient(45deg, ".concat(o.hex," 60%, #555)")}})})]})}},2695:function(e,o,n){n.d(o,{Z:function(){return t}});var r=n(2791),c=n(4880);function t(e,o){var n=(0,c.k6)();(0,r.useEffect)((function(){var r=function(r){r.key===e&&"goBack"===o?n.push("/projects"):r.key===e&&o()};return window.addEventListener("keyup",r),function(){return window.removeEventListener("keyup",r)}}),[o,n,e])}}}]);
//# sourceMappingURL=286.7b6ca462.chunk.js.map