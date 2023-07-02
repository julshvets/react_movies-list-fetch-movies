(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),a=(i(13),i(2)),n=i(1),l=(i(14),i(15),i(16),i(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbId)}))})},d=i(8),j=(i(18),i(7)),m=i.n(j);var b=function(e){var t=e.setMovies,i=e.movies,c=Object(n.useState)(""),s=Object(a.a)(c,2),o=s[0],j=s[1],b=Object(n.useState)(null),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(n.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(n.useState)(!1),g=Object(a.a)(N,2),y=g[0],w=g[1],I=Object(n.useMemo)((function(){return v?function(e){var t=e.Title,i=e.Plot,c=e.Poster,s=e.imdbID;return{title:t,description:i,imgUrl:"N/A"!==c?c:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"".concat("https://www.imdb.com/title/").concat(s),imdbId:s}}(v):null}),[v]),F=!y&&v;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){var t;e.preventDefault(),p(!0),(t=o,fetch("".concat("https://www.omdbapi.com/?apikey=fc937818","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){"Error"in e?w(!0):(h(e),w(!1))})).finally((function(){return p(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:o,onChange:function(e){j(e.target.value),w(!1)}})}),y&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":f}),disabled:!o,children:"Find a movie"})}),F&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){var e=i.some((function(e){return e.imdbId===(null===I||void 0===I?void 0:I.imdbId)}));I&&!e&&t((function(e){return[].concat(Object(d.a)(e),[I])})),h(null),j("")},children:"Add to the list"})})]})]}),F&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(r,{movie:I})]})]})},u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{setMovies:c,movies:i})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.95d3a6b0.chunk.js.map