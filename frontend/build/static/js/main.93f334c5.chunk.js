(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,a){e.exports=a(83)},51:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),s=a.n(c),l=(a(51),a(7)),o=a(17),i=a(2),u=a(3),m=a(5),p=a(4),d=a(6),h=a(12),E=a(1),b=a.n(E),v=a(8),g=a(10),f=a.n(g),y=f.a.create({withCredentials:!0,baseURL:"https://young-beyond-07801.herokuapp.com/api"}),N={test:function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signup:function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),levelUp:function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/levelup/:id");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).logOut=function(){N.logOut().then((function(e){return console.log(e),a.setState({loggedUser:null}),delete localStorage.user,a.props.history.push("/login")})).catch((function(e){return console.log(e)}))},a.state={user:JSON.parse(localStorage.getItem("user"))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",null,r.a.createElement("nav",Object(h.a)({className:"navbar",role:"navigation","aria-label":"main navigation"},"aria-label","dropdown navigation"),r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.b,{className:"navbar-item",to:"/"}," ",r.a.createElement("span",{className:"logo"},"Green Finder")," "),r.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},e?r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-start"},r.a.createElement(l.b,{className:"navbar-item",to:"/home"},"Home"),"USUARIO"===e.role?r.a.createElement(l.b,{className:"navbar-item",to:"/profile"},"Perfil"):"",r.a.createElement("button",{onClick:this.logOut,className:"button is-primary"},"Cerrar Sesi\xf3n"))):r.a.createElement("div",null,r.a.createElement(l.b,{className:"button is-primary",to:"/signup"},r.a.createElement("strong",null,"Crear cuenta")),r.a.createElement(l.b,{className:"button is-light",to:"/login"},"Iniciar Sesi\xf3n"))))))),this.props.children,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"has-text-white"},r.a.createElement("strong",{className:"has-text-white"},"Green Finder")," by ",r.a.createElement("a",{href:"https://github.com/TanMar23"},"Tania Marin"),". The source code is licensed"))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem("user"))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.user;return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",null,r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"home-container container"},r.a.createElement("img",{src:"https://source.unsplash.com/uqxe2L1Aq0g/400x700",width:"400px",height:"800px",alt:"green city"}))),r.a.createElement("div",{className:"column is-8"},r.a.createElement("br",null),r.a.createElement("div",{className:"top-home"},r.a.createElement("p",{className:"has-text-centered"},"Bienvenido a green finder!"),r.a.createElement("div",{className:"home-button"},"ADMIN"===e.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,{exact:!0,to:"/centers"},r.a.createElement("button",{className:"button is-medium is-primary"}," Centros ")),r.a.createElement(l.c,{exact:!0,to:"/test"},r.a.createElement("button",{className:"button is-medium is-primary"},"Registrar contribucion"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,{exact:!0,to:"/centers"},r.a.createElement("button",{className:"button is-medium is-primary"}," Centros "))))),r.a.createElement("div",{class:"tabs is-boxed is-centered"},r.a.createElement("ul",null,r.a.createElement("li",{class:"is-active"},r.a.createElement("a",null,"Quienes somos?")),r.a.createElement("li",null,r.a.createElement("a",null,"Por que green finder?")),r.a.createElement("li",null,r.a.createElement("a",null,"Como funciona?"))))))))}}]),t}(n.Component),w=Object(n.createContext)(),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loggedUser:null},a.logUser=function(e){a.setState({loggedUser:e})},a.logOut=function(){N.logOut().then((function(e){console.log(e),a.setState({loggedUser:null})})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=this.logUser,a=this.logOut;return r.a.createElement(w.Provider,{value:{state:e,logUser:t,logOut:a}},this.props.children)}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.logUser=function(e){a.setState({loggedUser:e})},a.onSubmit=function(e){e.preventDefault(),N.login(a.state.user).then((function(e){a.context.logUser(e.data.user),localStorage.setItem("user",JSON.stringify(e.data.user)),a.props.history.push("/home")})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-5"},r.a.createElement("h1",{className:"title is-1 has-text-light"},"Iniciar sesi\xf3n"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",{className:"label has-text-light is-size-4"},"Email"),r.a.createElement("input",{className:"input",type:"email",name:"email",placeholder:"Email",onChange:this.handleInput}),r.a.createElement("label",{className:"label has-text-light is-size-4"},"Contrase\xf1a"),r.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"Password",onChange:this.handleInput}),r.a.createElement("input",{className:"button is-primary",type:"submit",value:"Login"})),r.a.createElement("p",{className:"has-text-light is-size-5"},"Si a\xfan no tienes una cuenta, puedes crearla ",r.a.createElement(l.b,{to:"/signup"},"aqu\xed   ")))))}}]),t}(n.Component);j.contextType=w;var S=j;var I=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))},k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:"",lastname:"",email:"",password:""}},a.handleInput=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.onSubmit=function(e){e.preventDefault(),N.signup(a.state.user).then((function(e){var t=e.data.msg;console.log(t),a.props.history.push("/login")})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.user.userMsg;return r.a.createElement("div",{className:"signup-wrapper"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"message is-success"},e),r.a.createElement("form",{className:"columns is-5",onSubmit:this.onSubmit},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title is-1 has-text-light"},"Sign up"),r.a.createElement("label",{className:"label has-text-light is-size-4"},"Email:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"email",name:"email"}),r.a.createElement("label",{className:"label has-text-light is-size-4"},"Nombre:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"name"}),r.a.createElement("label",{className:"label has-text-light is-size-4"},"Apellido:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"lastName"}),r.a.createElement("label",{className:"label has-text-light is-size-4"},"Contrase\xf1a:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"password",name:"password"}),r.a.createElement("div",null,r.a.createElement("input",{className:"button is-primary is-fullwidth",type:"submit",value:"Signup"})))))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:{email:"",name:"",lastName:"",level:""}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(!this.context.state.loggedUser)return this.props.history.push("/login");var e=this.context.state.loggedUser;this.setState(e)}},{key:"render",value:function(){var e=this.state;return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-4 box"},r.a.createElement("div",null,r.a.createElement("div",{className:"profile-images"},1===e.level?r.a.createElement("img",{src:"/images/seeds.svg",width:"180px",height:"250px",alt:"seed"}):2===e.level?r.a.createElement("img",{src:"/images/germinacion.svg",width:"200px",height:"300px",alt:"germinacion"}):3===e.level?r.a.createElement("img",{src:"/images/plantita.svg",width:"200px",height:"300px",alt:"plantita"}):r.a.createElement("img",{src:"/images/tree.svg",width:"200px",height:"300px",alt:"arbolito"})),r.a.createElement("div",{className:"profile-p"},r.a.createElement("p",null,"Nivel: ",e.level),r.a.createElement("p",null,"Nombre: ",e.name," "),r.a.createElement("p",null,"Apellido: ",e.lastName," "),r.a.createElement("p",null,"Email: ",e.email)))))))}}]),t}(n.Component);A.contextType=w;var T=A,P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={centers:void 0,center:{}},a.getCenters=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://young-beyond-07801.herokuapp.com/api/centers");case 2:t=e.sent,a.setState({centers:t.data.places});case 4:case"end":return e.stop()}}),e)}))),a.getFilteredCenters=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://young-beyond-07801.herokuapp.com/api/centers/".concat(a.state.center));case 2:t=e.sent,a.setState({centers:t.data.centersInCategory});case 4:case"end":return e.stop()}}),e)}))),a.updateValue=function(e){a.setState({center:e.target.value})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getFilteredCenters(),this.getCenters()}},{key:"render",value:function(){var e=this.state.centers;return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",null,r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-6"},r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-centered"},"CENTROS DE ACOPIO"))),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{name:"tipoResiduo",id:"tipoResiduo",onChange:this.updateValue},r.a.createElement("option",{disabled:!0,selected:!0},"Seleccione una categor\xeda"),r.a.createElement("option",{value:"ACEITE COMESTIBLE USADO"},"Aceite comestible usado"),r.a.createElement("option",{value:"ACEITE Y LUBRICANTE AUTOMOTRIZ USADO"},"Aceite y lubricante automotriz usado"),r.a.createElement("option",{value:"ELECTRONICOS Y ELECTRODOMESTICOS"},"Electr\xf3nicos y electrodom\xe9sticos"),r.a.createElement("option",{value:"MEDICAMENTOS CADUCOS"},"Medicamentos caducos"),r.a.createElement("option",{value:"METALES"},"Metales"),r.a.createElement("option",{value:"PAPEL Y CARTON"},"Papel y cart\xf3n"),r.a.createElement("option",{value:"PET"},"PET"),r.a.createElement("option",{value:"PILAS Y BATERIAS"},"Pilas y bater\xedas"),r.a.createElement("option",{value:"RESIDUOS DE CONSTRUCCION"},"Residuos de construcci\xf3n"),r.a.createElement("option",{value:"RESIDUOS SANITARIOS"},"Residuos Sanitarios"),r.a.createElement("option",{value:"VIDRIO"},"Vidrio")))),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary",onClick:this.getFilteredCenters},"Filtrar")),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary",onClick:this.getCenters},"Ver todos"))))),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-7"},r.a.createElement("p",{className:"has-text-centered"},"\xbfConoces alg\xfan centro que no este aqu\xed?"),r.a.createElement("div",{className:"add-center-button"},r.a.createElement(l.c,{exact:!0,to:"/create-new"},r.a.createElement("button",{className:"button is-primary"},"Agregar nuevo centro"))),e?e.map((function(e,t){return r.a.createElement("table",{className:"box table",key:t},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.empresa),r.a.createElement("div",{className:"ver-button"},r.a.createElement("td",null,r.a.createElement(l.b,{to:"/center/".concat(e._id)},"Ver"))))))})):r.a.createElement("p",null,"Cargando...")))))}}]),t}(n.Component),D=a(42),R=a.n(D),U=a(16),M=a.n(U);M.a.accessToken="pk.eyJ1IjoibWx6eiIsImEiOiJjandrNmVzNzUwNWZjNGFqdGcwNmJ2ZWhpIn0.ybY6wnAtJwj-Tq0c46sW6A";var L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={center:{},user:JSON.parse(localStorage.getItem("user"))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://young-beyond-07801.herokuapp.com/api/center/".concat(this.props.match.params.id)).then((function(t){e.setState({center:t.data.place});var a=new M.a.Map({container:e.mapContainer,style:"mapbox://styles/mapbox/streets-v9"});if(navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=[e.coords.longitude,e.coords.latitude];a.setZoom(12).setCenter(t),new M.a.Marker({color:"red"}).setLngLat(t).setPopup((new M.a.Popup).setHTML("<h3>Usted est\xe1 aqu\xed</h3>")).addTo(a)})),e.state.center.longitud&&e.state.center.latitud){var n=[e.state.center.longitud,e.state.center.latitud];new M.a.Marker({color:"green"}).setLngLat(n).setPopup((new M.a.Popup).setHTML("<h3>Destino</h3>")).addTo(a)}a.addControl(new M.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0})),a.addControl(new R.a({accessToken:M.a.accessToken,unit:"metric",language:"es",placeholderOrigin:"Seleccione su lugar de origen",placeholderDestination:"Seleccione su destino"}),"top-left"),a.addControl(new M.a.NavigationControl)}))}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"has-text-centered category-center"},"Categoria: ",this.state.center.tipoResiduo),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is -7 map",style:{width:"50vw",height:"90vh"},ref:function(t){return e.mapContainer=t}}),r.a.createElement("div",{className:"column is-5 data"},r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title card-text"},this.state.center.empresa)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Direccion: ",this.state.center.address),r.a.createElement("p",null,"Email: ",this.state.center.email?this.state.center.email:"No disponible"),r.a.createElement("p",null,"Numero: ",this.state.center.contactNumber?this.state.center.contactNumber:"No disponible"),r.a.createElement("p",null,"Website: ",this.state.center.website?this.state.center.website:"No disponible"),r.a.createElement("p",null,"Horario: ",this.state.center.horario?this.state.center.horario:"No disponible")),r.a.createElement("div",{className:"home-button"},"USUARIO"===t.role?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,{exact:!0,to:"/contribution"},r.a.createElement("button",{className:"button is-primary"},"Quiero contribuir!"))):r.a.createElement(r.a.Fragment,null)))))))))}}]),t}(n.Component);L.contextType=w;var q=L,z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getFilteredCenters=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://young-beyond-07801.herokuapp.com/api/centers/:categoryCenter");case 2:t=e.sent,a.setState({centers:t.data.places});case 4:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getFilteredCenters()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Centros por categoria"))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",{className:"landing-container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-6"},r.a.createElement("p",null,"Bienvenido a Green Finder!"),r.a.createElement("button",{className:"button is-primary"},r.a.createElement(l.b,{to:"/login"},"Iniciar sesion")),r.a.createElement("button",{className:"button is-primary"},r.a.createElement(l.b,{to:"/signup"},"Crear cuenta"))))))}}]),t}(n.Component),B=f.a.create({baseURL:"https://young-beyond-07801.herokuapp.com/api"}),J={addCenter:function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,B.post("/create-new",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addContribution:function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,B.post("/add-contribution",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={center:{empresa:"",email:"",website:"",address:"",horario:"",contactNumber:"",tipoResiduo:""}},a.handleInput=function(e){var t=a.state.center;t[e.target.name]=e.target.value,a.setState({center:t})},a.addNewCenter=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.addCenter(a.state.center);case 2:t=e.sent,n=t.data,console.log(n);case 5:case"end":return e.stop()}}),e)}))),a.addCenter=function(e){e.preventDefault(),a.addNewCenter(),a.props.history.push("/centers")},a.updateValue=function(e){console.log(e);var t=a.state.center;a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{tipoResiduo:e.target.value}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.center;return console.log(this.state.center),r.a.createElement(O,{history:this.props.history},r.a.createElement("div",{className:"new-center-wrapper"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",null,r.a.createElement("form",{className:"columns is-5 box",onSubmit:this.addCenter},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title is-3"},"Agregar centro de acopio"),r.a.createElement("label",{className:"label is-size-6"},"Nombre:*"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"empresa",value:e.empresa,required:!0}),r.a.createElement("label",{className:"label is-size-6"},"Email:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"email",name:"email",value:e.email}),r.a.createElement("label",{className:"label is-size-6"},"Sitio Web:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"website",value:e.website}),r.a.createElement("label",{className:"label is-size-6"},"Direcci\xf3n:*"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"address",value:e.address,required:!0}),r.a.createElement("label",{className:"label is-size-6"},"Horario:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"text",name:"horario",value:e.horario}),r.a.createElement("label",{className:"label is-size-6"},"N\xfamero telef\xf3nico:"),r.a.createElement("input",{className:"input",onChange:this.handleInput,type:"number",name:"contactNumber",value:e.contactNumber}),r.a.createElement("label",{className:"label is-size-6"},"Categor\xeda:*"),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-12"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{name:"tipoResiduo",id:"tipoResiduo",onChange:this.handleInput,required:!0},r.a.createElement("option",{disabled:!0,selected:!0},"Seleccione una categor\xeda"),r.a.createElement("option",{value:"ACEITE COMESTIBLE USADO"},"Aceite comestible usado"),r.a.createElement("option",{value:"ACEITE Y LUBRICANTE AUTOMOTRIZ USADO"},"Aceite y lubricante automotriz usado"),r.a.createElement("option",{value:"ELECTRONICOS Y ELECTRODOMESTICOS"},"Electr\xf3nicos y electrodom\xe9sticos"),r.a.createElement("option",{value:"MEDICAMENTOS CADUCOS"},"Medicamentos caducos"),r.a.createElement("option",{value:"METALES"},"Metales"),r.a.createElement("option",{value:"PAPEL Y CARTON"},"Papel y cart\xf3n"),r.a.createElement("option",{value:"PET"},"PET"),r.a.createElement("option",{value:"PILAS Y BATERIAS"},"Pilas y bater\xedas"),r.a.createElement("option",{value:"RESIDUOS DE CONSTRUCCION"},"Residuos de construcci\xf3n"),r.a.createElement("option",{value:"RESIDUOS SANITARIOS"},"Residuos Sanitarios"),r.a.createElement("option",{value:"VIDRIO"},"Vidrio"))))))),r.a.createElement("div",null,r.a.createElement("input",{className:"button is-primary is-fullwidth",type:"submit",value:"Agregar centro"}))))))))}}]),t}(n.Component),W=a(43),_=a.n(W),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={result:"",contribution:{quantity:"",unity:""}},a.addContribution=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.addContribution(a.state.contribution);case 2:t=e.sent,n=t.data,console.log(n);case 5:case"end":return e.stop()}}),e)}))),a.onSubmit=function(e){e.preventDefault(),a.addContribution(),a.props.history.push("/contribution-list")},a.handleInput=function(e){var t=a.state.contribution;t[e.target.name]=e.target.value,a.setState({contribution:t})},a.handleScan=function(e){if(e){a.setState({result:e});var t=e.replace(" ","-");f.a.get("https://young-beyond-07801.herokuapp.com/api/levelup/"+t)}},a.handleError=function(e){console.error(e)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.contribution;return r.a.createElement("div",{className:"qrreader-wrapper"},r.a.createElement("div",{className:"qrreader-container container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-5 box"},r.a.createElement("p",{className:"has-text-centered"},"Escanea el codigo QR presentado por el usuario"),r.a.createElement("br",null),r.a.createElement("div",{className:"qr-code-reader"},r.a.createElement(_.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"40%"}})),r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-centered"},this.state.result),this.state.result?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Registra la contribucion del usuario!"),r.a.createElement("form",{className:"columns is-5 box",onSubmit:this.onSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-primary",onChange:this.handleInput,name:"quantity",value:e.quantity,type:"text",placeholder:"cantidad"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-primary",onChange:this.handleInput,name:"unity",value:e.unity,type:"text",placeholder:"ejemplo: litros, kilos"}))),r.a.createElement("div",null,r.a.createElement("input",{className:"button is-primary is-fullwidth",type:"submit",value:"Agregar contribucion"})))):"",r.a.createElement("div",{className:"button-contribution"},r.a.createElement(l.c,{to:"/centers"},r.a.createElement("button",{className:"button is-primary"},"Centros")))))))}}]),t}(n.Component),H=a(45),Z=a.n(H),Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"generate",value:function(e){var t=11;if(e>t)return this.generate(t)+this.generate(e-t);var a=(t=Math.pow(10,e+1))/10;return(""+(Math.floor(Math.random()*(t-a+1))+a)).substring(1)}},{key:"uploadPin",value:function(e){var t={id:this.context.state.loggedUser._id,pin:e};f.a.post("https://young-beyond-07801.herokuapp.com/api/levelup",t)}},{key:"render",value:function(){var e=this.generate(4);return this.uploadPin(e),console.log(e),r.a.createElement("div",{className:"qrcode-wrapper"},r.a.createElement("div",{className:"qrcode-container container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-5 box"},r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-centered"},"Muestra  este codigo en el centro de acopio para que quede registrada tu aportacion!"),r.a.createElement("div",{className:"qrcode"},r.a.createElement(Z.a,{value:this.context.state.loggedUser._id+" "+e})),r.a.createElement("div",{className:"button-contribution"},r.a.createElement(l.c,{to:"/centers"},r.a.createElement("button",{className:"button is-primary"},"Centros")),r.a.createElement(l.c,{to:"/profile"},r.a.createElement("button",{className:"button is-primary"},"Perfil")))))))}}]),t}(n.Component);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}Q.contextType=w;var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contributions:[]},a.getContributions=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://young-beyond-07801.herokuapp.com/api/contribution-list");case 2:t=e.sent,a.setState({contributions:t.data.contributions});case 4:case"end":return e.stop()}}),e)}))),a.deleteContribution=function(e){f.a.delete("https://young-beyond-07801.herokuapp.com/api/contribution/".concat(e)).then((function(e){a.setState((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{contributions:t.contributions.filter((function(t){return t._id!==e.data.contribution._id}))})}))})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getContributions()}},{key:"render",value:function(){var e=this,t=this.state.contributions;return r.a.createElement(O,{history:this.props.history},r.a.createElement("div",null,r.a.createElement("h3",{className:"has-text-centered"},"Contribuciones"),t?t.map((function(t,a){return r.a.createElement("table",{className:"box table",key:t._id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,t.unity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.deleteContribution(t._id)}},"Borrar")))))})):r.a.createElement("p",null,"Cargando...")))}}]),t}(n.Component),X=function(){return r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/login",component:S}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:k}),r.a.createElement(o.a,{exact:!0,path:"/",component:F}),r.a.createElement(o.a,{exact:!0,path:"/home",component:C}),r.a.createElement(o.a,{exact:!0,path:"/create-new",component:Y}),r.a.createElement(o.a,{exact:!0,path:"/profile",component:T}),r.a.createElement(o.a,{exact:!0,path:"/test",component:G}),r.a.createElement(o.a,{exact:!0,path:"/contribution",component:Q}),r.a.createElement(o.a,{exact:!0,path:"/contribution-list",component:K}),r.a.createElement(o.a,{exact:!0,path:"/centers",component:P}),r.a.createElement(o.a,{exact:!0,path:"/center/:id",component:q}),r.a.createElement(o.a,{exact:!0,path:"/centers/:categoryCenter",component:z}),r.a.createElement(o.a,{component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.93f334c5.chunk.js.map