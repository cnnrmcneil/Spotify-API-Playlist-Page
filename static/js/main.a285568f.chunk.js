(this["webpackJsonpspotify-api-project"]=this["webpackJsonpspotify-api-project"]||[]).push([[0],{18:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),i=s(20),a=s.n(i),l=(s(36),s(5)),r=(s(37),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9b634ab5a09f410cb628e714fb30b5b8","&redirect_uri=").concat("https://cnnrmcneil.github.io/Spotify-API-Playlist-Page/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),o=s(1),j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:r,children:"Sign In to Spotify"})})},b=Object(c.createContext)(),u=function(e){var t=e.initialState,s=e.reducer,n=e.children;return Object(o.jsx)(b.Provider,{value:Object(c.useReducer)(s,t),children:n})},d=function(){return Object(c.useContext)(b)},O=function(){var e=d(),t=Object(l.a)(e,2),s=t[0],c=s.activePlaylist;s.activePlaylistImage,t[1];return console.log("this is active playlist",c),Object(o.jsxs)("div",{className:"active-playlist-box",children:[Object(o.jsx)("img",{src:c.images[0].url}),Object(o.jsx)("a",{href:c.external_urls.spotify,children:Object(o.jsx)("h5",{children:c.name})}),Object(o.jsx)("a",{href:c.owner.external_urls.spotify,children:Object(o.jsxs)("p",{children:["Curated by ",c.owner.display_name]})})]})},h=s(10),p=s.n(h),g=new p.a,x=function(){var e,t=d(),s=Object(l.a)(t,2),c=s[0].playlists,n=s[1];return Object(o.jsx)("div",{className:"all-playlist-box",children:null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{className:"imageBox",children:Object(o.jsxs)("a",{onClick:function(){n({type:"SET_ACTIVEPLAYLIST",activePlaylist:e}),n({type:"SET_PLAYLISTID",playlistID:e.id}),g.getPlaylist(e.id).then((function(e){n({type:"SET_SONGLIST",songlist:e})}))},children:[Object(o.jsx)("img",{className:"albumCover",src:e.images[0].url,alt:"albumcover"}),Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("p",{children:e.name})})]})})}))})},y=(new p.a,function(e){var t,s=d(),c=Object(l.a)(s,2),n=c[0],i=n.songlist,a=n.playlistID;n.songNumber,c[1];return Object(o.jsx)("div",{className:"songlist",children:Object(o.jsxs)("ol",{children:[console.log("this is playlistID in songlist",a),console.log("this is songlist in songlist",i),null===i||void 0===i||null===(t=i.tracks)||void 0===t?void 0:t.items.map((function(t,s){return console.log("this is item",t),Object(o.jsxs)("div",{className:"songbox",children:[console.log("this is maps songlist: ",i),Object(o.jsx)("li",{className:"songlistLi",children:Object(o.jsx)("button",{value:s,onClick:function(t){console.log("this is index",s),e.changeFunc(t.target.value)}})}),Object(o.jsxs)("div",{className:"songartist",children:[Object(o.jsx)("span",{children:t.track.name}),Object(o.jsx)("span",{children:t.track.artists.map((function(e){return e.name})).join(", ")})]})]})})),Object(o.jsxs)("div",{className:"songbox",children:[Object(o.jsx)("li",{className:"songlistLi"}),Object(o.jsxs)("div",{className:"songartist",children:[Object(o.jsx)("span",{children:"Song"}),Object(o.jsx)("span",{children:"Artist"})]})]})]})})}),v=s(30),m=(s(18),{trackArtistColor:"white",trackNameColor:"white",activeColor:"black",altColor:"black",bgColor:"black",height:100,sliderTrackBorderRadius:100}),f=function(e){var t=n.a.useState(0),s=Object(l.a)(t,2),i=s[0],a=s[1];console.log("this is props",e),Object(c.useEffect)((function(){a(e.numTrack)}),[e]);var r=d(),j=Object(l.a)(r,2),b=j[0],u=b.token,O=b.activePlaylist;b.songNumber,j[1];return Object(o.jsx)("div",{className:"controller",children:Object(o.jsx)(v.a,{styles:m,token:u,uris:["".concat(O.uri)],offset:i,autoPlay:!0})})},S=function(){var e=n.a.useState(0),t=Object(l.a)(e,2),s=t[0],c=t[1],i=d(),a=Object(l.a)(i,2),r=a[0],j=r.activePlaylist,b=r.songlist;a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"title",children:"Playlists"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"leftbox",children:[j?Object(o.jsx)(O,{}):Object(o.jsx)("div",{className:"active-playlist-box"}),Object(o.jsx)(x,{})]}),Object(o.jsxs)("div",{className:"rightbox",children:[b?Object(o.jsx)(y,{changeFunc:function(e){c(e)}}):Object(o.jsx)("div",{className:"songlist"}),Object(o.jsx)(f,{className:"controller",numTrack:s})]})]})]})},T=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Sample Header"})})},E=s(12),N=s(3),k=new p.a;var I=function(){var e=d(),t=Object(l.a)(e,2),s=t[0],n=s.token,i=s.devices,a=s.songlist,r=s.playlistID,b=t[1];return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{});window.location.hash="";var t=e.access_token;console.log("this is _token",t),t&&(b({type:"SET_TOKEN",token:t}),k.setAccessToken(t),k.getMe().then((function(e){b({type:"SET_USER",user:e})})),k.getUserPlaylists().then((function(e){b({type:"SET_PLAYLISTS",playlists:e})})),k.getMyDevices().then((function(e){b({type:"SET_DEVICES",devices:e[0]})})),k.play().then((function(e){b({type:"SET_PLAYING",playing:e})})))}),[n,b]),console.log("this is playlistID",r),console.log("this is songlist",a),console.log("Token: ",n),console.log(i),Object(o.jsxs)("div",{className:"allBackground",children:[Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("img",{src:".src/logoforspotifyapi.png",width:"50px",height:"50px",alt:"logo"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(E.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(E.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",alt:"Sign Out",children:n?Object(o.jsx)("a",{alt:"Sign Out",onClick:function(){b({type:"SET_TOKEN",token:null})},children:"Sign Out"}):Object(o.jsx)(j,{})})})]})]}),Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{exact:!0,path:"/",component:function(){return n?Object(o.jsx)(S,{spotify:k}):Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{color:"white",textAlign:"center",paddingTop:"200px"},children:"Please Login To View"})})}}),Object(o.jsx)(N.a,{exact:!0,path:"/about",component:T})]})]})},P=s(2),_=function(e,t){switch(console.log("Reducer at work: ",t),t.type){case"SET_USER":return Object(P.a)(Object(P.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(P.a)(Object(P.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(P.a)(Object(P.a)({},e),{},{playlists:t.playlists});case"SET_DEVICES":return Object(P.a)(Object(P.a)({},e),{},{devices:t.devices});case"SET_PLAYING":return Object(P.a)(Object(P.a)({},e),{},{playing:t.playing});case"SET_TRACK":return Object(P.a)(Object(P.a)({},e),{},{track:t.track});case"SET_ACTIVEPLAYLIST":return Object(P.a)(Object(P.a)({},e),{},{activePlaylist:t.activePlaylist});case"SET_ACTIVEPLAYLISTIMAGE":return Object(P.a)(Object(P.a)({},e),{},{activePlaylistImage:t.activePlaylistImage});case"SET_SONGLIST":return Object(P.a)(Object(P.a)({},e),{},{songlist:t.songlist});case"SET_PLAYLISTID":return Object(P.a)(Object(P.a)({},e),{},{playlistID:t.playlistID});case"SET_SONGNUMBER":return Object(P.a)(Object(P.a)({},e),{},{songNumber:t.songNumber});default:return e}},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(E.a,{children:Object(o.jsx)(u,{initialState:{user:null,playlists:[""],playing:!1,item:null,token:null,track:null,devices:[],activePlaylist:"",activePlaylistImage:"",songlist:null,playlistID:"",songNumber:null},reducer:_,children:Object(o.jsx)(I,{})})})}),document.getElementById("root")),L()}},[[45,1,2]]]);
//# sourceMappingURL=main.a285568f.chunk.js.map