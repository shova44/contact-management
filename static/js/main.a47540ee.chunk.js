(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),o=a(8),l=a.n(o),r=a(14),i=a(13),h=a(3),d=a(4),m=a(6),b=a(5),u=a(2),j=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleShowHide=function(){n.setState({isShowing:!n.state.isShowing})},n.handleDelete=function(){n.props.delete(n.props.contact.id)},n.handleEditing=function(){n.setState({isEditing:!0})},n.handleChange=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,s=t.phone,c=t.email;if(""===a)return n.setState({error:{name:"Please Enter Your Name"}});if(""===c)return n.setState({error:{email:"Please Enter Email Address"}});if(""===s)return n.setState({error:{phone:"Please Enter Your Phone Number"}});var o={name:a,email:c,phone:s,id:n.props.contact.id};n.props.edit(o),n.setState({error:{},isEditing:!1})},n.state={isShowing:!1,isEditing:!1,name:n.props.contact.name,email:n.props.contact.email,phone:n.props.contact.phone,error:{}},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.isShowing?"fa fa-chevron-up mr-3":"fa fa-chevron-down mr-3",t=this.state.error;return this.state.isEditing?Object(n.jsxs)("div",{className:"card w-50 mx-auto mt-5",children:[Object(n.jsx)("div",{className:"card-header",style:{color:"white",backgroundColor:"blue",fontWeight:"bold"},children:Object(n.jsx)("h1",{children:"Form Editing"})}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"name",style:{fontWeight:"bold"},children:"Name"}),Object(n.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",onChange:this.handleChange,value:this.state.name,name:"name"}),Object(n.jsx)("span",{style:{color:"red"},children:t.name})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",style:{fontWeight:"bold"},children:"Email"}),Object(n.jsx)("input",{type:"text",placeholder:"Email",className:"form-control",onChange:this.handleChange,value:this.state.email,name:"email"}),Object(n.jsx)("span",{style:{color:"red"},children:t.email})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"phone",style:{fontWeight:"bold"},children:"Phone"}),Object(n.jsx)("input",{type:"number",placeholder:"Phone",className:"form-control",onChange:this.handleChange,value:this.state.phone,name:"phone"}),Object(n.jsx)("span",{style:{color:"red"},children:t.phone})]}),Object(n.jsx)("button",{type:"submit",style:{backgroundColor:"blue",color:"white"},className:"btn-block",children:"Edit"})]})})]}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"card w-50 mt-5 mx-auto",children:[Object(n.jsx)("div",{className:"card-header",style:{backgroundColor:"blue",color:"white",fontWeight:"bold"},children:Object(n.jsxs)("h1",{children:[Object(n.jsx)("i",{className:e,onClick:this.handleShowHide}),this.props.contact.name,Object(n.jsxs)("div",{className:"float-right",children:[Object(n.jsx)("i",{className:"fas fa-pencil-alt mr-3",onClick:this.handleEditing}),Object(n.jsx)("i",{className:"fas fa-trash-alt mr-4",onClick:this.handleDelete})]})]})}),this.state.isShowing?Object(n.jsx)("div",{className:"card-body w-50 mt-5 mx-auto",children:Object(n.jsxs)("ul",{className:"lst-group",children:[Object(n.jsx)("li",{className:"list-group-item",children:this.props.contact.phone}),Object(n.jsx)("li",{className:"list-group-item",children:this.props.contact.email})]})}):null]})})}}]),a}(c.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,s=a.phone,c=a.email;return""===n?e.setState({error:{name:"Please Enter Your Name"}}):""===c?e.setState({error:{email:"Please Enter Email Address"}}):""===s?e.setState({error:{phone:"Please Enter Your Phone Number"}}):(e.props.formData(e.state),void e.setState({error:{},name:"",email:"",phone:""}))},e.state={name:"",email:"",phone:"",error:{}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.error;return Object(n.jsxs)("div",{className:"card w-50 mx-auto mt-5",children:[Object(n.jsx)("div",{className:"card-header",style:{color:"white",backgroundColor:"blue",fontWeight:"bold"},children:Object(n.jsx)("h1",{children:"Contact Form"})}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"name",style:{fontWeight:"bold"},children:"Name"}),Object(n.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",onChange:this.handleChange,value:this.state.name,name:"name"}),Object(n.jsx)("span",{style:{color:"red"},children:e.name})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",style:{fontWeight:"bold"},children:"Email"}),Object(n.jsx)("input",{type:"text",placeholder:"Email",className:"form-control",onChange:this.handleChange,value:this.state.email,name:"email"}),Object(n.jsx)("span",{style:{color:"red"},children:e.email})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"phone",style:{fontWeight:"bold"},children:"Phone"}),Object(n.jsx)("input",{type:"number",placeholder:"Phone",className:"form-control",onChange:this.handleChange,value:this.state.phone,name:"phone"}),Object(n.jsx)("span",{style:{color:"red"},children:e.phone})]}),Object(n.jsx)("button",{type:"submit",style:{backgroundColor:"blue",color:"white"},className:"btn-block",children:"Submit"})]})})]})}}]),a}(c.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.props),Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"blue",color:"white"},children:Object(n.jsx)("a",{className:"navbar-brand",href:"#",style:Object(u.a)({color:"white",textAlign:"center",fontSize:"bold",marginLeft:550},"fontSize",40),children:this.props.title})})}}]),a}(c.a.Component),O=a(10),g=a.n(O),x=a(7),v=(a(22),a(23),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={contact:[{id:1,name:"Ram",phone:98432355,email:"ram@gmail.com"},{id:2,name:"Shayam",phone:797826,email:"shayam@gmail.com"},{id:3,name:"Hari",phone:9739447,email:"hari@gmail.com"},{id:4,name:"Sonam",phone:937384,email:"sonam@gamil.com"},{id:5,name:"Pratima",phone:83753893,email:"pratima@gmail.com"}]},e.handleClick=function(){e.setState({showHide:!e.state.showHide})},e.handleDelete=function(t){console.log(t);var a=e.state.contact.filter((function(e){return e.id!==t}));g()({title:"Are you sure?",text:"Are you sure that you want to delete this contact?",icon:"warning",dangerMode:!0}).then((function(t){t&&(e.setState({contact:a}),g()("Deleted!","Contact file has been deleted!","success"),x.b.success("Successsfully Delelted!!!!"))}))},e.handleSubmittedData=function(t){var a=e.state.contact.length+1,n=Object(i.a)({id:a},t);console.log(n),e.setState({contact:[n].concat(Object(r.a)(e.state.contact))}),x.b.success("Data Inserted Successfully!!!")},e.handleEditData=function(t){var a=e.state.contact.map((function(e){return t.id===e.id?t:e}));e.setState({contact:a}),x.b.success("Contact Edited Sucessfully")},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;console.log(this.state.contact);for(var t=0;t<this.state.contact;t++)console.log(this.state.contact[t]);return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{title:"Contact Management System"}),Object(n.jsx)(p,{formData:this.handleSubmittedData}),this.state.contact.map((function(t){return Object(n.jsx)(j,{contact:t,delete:e.handleDelete,edit:e.handleEditData},t.id)})),Object(n.jsx)(x.a,{})]})}}]),a}(c.a.Component));l.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a47540ee.chunk.js.map