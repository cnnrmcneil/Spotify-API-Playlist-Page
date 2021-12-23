(this["webpackJsonpspotify-api-project"]=this["webpackJsonpspotify-api-project"]||[]).push([[0],{15:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),n=s(20),a=s.n(n),l=(s(36),s(5)),o=(s(37),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9b634ab5a09f410cb628e714fb30b5b8","&redirect_uri=").concat("https://cnnrmcneil.github.io/Spotify-API-Playlist-Page/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state","streaming","user-read-email","user-read-private"].join("%20"),"&response_type=token&show_dialog=true")),r=s(1),j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:o,children:"Sign In to Spotify"})})},b=Object(i.createContext)(),u=function(e){var t=e.initialState,s=e.reducer,c=e.children;return Object(r.jsx)(b.Provider,{value:Object(i.useReducer)(s,t),children:c})},h=function(){return Object(i.useContext)(b)},d=function(){var e=h(),t=Object(l.a)(e,2),s=t[0],i=s.activePlaylist;s.activePlaylistImage,t[1];return console.log("this is active playlist",i),Object(r.jsxs)("div",{className:"active-playlist-box",children:[Object(r.jsx)("img",{src:i.images[0].url}),Object(r.jsx)("a",{href:i.external_urls.spotify,children:Object(r.jsx)("h5",{children:i.name})}),Object(r.jsx)("a",{href:i.owner.external_urls.spotify,children:Object(r.jsxs)("p",{children:["Curated by ",i.owner.display_name]})})]})},p=s(10),O=s.n(p),g=new O.a,m=function(){var e,t=h(),s=Object(l.a)(t,2),i=s[0].playlists,c=s[1];return Object(r.jsx)("div",{className:"all-playlist-box",children:null===i||void 0===i||null===(e=i.items)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)("div",{className:"imageBox",children:Object(r.jsxs)("a",{onClick:function(){c({type:"SET_ACTIVEPLAYLIST",activePlaylist:e}),c({type:"SET_PLAYLISTID",playlistID:e.id}),g.getPlaylist(e.id).then((function(e){c({type:"SET_SONGLIST",songlist:e})}))},children:[Object(r.jsx)("div",{className:"overlay",children:Object(r.jsx)("p",{children:e.name})}),Object(r.jsx)("img",{className:"albumCover",src:e.images[0].url,alt:"albumcover"})]})})}))})},y=(new O.a,function(e){var t,s=h(),i=Object(l.a)(s,2),c=i[0],n=c.songlist,a=c.playlistID,o=(c.songNumber,i[1]);return Object(r.jsx)("div",{className:"songlist",children:Object(r.jsxs)("ol",{children:[console.log("this is playlistID in songlist",a),console.log("this is songlist in songlist",n),null===n||void 0===n||null===(t=n.tracks)||void 0===t?void 0:t.items.map((function(e,t){return console.log("this is item",e),Object(r.jsxs)("div",{className:"songbox",children:[console.log("this is maps songlist: ",n),Object(r.jsx)("li",{className:"songlistLi",children:Object(r.jsx)("button",{value:t,onClick:function(e){console.log("this is index",t),o({type:"SET_SONGNUMBER",songNumber:t})},children:"Play"})}),Object(r.jsxs)("div",{className:"songartist",children:[Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:e.track.name})}),Object(r.jsx)("span",{children:e.track.artists.map((function(e){return e.name})).join(", ")})]})]})})),Object(r.jsxs)("div",{className:"songbox",children:[Object(r.jsx)("li",{className:"songlistLi"}),Object(r.jsxs)("div",{className:"songartist",children:[Object(r.jsx)("span",{children:"Song"}),Object(r.jsx)("span",{children:"Artist"})]})]})]})})}),x=s(30),f=(s(15),{trackArtistColor:"white",trackNameColor:"white",activeColor:"black",altColor:"black",bgColor:"black"}),v=function(e){var t=c.a.useState(0),s=Object(l.a)(t,2),n=(s[0],s[1]);console.log("this is props",e),Object(i.useEffect)((function(){n(e.numTrack)}),[e]);var a=h(),o=Object(l.a)(a,2),j=o[0],b=j.token,u=j.activePlaylist,d=j.songNumber;o[1];return Object(r.jsx)("div",{className:"controller",children:Object(r.jsx)(x.a,{styles:f,token:b,uris:["".concat(u.uri)],offset:d,initialVolume:.2,autoPlay:!0})})},S=function(){var e=c.a.useState(0),t=Object(l.a)(e,2),s=t[0],i=t[1],n=h(),a=Object(l.a)(n,2),o=a[0],j=o.activePlaylist,b=o.songlist;a[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:"Playlists"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"leftbox",children:[j?Object(r.jsx)(d,{}):Object(r.jsx)("div",{className:"active-playlist-box"}),Object(r.jsx)(m,{})]}),Object(r.jsxs)("div",{className:"rightbox",children:[b?Object(r.jsx)(y,{changeFunc:function(e){i(e)}}):Object(r.jsx)("div",{className:"songlist"}),Object(r.jsx)(v,{className:"controller",numTrack:s})]})]})]})},T=function(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("h1",{children:"SpotList by Connor McNeil"}),Object(r.jsx)("h2",{children:"Accessing the the home page"}),Object(r.jsx)("p",{children:"If you would like to view the rest of the site, please email me your Spotify email & display name at cnnrmcnl@gmail.com so that the Spotify API can provide you an approved login token."}),Object(r.jsx)("h2",{children:"How the website functions"}),Object(r.jsx)("img",{src:"https://i.ibb.co/YRH1Vw6/spotify-login-page.png",className:"image1"}),Object(r.jsx)("p",{children:"Upon pressing the Sign In to Spotify button, Spotify will notify the user of the permissions being requested and provide the user with a token to make requests to the Spotify API"}),Object(r.jsx)("img",{src:"https://i.ibb.co/BK4ndfY/allplaylistsandsongs.png",className:"image2"}),Object(r.jsx)("p",{children:"On the home page, Spotify will pull the users information from your public playlists and display them. The site also features a Web Player that allows users to manage their songs. Context manages the playlists and active song information, as well as storing the users token that is used for API requests."}),Object(r.jsxs)("p",{className:"lastP",children:["Thanks to"," ",Object(r.jsx)("a",{href:"https://github.com/gilbarbara/react-spotify-web-playback",children:"Gil Barbara"})," ","for the Spotify Web Player and"," ",Object(r.jsx)("a",{href:"https://github.com/thelinmichael/spotify-web-api-node",children:"Michael Thelin"})," ","for the Spotify Web API Node"]})]})};function N(){return Object(r.jsxs)("div",{className:"defaultPage",children:[Object(r.jsx)("h1",{children:"Hi, welcome to SpotLists!"}),Object(r.jsx)("p",{children:"Due to limitations in accessibility provided by the Spotify API, users must be verified to access the Home page. Please see the About page for more information."})]})}var P=s(12),I=s(3),k=new O.a;var E=function(){var e=h(),t=Object(l.a)(e,2),s=t[0],c=s.token,n=s.devices,a=s.songlist,o=s.playlistID,b=t[1];return Object(i.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{});window.location.hash="";var t=e.access_token;console.log("this is _token",t),t&&(b({type:"SET_TOKEN",token:t}),k.setAccessToken(t),k.getMe().then((function(e){b({type:"SET_USER",user:e})})),k.getUserPlaylists().then((function(e){b({type:"SET_PLAYLISTS",playlists:e})})),k.getMyDevices().then((function(e){b({type:"SET_DEVICES",devices:e[0]})})),k.play().then((function(e){b({type:"SET_PLAYING",playing:e})})))}),[c,b]),console.log("this is playlistID",o),console.log("this is songlist",a),console.log("Token: ",c),console.log(n),Object(r.jsxs)("div",{className:"allBackground",children:[Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(P.b,{to:"/home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(P.b,{to:"/about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/home",alt:"Sign Out",children:c?Object(r.jsx)("a",{alt:"Sign Out",onClick:function(){b({type:"SET_TOKEN",token:null})},children:"Sign Out"}):Object(r.jsx)(j,{})})})]})}),Object(r.jsxs)(I.c,{children:[Object(r.jsx)(I.a,{exact:!0,path:"/home",component:function(){return c?Object(r.jsx)(S,{spotify:k}):Object(r.jsx)("div",{children:Object(r.jsx)("h1",{style:{color:"white",textAlign:"center",paddingTop:"200px"},children:"Please Login To View"})})}}),Object(r.jsx)(I.a,{exact:!0,path:"/about",component:T}),Object(r.jsx)(I.a,{exact:!0,path:"/Spotify-API-Playlist-Page",component:N})]})]})},w=s(2),_=function(e,t){switch(console.log("Reducer at work: ",t),t.type){case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(w.a)(Object(w.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(w.a)(Object(w.a)({},e),{},{playlists:t.playlists});case"SET_DEVICES":return Object(w.a)(Object(w.a)({},e),{},{devices:t.devices});case"SET_PLAYING":return Object(w.a)(Object(w.a)({},e),{},{playing:t.playing});case"SET_TRACK":return Object(w.a)(Object(w.a)({},e),{},{track:t.track});case"SET_ACTIVEPLAYLIST":return Object(w.a)(Object(w.a)({},e),{},{activePlaylist:t.activePlaylist});case"SET_ACTIVEPLAYLISTIMAGE":return Object(w.a)(Object(w.a)({},e),{},{activePlaylistImage:t.activePlaylistImage});case"SET_SONGLIST":return Object(w.a)(Object(w.a)({},e),{},{songlist:t.songlist});case"SET_PLAYLISTID":return Object(w.a)(Object(w.a)({},e),{},{playlistID:t.playlistID});case"SET_SONGNUMBER":return Object(w.a)(Object(w.a)({},e),{},{songNumber:t.songNumber});default:return e}},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(P.a,{children:Object(r.jsx)(u,{initialState:{user:null,playlists:[""],playing:!1,item:null,token:null,track:null,devices:[],activePlaylist:"",activePlaylistImage:"",songlist:null,playlistID:"",songNumber:0},reducer:_,children:Object(r.jsx)(E,{})})})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.c844f72b.chunk.js.map