(()=>{var M,f,t_,x_,P,X,n_,$,C_,D={},o_=[],H_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function E(e,_){for(var t in _)e[t]=_[t];return e}function r_(e){var _=e.parentNode;_&&_.removeChild(e)}function E_(e,_,t){var r,i,o,l={};for(o in _)o=="key"?r=_[o]:o=="ref"?i=_[o]:l[o]=_[o];if(arguments.length>2&&(l.children=arguments.length>3?M.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return F(e,l,r,i,null)}function F(e,_,t,r,i){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++t_};return i==null&&f.vnode!=null&&f.vnode(o),o}function U(e){return e.children}function V(e,_){this.props=e,this.context=_}function T(e,_){if(_==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__d||t.__e;return typeof e.type=="function"?T(e):null}function i_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return i_(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!L.__r++||X!==f.debounceRendering)&&((X=f.debounceRendering)||n_)(L)}function L(){var e,_,t,r,i,o,l,s,c;for(P.sort($);e=P.shift();)e.__d&&(_=P.length,r=void 0,i=void 0,o=void 0,s=(l=(t=e).__v).__e,(c=t.__P)&&(r=[],i=[],(o=E({},l)).__v=l.__v+1,O(c,l,o,t.__n,c.ownerSVGElement!==void 0,l.__h!=null?[s]:null,r,s??T(l),l.__h,i),s_(r,l,i),l.__e!=s&&i_(l)),P.length>_&&P.sort($));L.__r=0}function u_(e,_,t,r,i,o,l,s,c,m,h){var n,d,a,u,p,S,v,g,C,k=0,b=r&&r.__k||o_,N=b.length,H=N,w=_.length;for(t.__k=[],n=0;n<w;n++)(u=t.__k[n]=(u=_[n])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?F(null,u,null,null,u):q(u)?F(U,{children:u},null,null,null):u.__b>0?F(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=t,u.__b=t.__b+1,(g=P_(u,b,v=n+k,H))===-1?a=D:(a=b[g]||D,b[g]=void 0,H--),O(e,u,a,i,o,l,s,c,m,h),p=u.__e,(d=u.ref)&&a.ref!=d&&(a.ref&&z(a.ref,null,u),h.push(d,u.__c||p,u)),p!=null&&(S==null&&(S=p),(C=a===D||a.__v===null)?g==-1&&k--:g!==v&&(g===v+1?k++:g>v?H>w-v?k+=g-v:k--:k=g<v&&g==v-1?g-v:0),v=n+k,typeof u.type!="function"||g===v&&a.__k!==u.__k?typeof u.type=="function"||g===v&&!C?u.__d!==void 0?(c=u.__d,u.__d=void 0):c=p.nextSibling:c=c_(e,p,c):c=l_(u,c,e),typeof t.type=="function"&&(t.__d=c))):(a=b[n])&&a.key==null&&a.__e&&(a.__e==c&&(a.__=r,c=T(a)),j(a,a,!1),b[n]=null);for(t.__e=S,n=N;n--;)b[n]!=null&&(typeof t.type=="function"&&b[n].__e!=null&&b[n].__e==t.__d&&(t.__d=b[n].__e.nextSibling),j(b[n],b[n]))}function l_(e,_,t){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,_=typeof r.type=="function"?l_(r,_,t):c_(t,r.__e,_));return _}function c_(e,_,t){return t==null||t.parentNode!==e?e.insertBefore(_,null):_==t&&_.parentNode!=null||e.insertBefore(_,t),_.nextSibling}function P_(e,_,t,r){var i=e.key,o=e.type,l=t-1,s=t+1,c=_[t];if(c===null||c&&i==c.key&&o===c.type)return t;if(r>(c!=null?1:0))for(;l>=0||s<_.length;){if(l>=0){if((c=_[l])&&i==c.key&&o===c.type)return l;l--}if(s<_.length){if((c=_[s])&&i==c.key&&o===c.type)return s;s++}}return-1}function S_(e,_,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in _||W(e,o,null,t[o],r);for(o in _)i&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||W(e,o,_[o],t[o],r)}function Z(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||H_.test(_)?t:t+"px"}function W(e,_,t,r,i){var o;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||Z(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||Z(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/(PointerCapture)$|Capture$/,"$1")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r?t.u=r.u:(t.u=Date.now(),e.addEventListener(_,o?e_:__,o)):e.removeEventListener(_,o?e_:__,o);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="width"&&_!=="height"&&_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_!=="rowSpan"&&_!=="colSpan"&&_!=="role"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function __(e){var _=this.l[e.type+!1];if(e.t){if(e.t<=_.u)return}else e.t=Date.now();return _(f.event?f.event(e):e)}function e_(e){return this.l[e.type+!0](f.event?f.event(e):e)}function O(e,_,t,r,i,o,l,s,c,m){var h,n,d,a,u,p,S,v,g,C,k,b,N,H,w,x=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,s=_.__e=t.__e,_.__h=null,o=[s]),(h=f.__b)&&h(_);_:if(typeof x=="function")try{if(v=_.props,g=(h=x.contextType)&&r[h.__c],C=h?g?g.props.value:h.__:r,t.__c?S=(n=_.__c=t.__c).__=n.__E:("prototype"in x&&x.prototype.render?_.__c=n=new x(v,C):(_.__c=n=new V(v,C),n.constructor=x,n.render=D_),g&&g.sub(n),n.props=v,n.state||(n.state={}),n.context=C,n.__n=r,d=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),x.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=E({},n.__s)),E(n.__s,x.getDerivedStateFromProps(v,n.__s))),a=n.props,u=n.state,n.__v=_,d)x.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(x.getDerivedStateFromProps==null&&v!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,C),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,C)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(A){A&&(A.__=_)}),k=0;k<n._sb.length;k++)n.__h.push(n._sb[k]);n._sb=[],n.__h.length&&l.push(n);break _}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,C),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,u,p)})}if(n.context=C,n.props=v,n.__P=e,n.__e=!1,b=f.__r,N=0,"prototype"in x&&x.prototype.render){for(n.state=n.__s,n.__d=!1,b&&b(_),h=n.render(n.props,n.state,n.context),H=0;H<n._sb.length;H++)n.__h.push(n._sb[H]);n._sb=[]}else do n.__d=!1,b&&b(_),h=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++N<25);n.state=n.__s,n.getChildContext!=null&&(r=E(E({},r),n.getChildContext())),d||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(a,u)),u_(e,q(w=h!=null&&h.type===U&&h.key==null?h.props.children:h)?w:[w],_,t,r,i,o,l,s,c,m),n.base=_.__e,_.__h=null,n.__h.length&&l.push(n),S&&(n.__E=n.__=null)}catch(A){_.__v=null,(c||o!=null)&&(_.__e=s,_.__h=!!c,o[o.indexOf(s)]=null),f.__e(A,_,t)}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=w_(t.__e,_,t,r,i,o,l,c,m);(h=f.diffed)&&h(_)}function s_(e,_,t){for(var r=0;r<t.length;r++)z(t[r],t[++r],t[++r]);f.__c&&f.__c(_,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){f.__e(o,i.__v)}})}function w_(e,_,t,r,i,o,l,s,c){var m,h,n,d=t.props,a=_.props,u=_.type,p=0;if(u==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((m=o[p])&&"setAttribute"in m==!!u&&(u?m.localName===u:m.nodeType===3)){e=m,o[p]=null;break}}if(e==null){if(u===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,a.is&&a),o=null,s=!1}if(u===null)d===a||s&&e.data===a||(e.data=a);else{if(o=o&&M.call(e.childNodes),h=(d=t.props||D).dangerouslySetInnerHTML,n=a.dangerouslySetInnerHTML,!s){if(o!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(n||h)&&(n&&(h&&n.__html==h.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(S_(e,a,d,i,s),n)_.__k=[];else if(u_(e,q(p=_.props.children)?p:[p],_,t,r,i&&u!=="foreignObject",o,l,o?o[0]:t.__k&&T(t,0),s,c),o!=null)for(p=o.length;p--;)o[p]!=null&&r_(o[p]);s||("value"in a&&(p=a.value)!==void 0&&(p!==e.value||u==="progress"&&!p||u==="option"&&p!==d.value)&&W(e,"value",p,d.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==e.checked&&W(e,"checked",p,d.checked,!1))}return e}function z(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){f.__e(r,t)}}function j(e,_,t){var r,i;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||z(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){f.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],_,t||typeof e.type!="function");t||e.__e==null||r_(e.__e),e.__=e.__e=e.__d=void 0}function D_(e,_,t){return this.constructor(e,t)}function f_(e,_,t){var r,i,o,l;f.__&&f.__(e,_),i=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],l=[],O(_,e=(!r&&t||_).__k=E_(U,null,[e]),i||D,D,_.ownerSVGElement!==void 0,!r&&t?[t]:i?null:_.firstChild?M.call(_.childNodes):null,o,!r&&t?t:i?i.__e:_.firstChild,r,l),s_(o,e,l)}M=o_.slice,f={__e:function(e,_,t,r){for(var i,o,l;_=_.__;)if((i=_.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},t_=0,x_=function(e){return e!=null&&e.constructor===void 0},V.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},t),this.props)),e&&E(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),Y(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Y(this))},V.prototype.render=U,P=[],n_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(e,_){return e.__v.__b-_.__v.__b},L.__r=0,C_=0;var J,y,G,a_,K=0,g_=[],I=[],p_=f.__b,h_=f.__r,d_=f.diffed,v_=f.__c,m_=f.unmount;function N_(e,_){f.__h&&f.__h(y,e,K||_),K=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:I}),t.__[e]}function b_(e){return K=1,T_(k_,e)}function T_(e,_,t){var r=N_(J++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):k_(void 0,_),function(s){var c=r.__N?r.__N[0]:r.__[0],m=r.t(c,s);c!==m&&(r.__N=[m,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var i=function(s,c,m){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(d){return d.__c});if(h.every(function(d){return!d.__N}))return!o||o.call(this,s,c,m);var n=!1;return h.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(n=!0)}}),!(!n&&r.__c.props===s)&&(!o||o.call(this,s,c,m))};y.u=!0;var o=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(s,c,m){if(this.__e){var h=o;o=void 0,i(s,c,m),o=h}l&&l.call(this,s,c,m)},y.shouldComponentUpdate=i}return r.__N||r.__}function U_(){for(var e;e=g_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(B),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(_){e.__H.__h=[],f.__e(_,e.__v)}}f.__b=function(e){y=null,p_&&p_(e)},f.__r=function(e){h_&&h_(e),J=0;var _=(y=e.__c).__H;_&&(G===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=I,t.__N=t.i=void 0})):(_.__h.forEach(B),_.__h.forEach(Q),_.__h=[],J=0)),G=y},f.diffed=function(e){d_&&d_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(g_.push(_)!==1&&a_===f.requestAnimationFrame||((a_=f.requestAnimationFrame)||A_)(U_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==I&&(t.__=t.__V),t.i=void 0,t.__V=I})),G=y=null},f.__c=function(e,_){_.some(function(t){try{t.__h.forEach(B),t.__h=t.__h.filter(function(r){return!r.__||Q(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],f.__e(r,t.__v)}}),v_&&v_(e,_)},f.unmount=function(e){m_&&m_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{B(r)}catch(i){_=i}}),t.__H=void 0,_&&f.__e(_,t.__v))};var y_=typeof requestAnimationFrame=="function";function A_(e){var _,t=function(){clearTimeout(r),y_&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);y_&&(_=requestAnimationFrame(t))}function B(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function Q(e){var _=y;e.__c=e.__(),y=_}function k_(e,_){return typeof _=="function"?_(e):_}var F_=0;function R(e,_,t,r,i,o){var l,s,c={};for(s in _)s=="ref"?l=_[s]:c[s]=_[s];var m={type:e,props:c,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--F_,__source:i,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(s in l)c[s]===void 0&&(c[s]=l[s]);return f.vnode&&f.vnode(m),m}function V_(){let[e,_]=b_(0);return R("button",{onClick:()=>_(e+1),children:["count: ",e]})}window.addEventListener("load",()=>{f_(R(V_,{}),document.body)});})();
