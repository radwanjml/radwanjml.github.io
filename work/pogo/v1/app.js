var vc="170";var rd=0,wl=1,od=2;var Uh=1,ad=2,Pn=3,ni=0,Fe=1,Ln=2,Qn=0,rs=1,El=2,Tl=3,Al=4,yc=5,yi=100,cd=101,ld=102,hd=103,ud=104,dd=200,Mc=201,fd=202,pd=203,ia=204,$s=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,Md=212,bd=213,Sd=214,sa=0,ra=1,oa=2,cs=3,aa=4,ca=5,la=6,ha=7,Nh=0,wd=1,Ed=2,ti=0,Td=1,Ad=2,Rd=3,Cd=4,Id=5,Pd=6,Ld=7;var Fh=300,ls=301,hs=302,ua=303,da=304,co=306,fa=1e3,Si=1001,pa=1002,fn=1003,Dd=1004;var gr=1005;var vn=1006,To=1007;var wi=1008;var Fn=1009,Oh=1010,Bh=1011,Zs=1012,bc=1013,On=1014,Dn=1015,er=1016,Sc=1017,wc=1018,us=1020,zh=35902,kh=1021,Vh=1022,dn=1023,Hh=1024,Gh=1025,ei=1026,ds=1027,Wh=1028,Ec=1029,Xh=1030,Tc=1031;var Ac=1033,kr=33776,Vr=33777,Hr=33778,Gr=33779,ma=35840,ga=35841,_a=35842,xa=35843,va=36196,ya=37492,Ma=37496,ba=37808,Sa=37809,wa=37810,Ea=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Na=37821,Wr=36492,Fa=36494,Oa=36495,qh=36283,Ba=36284,za=36285,ka=36286;var Xr=2300,Va=2301,Ao=2302,Rl=2400,Cl=2401,Il=2402;var Ud=3200,Nd=3201;var Rc=0,Fd=1,jn="",Qe="srgb",ys="srgb-linear",lo="linear",re="srgb";var Gi=7680;var Pl=519,Od=512,Bd=513,zd=514,Yh=515,kd=516,Vd=517,Hd=518,Gd=519,Ll=35044;var Dl="300 es",Un=2e3,qr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=1234567,Xs=Math.PI/180,Js=180/Math.PI;function Ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function Wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xd(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function qd(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function Yd(i,t=1){return t-Math.abs(Cc(i,t*2)-t)}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kd(i,t){return i+Math.random()*(t-i)}function jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(Ul=i);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tf(i){return i*Xs}function ef(i){return i*Js}function nf(i){return(i&i-1)===0&&i!==0}function sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function of(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var nn={DEG2RAD:Xs,RAD2DEG:Js,generateUUID:Ms,clamp:ke,euclideanModulo:Cc,mapLinear:Wd,inverseLerp:Xd,lerp:qs,damp:qd,pingpong:Yd,smoothstep:$d,smootherstep:Zd,randInt:Jd,randFloat:Kd,randFloatSpread:jd,seededRandom:Qd,degToRad:tf,radToDeg:ef,isPowerOfTwo:nf,ceilPowerOfTwo:sf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:of,normalize:Be,denormalize:is},qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],R=s[1],S=s[4],M=s[7],T=s[2],w=s[5],A=s[8];return r[0]=o*_+a*R+c*T,r[3]=o*m+a*S+c*w,r[6]=o*u+a*M+c*A,r[1]=l*_+h*R+d*T,r[4]=l*m+h*S+d*w,r[7]=l*u+h*M+d*A,r[2]=f*_+p*R+g*T,r[5]=f*m+p*S+g*w,r[8]=f*u+p*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Ot;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){let i=Yr("canvas");return i.style.display="block",i}var Nl={};function Gs(i){i in Nl||(Nl[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],Bl=[.3127,.329],zl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[ys]:{primaries:Fl,whitePoint:Bl,transfer:lo,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Fl,whitePoint:Bl,transfer:re,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});var Wi,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=Yr("canvas")),Wi.width=t.width,Wi.height=t.height;let n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uf=0,$r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Co(s[o].image)):r.push(Co(s[o]))}else r=Co(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var df=0,en=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=vn,o=wi,a=dn,c=Fn,l=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ms(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fa:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fa:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Fh;en.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,M=(p+1)/2,T=(u+1)/2,w=(h+f)/4,A=(d+_)/4,C=(g+m)/4;return S>M&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=C/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-_)/R,this.z=(f-h)/R,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==p||h!==g){let m=1-a,u=c*f+l*p+h*g+d*_,R=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let T=Math.sqrt(S),w=Math.atan2(T,u*R);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}let M=a*R;if(c=c*m+f*M,l=l*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*f,t[e+1]=c*g+h*f+l*d-a*p,t[e+2]=l*g+h*p+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new I,Vl=new yn,Mn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),xr.subVectors(this.max,Os),Xi.subVectors(t.a,Os),qi.subVectors(t.b,Os),Yi.subVectors(t.c,Os),qn.subVectors(qi,Xi),Yn.subVectors(Yi,qi),fi.subVectors(Xi,Yi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-fi.z,fi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,fi.z,0,-fi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-fi.y,fi.x,0];return!Po(e,Xi,qi,Yi,xr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Xi,qi,Yi,xr))?!1:(vr.crossVectors(qn,Yn),e=[vr.x,vr.y,vr.z],Po(e,Xi,qi,Yi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Tn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,_r=new Mn,Xi=new I,qi=new I,Yi=new I,qn=new I,Yn=new I,fi=new I,Os=new I,xr=new I,vr=new I,pi=new I;function Po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ff=new Mn,Bs=new I,Lo=new I,fs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Lo)),this.expandByPoint(Bs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new I,Do=new I,yr=new I,$n=new I,Uo=new I,Mr=new I,No=new I,Ks=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Do.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=$n.dot(this.direction),c=-$n.dot(yr),l=$n.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(yr,f),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){Uo.subVectors(e,t),Mr.subVectors(n,t),No.crossVectors(Uo,Mr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);let c=a*this.direction.dot(Mr.crossVectors($n,Mr));if(c<0)return null;let l=a*this.direction.dot(Uo.cross($n));if(l<0||c+l>o)return null;let h=-a*$n.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,g=l*h,_=l*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,g=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Zn.crossVectors(n,Xe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Zn.crossVectors(n,Xe)),Zn.normalize(),br.crossVectors(Xe,Zn),s[0]=Zn.x,s[4]=br.x,s[8]=Xe.x,s[1]=Zn.y,s[5]=br.y,s[9]=Xe.y,s[2]=Zn.z,s[6]=br.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],R=n[3],S=n[7],M=n[11],T=n[15],w=s[0],A=s[4],C=s[8],b=s[12],y=s[1],P=s[5],G=s[9],k=s[13],q=s[2],K=s[6],W=s[10],et=s[14],H=s[3],rt=s[7],dt=s[11],St=s[15];return r[0]=o*w+a*y+c*q+l*H,r[4]=o*A+a*P+c*K+l*rt,r[8]=o*C+a*G+c*W+l*dt,r[12]=o*b+a*k+c*et+l*St,r[1]=h*w+d*y+f*q+p*H,r[5]=h*A+d*P+f*K+p*rt,r[9]=h*C+d*G+f*W+p*dt,r[13]=h*b+d*k+f*et+p*St,r[2]=g*w+_*y+m*q+u*H,r[6]=g*A+_*P+m*K+u*rt,r[10]=g*C+_*G+m*W+u*dt,r[14]=g*b+_*k+m*et+u*St,r[3]=R*w+S*y+M*q+T*H,r[7]=R*A+S*P+M*K+T*rt,r[11]=R*C+S*G+M*W+T*dt,r[15]=R*b+S*k+M*et+T*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],R=d*m*l-_*f*l+_*c*p-a*m*p-d*c*u+a*f*u,S=g*f*l-h*m*l-g*c*p+o*m*p+h*c*u-o*f*u,M=h*_*l-g*d*l+g*a*p-o*_*p-h*a*u+o*d*u,T=g*d*c-h*_*c-g*a*f+o*_*f+h*a*m-o*d*m,w=e*R+n*S+s*M+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=R*A,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*u+n*c*u)*A,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*A,t[4]=S*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*A,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*A,t[8]=M*A,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*A,t[12]=T*A,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,R=c*l,S=c*h,M=c*d,T=n.x,w=n.y,A=n.z;return s[0]=(1-(_+u))*T,s[1]=(p+M)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+u))*w,s[6]=(m+R)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-R)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let l=1/r,h=1/o,d=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Un){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===Un)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*l,p=(n+s)*h,g,_;if(a===Un)g=(o+r)*d,_=-2*d;else if(a===qr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new I,hn=new ge,pf=new I(0,0,0),mf=new I(1,1,1),Zn=new I,br=new I,Xe=new I,Hl=new ge,Gl=new yn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gf=0,Wl=new I,Zi=new yn,Rn=new ge,Sr=new I,zs=new I,_f=new I,xf=new yn,Xl=new I(1,0,0),ql=new I(0,1,0),Yl=new I(0,0,1),$l={type:"added"},vf={type:"removed"},Ji={type:"childadded",child:null},Fo={type:"childremoved",child:null},$e=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new bn,n=new yn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(zs,Sr,this.up):Rn.lookAt(Sr,zs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};$e.DEFAULT_UP=new I(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new I,Cn=new I,Oo=new I,In=new I,Ki=new I,ji=new I,Zl=new I,Bo=new I,zo=new I,ko=new I,Vo=new oe,Ho=new oe,Go=new oe,Mi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Cn.subVectors(n,e),Oo.subVectors(t,e);let o=un.dot(un),a=un.dot(Cn),c=un.dot(Oo),l=Cn.dot(Cn),h=Cn.dot(Oo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vo.setScalar(0),Ho.setScalar(0),Go.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Go,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Cn.subVectors(t,e),un.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),ji.subVectors(r,n),Bo.subVectors(t,n);let c=Ki.dot(Bo),l=ji.dot(Bo);if(c<=0&&l<=0)return e.copy(n);zo.subVectors(t,s);let h=Ki.dot(zo),d=ji.dot(zo);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ki,o);ko.subVectors(t,r);let p=Ki.dot(ko),g=ji.dot(ko);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ji,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Zl.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Zl,a);let u=1/(m+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Cc(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(ke(Ne.r*255,0,255))*65536+Math.round(ke(Ne.g*255,0,255))*256+Math.round(ke(Ne.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Qe){te.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(wr);let n=qs(Jn.h,wr.h,e),s=qs(Jn.s,wr.s,e),r=qs(Jn.l,wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Wt;Wt.NAMES=Zh;var yf=0,Bn=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ms(),this.name="",this.blending=rs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=$s,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zn=class extends Bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new I,Er=new qt,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var Jr=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Kr=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mf=0,je=new ge,Xo=new $e,Qi=new I,qe=new Mn,ks=new Mn,Re=new I,Ee=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?Kr:Jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(qe.min,ks.min),qe.expandByPoint(Re),Re.addVectors(qe.max,ks.max),qe.expandByPoint(Re)):(qe.expandByPoint(ks.min),qe.expandByPoint(ks.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(t,l),Re.add(Qi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;let l=new I,h=new I,d=new I,f=new qt,p=new qt,g=new qt,_=new I,m=new I;function u(C,b,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[b].add(_),a[y].add(_),c[C].add(m),c[b].add(m),c[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,b=R.length;C<b;++C){let y=R[C],P=y.start,G=y.count;for(let k=P,q=P+G;k<q;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new I,M=new I,T=new I,w=new I;function A(C){T.fromBufferAttribute(s,C),w.copy(T);let b=a[C];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(w,b);let P=M.dot(c[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,b=R.length;C<b;++C){let y=R[C],P=y.start,G=y.count;for(let k=P,q=P+G;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new Me(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=new ge,mi=new Ks,Tr=new fs,Kl=new I,Ar=new I,Rr=new I,Cr=new I,qo=new I,Ir=new I,jl=new I,Pr=new I,Jt=class extends $e{constructor(t=new Ee,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(qo.fromBufferAttribute(d,t),o?Ir.addScaledVector(qo,h):Ir.addScaledVector(qo.sub(e),h))}e.add(Ir)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Tr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Tr,Kl)===null||mi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=R,T=S;M<T;M+=3){let w=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);s=Lr(this,u,t,n,l,h,d,w,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let R=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=Lr(this,o,t,n,l,h,d,R,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=R,T=S;M<T;M+=3){let w=M,A=M+1,C=M+2;s=Lr(this,u,t,n,l,h,d,w,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let R=m,S=m+1,M=m+2;s=Lr(this,o,t,n,l,h,d,R,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bf(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ni,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ar),i.getVertexPosition(c,Rr),i.getVertexPosition(l,Cr);let h=bf(i,t,e,n,Ar,Rr,Cr,jl);if(h){let d=new I;Mi.getBarycoord(jl,Ar,Rr,Cr,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,c,l,d,new qt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,c,l,d,new qt)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};Mi.getNormal(Ar,Rr,Cr,f.normal),h.face=f,h.barycoord=d}return h}var Ei=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function g(_,m,u,R,S,M,T,w,A,C,b){let y=M/A,P=T/C,G=M/2,k=T/2,q=w/2,K=A+1,W=C+1,et=0,H=0,rt=new I;for(let dt=0;dt<W;dt++){let St=dt*P-k;for(let Ht=0;Ht<K;Ht++){let ce=Ht*y-G;rt[_]=ce*R,rt[m]=St*S,rt[u]=q,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[u]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Ht/A),d.push(1-dt/C),et+=1}}for(let dt=0;dt<C;dt++)for(let St=0;St<A;St++){let Ht=f+St+K*dt,ce=f+St+K*(dt+1),Y=f+(St+1)+K*(dt+1),nt=f+(St+1)+K*dt;c.push(Ht,ce,nt),c.push(ce,Y,nt),H+=6}a.addGroup(p,H,b),p+=H,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=ps(i[e]);for(let s in n)t[s]=n[s]}return t}function Sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var wf={clone:ps,merge:ze},Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends Bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ms=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new I,Ql=new qt,th=new qt,Ie=class extends ms{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,th),e.subVectors(th,Ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,Xa=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new Ie(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new Ie(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new Ie(ts,es,t,e);a.layers=this.layers,this.add(a);let c=new Ie(ts,es,t,e);c.layers=this.layers,this.add(c);let l=new Ie(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jr=class extends en{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qa=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ei(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Qn});r.uniforms.tEquirect.value=e;let o=new Jt(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=vn),new Xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Yo=new I,Af=new I,Rf=new Ot,tn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yo.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new fs,Dr=new I,Qs=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],R=s[13],S=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-p,M-u).normalize(),n[1].setComponents(c+r,f+l,m+p,M+u).normalize(),n[2].setComponents(c+o,f+h,m+g,M+R).normalize(),n[3].setComponents(c-o,f-h,m-g,M-R).normalize(),n[4].setComponents(c-a,f-d,m-_,M-S).normalize(),e===Un)n[5].setComponents(c+a,f+d,m+_,M+S).normalize();else if(e===qr)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ti=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let R=u*f-o;for(let S=0;S<l;S++){let M=S*d-r;g.push(M,-R,0),_.push(0,0,1),m.push(S/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let R=0;R<a;R++){let S=R+l*u,M=R+l*(u+1),T=R+1+l*(u+1),w=R+1+l*u;p.push(S,M,w),p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:If,alphahash_pars_fragment:Pf,alphamap_fragment:Lf,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:zf,begin_vertex:kf,beginnormal_vertex:Vf,bsdfs:Hf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:jf,common:Qf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:op,colorspace_pars_fragment:ap,envmap_fragment:cp,envmap_common_pars_fragment:lp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:bp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:xp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:Sp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Ip,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:zp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Vp,morphinstance_vertex:Hp,morphcolor_vertex:Gp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:$p,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:cm,roughnessmap_fragment:lm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:xm,specularmap_fragment:vm,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Im,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Dm,cube_frag:Um,depth_vert:Nm,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Vm,linedashed_frag:Hm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:$m,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:jm,meshphysical_vert:Qm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:c0},it={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},xn={basic:{uniforms:ze([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ze([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ze([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ze([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ze([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ze([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ze([it.points,it.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ze([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ze([it.common,it.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ze([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ze([it.sprite,it.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ze([it.common,it.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ze([it.lights,it.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};xn.physical={uniforms:ze([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Ur={r:0,b:0,g:0},_i=new bn,l0=new ge;function h0(i,t,e,n,s,r,o){let a=new Wt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function g(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?e:t).get(S)),S}function _(R){let S=!1,M=g(R);M===null?u(a,c):M&&M.isColor&&(u(M,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,S){let M=g(S);M&&(M.isCubeTexture||M.mapping===co)?(h===void 0&&(h=new Jt(new Ei(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:ps(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(_i)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==re,(d!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Jt(new Ti(2,2),new Ze({name:"BackgroundMaterial",uniforms:ps(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function u(R,S){R.getRGB(Ur,Jh(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(R,S=1){a.set(R),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,u(a,c)},render:_,addToRenderList:m}}function u0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,P,G,k,q){let K=!1,W=d(k,G,P);r!==W&&(r=W,l(r.object)),K=p(y,k,G,q),K&&g(y,k,G,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(y,P,G,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,G){let k=G.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let W=K[k];return W===void 0&&(W=f(c()),K[k]=W),W}function f(y){let P=[],G=[],k=[];for(let q=0;q<e;q++)P[q]=0,G[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,G,k){let q=r.attributes,K=P.attributes,W=0,et=G.getAttributes();for(let H in et)if(et[H].location>=0){let dt=q[H],St=K[H];if(St===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(y,P,G,k){let q={},K=P.attributes,W=0,et=G.getAttributes();for(let H in et)if(et[H].location>=0){let dt=K[H];dt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));let St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),q[H]=St,W++}r.attributes=q,r.attributesNum=W,r.index=k}function _(){let y=r.newAttributes;for(let P=0,G=y.length;P<G;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){let G=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;G[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function R(){let y=r.newAttributes,P=r.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==y[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function S(y,P,G,k,q,K,W){W===!0?i.vertexAttribIPointer(y,P,G,q,K):i.vertexAttribPointer(y,P,G,k,q,K)}function M(y,P,G,k){_();let q=k.attributes,K=G.getAttributes(),W=P.defaultAttributeValues;for(let et in K){let H=K[et];if(H.location>=0){let rt=q[et];if(rt===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){let dt=rt.normalized,St=rt.itemSize,Ht=t.get(rt);if(Ht===void 0)continue;let ce=Ht.buffer,Y=Ht.type,nt=Ht.bytesPerElement,yt=Y===i.INT||Y===i.UNSIGNED_INT||rt.gpuType===bc;if(rt.isInterleavedBufferAttribute){let ot=rt.data,Ct=ot.stride,Ut=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)u(H.location+Gt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)m(H.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Gt=0;Gt<H.locationSize;Gt++)S(H.location+Gt,St/H.locationSize,Y,dt,Ct*nt,(Ut+St/H.locationSize*Gt)*nt,yt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)u(H.location+ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ot=0;ot<H.locationSize;ot++)S(H.location+ot,St/H.locationSize,Y,dt,St*nt,St/H.locationSize*ot*nt,yt)}}else if(W!==void 0){let dt=W[et];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(H.location,dt);break;case 3:i.vertexAttrib3fv(H.location,dt);break;case 4:i.vertexAttrib4fv(H.location,dt);break;default:i.vertexAttrib1fv(H.location,dt)}}}}R()}function T(){C();for(let y in n){let P=n[y];for(let G in P){let k=P[G];for(let q in k)h(k[q].object),delete k[q];delete P[G]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let G in P){let k=P[G];for(let q in k)h(k[q].object),delete k[q];delete P[G]}delete n[y.id]}function A(y){for(let P in n){let G=n[P];if(G[y.id]===void 0)continue;let k=G[y.id];for(let q in k)h(k[q].object),delete k[q];delete G[y.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function d0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function f0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Dn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:T,maxSamples:w}}function p0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new tn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let R=r?0:n,S=R*4,M=u.clippingState||null;c.value=M,M=h(g,f,S,p);for(let T=0;T!==S;++T)M[T]=e[T];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let u=p+_*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,M=p;S!==_;++S,M+=4)o.copy(d[S]).applyMatrix4(R,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function m0(i){let t=new WeakMap;function e(o,a){return a===ua?o.mapping=ls:a===da&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ua||a===da)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qa(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ya=class extends ms{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=4,eh=[.125,.215,.35,.446,.526,.582],bi=20,$o=new Ya,nh=new Wt,Zo=null,Jo=0,Ko=0,jo=!1,vi=(1+Math.sqrt(5))/2,ns=1/vi,ih=[new I(-vi,ns,0),new I(vi,ns,0),new I(-ns,0,vi),new I(ns,0,vi),new I(0,vi,-ns),new I(0,vi,ns),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Ko),this._renderer.xr.enabled=jo,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:er,format:dn,colorSpace:ys,depthBuffer:!1},s=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=_0(r,t,e)}return s}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nh),h.toneMapping=ti,h.autoClear=!1;let p=new zn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Jt(new Ei,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(nh),_=!0);for(let u=0;u<6;u++){let R=u%3;R===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):R===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let S=this._cubeSize;Nr(s,R*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(s-r-1)%ih.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Jt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let u=[],R=0;for(let A=0;A<bi;++A){let C=A/_,b=Math.exp(-C*C/2);u.push(b),A===0?R+=b:A<m&&(R+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let M=this._sizeLods[s],T=3*M*(s>S-ss?s-S+ss:0),w=4*(this._cubeSize-M);Nr(e,T,w,3*M,2*M),c.setRenderTarget(e),c.render(d,$o)}};function g0(i){let t=[],e=[],n=[],s=i,r=i-ss+1+eh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ss?c=eh[o-i+ss-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,R=new Float32Array(_*g*p),S=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,C=w>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];R.set(b,_*g*w),S.set(f,m*g*w);let y=[w,w,w,w,w,w];M.set(y,u*g*w)}let T=new Ee;T.setAttribute("position",new Me(R,_)),T.setAttribute("uv",new Me(S,m)),T.setAttribute("faceIndex",new Me(M,u)),t.push(T),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _0(i,t,e){let n=new Float32Array(bi),s=new I(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function rh(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function oh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ua||c===da,h=c===ls||c===hs;if(l||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new gs(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new gs(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function v0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let R=p.array;_=p.version;for(let S=0,M=R.length;S<M;S+=3){let T=R[S+0],w=R[S+1],A=R[S+2];f.push(T,w,w,A,A,T)}}else if(g!==void 0){let R=g.array;_=g.version;for(let S=0,M=R.length/3-1;S<M;S+=3){let T=S+0,w=S+1,A=S+2;f.push(T,w,w,A,A,T)}}else return;let m=new($h(f)?Kr:Jr)(f,1);m.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function M0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let u=0;for(let R=0;R<g;R++)u+=p[R]*_[R];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function b0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,t,e){let n=new WeakMap,s=new oe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*d),A=new Zr(w,M,T,d);A.type=Dn,A.needsUpdate=!0;let C=S*4;for(let y=0;y<d;y++){let P=m[y],G=u[y],k=R[y],q=M*T*4*y;for(let K=0;K<P.count;K++){let W=K*C;p===!0&&(s.fromBufferAttribute(P,K),w[q+W+0]=s.x,w[q+W+1]=s.y,w[q+W+2]=s.z,w[q+W+3]=0),g===!0&&(s.fromBufferAttribute(G,K),w[q+W+4]=s.x,w[q+W+5]=s.y,w[q+W+6]=s.z,w[q+W+7]=0),_===!0&&(s.fromBufferAttribute(k,K),w[q+W+8]=s.x,w[q+W+9]=s.y,w[q+W+10]=s.z,w[q+W+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new qt(M,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function w0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var _s=class extends en{constructor(t,e,n,s,r,o,a,c,l,h=ei){if(h!==ei&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=On),n===void 0&&h===ds&&(n=us),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jh=new en,ah=new _s(1,1),Qh=new Zr,tu=new Wa,eu=new jr,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function E0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Ae(e,n)}}function I0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Ae(e,n)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Ae(e,n)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ah.compareFunction=Yh,r=ah):r=jh,e.setTexture2D(t||r,s)}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tu,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eu,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function $0(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J0(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function K0(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function j0(i,t){i.uniform1iv(this.addr,t)}function Q0(i,t){i.uniform2iv(this.addr,t)}function tg(i,t){i.uniform3iv(this.addr,t)}function eg(i,t){i.uniform4iv(this.addr,t)}function ng(i,t){i.uniform1uiv(this.addr,t)}function ig(i,t){i.uniform2uiv(this.addr,t)}function sg(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function og(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jh,r[o])}function ag(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tu,r[o])}function cg(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||eu,r[o])}function lg(i,t,e){let n=this.cache,s=t.length,r=ho(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qh,r[o])}function hg(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}var $a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W0(e.type)}},Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}},Ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qo=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){let n=i.name,s=n.length;for(Qo.lastIndex=0;;){let r=Qo.exec(n),o=Qo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fh(e,l===void 0?new $a(a,i,t):new Za(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ja(a),fh(e,d)),e=d}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dg=37297,fg=0;function pg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var mh=new Ot;function mg(i){te._getMatrix(mh,te.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case lo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pg(i.getShaderSource(t),o)}else return s}function gg(i,t){let e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _g(i,t){let e;switch(t){case Td:e="Linear";break;case Ad:e="Reinhard";break;case Rd:e="Cineon";break;case Cd:e="ACESFilmic";break;case Pd:e="AgX";break;case Ld:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fr=new I;function xg(){te.getLuminanceCoefficients(Fr);let i=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function _h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(bg,wg)}var Sg=new Map;function wg(i,t){let e=kt[t];if(e===void 0){let n=Sg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}var Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(Eg,Tg)}function Tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ad?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nh:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ag(e),l=Rg(e),h=Cg(e),d=Ig(e),f=Pg(e),p=vg(e),g=yg(r),_=s.createProgram(),m,u,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),u.length>0&&(u+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),u=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?kt.tonemapping_pars_fragment:"",e.toneMapping!==ti?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Ka(o),o=_h(o,e),o=xh(o,e),a=Ka(a),a=_h(a,e),a=xh(a,e),o=vh(o),a=vh(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=R+m+o,M=R+u+a,T=ph(s,s.VERTEX_SHADER,S),w=ph(s,s.FRAGMENT_SHADER,M);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(T).trim(),q=s.getShaderInfoLog(w).trim(),K=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{let et=gh(s,T,"vertex"),H=gh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+et+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||q==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(T),s.deleteShader(w),C=new as(s,_),b=Mg(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,dg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var Dg=0,ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qa(t),e.set(t,n)),n}},Qa=class{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}};function Ug(i,t,e,n,s,r,o){let a=new js,c=new ja,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,G,k){let q=G.fog,K=k.geometry,W=b.isMeshStandardMaterial?G.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),H=et&&et.mapping===co?et.image.height:null,rt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=dt!==void 0?dt.length:0,Ht=0;K.morphAttributes.position!==void 0&&(Ht=1),K.morphAttributes.normal!==void 0&&(Ht=2),K.morphAttributes.color!==void 0&&(Ht=3);let ce,Y,nt,yt;if(rt){let se=xn[rt];ce=se.vertexShader,Y=se.fragmentShader}else ce=b.vertexShader,Y=b.fragmentShader,c.update(b),nt=c.getVertexShaderID(b),yt=c.getFragmentShaderID(b);let ot=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,Gt=k.isBatchedMesh===!0,xe=!!b.map,jt=!!b.matcap,Se=!!et,F=!!b.aoMap,Je=!!b.lightMap,Yt=!!b.bumpMap,$t=!!b.normalMap,Tt=!!b.displacementMap,de=!!b.emissiveMap,wt=!!b.metalnessMap,E=!!b.roughnessMap,x=b.anisotropy>0,O=b.clearcoat>0,$=b.dispersion>0,J=b.iridescence>0,X=b.sheen>0,Mt=b.transmission>0,at=x&&!!b.anisotropyMap,ft=O&&!!b.clearcoatMap,Qt=O&&!!b.clearcoatNormalMap,Q=O&&!!b.clearcoatRoughnessMap,pt=J&&!!b.iridescenceMap,Rt=J&&!!b.iridescenceThicknessMap,Pt=X&&!!b.sheenColorMap,mt=X&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,zt=!!b.specularColorMap,le=!!b.specularIntensityMap,D=Mt&&!!b.transmissionMap,st=Mt&&!!b.thicknessMap,V=!!b.gradientMap,Z=!!b.alphaMap,ht=b.alphaTest>0,ct=!!b.alphaHash,Nt=!!b.extensions,ye=ti;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ye=i.toneMapping);let De={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:ce,fragmentShader:Y,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ys,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:jt,envMap:Se,envMapMode:Se&&et.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Je,bumpMap:Yt,normalMap:$t,displacementMap:f&&Tt,emissiveMap:de,normalMapObjectSpace:$t&&b.normalMapType===Fd,normalMapTangentSpace:$t&&b.normalMapType===Rc,metalnessMap:wt,roughnessMap:E,anisotropy:x,anisotropyMap:at,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Qt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:X,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Zt,specularColorMap:zt,specularIntensityMap:le,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:V,opaque:b.transparent===!1&&b.blending===rs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:ct,combine:b.combine,mapUv:xe&&_(b.map.channel),aoMapUv:F&&_(b.aoMap.channel),lightMapUv:Je&&_(b.lightMap.channel),bumpMapUv:Yt&&_(b.bumpMap.channel),normalMapUv:$t&&_(b.normalMap.channel),displacementMapUv:Tt&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ft&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(b.sheenRoughnessMap.channel),specularMapUv:Zt&&_(b.specularMap.channel),specularColorMapUv:zt&&_(b.specularColorMap.channel),specularIntensityMapUv:le&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($t||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(xe||Z),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function u(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(R(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function R(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let y=g[b.type],P;if(y){let G=xn[y];P=wf.clone(G.uniforms)}else P=b.uniforms;return P}function T(b,y){let P;for(let G=0,k=h.length;G<k;G++){let q=h[G];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Lg(i,y,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function Ng(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){let u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,g,_,m){let u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Fg),n.length>1&&n.sort(f||Mh),s.length>1&&s.sort(f||Mh)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Og(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new bh,i.set(n,[o])):s>=r.length?(o=new bh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function zg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hg(i){let t=new Bg,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ge,o=new ge;function a(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,R=0,S=0,M=0,T=0,w=0,A=0;l.sort(Vg);for(let b=0,y=l.length;b<y;b++){let P=l[b],G=P.color,k=P.intensity,q=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*k,d+=G.g*k,f+=G.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],k);A++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let et=P.shadow,H=e.get(P);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,R++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(k),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;let et=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,et.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=et.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,M++}_++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(G).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let et=P.shadow,H=e.get(P);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=W,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==R||C.numPointShadows!==S||C.numSpotShadows!==M||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=R,C.numPointShadows=S,C.numSpotShadows=M,C.numSpotMaps=T,C.numLightProbes=A,n.version=kg++)}function c(l,h){let d=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let u=0,R=l.length;u<R;u++){let S=l[u];if(S.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Sh(i){let t=new Hg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Gg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var tc=class extends Bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ec=class extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qg(i,t,e){let n=new Qs,s=new qt,r=new qt,o=new oe,a=new tc({depthPacking:Nd}),c=new ec,l={},h=e.maxTextureSize,d={[ni]:Fe,[Fe]:ni,[Ln]:Ln},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let u=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Qn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=u!==Pn&&this.type===Pn,q=u===Pn&&this.type!==Pn;for(let K=0,W=w.length;K<W;K++){let et=w[K],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||k===!0||q===!0){let St=this.type!==Pn?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Ye(s.x,s.y,St),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let dt=H.getViewportCount();for(let St=0;St<dt;St++){let Ht=H.getViewport(St);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),G.viewport(o),H.updateMatrices(et,St),n=H.getFrustum(),M(A,C,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&R(H,C),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,P)};function R(w,A){let C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ye(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,_,null)}function S(w,A,C,b){let y=null,P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=y.uuid,k=A.uuid,q=l[G];q===void 0&&(q={},l[G]=q);let K=q[k];K===void 0&&(K=y.clone(),q[k]=K,A.addEventListener("dispose",T)),y=K}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Pn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let G=i.properties.get(y);G.light=C}return y}function M(w,A,C,b,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let k=t.update(w),q=w.material;if(Array.isArray(q)){let K=k.groups;for(let W=0,et=K.length;W<et;W++){let H=K[W],rt=q[H.materialIndex];if(rt&&rt.visible){let dt=S(w,rt,b,y);w.onBeforeShadow(i,w,A,C,k,dt,H),i.renderBufferDirect(C,null,k,dt,w,H),w.onAfterShadow(i,w,A,C,k,dt,H)}}}else if(q.visible){let K=S(w,q,b,y);w.onBeforeShadow(i,w,A,C,k,K,null),i.renderBufferDirect(C,null,k,K,w,null),w.onAfterShadow(i,w,A,C,k,K,null)}}let G=w.children;for(let k=0,q=G.length;k<q;k++)M(G[k],A,C,b,y)}function T(w){w.target.removeEventListener("dispose",T);for(let C in l){let b=l[C],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var Yg={[sa]:ra,[oa]:la,[aa]:ha,[cs]:ca,[ra]:sa,[la]:oa,[ha]:aa,[ca]:cs};function $g(i,t){function e(){let D=!1,st=new oe,V=null,Z=new oe(0,0,0,0);return{setMask:function(ht){V!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Nt,ye,De){De===!0&&(ht*=ye,ct*=ye,Nt*=ye),st.set(ht,ct,Nt,ye),Z.equals(st)===!1&&(i.clearColor(ht,ct,Nt,ye),Z.copy(st))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,V=null,Z=null,ht=null;return{setReversed:function(ct){if(st!==ct){let Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let ye=ht;ht=null,this.setClear(ye)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ct){V!==ct&&!D&&(i.depthMask(ct),V=ct)},setFunc:function(ct){if(st&&(ct=Yg[ct]),Z!==ct){switch(ct){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){D=!1,V=null,Z=null,ht=null,st=!1}}}function s(){let D=!1,st=null,V=null,Z=null,ht=null,ct=null,Nt=null,ye=null,De=null;return{setTest:function(se){D||(se?ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(se){st!==se&&!D&&(i.stencilMask(se),st=se)},setFunc:function(se,an,wn){(V!==se||Z!==an||ht!==wn)&&(i.stencilFunc(se,an,wn),V=se,Z=an,ht=wn)},setOp:function(se,an,wn){(ct!==se||Nt!==an||ye!==wn)&&(i.stencilOp(se,an,wn),ct=se,Nt=an,ye=wn)},setLocked:function(se){D=se},setClear:function(se){De!==se&&(i.clearStencil(se),De=se)},reset:function(){D=!1,st=null,V=null,Z=null,ht=null,ct=null,Nt=null,ye=null,De=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,R=null,S=null,M=null,T=null,w=null,A=new Wt(0,0,0),C=0,b=!1,y=null,P=null,G=null,k=null,q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=et>=2);let rt=null,dt={},St=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),ce=new oe().fromArray(St),Y=new oe().fromArray(Ht);function nt(D,st,V,Z){let ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<V;Nt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}let yt={};yt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(cs),Yt(!1),$t(wl),ot(i.CULL_FACE),F(Qn);function ot(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ut(D,st){return d[D]!==st?(i.bindFramebuffer(D,st),d[D]=st,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Gt(D,st){let V=p,Z=!1;if(D){V=f.get(st),V===void 0&&(V=[],f.set(st,V));let ht=D.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Nt=ht.length;ct<Nt;ct++)V[ct]=i.COLOR_ATTACHMENT0+ct;V.length=ht.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function xe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let jt={[yi]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};jt[hd]=i.MIN,jt[ud]=i.MAX;let Se={[dd]:i.ZERO,[Mc]:i.ONE,[fd]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,V,Z,ht,ct,Nt,ye,De,se){if(D===Qn){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),D!==yc){if(D!==m||se!==b){if((u!==yi||M!==yi)&&(i.blendEquation(i.FUNC_ADD),u=yi,M=yi),se)switch(D){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}R=null,S=null,T=null,w=null,A.set(0,0,0),C=0,m=D,b=se}return}ht=ht||st,ct=ct||V,Nt=Nt||Z,(st!==u||ht!==M)&&(i.blendEquationSeparate(jt[st],jt[ht]),u=st,M=ht),(V!==R||Z!==S||ct!==T||Nt!==w)&&(i.blendFuncSeparate(Se[V],Se[Z],Se[ct],Se[Nt]),R=V,S=Z,T=ct,w=Nt),(ye.equals(A)===!1||De!==C)&&(i.blendColor(ye.r,ye.g,ye.b,De),A.copy(ye),C=De),m=D,b=!1}function Je(D,st){D.side===Ln?Ct(i.CULL_FACE):ot(i.CULL_FACE);let V=D.side===Fe;st&&(V=!V),Yt(V),D.blending===rs&&D.transparent===!1?F(Qn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function $t(D){D!==rd?(ot(i.CULL_FACE),D!==P&&(D===wl?i.cullFace(i.BACK):D===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),P=D}function Tt(D){D!==G&&(W&&i.lineWidth(D),G=D)}function de(D,st,V){D?(ot(i.POLYGON_OFFSET_FILL),(k!==st||q!==V)&&(i.polygonOffset(st,V),k=st,q=V)):Ct(i.POLYGON_OFFSET_FILL)}function wt(D){D?ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+K-1),rt!==D&&(i.activeTexture(D),rt=D)}function x(D,st,V){V===void 0&&(rt===null?V=i.TEXTURE0+K-1:V=rt);let Z=dt[V];Z===void 0&&(Z={type:void 0,texture:void 0},dt[V]=Z),(Z.type!==D||Z.texture!==st)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(D,st||yt[D]),Z.type=D,Z.texture=st)}function O(){let D=dt[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){ce.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function mt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Zt(D,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let Z=V.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(st,D.name),V.set(D,Z))}function zt(D,st){let Z=l.get(st).get(D);c.get(st)!==Z&&(i.uniformBlockBinding(st,Z,D.__bindingPointIndex),c.set(st,Z))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,dt={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,R=null,S=null,M=null,T=null,w=null,A=new Wt(0,0,0),C=0,b=!1,y=null,P=null,G=null,k=null,q=null,ce.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:xe,setBlending:F,setMaterial:Je,setFlipSided:Yt,setCullFace:$t,setLineWidth:Tt,setPolygonOffset:de,setScissorTest:wt,activeTexture:E,bindTexture:x,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pt,texImage3D:Rt,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:Qt,texStorage3D:Q,texSubImage2D:X,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:le}}function wh(i,t,e,n){let s=Zg(n);switch(e){case kh:return i*t;case Hh:return i*t;case Gh:return i*t*2;case Wh:return i*t/s.components*s.byteLength;case Ec:return i*t/s.components*s.byteLength;case Xh:return i*t*2/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case Vh:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Ac:return i*t*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(t,8)/2;case va:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wr:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qh:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case Fn:case Oh:return{byteLength:1,components:1};case Zs:case Bh:case er:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case On:case bc:case Dn:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return p?new OffscreenCanvas(E,x):Yr("canvas")}function _(E,x,O){let $=1,J=wt(E);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor($*J.width),Mt=Math.floor($*J.height);d===void 0&&(d=g(X,Mt));let at=x?g(X,Mt):d;return at.width=X,at.height=Mt,at.getContext("2d").drawImage(E,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,x,O,$,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=x;if(x===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),x===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){let Mt=J?lo:te.getTransfer($);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Mt===re?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(E,x){let O;return E?x===null||x===On||x===us?O=i.DEPTH24_STENCIL8:x===Dn?O=i.DEPTH32F_STENCIL8:x===Zs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===us?O=i.DEPTH_COMPONENT24:x===Dn?O=i.DEPTH_COMPONENT32F:x===Zs&&(O=i.DEPTH_COMPONENT16),O}function T(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==fn&&E.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){let x=E.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&h.delete(x)}function A(E){let x=E.target;x.removeEventListener("dispose",A),y(x)}function C(E){let x=n.get(E);if(x.__webglInit===void 0)return;let O=E.source,$=f.get(O);if($){let J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(E),Object.keys($).length===0&&f.delete(O)}n.remove(E)}function b(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let O=E.source,$=f.get(O);delete $[x.__cacheKey],o.memory.textures--}function y(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[$][J]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=E.textures;for(let $=0,J=O.length;$<J;$++){let X=n.get(O[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(E)}let P=0;function G(){P=0}function k(){let E=P;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),P+=1,E}function q(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){let O=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function W(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function et(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function H(E,x){let O=n.get(E);if(E.version>0&&O.__version!==E.version){nt(O,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let rt={[fa]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},dt={[fn]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},St={[Od]:i.NEVER,[Gd]:i.ALWAYS,[Bd]:i.LESS,[Yh]:i.LEQUAL,[zd]:i.EQUAL,[Hd]:i.GEQUAL,[kd]:i.GREATER,[Vd]:i.NOTEQUAL};function Ht(E,x){if(x.type===Dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===To||x.magFilter===gr||x.magFilter===wi||x.minFilter===vn||x.minFilter===To||x.minFilter===gr||x.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==gr&&x.minFilter!==wi||x.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ce(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));let $=x.source,J=f.get($);J===void 0&&(J={},f.set($,J));let X=q(x);if(X!==E.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[X].usedTimes++;let Mt=J[E.__cacheKey];Mt!==void 0&&(J[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(x)),E.__cacheKey=X,E.__webglTexture=J[X].texture}return O}function Y(E,x,O){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let J=ce(E,x),X=x.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);let Mt=n.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let at=te.getPrimaries(te.workingColorSpace),ft=x.colorSpace===jn?null:te.getPrimaries(x.colorSpace),Qt=x.colorSpace===jn||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Q=_(x.image,!1,s.maxTextureSize);Q=de(x,Q);let pt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),Pt=S(x.internalFormat,pt,Rt,x.colorSpace,x.isVideoTexture);Ht($,x);let mt,Zt=x.mipmaps,zt=x.isVideoTexture!==!0,le=Mt.__version===void 0||J===!0,D=X.dataReady,st=T(x,Q);if(x.isDepthTexture)Pt=M(x.format===ds,x.type),le&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Pt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,Rt,null));else if(x.isDataTexture)if(Zt.length>0){zt&&le&&e.texStorage2D(i.TEXTURE_2D,st,Pt,Zt[0].width,Zt[0].height);for(let V=0,Z=Zt.length;V<Z;V++)mt=Zt[V],zt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,V,Pt,mt.width,mt.height,0,pt,Rt,mt.data);x.generateMipmaps=!1}else zt?(le&&e.texStorage2D(i.TEXTURE_2D,st,Pt,Q.width,Q.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Rt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,Q.width,Q.height,0,pt,Rt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Pt,Zt[0].width,Zt[0].height,Q.depth);for(let V=0,Z=Zt.length;V<Z;V++)if(mt=Zt[V],x.format!==dn)if(pt!==null)if(zt){if(D)if(x.layerUpdates.size>0){let ht=wh(mt.width,mt.height,x.format,x.type);for(let ct of x.layerUpdates){let Nt=mt.data.subarray(ct*ht/mt.data.BYTES_PER_ELEMENT,(ct+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ct,mt.width,mt.height,1,pt,Nt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Pt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,Q.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Pt,mt.width,mt.height,Q.depth,0,pt,Rt,mt.data)}else{zt&&le&&e.texStorage2D(i.TEXTURE_2D,st,Pt,Zt[0].width,Zt[0].height);for(let V=0,Z=Zt.length;V<Z;V++)mt=Zt[V],x.format!==dn?pt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,V,Pt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(x.isDataArrayTexture)if(zt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Pt,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){let V=wh(Q.width,Q.height,x.format,x.type);for(let Z of x.layerUpdates){let ht=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,Rt,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Rt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,Q.width,Q.height,Q.depth,0,pt,Rt,Q.data);else if(x.isData3DTexture)zt?(le&&e.texStorage3D(i.TEXTURE_3D,st,Pt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,Q.width,Q.height,Q.depth,0,pt,Rt,Q.data);else if(x.isFramebufferTexture){if(le)if(zt)e.texStorage2D(i.TEXTURE_2D,st,Pt,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Pt,V,Z,0,pt,Rt,null),V>>=1,Z>>=1}}else if(Zt.length>0){if(zt&&le){let V=wt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,st,Pt,V.width,V.height)}for(let V=0,Z=Zt.length;V<Z;V++)mt=Zt[V],zt?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,V,Pt,pt,Rt,mt);x.generateMipmaps=!1}else if(zt){if(le){let V=wt(Q);e.texStorage2D(i.TEXTURE_2D,st,Pt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Pt,pt,Rt,Q);m(x)&&u($),Mt.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function nt(E,x,O){if(x.image.length!==6)return;let $=ce(E,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let X=n.get(J);if(J.version!==X.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let Mt=te.getPrimaries(te.workingColorSpace),at=x.colorSpace===jn?null:te.getPrimaries(x.colorSpace),ft=x.colorSpace===jn||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Qt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Qt&&!Q?pt[Z]=_(x.image[Z],!0,s.maxCubemapSize):pt[Z]=Q?x.image[Z].image:x.image[Z],pt[Z]=de(x,pt[Z]);let Rt=pt[0],Pt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),Zt=S(x.internalFormat,Pt,mt,x.colorSpace),zt=x.isVideoTexture!==!0,le=X.__version===void 0||$===!0,D=J.dataReady,st=T(x,Rt);Ht(i.TEXTURE_CUBE_MAP,x);let V;if(Qt){zt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Zt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){V=pt[Z].mipmaps;for(let ht=0;ht<V.length;ht++){let ct=V[ht];x.format!==dn?Pt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Zt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,ct.width,ct.height,Pt,mt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Zt,ct.width,ct.height,0,Pt,mt,ct.data)}}}else{if(V=x.mipmaps,zt&&le){V.length>0&&st++;let Z=wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Pt,mt,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,pt[Z].width,pt[Z].height,0,Pt,mt,pt[Z].data);for(let ht=0;ht<V.length;ht++){let Nt=V[ht].image[Z].image;zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Nt.width,Nt.height,Pt,mt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Zt,Nt.width,Nt.height,0,Pt,mt,Nt.data)}}else{zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pt,mt,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Pt,mt,pt[Z]);for(let ht=0;ht<V.length;ht++){let ct=V[ht];zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Pt,mt,ct.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Zt,Pt,mt,ct.image[Z])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function yt(E,x,O,$,J,X){let Mt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ft=S(O.internalFormat,Mt,at,O.colorSpace),Qt=n.get(x),Q=n.get(O);if(Q.__renderTarget=x,!Qt.__hasExternalTextures){let pt=Math.max(1,x.width>>X),Rt=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,ft,pt,Rt,x.depth,0,Mt,at,null):e.texImage2D(J,X,ft,pt,Rt,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,Q.__webglTexture,0,Yt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,Q.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(E,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=M(x.stencilBuffer,J),Mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Yt(x);$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,X,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,E)}else{let $=x.textures;for(let J=0;J<$.length;J++){let X=$[J],Mt=r.convert(X.format,X.colorSpace),at=r.convert(X.type),ft=S(X.internalFormat,Mt,at,X.colorSpace),Qt=Yt(x);O&&$t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,ft,x.width,x.height):$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let J=$.__webglTexture,X=Yt(x);if(x.depthTexture.format===ei)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===ds)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ut(E){let x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),ot(x.__webglDepthbuffer[$],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ot(x.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(E,x,O){let $=n.get(E);x!==void 0&&yt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ut(E)}function xe(E){let x=E.texture,O=n.get(E),$=n.get(x);E.addEventListener("dispose",A);let J=E.textures,X=E.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ft=0;ft<x.mipmaps.length;ft++)O.__webglFramebuffer[at][ft]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,ft=J.length;at<ft;at++){let Qt=n.get(J[at]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&$t(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){let ft=J[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);let Qt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),pt=S(ft.internalFormat,Qt,Q,ft.colorSpace,E.isXRRenderTarget===!0),Rt=Yt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)yt(O.__webglFramebuffer[at][ft],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else yt(O.__webglFramebuffer[at],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ft=J.length;at<ft;at++){let Qt=J[at],Q=n.get(Qt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ht(i.TEXTURE_2D,Qt),yt(O.__webglFramebuffer,E,Qt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Qt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ht(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)yt(O.__webglFramebuffer[ft],E,x,i.COLOR_ATTACHMENT0,at,ft);else yt(O.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,at,0);m(x)&&u(at),e.unbindTexture()}E.depthBuffer&&Ut(E)}function jt(E){let x=E.textures;for(let O=0,$=x.length;O<$;O++){let J=x[O];if(m(J)){let X=R(E),Mt=n.get(J).__webglTexture;e.bindTexture(X,Mt),u(X),e.unbindTexture()}}}let Se=[],F=[];function Je(E){if(E.samples>0){if($t(E)===!1){let x=E.textures,O=E.width,$=E.height,J=i.COLOR_BUFFER_BIT,X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(E),at=x.length>1;if(at)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Qt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,J,i.NEAREST),c===!0&&(Se.length=0,F.length=0,Se.push(i.COLOR_ATTACHMENT0+ft),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Se.push(X),F.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Qt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Yt(E){return Math.min(s.maxSamples,E.samples)}function $t(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function de(E,x){let O=E.colorSpace,$=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ys&&O!==jn&&(te.getTransfer(O)===re?($!==dn||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$t}function Kg(i,t){function e(n,s=jn){let r,o=te.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===dn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Gh)return i.LUMINANCE_ALPHA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Hr||n===Gr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===ya)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Ba||n===za||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},He=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:Qg,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null,_=new ic,m=e.getContextAttributes(),u=null,R=null,S=[],M=[],T=new qt,w=null,A=new Ie;A.viewport=new oe;let C=new Ie;C.viewport=new oe;let b=[A,C],y=new nc,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=S[Y];return nt===void 0&&(nt=new Ys,S[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=S[Y];return nt===void 0&&(nt=new Ys,S[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=S[Y];return nt===void 0&&(nt=new Ys,S[Y]=nt),nt.getHandSpace()};function k(Y){let nt=M.indexOf(Y.inputSource);if(nt===-1)return;let yt=S[nt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,l||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){let nt=M[Y];nt!==null&&(M[Y]=null,S[Y].disconnect(nt))}P=null,G=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,R=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ye(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,yt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ds:ei,yt=m.stencil?us:On);let Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new Ye(f.textureWidth,f.textureHeight,{format:dn,type:Fn,depthTexture:new _s(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let nt=0;nt<Y.removed.length;nt++){let yt=Y.removed[nt],ot=M.indexOf(yt);ot>=0&&(M[ot]=null,S[ot].disconnect(yt))}for(let nt=0;nt<Y.added.length;nt++){let yt=Y.added[nt],ot=M.indexOf(yt);if(ot===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=M.length){M.push(yt),ot=Ut;break}else if(M[Ut]===null){M[Ut]=yt,ot=Ut;break}if(ot===-1)break}let Ct=S[ot];Ct&&Ct.connect(yt)}}let W=new I,et=new I;function H(Y,nt,yt){W.setFromMatrixPosition(nt.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);let ot=W.distanceTo(et),Ct=nt.projectionMatrix.elements,Ut=yt.projectionMatrix.elements,Gt=Ct[14]/(Ct[10]-1),xe=Ct[14]/(Ct[10]+1),jt=(Ct[9]+1)/Ct[5],Se=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],Je=(Ut[8]+1)/Ut[0],Yt=Gt*F,$t=Gt*Je,Tt=ot/(-F+Je),de=Tt*-F;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let wt=Gt+Tt,E=xe+Tt,x=Yt-de,O=$t+(ot-de),$=jt*xe/E*wt,J=Se*xe/E*wt;Y.projectionMatrix.makePerspective(x,O,$,J,wt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,yt=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=C.near=A.near=nt,y.far=C.far=A.far=yt,(P!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,G=y.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;let ot=Y.parent,Ct=y.cameras;rt(y,ot);for(let Ut=0;Ut<Ct.length;Ut++)rt(Ct[Ut],ot);Ct.length===2?H(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),dt(Y,y,ot)};function dt(Y,nt,yt){yt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let St=null;function Ht(Y,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let ot=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Ut=0;Ut<yt.length;Ut++){let Gt=yt[Ut],xe=null;if(p!==null)xe=p.getViewport(Gt);else{let Se=d.getViewSubImage(f,Gt);xe=Se.viewport,Ut===0&&(t.setRenderTargetTextures(R,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(R))}let jt=b[Ut];jt===void 0&&(jt=new Ie,jt.layers.enable(Ut),jt.viewport=new oe,b[Ut]=jt),jt.matrix.fromArray(Gt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Gt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(y.matrix.copy(jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(jt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Ut=d.getDepthInformation(yt[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,s.renderState)}}for(let yt=0;yt<S.length;yt++){let ot=M[yt],Ct=S[yt];ot!==null&&Ct!==void 0&&Ct.update(ot,nt,l||o)}St&&St(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let ce=new Kh;ce.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},xi=new bn,e_=new ge;function n_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Jh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,R,S,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,R,S):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Fe&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Fe&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let R=t.get(u),S=R.envMap,M=R.envMapRotation;S&&(m.envMap.value=S,xi.copy(M),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(xi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,R,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*R,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,R){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Fe&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let R=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,S){let M=S.program;n.uniformBlockBinding(R,M)}function l(R,S){let M=s[R.id];M===void 0&&(g(R),M=h(R),s[R.id]=M,R.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(R,T);let w=t.render.frame;r[R.id]!==w&&(f(R),r[R.id]=w)}function h(R){let S=d();R.__bindingPointIndex=S;let M=i.createBuffer(),T=R.__size,w=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let S=s[R.id],M=R.uniforms,T=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=M.length;w<A;w++){let C=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,y=C.length;b<y;b++){let P=C[b];if(p(P,w,b,T)===!0){let G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],q=0;for(let K=0;K<k.length;K++){let W=k[K],et=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,S,M,T){let w=R.value,A=S+"_"+M;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(R){let S=R.uniforms,M=0,T=16;for(let A=0,C=S.length;A<C;A++){let b=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,P=b.length;y<P;y++){let G=b[y],k=Array.isArray(G.value)?G.value:[G.value];for(let q=0,K=k.length;q<K;q++){let W=k[q],et=_(W),H=M%T,rt=H%et.boundary,dt=H+rt;M+=rt,dt!==0&&T-dt<et.storage&&(M+=T-dt),G.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=et.storage}}}let w=M%T;return w>0&&(M+=T-w),R.__size=M,R.__cache={},this}function _(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function m(R){let S=R.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Qr=class{constructor(t={}){let{canvas:e=af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,R=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=ti,this.toneMappingExposure=1;let M=this,T=!1,w=0,A=0,C=null,b=-1,y=null,P=new oe,G=new oe,k=null,q=new Wt(0),K=0,W=e.width,et=e.height,H=1,rt=null,dt=null,St=new oe(0,0,W,et),Ht=new oe(0,0,W,et),ce=!1,Y=new Qs,nt=!1,yt=!1,ot=new ge,Ct=new ge,Ut=new I,Gt=new oe,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Se(){return C===null?H:1}let F=n;function Je(v,U){return e.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){let U="webgl2";if(F=Je(U,v),F===null)throw Je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Yt,$t,Tt,de,wt,E,x,O,$,J,X,Mt,at,ft,Qt,Q,pt,Rt,Pt,mt,Zt,zt,le,D;function st(){Yt=new v0(F),Yt.init(),zt=new Kg(F,Yt),$t=new f0(F,Yt,t,zt),Tt=new $g(F,Yt),$t.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),de=new b0(F),wt=new Ng,E=new Jg(F,Yt,Tt,wt,$t,zt,de),x=new m0(M),O=new x0(M),$=new Cf(F),le=new u0(F,$),J=new y0(F,$,de,le),X=new w0(F,J,$,de),Pt=new S0(F,$t,E),Q=new p0(wt),Mt=new Ug(M,x,O,Yt,$t,le,Q),at=new n_(M,wt),ft=new Og,Qt=new Gg(Yt),Rt=new h0(M,x,O,Tt,X,p,c),pt=new qg(M,X,$t),D=new i_(F,de,$t,Tt),mt=new d0(F,Yt,de),Zt=new M0(F,Yt,de),de.programs=Mt.programs,M.capabilities=$t,M.extensions=Yt,M.properties=wt,M.renderLists=ft,M.shadowMap=pt,M.state=Tt,M.info=de}st();let V=new sc(M,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=Yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,et,!1))},this.getSize=function(v){return v.set(W,et)},this.setSize=function(v,U,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,et=U,e.width=Math.floor(v*H),e.height=Math.floor(U*H),B===!0&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(W*H,et*H).floor()},this.setDrawingBufferSize=function(v,U,B){W=v,et=U,H=B,e.width=Math.floor(v*B),e.height=Math.floor(U*B),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,U,B,z){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,U,B,z),Tt.viewport(P.copy(St).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Ht)},this.setScissor=function(v,U,B,z){v.isVector4?Ht.set(v.x,v.y,v.z,v.w):Ht.set(v,U,B,z),Tt.scissor(G.copy(Ht).multiplyScalar(H).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(v){Tt.setScissorTest(ce=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){dt=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(v=!0,U=!0,B=!0){let z=0;if(v){let N=!1;if(C!==null){let tt=C.texture.format;N=tt===Ac||tt===Tc||tt===Ec}if(N){let tt=C.texture.type,lt=tt===Fn||tt===On||tt===Zs||tt===us||tt===Sc||tt===wc,_t=Rt.getClearColor(),xt=Rt.getClearAlpha(),Dt=_t.r,Ft=_t.g,vt=_t.b;lt?(g[0]=Dt,g[1]=Ft,g[2]=vt,g[3]=xt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=vt,_[3]=xt,F.clearBufferiv(F.COLOR,0,_))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT),B&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Qt.dispose(),wt.dispose(),x.dispose(),O.dispose(),X.dispose(),le.dispose(),D.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",gl),V.removeEventListener("sessionend",_l),di.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let v=de.autoReset,U=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,N=pt.type;st(),de.autoReset=v,pt.enabled=U,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=N}function ct(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nt(v){let U=v.target;U.removeEventListener("dispose",Nt),ye(U)}function ye(v){De(v),wt.remove(v)}function De(v){let U=wt.get(v).programs;U!==void 0&&(U.forEach(function(B){Mt.releaseProgram(B)}),v.isShaderMaterial&&Mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,B,z,N,tt){U===null&&(U=xe);let lt=N.isMesh&&N.matrixWorld.determinant()<0,_t=nd(v,U,B,z,N);Tt.setMaterial(z,lt);let xt=B.index,Dt=1;if(z.wireframe===!0){if(xt=J.getWireframeAttribute(B),xt===void 0)return;Dt=2}let Ft=B.drawRange,vt=B.attributes.position,ee=Ft.start*Dt,he=(Ft.start+Ft.count)*Dt;tt!==null&&(ee=Math.max(ee,tt.start*Dt),he=Math.min(he,(tt.start+tt.count)*Dt)),xt!==null?(ee=Math.max(ee,0),he=Math.min(he,xt.count)):vt!=null&&(ee=Math.max(ee,0),he=Math.min(he,vt.count));let fe=he-ee;if(fe<0||fe===1/0)return;le.setup(N,z,_t,B,xt);let Ve,ne=mt;if(xt!==null&&(Ve=$.get(xt),ne=Zt,ne.setIndex(Ve)),N.isMesh)z.wireframe===!0?(Tt.setLineWidth(z.wireframeLinewidth*Se()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(N.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*Se()),N.isLineSegments?ne.setMode(F.LINES):N.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else N.isPoints?ne.setMode(F.POINTS):N.isSprite&&ne.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let bt=N._multiDrawStarts,En=N._multiDrawCounts,ie=N._multiDrawCount,cn=xt?$.get(xt).bytesPerElement:1,Hi=wt.get(z).currentProgram.getUniforms();for(let We=0;We<ie;We++)Hi.setValue(F,"_gl_DrawID",We),ne.render(bt[We]/cn,En[We])}else if(N.isInstancedMesh)ne.renderInstances(ee,fe,N.count);else if(B.isInstancedBufferGeometry){let bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,En=Math.min(B.instanceCount,bt);ne.renderInstances(ee,fe,En)}else ne.render(ee,fe)};function se(v,U,B){v.transparent===!0&&v.side===Ln&&v.forceSinglePass===!1?(v.side=Fe,v.needsUpdate=!0,mr(v,U,B),v.side=ni,v.needsUpdate=!0,mr(v,U,B),v.side=Ln):mr(v,U,B)}this.compile=function(v,U,B=null){B===null&&(B=v),u=Qt.get(B),u.init(U),S.push(u),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),v!==B&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let z=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let _t=tt[lt];se(_t,B,N),z.add(_t)}else se(tt,B,N),z.add(tt)}),S.pop(),u=null,z},this.compileAsync=function(v,U,B=null){let z=this.compile(v,U,B);return new Promise(N=>{function tt(){if(z.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){N(v);return}setTimeout(tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let an=null;function wn(v){an&&an(v)}function gl(){di.stop()}function _l(){di.start()}let di=new Kh;di.setAnimationLoop(wn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(v){an=v,V.setAnimationLoop(v),v===null?di.stop():di.start()},V.addEventListener("sessionstart",gl),V.addEventListener("sessionend",_l),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,C),u=Qt.get(v,S.length),u.init(U),S.push(u),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,yt),m=ft.get(v,R.length),m.init(),R.push(m),V.enabled===!0&&V.isPresenting===!0){let tt=M.xr.getDepthSensingMesh();tt!==null&&Eo(tt,U,-1/0,M.sortObjects)}Eo(v,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,dt),jt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,jt&&Rt.addToRenderList(m,v),this.info.render.frame++,nt===!0&&Q.beginShadows();let B=u.state.shadowsArray;pt.render(B,v,U),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){let tt=U.cameras;if(N.length>0)for(let lt=0,_t=tt.length;lt<_t;lt++){let xt=tt[lt];vl(z,N,v,xt)}jt&&Rt.render(v);for(let lt=0,_t=tt.length;lt<_t;lt++){let xt=tt[lt];xl(m,v,xt,xt.viewport)}}else N.length>0&&vl(z,N,v,U),jt&&Rt.render(v),xl(m,v,U);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),v.isScene===!0&&v.onAfterRender(M,v,U),le.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(u=S[S.length-1],nt===!0&&Q.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Eo(v,U,B,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Y.intersectsSprite(v)){z&&Gt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ct);let lt=X.update(v),_t=v.material;_t.visible&&m.push(v,lt,_t,B,Gt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Y.intersectsObject(v))){let lt=X.update(v),_t=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Gt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Gt.copy(lt.boundingSphere.center)),Gt.applyMatrix4(v.matrixWorld).applyMatrix4(Ct)),Array.isArray(_t)){let xt=lt.groups;for(let Dt=0,Ft=xt.length;Dt<Ft;Dt++){let vt=xt[Dt],ee=_t[vt.materialIndex];ee&&ee.visible&&m.push(v,lt,ee,B,Gt.z,vt)}}else _t.visible&&m.push(v,lt,_t,B,Gt.z,null)}}let tt=v.children;for(let lt=0,_t=tt.length;lt<_t;lt++)Eo(tt[lt],U,B,z)}function xl(v,U,B,z){let N=v.opaque,tt=v.transmissive,lt=v.transparent;u.setupLightsView(B),nt===!0&&Q.setGlobalState(M.clippingPlanes,B),z&&Tt.viewport(P.copy(z)),N.length>0&&pr(N,U,B),tt.length>0&&pr(tt,U,B),lt.length>0&&pr(lt,U,B),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function vl(v,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Ye(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?er:Fn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let tt=u.state.transmissionRenderTarget[z.id],lt=z.viewport||P;tt.setSize(lt.z,lt.w);let _t=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(q),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),jt&&Rt.render(B);let xt=M.toneMapping;M.toneMapping=ti;let Dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),nt===!0&&Q.setGlobalState(M.clippingPlanes,z),pr(v,B,z),E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let vt=0,ee=U.length;vt<ee;vt++){let he=U[vt],fe=he.object,Ve=he.geometry,ne=he.material,bt=he.group;if(ne.side===Ln&&fe.layers.test(z.layers)){let En=ne.side;ne.side=Fe,ne.needsUpdate=!0,yl(fe,B,z,Ve,ne,bt),ne.side=En,ne.needsUpdate=!0,Ft=!0}}Ft===!0&&(E.updateMultisampleRenderTarget(tt),E.updateRenderTargetMipmap(tt))}M.setRenderTarget(_t),M.setClearColor(q,K),Dt!==void 0&&(z.viewport=Dt),M.toneMapping=xt}function pr(v,U,B){let z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=v.length;N<tt;N++){let lt=v[N],_t=lt.object,xt=lt.geometry,Dt=z===null?lt.material:z,Ft=lt.group;_t.layers.test(B.layers)&&yl(_t,U,B,xt,Dt,Ft)}}function yl(v,U,B,z,N,tt){v.onBeforeRender(M,U,B,z,N,tt),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(M,U,B,z,v,tt),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,M.renderBufferDirect(B,U,z,N,v,tt),N.side=ni,N.needsUpdate=!0,M.renderBufferDirect(B,U,z,N,v,tt),N.side=Ln):M.renderBufferDirect(B,U,z,N,v,tt),v.onAfterRender(M,U,B,z,N,tt)}function mr(v,U,B){U.isScene!==!0&&(U=xe);let z=wt.get(v),N=u.state.lights,tt=u.state.shadowsArray,lt=N.state.version,_t=Mt.getParameters(v,N.state,tt,U,B),xt=Mt.getProgramCacheKey(_t),Dt=z.programs;z.environment=v.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(v.isMeshStandardMaterial?O:x).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",Nt),Dt=new Map,z.programs=Dt);let Ft=Dt.get(xt);if(Ft!==void 0){if(z.currentProgram===Ft&&z.lightsStateVersion===lt)return bl(v,_t),Ft}else _t.uniforms=Mt.getUniforms(v),v.onBeforeCompile(_t,M),Ft=Mt.acquireProgram(_t,xt),Dt.set(xt,Ft),z.uniforms=_t.uniforms;let vt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=Q.uniform),bl(v,_t),z.needsLights=sd(v),z.lightsStateVersion=lt,z.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.directionalShadowMap.value=N.state.directionalShadowMap,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotShadowMap.value=N.state.spotShadowMap,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMap.value=N.state.pointShadowMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ft,z.uniformsList=null,Ft}function Ml(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=as.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function bl(v,U){let B=wt.get(v);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function nd(v,U,B,z,N){U.isScene!==!0&&(U=xe),E.resetTextureUnits();let tt=U.fog,lt=z.isMeshStandardMaterial?U.environment:null,_t=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ys,xt=(z.isMeshStandardMaterial?O:x).get(z.envMap||lt),Dt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),vt=!!B.morphAttributes.position,ee=!!B.morphAttributes.normal,he=!!B.morphAttributes.color,fe=ti;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=M.toneMapping);let Ve=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Ve!==void 0?Ve.length:0,bt=wt.get(z),En=u.state.lights;if(nt===!0&&(yt===!0||v!==y)){let Ke=v===y&&z.id===b;Q.setState(z,v,Ke)}let ie=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==En.state.version||bt.outputColorSpace!==_t||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==xt||z.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==vt||bt.morphNormals!==ee||bt.morphColors!==he||bt.toneMapping!==fe||bt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,bt.__version=z.version);let cn=bt.currentProgram;ie===!0&&(cn=mr(z,U,N));let Hi=!1,We=!1,Ns=!1,pe=cn.getUniforms(),_n=bt.uniforms;if(Tt.useProgram(cn.program)&&(Hi=!0,We=!0,Ns=!0),z.id!==b&&(b=z.id,We=!0),Hi||y!==v){Tt.buffers.depth.getReversed()?(ot.copy(v.projectionMatrix),lf(ot),hf(ot),pe.setValue(F,"projectionMatrix",ot)):pe.setValue(F,"projectionMatrix",v.projectionMatrix),pe.setValue(F,"viewMatrix",v.matrixWorldInverse);let Wn=pe.map.cameraPosition;Wn!==void 0&&Wn.setValue(F,Ut.setFromMatrixPosition(v.matrixWorld)),$t.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pe.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,We=!0,Ns=!0)}if(N.isSkinnedMesh){pe.setOptional(F,N,"bindMatrix"),pe.setOptional(F,N,"bindMatrixInverse");let Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),pe.setValue(F,"boneTexture",Ke.boneTexture,E))}N.isBatchedMesh&&(pe.setOptional(F,N,"batchingTexture"),pe.setValue(F,"batchingTexture",N._matricesTexture,E),pe.setOptional(F,N,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",N._indirectTexture,E),pe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",N._colorsTexture,E));let Fs=B.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&Pt.update(N,B,cn),(We||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,pe.setValue(F,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(_n.envMap.value=xt,_n.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(_n.envMapIntensity.value=U.environmentIntensity),We&&(pe.setValue(F,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&id(_n,Ns),tt&&z.fog===!0&&at.refreshFogUniforms(_n,tt),at.refreshMaterialUniforms(_n,z,H,et,u.state.transmissionRenderTarget[v.id]),as.upload(F,Ml(bt),_n,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(as.upload(F,Ml(bt),_n,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pe.setValue(F,"center",N.center),pe.setValue(F,"modelViewMatrix",N.modelViewMatrix),pe.setValue(F,"normalMatrix",N.normalMatrix),pe.setValue(F,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ke=z.uniformsGroups;for(let Wn=0,Xn=Ke.length;Wn<Xn;Wn++){let Sl=Ke[Wn];D.update(Sl,cn),D.bind(Sl,cn)}}return cn}function id(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function sd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,U,B){wt.get(v.texture).__webglTexture=U,wt.get(v.depthTexture).__webglTexture=B;let z=wt.get(v);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){let B=wt.get(v);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,B=0){C=v,w=U,A=B;let z=!0,N=null,tt=!1,lt=!1;if(v){let xt=wt.get(v);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(xt.__hasExternalTextures)E.rebindTextures(v,wt.get(v.texture).__webglTexture,wt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let vt=v.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(v.width!==vt.image.width||v.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}let Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);let Ft=wt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][B]:N=Ft[U],tt=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?N=wt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[B]:N=Ft,P.copy(v.viewport),G.copy(v.scissor),k=v.scissorTest}else P.copy(St).multiplyScalar(H).floor(),G.copy(Ht).multiplyScalar(H).floor(),k=ce;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&z&&Tt.drawBuffers(v,N),Tt.viewport(P),Tt.scissor(G),Tt.setScissorTest(k),tt){let xt=wt.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,B)}else if(lt){let xt=wt.get(v.texture),Dt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Dt)}b=-1},this.readRenderTargetPixels=function(v,U,B,z,N,tt,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);try{let xt=v.texture,Dt=xt.format,Ft=xt.type;if(!$t.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&B>=0&&B<=v.height-N&&F.readPixels(U,B,z,N,zt.convert(Dt),zt.convert(Ft),tt)}finally{let xt=C!==null?wt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(v,U,B,z,N,tt,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){let xt=v.texture,Dt=xt.format,Ft=xt.type;if(!$t.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-z&&B>=0&&B<=v.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(U,B,z,N,zt.convert(Dt),zt.convert(Ft),0);let ee=C!==null?wt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,ee);let he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cf(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(vt),F.deleteSync(he),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,B=0){v.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);let z=Math.pow(2,-B),N=Math.floor(v.image.width*z),tt=Math.floor(v.image.height*z),lt=U!==null?U.x:0,_t=U!==null?U.y:0;E.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,lt,_t,N,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(v,U,B=null,z=null,N=0){v.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,v=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let tt,lt,_t,xt,Dt,Ft,vt,ee,he,fe=v.isCompressedTexture?v.mipmaps[N]:v.image;B!==null?(tt=B.max.x-B.min.x,lt=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,xt=B.min.x,Dt=B.min.y,Ft=B.isBox3?B.min.z:0):(tt=fe.width,lt=fe.height,_t=fe.depth||1,xt=0,Dt=0,Ft=0),z!==null?(vt=z.x,ee=z.y,he=z.z):(vt=0,ee=0,he=0);let Ve=zt.convert(U.format),ne=zt.convert(U.type),bt;U.isData3DTexture?(E.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let En=F.getParameter(F.UNPACK_ROW_LENGTH),ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),cn=F.getParameter(F.UNPACK_SKIP_PIXELS),Hi=F.getParameter(F.UNPACK_SKIP_ROWS),We=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let Ns=v.isDataArrayTexture||v.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let _n=wt.get(v),Fs=wt.get(U),Ke=wt.get(_n.__renderTarget),Wn=wt.get(Fs.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<_t;Xn++)Ns&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(v).__webglTexture,N,Ft+Xn),v.isDepthTexture?(pe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,he+Xn),F.blitFramebuffer(xt,Dt,tt,lt,vt,ee,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):pe?F.copyTexSubImage3D(bt,N,vt,ee,he+Xn,xt,Dt,tt,lt):F.copyTexSubImage2D(bt,N,vt,ee,he+Xn,xt,Dt,tt,lt);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(bt,N,vt,ee,he,tt,lt,_t,Ve,ne,fe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,vt,ee,he,tt,lt,_t,Ve,fe.data):F.texSubImage3D(bt,N,vt,ee,he,tt,lt,_t,Ve,ne,fe):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,vt,ee,tt,lt,Ve,ne,fe.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,vt,ee,fe.width,fe.height,Ve,fe.data):F.texSubImage2D(F.TEXTURE_2D,N,vt,ee,tt,lt,Ve,ne,fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,En),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Hi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(v,U,B=null,z=null,N=0){return v.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,v=arguments[2],U=arguments[3],N=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,B,z,N)},this.initRenderTarget=function(v){wt.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Tt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Tt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var kn=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ai=class extends Bn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},to=new I,eo=new I,Eh=new ge,Vs=new Ks,Or=new fs,ta=new I,Th=new I,xs=class extends $e{constructor(t=new Ee,e=new Ai){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)to.fromBufferAttribute(e,s-1),eo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=to.distanceTo(eo);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Eh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(Eh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let u=h.getX(_),R=h.getX(_+1),S=Br(this,t,Vs,c,u,R);S&&e.push(S)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),u=Br(this,t,Vs,c,_,m);u&&e.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let u=Br(this,t,Vs,c,_,_+1);u&&e.push(u)}if(this.isLineLoop){let _=Br(this,t,Vs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Br(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(to.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),e.distanceSqToSegment(to,eo,ta,Th)>n)return;ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:Th.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ah=new I,Rh=new I,tr=class extends xs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Rh);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var no=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,f=new I,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){let R=[],S=u/n,M=0;u===0&&o===0?M=.5/e:u===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let w=T/e;d.x=-t*Math.cos(s+w*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+w*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+M,1-S),R.push(l++)}h.push(R)}for(let u=0;u<n;u++)for(let R=0;R<e;R++){let S=h[u][R+1],M=h[u][R],T=h[u+1][R],w=h[u+1][R+1];(u!==0||o>0)&&p.push(S,M,w),(u!==n-1||c<Math.PI)&&p.push(M,T,w)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var io=class i extends Ee{constructor(t=1,e=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],c=[],l=[],h=[],d=new I,f=new I,p=new I,g=new I,_=new I,m=new I,u=new I;for(let S=0;S<=n;++S){let M=S/n*r*Math.PI*2;R(M,r,o,t,p),R(M+.01,r,o,t,g),m.subVectors(g,p),u.addVectors(g,p),_.crossVectors(m,u),u.crossVectors(_,m),_.normalize(),u.normalize();for(let T=0;T<=s;++T){let w=T/s*Math.PI*2,A=-e*Math.cos(w),C=e*Math.sin(w);d.x=p.x+(A*u.x+C*_.x),d.y=p.y+(A*u.y+C*_.y),d.z=p.z+(A*u.z+C*_.z),c.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),l.push(f.x,f.y,f.z),h.push(S/n),h.push(T/s)}}for(let S=1;S<=n;S++)for(let M=1;M<=s;M++){let T=(s+1)*(S-1)+(M-1),w=(s+1)*S+(M-1),A=(s+1)*S+M,C=(s+1)*(S-1)+M;a.push(T,w,C),a.push(w,A,C)}this.setIndex(a),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2));function R(S,M,T,w,A){let C=Math.cos(S),b=Math.sin(S),y=T/M*S,P=Math.cos(y);A.x=w*(2+P)*.5*C,A.y=w*(2+P)*b*.5,A.z=w*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Ri=class extends Bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var so=class extends Bn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function zr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,a=2*e-n;break;case Il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:o=t,c=2*n-e;break;case Il:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,u=-f*m+2*f*_-f*g,R=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let T=0;T!==a;++T)r[T]=u*o[h+T]+R*o[l+T]+S*o[c+T]+M*o[d+T];return r}},oc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},ac=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&s_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Va;var Ci=class extends pn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Xr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends pn{};cc.prototype.ValueTypeName="color";var lc=class extends pn{};lc.prototype.ValueTypeName="number";var hc=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ro=class extends pn{InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}};ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends pn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Xr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends pn{};uc.prototype.ValueTypeName="vector";var dc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},r_=new dc,fc=class{constructor(t){this.manager=t!==void 0?t:r_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pc=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ea=new ge,Ch=new I,Ih=new I,mc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ph=new ge,Hs=new I,na=new I,gc=class extends mc{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),na.copy(n.position),na.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(na),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}},oo=class extends pc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var Pc="\\[\\]\\.:\\/",o_=new RegExp("["+Pc+"]","g"),Lc="[^"+Pc+"]",a_="[^"+Pc.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",Lc),l_=/(WCOD+)?/.source.replace("WCOD",a_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),u_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),d_=new RegExp("^"+c_+l_+h_+u_+"$"),f_=["material","materials","bones","map"],_c=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){let e=d_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=_c;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);var Lh=new ge,ao=class{constructor(t,e,n=0,s=1/0){this.ray=new Ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,n=[]){return xc(t,this,n,e),n.sort(Dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xc(t[s],this,n,e);return n.sort(Dh),n}};function Dh(i,t){return i.distance-t.distance}function xc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);var m_=55.5+Math.sqrt(94.90249999999999)-.3,Ss=i=>i*Math.PI/180,g_=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Pe=(i=0,t=0,e=0)=>[1,0,0,i,0,1,0,t,0,0,1,e,0,0,0,1],uo=i=>{let t=Math.cos(Ss(i)),e=Math.sin(Ss(i));return[1,0,0,0,0,t,-e,0,0,e,t,0,0,0,0,1]},fo=i=>{let t=Math.cos(Ss(i)),e=Math.sin(Ss(i));return[t,0,e,0,0,1,0,0,-e,0,t,0,0,0,0,1]},Pi=i=>{let t=Math.cos(Ss(i)),e=Math.sin(Ss(i));return[t,-e,0,0,e,t,0,0,0,0,1,0,0,0,0,1]},_e=(...i)=>i.reduce((t,e)=>{let n=new Array(16).fill(0);for(let s=0;s<4;s++)for(let r=0;r<4;r++)for(let o=0;o<4;o++)n[s*4+r]+=t[s*4+o]*e[o*4+r];return n}),__=(i,t)=>_e(Pi(t),uo(i),Pi(-t)),nu=_e(fo(180),Pe(0,0,-30.2)),x_=Pe(0,11,79),v_=[["B90",90],["B60",60]];function Li(i,t){let e=[],n=(c,l,h)=>e.push({name:c,type:l,M:h});n("base","base",g_());let s=t.tubes,r=_e(Pe(0,0,91.7),Pi(90)),o={};i.spine.forEach((c,l)=>{let h=l+1,[d,f]=i.joints[l],p=s[c].L,g=h===1&&t.frames&&t.frames.J1_hinge_lift?t.frames.J1_hinge_lift:0;n(`J${h}:low`,"joint_low",r);let _=_e(r,Pi(d));n(`J${h}:sw`,g?"joint1_sw":"joint_sw",_);let m=_e(_e(_,Pe(0,0,g)),uo(f));n(`J${h}:hi`,g?"joint1_hi":"joint_hi",m);let u=_e(m,Pe(0,0,30.2));o[h]=u,n(`tube${h}`,"tube_"+c,u),n(`tube${h}:m3`,"m3screw",_e(u,Pe(0,0,p-8))),r=_e(u,Pe(0,0,p+27.5))}),n("neck:low","neck_low",r);let a=_e(r,Pi(i.head.pan));n("neck:pan","neck_pan",a),n("head","head",_e(a,Pe(0,0,16),uo(i.head.tilt),Pe(0,0,-16),x_));for(let[c,l]of Object.entries(i.ports||{})){let[h,d]=c.split(":"),f=+h,p=+d,g=i.spine[f-1],_=null;for(let S of s[g].ports)S.side===p&&(_=S.z);if(_===null)throw new Error(`tube ${g} has no port on side ${p}`);let m=_e(o[f],Pe(p*28,0,_),fo(90*p)),u=`s${f}${p>0?"p":"n"}`,R=l.type;if(R==="stub")n(`${u}:root`,"stub_root",m),n(`${u}:ring`,"ring",_e(m,nu));else if(R==="tentacle"){n(`${u}:root`,"tent_root",m),n(`${u}:ring`,"ring",_e(m,nu));let S=_e(m,Pe(0,0,m_));l.balls.forEach(([M,T],w)=>{let A=_e(S,__(M,T));n(`${u}:L${String(w).padStart(2,"0")}`,"tent_link",A),S=_e(A,Pe(0,0,36))}),n(`${u}:tip`,"tent_tip",S)}else if(R==="arm"){let S=_e(m,Pe(0,0,30.2),fo(180));["sh","el","wr"].forEach((M,T)=>{let[w,A]=l.joints[T],C=_e(S,uo(-A),Pi(-w)),b=_e(C,Pi(w));if(n(`${u}:${M}:hi`,"joint_hi",S),n(`${u}:${M}:sw`,"joint_sw",b),n(`${u}:${M}:low`,"joint_low",C),T<2){let[y,P]=v_[T],G=_e(C,Pe(0,0,-(27.5+P)));n(`${u}:T${T+1}`,"tube_"+y,G),n(`${u}:T${T+1}:m3`,"m3screw",_e(G,Pe(0,0,P-8))),S=_e(G,Pe(0,0,-30.2))}else n(`${u}:grip`,"gripper",_e(C,Pe(0,0,-27.5),fo(180)))})}else if(R!=="none")throw new Error("unknown attachment "+R)}return e}var Ex=Math.PI/180,Tx=180/Math.PI,nr=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3],i[4]*t[0]+i[5]*t[1]+i[6]*t[2]+i[7],i[8]*t[0]+i[9]*t[1]+i[10]*t[2]+i[11]];var Dc=i=>[i[3],i[7],i[11]],Uc=(i,t)=>[i[t],i[4+t],i[8+t]];var iu=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]];var Nc=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2];var su=i=>{let t={};for(let e of i)t[e.name]=e.M;return t};var ru=.00981;function Fc(i,t,e){e=e||Li(i,t);let n=su(e),s=t.physics,r=[],o=T=>{let w;return(w=/^J(\d)/.exec(T))?+w[1]-.5:(w=/^tube(\d)/.exec(T))?+w[1]:T==="neck:low"||T==="neck:pan"||T==="head"?9:(w=/^s(\d)[pn]:/.exec(T))?+w[1]:0};for(let T of e){let w=/^s\d[pn]:/.test(T.name),A=t.mass[T.type];if(!A)continue;let C=w?A.m_arm:A.m_spine,b=T.type==="head"?A.com:w?A.com_arm:A.com_spine;r.push({name:T.name,m:C,p:nr(T.M,b),level:o(T.name),arm:w})}for(let[T,w]of Object.entries(i.ports)){let A=`s${T.split(":")[0]}${+T.split(":")[1]>0?"p":"n"}`,C=+T.split(":")[0];w.type==="stub"&&r.push({name:A+":pens",m:s.stub_pens.m,p:nr(n[`${A}:root`],s.stub_pens.p),level:C,arm:!0}),w.type==="arm"&&w.payload_g&&r.push({name:A+":payload",m:w.payload_g,p:nr(n[`${A}:grip`],s.grip_tip),level:C,arm:!0})}let a=r.reduce((T,w)=>T+w.m,s.base.m),c=[0,0,s.base.m*s.base.com[2]];for(let T of r)for(let w=0;w<3;w++)c[w]+=T.m*T.p[w];for(let T=0;T<3;T++)c[T]/=a;let l=(T,w)=>{let A=[0,0,0];for(let C of r)if(w(C)){let b=iu(C.p,T),y=-C.m*ru;A[0]+=b[1]*.001*y,A[1]+=-b[0]*.001*y}return A},h=(T,w)=>{let A=[0,0,0];for(let C of r)if(w(C)){let b=[(C.p[0]-T[0])*.001,(C.p[1]-T[1])*.001,0],y=-C.m*ru;A[0]+=b[1]*y,A[1]+=-b[0]*y}return A},d={total_g:a,com:c,items:[]},f=T=>{let w=n[`J${T}:sw`],A=Dc(n[`J${T}:low`]),C=h(A,b=>b.level>T-.5&&b.name!==`J${T}:low`&&b.name!==`J${T}:sw`);return Math.abs(Nc(C,Uc(w,0)))};d.hinge=i.spine.map((T,w)=>w+1).map(f),d.tube=i.spine.map((T,w)=>w+1).map(T=>{let w=Dc(n[`tube${T}`]),A=Uc(n[`tube${T}`],2),C=h(w,y=>y.level>=T),b=Nc(C,A);return Math.hypot(C[0]-b*A[0],C[1]-b*A[1],C[2]-b*A[2])});let p=1e9;for(let T of e){let w=t.mass[T.type];if(!w||!w.bbox)continue;let[A,C]=w.bbox;for(let b of[A[0],C[0]])for(let y of[A[1],C[1]])for(let P of[A[2],C[2]])p=Math.min(p,nr(T.M,[b,y,P])[2])}d.lowest=p;let g=Math.hypot(c[0],c[1]);d.com_r=g,d.margin_open=s.support_radius.open-s.support_radius.margin-g,d.margin_folded=s.support_radius.folded-s.support_radius.margin-g;let _=i.spine.filter(T=>t.tubes[T].ports.length).length;d.port_tubes=_;let m=s.design_factor,u=s.j1_rated_Nm,R=s.j23_rated_Nm||u,S=d.items,M=(T,w,A)=>T>=A?"fail":T>=w?"warn":"ok";return d.hinge.forEach((T,w)=>{let A=w===0?u:R;S.push({id:`hinge${w+1}`,label:`Joint ${w+1} holding torque`,value:T,unit:"N\xB7m",limit:A,ratio:T/A,level:M(T/A,.9,1),note:T>A?"Over the clutch rating: this joint will slowly sag":"Clutch holds"})}),d.tube.forEach((T,w)=>{let A=t.tubes[i.spine[w]].capacity_Nm,C=T*m;S.push({id:`tube${w+1}`,label:`Tube ${w+1} (${i.spine[w]}) bending`,value:C,unit:"N\xB7m",limit:A,ratio:C/A,level:M(C/A,.8,1),note:C>A?"Tube too weak for this pose: pick a stronger tube":"Within capacity"})}),S.push({id:"tip",label:"Tipping margin (legs open)",value:d.margin_open,unit:"mm",limit:0,ratio:1-Math.max(0,d.margin_open)/60,level:d.margin_open<0?"fail":d.margin_open<15?"warn":"ok",note:d.margin_open<0?"The lamp would fall over":d.margin_open<15?"Close to tipping: widen the legs or lean back":"Stable"}),S.push({id:"desk",label:"Lowest point",value:p,unit:"mm",limit:0,ratio:p<0?1:0,level:p<-8?"fail":p<0?"warn":"ok",note:p<-8?"Something goes through the desk":"Above the desk (box estimate)"}),S.push({id:"ports",label:"Port tubes",value:_,unit:"of 2",limit:2,ratio:_/2,level:_>2?"warn":"ok",note:_>2?"More than two port tubes: untested":"OK"}),d.level=S.some(T=>T.level==="fail")?"fail":S.some(T=>T.level==="warn")?"warn":"ok",d}var ws={version:"1.0",units:"mm in rig/FK (desk z=0, x forward, y left); GLB files are in metres, local frame of the body type",fk:"lamp_fk.py / lamp_fk.js",types:{joint_low:{glb:"glb/joint_low.glb"},joint_sw:{glb:"glb/joint_sw.glb"},joint_hi:{glb:"glb/joint_hi.glb"},joint1_sw:{glb:"glb/joint1_sw.glb"},joint1_hi:{glb:"glb/joint1_hi.glb"},m3screw:{glb:"glb/m3screw.glb"},ring:{glb:"glb/ring.glb"},neck_low:{glb:"glb/neck_low.glb"},neck_pan:{glb:"glb/neck_pan.glb"},head:{glb:"glb/head.glb"},stub_root:{glb:"glb/stub_root.glb"},tent_root:{glb:"glb/tent_root.glb"},tent_link:{glb:"glb/tent_link.glb"},tent_tip:{glb:"glb/tent_tip.glb"},gripper:{glb:"glb/gripper.glb"},base:{glb:"glb/base.glb"},tube_B60:{glb:"glb/tube_B60.glb"},tube_B90:{glb:"glb/tube_B90.glb"},tube_B90pR:{glb:"glb/tube_B90pR.glb"},tube_B75pLR:{glb:"glb/tube_B75pLR.glb"},tube_D60:{glb:"glb/tube_D60.glb"},tube_D90:{glb:"glb/tube_D90.glb"},tube_T90:{glb:"glb/tube_T90.glb"}},tubes:{B60:{L:60,ports:[],capacity_Nm:8.77,kind:"solid",type:"tube_B60",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},B90:{L:90,ports:[],capacity_Nm:8.77,kind:"solid",type:"tube_B90",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},B90pR:{L:90,ports:[{side:-1,z:45}],capacity_Nm:4.49,kind:"port",type:"tube_B90pR",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},B75pLR:{L:75,ports:[{side:1,z:40},{side:-1,z:40}],capacity_Nm:3.04,kind:"port",type:"tube_B75pLR",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},D60:{L:60,ports:[],capacity_Nm:3.5,kind:"cage",type:"tube_D60",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},D90:{L:90,ports:[],capacity_Nm:3.6,kind:"cage",type:"tube_D90",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}},T90:{L:90,ports:[],capacity_Nm:1.6,kind:"transition",type:"tube_T90",ends:{bottom:"ringlock_female at z 0 (opens -z)",top:"spigot_female at z L (opens +z), M3 x 8 at z L-8"}}},frames:{Z_M:30.2,Z_T:27.5,J1_Z:91.7,J1_hinge_lift:5,port_frame:"T(side*28, 0, z_port) @ Ry(90*side): z out of the tube, key +y, mouth 28 mm from the axis",head_to_neck:"T(0, 11, 79)",tilt_pivot_z:16},joint:{types:["joint_low","joint_sw","joint_hi"],j1_types:["joint_low","joint1_sw","joint1_hi"],j1_clutch:"J1 v2 (sheet 38): 8 x DIN 2093 C 22.5x11.2x0.6, hold 4.60 N*m at mu 0.10, rated 3.83 (hold factor 1.2), peak 9.07 at mu 0.20",swivel:"about z of the base frame, 15-deg steps",hinge:"about x of the swivel frame, range +-75 deg",clutch_slip_Nm:[3.3,4.8],rated_static_Nm:2.75,flipped_on_arms:"on an arm the joint is mounted tongue-first: hinge on the body side, swivel outboard (see lamp_fk.py)"},head:{pan:[-165,165],tilt:[-30,60],tilt_step:10},attachments:{stub:{type:"stub_root",tubes_ok:["B90pR","B75pLR"],note:"pen cup, upright"},tentacle:{balls:6,ball_deg_max:40,ball_rot:"Rz(phi) Rx(theta) Rz(-phi)",ball0:64.94179141636691,pitch:36,tubes_ok:["B90pR","B75pLR"]},arm:{hinges:3,lengths:[90,60],hinge_range:75,payload_rated_g:100,gripper:"gripper",tubes_ok:["B90pR","B75pLR"],note:"flipped joints; tubes B90 then B60"},none:{note:"open port: a plug/cap module is NOT designed yet"}},rules:["max 2 port tubes in a build; a port tube adds its arm's moment","design demand by slot (P6, N*m): slot 1 bottom 5.4, slot 2 3.7, slot 3 1.9; tube capacity_Nm must be >= demand","static load: joint 1 <= 3.83 N*m (J1 v2 clutch, hold factor 1.2 at mu 0.10), joints 2 and 3 <= 2.75 N*m (standard clutch); the arm is rated 100 g at full forward reach (150 g only when the arm is not forward: J1 would carry 3.98 N*m, hold factor 1.16)","nothing below the desk; support radius 123.6 mm legs open; legs folded = transport only","every attachment fits every port (same ring lock)"],default_config:"presets.json:P1",glb_bytes:{},mass:{joint_low:{m_spine:11.48,m_arm:7.54,com_spine:[0,-.04,-29.42],com_arm:[0,-.04,-28.42],bbox:[[-17.6,-17.6,-43.5],[17.6,17.6,-17]]},joint_sw:{m_spine:39.71,m_arm:37.21,com_spine:[2.99,-0,-1.96],com_arm:[3.25,-0,-1.8],bbox:[[-24.8,-15.7,-23.9],[24.5,15.7,13.2]]},joint_hi:{m_spine:28,m_arm:18.53,com_spine:[-0,-.02,22.1],com_arm:[-0,-.01,21.59],bbox:[[-18.3,-18.3,-13.2],[18.3,18.3,46.2]]},joint1_sw:{m_spine:53.01,m_arm:42.29,com_spine:[4.41,-0,2.97],com_arm:[4.09,-0,3.11],bbox:[[-23.8,-20,-23.9],[25.5,20,25]]},joint1_hi:{m_spine:30.79,m_arm:20.12,com_spine:[-0,-.01,19.64],com_arm:[-0,-.01,19.51],bbox:[[-18.3,-18.3,-17.5],[18.3,18.3,46.2]]},m3screw:{m_spine:.77,m_arm:.77,com_spine:[13.91,0,0],com_arm:[13.91,0,0],bbox:[[7.8,-2.8,-2.8],[17.5,2.8,2.8]]},ring:{m_spine:6.59,m_arm:5.37,com_spine:[-0,-0,30.61],com_arm:[-0,-0,30.61],bbox:[[-18.3,-18.3,22.7],[18.3,18.3,40.2]]},neck_low:{m_spine:11.48,m_arm:7.54,com_spine:[0,-.04,-29.42],com_arm:[0,-.04,-28.42],bbox:[[-17.6,-17.6,-43.5],[17.6,17.6,-17]]},neck_pan:{m_spine:27.26,m_arm:18.95,com_spine:[3.5,-0,2.79],com_arm:[3.81,-0,4.33],bbox:[[-16.7,-16,-23.9],[25.4,16,27.2]]},head:{m_spine:342.6,m_arm:342.6,com:[-.5,-14.6,-4.6],bbox:[[-78,-53,-73],[78,41,47]]},stub_root:{m_spine:63.07,m_arm:63.07,com_spine:[8.01,0,62.46],com_arm:[8.01,0,62.46],bbox:[[-18,-33.4,-16],[62,33.4,115.4]]},tent_root:{m_spine:30.32,m_arm:30.32,com_spine:[7.16,-0,32.44],com_arm:[7.16,-0,32.44],bbox:[[-15.4,-17,-16],[32.5,17,75.8]]},tent_link:{m_spine:8.89,m_arm:8.89,com_spine:[0,-0,19.73],com_arm:[0,-0,19.73],bbox:[[-15,-15,0],[15,15,46.9]]},tent_tip:{m_spine:15.51,m_arm:15.51,com_spine:[0,-1.77,33.56],com_arm:[0,-1.77,33.56],bbox:[[-15,-15,0],[15,15,82.1]]},gripper:{m_spine:23.61,m_arm:13.94,com_spine:[-0,-2.24,32.11],com_arm:[-0,-2.37,33.13],bbox:[[-16,-16,0],[16,16,74.1]]},tube_B60:{m_spine:27.91,m_arm:15.9,com_spine:[-0,.06,32.23],com_arm:[-0,.06,32.23],bbox:[[-17.5,-17.5,-.3],[17.5,17.5,60]]},tube_B90:{m_spine:40.21,m_arm:22.91,com_spine:[-0,.07,47.5],com_arm:[-0,.07,47.5],bbox:[[-17.5,-17.5,-.3],[17.5,17.5,90]]},tube_B90pR:{m_spine:52.82,m_arm:29.6,com_spine:[-.83,.03,46.53],com_arm:[-.83,.03,46.53],bbox:[[-28.3,-17.5,-.3],[17.5,17.5,90]]},tube_B75pLR:{m_spine:50.1,m_arm:28.23,com_spine:[-0,.03,39.62],com_arm:[-0,.03,39.62],bbox:[[-28.3,-17.5,-.3],[28.3,17.5,75]]},tube_D60:{m_spine:33.79,m_arm:19.54,com_spine:[0,.03,32.14],com_arm:[0,.03,32.14],bbox:[[-17.5,-17.5,-.3],[17.5,17.5,60]]},tube_D90:{m_spine:48.49,m_arm:29.19,com_spine:[.01,.05,47.4],com_arm:[.01,.05,47.4],bbox:[[-17.5,-17.5,-.3],[17.5,17.5,90]]},tube_T90:{m_spine:36.56,m_arm:20.97,com_spine:[0,.05,46.83],com_arm:[0,.05,46.83],bbox:[[-17.5,-17.5,-.3],[17.5,17.5,90]]}},physics:{base:{m:3961,com:[0,0,19.1]},stub_pens:{m:70,p:[22,0,82]},grip_tip:[0,-6,62],tent_tip:[0,0,60],support_radius:{open:123.6,folded:88,margin:2.4},head:{look_local:[0,-1,0],center_local:[0,-6,0],dot_look_local:[0,-150,0],dot_top_up_mm:85},j1_rated_Nm:3.83,j23_rated_Nm:2.75,design_factor:1.5,payload_options_g:[0,100,150]}};var Es={L01:{label:"straight, arm crane, tentacle coiled behind",config:{spine:["B60","B90pR","B75pLR"],joints:[[0,0],[0,0],[0,0]],head:{pan:0,tilt:0},ports:{"2:-1":{type:"stub"},"3:1":{type:"arm",joints:[[90,30],[0,-45],[0,75]],payload_g:0},"3:-1":{type:"tentacle",balls:[[25,180],[25,180],[20,180],[25,180],[25,180],[25,180]]}}}},L06:{label:"full forward reach (45/30/15), arm level forward",config:{spine:["B60","B90pR","B75pLR"],joints:[[0,45],[0,30],[0,15]],head:{pan:0,tilt:60},ports:{"2:-1":{type:"stub"},"3:1":{type:"arm",joints:[[90,0],[0,-75],[0,0]],payload_g:0},"3:-1":{type:"tentacle",balls:[[35,240],[25,255],[25,255],[25,240],[30,240],[25,225]]}}}},L03:{label:"lean forward 45, head down 60, arm down to the desk",config:{spine:["B60","B90pR","B75pLR"],joints:[[0,30],[0,15],[0,0]],head:{pan:0,tilt:60},ports:{"2:-1":{type:"stub"},"3:1":{type:"arm",joints:[[90,30],[270,45],[0,15]],payload_g:0},"3:-1":{type:"tentacle",balls:[[35,195],[25,210],[25,210],[25,195],[30,195],[25,180]]}}}},L22:{label:"desk tidy: lean 60 (45/15/0), arm folded, tentacle coiled",config:{spine:["B60","B90pR","B75pLR"],joints:[[0,45],[0,15],[0,0]],head:{pan:0,tilt:30},ports:{"2:-1":{type:"stub"},"3:1":{type:"arm",joints:[[90,-30],[90,75],[0,30]],payload_g:0},"3:-1":{type:"tentacle",balls:[[25,240],[25,240],[20,240],[25,240],[25,240],[25,240]]}}}}};var po=class extends kn{constructor(){super();let t=new Ei;t.deleteAttribute("uv");let e=new Ri({side:Fe}),n=new Ri,s=new oo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Jt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Jt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Jt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Jt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Jt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new Jt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let f=new Jt(t,Ts(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new Jt(t,Ts(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new Jt(t,Ts(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Jt(t,Ts(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Jt(t,Ts(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let u=new Jt(t,Ts(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ts(i){let t=new zn;return t.color.setScalar(i),t}function ou(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new I,new I,new I],r=new I,o=new I,a=new I,c=new I;function l(_){let m=~~(_.x*n),u=~~(_.y*n),R=~~(_.z*n);return`${m},${u},${R}`}let h=i.index?i.toNonIndexed():i,d=h.attributes.position,f={};for(let _=0,m=d.count/3;_<m;_++){let u=3*_,R=s[0].fromBufferAttribute(d,u+0),S=s[1].fromBufferAttribute(d,u+1),M=s[2].fromBufferAttribute(d,u+2);r.subVectors(M,S),o.subVectors(R,S);let T=new I().crossVectors(r,o).normalize();for(let w=0;w<3;w++){let A=s[w],C=l(A);C in f||(f[C]=[]),f[C].push(T)}}let p=new Float32Array(d.count*3),g=new Me(p,3,!1);for(let _=0,m=d.count/3;_<m;_++){let u=3*_,R=s[0].fromBufferAttribute(d,u+0),S=s[1].fromBufferAttribute(d,u+1),M=s[2].fromBufferAttribute(d,u+2);r.subVectors(M,S),o.subVectors(R,S),a.crossVectors(r,o).normalize();for(let T=0;T<3;T++){let w=s[T],A=l(w),C=f[A];c.set(0,0,0);for(let b=0,y=C.length;b<y;b++){let P=C[b];a.dot(P)>e&&c.add(P)}c.normalize(),g.setXYZ(u+T,c.x,c.y,c.z)}}return h.setAttribute("normal",g),h}var rn=new URLSearchParams(location.search),gn=rn.has("proof"),Lt=matchMedia("(prefers-reduced-motion: reduce)").matches,At=i=>document.querySelector(i),ar=new Wt("#1f3bd1"),b_=new Wt("#fafafa"),S_=0,Kt=window.__pogo={tier:null,why:[],fps:[],load:{}};function w_(){if((navigator.connection||{}).saveData||matchMedia("(prefers-reduced-data: reduce)").matches)return[3,"save-data"];if(!("DecompressionStream"in window))return[3,"no DecompressionStream"];let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=1?[3,`cores ${t} mem ${e}`]:e<=2||t<=4?[2,`cores ${t} mem ${e}`]:[1,`cores ${t} mem ${e}`]}function E_(i){let t=i.getContext(),e=new kn,n=new Ie(40,1,1,100),s=new io(10,3,600,100);n.position.z=40;let r=new Jt(s,new so);e.add(r);let o=new Ye(512,512),a=new Uint8Array(4),c=[],l=performance.now();for(let h=0;h<14;h++){let d=performance.now();if(r.rotation.y=h,i.setRenderTarget(o),i.render(e,n),i.render(e,n),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,a),i.setRenderTarget(null),h<2)continue;let f=performance.now()-d;if(c.push(f),f>120&&c.length>=2||performance.now()-l>1200)break}return s.dispose(),r.material.dispose(),o.dispose(),c.sort((h,d)=>h-d),c.length?c[c.length>>1]:999}function T_(){let i=[],t=new Float32Array(4096);for(let e=0;e<3;e++){let n=performance.now(),s=0;for(let r=0;r<3e5;r++)s+=Math.sin(r*.001)*Math.sqrt(r),t[r&4095]=s;i.push(performance.now()-n)}return i.sort((e,n)=>e-n)[1]}var Wc=At("#ldr"),rl=At("#ldrp"),Xc=document.documentElement.classList.contains("quick"),A_=Lt||Xc?0:3.25,Cu=!1;setTimeout(()=>{Kt.ready||(Cu=!0,gsap.to(rl,{opacity:1,duration:.3}))},3e3);function Iu(i){let t=At("#navicon"),e=Wc.getBoundingClientRect(),n=t.getBoundingClientRect(),s=n.width/e.width,r=n.left+n.width/2-(e.left+e.width/2),o=n.top+n.height/2-(e.top+e.height/2),a=gsap.timeline({onComplete:()=>{t.style.visibility="visible",At("#loader").remove(),i&&i()}});return a.to(rl,{opacity:0,duration:.15},0).to(Wc,{x:r,y:o,scale:s,duration:Lt?.01:.7,ease:"power3.inOut"},0).to("#loader > .paper, #loader",{backgroundColor:"rgba(250,250,250,0)",duration:Lt?.01:.3,ease:"power1.out"},Lt?0:.42).to("#loader > .paper",{opacity:0,duration:Lt?.01:.25},Lt?0:.42),a}function Pu(){if(!matchMedia("(max-width: 767px)").matches||matchMedia("(orientation: landscape) and (max-height: 520px)").matches)return null;let i=At(".hero h1"),t=At(".hero .lead"),e=li.clientHeight,n=i.offsetTop+i.offsetHeight+46,s=t.offsetTop-22,r=Math.min(.56,Math.max(.3,(s-n)/e)),o=(n+s)/2/e;return li.style.setProperty("--fill",(r*100).toFixed(2)+"%"),li.style.setProperty("--cy",(o*100).toFixed(2)+"%"),{fill:r,cy:o,top:n}}async function R_(i){let t=await(await fetch("lamp.json")).json(),e=await fetch("lamp.bin.gz");if(!e.ok)throw new Error("model "+e.status);let n=+e.headers.get("content-length")||1137200,s=0,r=e.body.pipeThrough(new TransformStream({transform(c,l){s+=c.byteLength,i(Math.min(1,s/n)),l.enqueue(c)}})),o=new Uint8Array(await new Response(r).arrayBuffer()),a=o[0]===31&&o[1]===139?await new Response(new Blob([o]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():o.buffer;return{meta:t,buf:a}}var ol=new zn({color:b_,polygonOffset:!0,polygonOffsetFactor:1.5,polygonOffsetUnits:3}),ur=new Ai({color:ar,transparent:!0,opacity:1}),Oc=new I;function C_({meta:i,buf:t}){let e=new He,n=new He;e.add(n),n.rotation.x=-Math.PI/2;let s=i.span*32767/65535,r=i.lo.map(d=>d+i.span*32768/65535),o={};for(let[d,f]of Object.entries(i.groups)){let p=new He;p.name=d,p.scale.setScalar(s),p.position.set(...r),n.add(p);let g=new Ee;g.setAttribute("position",new Me(new Int16Array(t,f.lines[0],f.lines[1]),3,!0));let _=new Ee;_.setAttribute("position",new Me(new Int16Array(t,f.pos[0],f.pos[1]),3,!0)),_.setIndex(new Me(f.idx32?new Uint32Array(t,f.idx[0],f.idx[1]):new Uint16Array(t,f.idx[0],f.idx[1]),1));let m=new Jt(_,ol);m.layers.enable(1);let u=ur.clone();u.clippingPlanes=[ci];let R=new tr(g,u);R.renderOrder=1;let S=_.attributes.position,M=new I;for(let T=0;T<S.count;T+=4)M.add(Oc.fromBufferAttribute(S,T));M.divideScalar(Math.ceil(S.count/4));{let T=1e9,w=new I;for(let A=0;A<S.count;A+=2){let C=Oc.fromBufferAttribute(S,A).distanceToSquared(M);C<T&&(T=C,w.copy(Oc))}M.copy(w)}p.userData={mat:u,occ:m,anchor:M};for(let T of[m,R])T.frustumCulled=!1,T.matrixAutoUpdate=!1,T.updateMatrix();p.add(m,R),o[d]=p}let a=i.groups.neck.c,c=i.groups.head.c,l=new He;l.position.set(a[0],a[1],(a[2]+c[2])/2),n.add(l);let h=o.head;return h.position.sub(l.position),l.add(h),{lamp:e,cad:n,groups:o,pivot:l}}var on=new Ze({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{tDepth:{value:null},res:{value:new qt},r:{value:1.5},near:{value:1},far:{value:10},col:{value:ar},k:{value:.004}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`#include <packing>
  uniform sampler2D tDepth;uniform vec2 res;uniform float r,near,far,k;uniform vec3 col;varying vec2 vUv;
  float D(vec2 uv){return texture2D(tDepth,uv).x;}
  float Z(float d){return d>=.99999?1e9:-perspectiveDepthToViewZ(d,near,far);}
  // a depth step between this pixel and a neighbour, judged against the depth extrapolated from the opposite side
  // (planes are affine in window depth, so grazing faces never fire). Both sides of a step fire: the stroke is centred.
  float stepAt(vec2 o,float d0,float z0,float th){float dp=D(vUv+o),dm=D(vUv-o);
   if(d0>=.99999)return dp<.99999?1.:0.;
   if(dp>=.99999)return 1.;
   float pred=dm>=.99999?d0:clamp(2.*d0-dm,0.,.99998);return step(th,abs(Z(dp)-Z(pred)));}
  void main(){float d0=D(vUv);float z0=d0>=.99999?0.:Z(d0);float th=max(1.,z0*k);float hit=0.;
   for(int i=0;i<12;i++){float a=float(i)*.5235988;vec2 o=vec2(cos(a),sin(a))/res;
    hit+=stepAt(o*r*.5,d0,z0,th)*.5+stepAt(o*r*.3,d0,z0,th)*.3+stepAt(o*r*.15,d0,z0,th)*.2;}
   float al=smoothstep(.15,1.4,hit);if(al<.01)discard;gl_FragColor=vec4(col,al);}`}),Lu=new Jt(new Ti(2,2),on);Lu.frustumCulled=!1;var al=new kn;al.add(Lu);var cl=new ms,Bt,hi,It,ki,ut,Xt,ae=At("#gl"),li=At(".hero");async function I_(){let[i,t]=w_();Kt.why.push(t),rn.get("tier")&&(i=+rn.get("tier"),Kt.why.push("url override")),Xt=i;let e=i<3?R_(a=>{let c=Math.round(a*100);Cu&&(rl.textContent=`Loading model ${c}%`),document.body.classList.contains("pending")&&(At(".hud.br").textContent=`3D model ${c}%`)}).catch(a=>(Kt.why.push("model: "+a.message),null)):Promise.resolve(null),n=!1,s=()=>{if(n)return;if(gn){n=!0,At("#loader").remove();return}if(window.__hold)return setTimeout(s,100);n=!0,Wc.getAnimations({subtree:!0}).forEach(l=>l.finish()),Xt<3&&!ut&&document.body.classList.add("pending");try{sessionStorage.setItem("pogoSeen","1")}catch{}let a=At("#loader");Xc||!a||getComputedStyle(a).visibility==="hidden"||performance.now()>4e3?(document.body.classList.add("selfout"),a&&a.remove()):(a.style.animation="none",Iu()),Pu(),Hu(),document.body.classList.add("loaded"),At("#main").removeAttribute("aria-busy")},r=()=>{n||!At("#loader")||(Kt.why.push("loader skipped"),s())};if(At("#loader").addEventListener("pointerdown",r),addEventListener("keydown",r,{once:!0}),setTimeout(s,gn?0:Math.max(0,A_*1e3-performance.now())),await new Promise(a=>{let c=()=>n?setTimeout(a,gn||Xc||Lt?0:800):setTimeout(c,40);c()}),i<3)try{if(Bt=new Qr({canvas:ae,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:gn}),!Bt.capabilities.isWebGL2)throw new Error("no webgl2");if(Bt.setClearColor(0,0),Bt.localClippingEnabled=!0,ae.addEventListener("webglcontextlost",a=>{a.preventDefault(),Mo(3,"context lost")}),!rn.get("tier")){let a=T_();if(Kt.cpuMs=+a.toFixed(1),Kt.why.push(`cpu ${a.toFixed(1)} ms`),a>45?i=3:a>14&&(i=Math.max(i,2)),i===3)throw new Error("cpu too slow");let c=E_(Bt);Kt.gpuMs=+c.toFixed(1),Kt.why.push(`gpu ${c.toFixed(1)} ms`),c>40?i=3:c>12&&(i=Math.max(i,2))}}catch(a){Kt.why.push("webgl: "+a.message),i=3}Xt=i;let o=Xt<3?await e:null;if(Xt<3&&!o&&(Xt=3),Kt.load.ms=Math.round(performance.now()-S_),Xt<3?P_(o):Mo(3),Kt.ready=!0,!gn&&ut){let a=gsap.timeline({onComplete:()=>{document.body.classList.remove("pending"),At(".hud.br").textContent="Lens 50 mm"}});Vu(a,.05),a.add(V_,1.2),be();{let c=(navigator.connection||{}).effectiveType||"4g";/^(slow-2g|2g|3g)$/.test(c)||setTimeout(Zu,2500)}}Du()}function Mo(i,t){if(Xt=i,Kt.tier=i,t&&Kt.why.push(t),document.body.classList.toggle("tier3",i===3),i===3){document.body.classList.remove("pending");let e=At("#ph");e.src="../../../assets/img/pogo/slice/lamp-lines-upG.webp",gsap.set(e,{opacity:1}),Ds=!1}else Bt&&(gsap.set("#ph",{opacity:0}),Zc(),be());Du()}var qc={1:"High",2:"Medium",3:"Drawing"};function Du(){Kt.tier=Xt;let i=At("#tierbtn"),t=!!localStorage.getItem("pogoTier");i.textContent=`${qc[Xt]}${t?"":" \xB7 auto"}`,i.setAttribute("aria-label",`${i.textContent}. Quality: ${qc[Xt]}${t?"":", chosen for this device"}. Change`)}At("#tierbtn").addEventListener("click",()=>{let i=Xt===1?2:Xt===2?3:1;if(i<3&&!ut){localStorage.setItem("pogoTier",i),location.reload();return}localStorage.setItem("pogoTier",i),Mo(i,"manual"),At("#live").textContent=`Quality set to ${qc[i]}.`});!rn.get("tier")&&localStorage.getItem("pogoTier")&&rn.set("tier",localStorage.getItem("pogoTier"));function P_(i){if(gn||(ae.style.opacity=0),hi=new kn,ut=C_(i),hi.add(ut.lamp),It=new Ie(30,1,50,6e3),ki=new Ye(4,4,{depthTexture:new _s(4,4,On),depthBuffer:!0}),ki.depthTexture.format=ei,on.uniforms.tDepth.value=ki.depthTexture,gn)return Mx();let t=new Mn().setFromObject(ut.lamp);Kt.bbox=t.min.toArray().concat(t.max.toArray()).map(Math.round),ut.h=t.max.y-t.min.y,ut.cy=(t.max.y+t.min.y)/2,Y_(i.meta),hx(),addEventListener("resize",Zc,{passive:!0}),Zc();let e=new Set,n=new IntersectionObserver(s=>{for(let r of s)r.isIntersecting?e.add(r.target):e.delete(r.target);ll=e.size>0,be()});n.observe(li),n.observe(fr),document.addEventListener("visibilitychange",be),["pointermove","pointerdown","keydown","wheel","touchstart","scroll"].forEach(s=>addEventListener(s,()=>{Uu=performance.now(),be()},{passive:!0}))}var _o=0,xo=0,sn=1,ll=!0,Ds=!1,Uu=performance.now(),Yc=0,L_=-.22,$c=0,Vi=-.22;function Zc(){if(!Bt||gn)return;let i=ae.clientWidth,t=ae.clientHeight;sn=Math.min(devicePixelRatio||1,Xt===1?2:1.5),i===_o&&Math.abs(t-xo)<120&&_o&&(xo=t),_o=i,xo=t,Bt.setPixelRatio(sn),Bt.setSize(i,t,!1),ki.setSize(Math.round(i*sn),Math.round(t*sn)),on.uniforms.res.value.set(i*sn,t*sn);let n=matchMedia("(orientation: landscape) and (max-height: 520px)").matches,s=!n&&matchMedia("(max-width: 767px)").matches,r=2*Math.atan(18/50);It.aspect=i/t,It.fov=nn.radToDeg(2*Math.atan(Math.tan(r/2)/It.aspect)),It.aspect<1&&(It.fov=nn.radToDeg(2*Math.atan(Math.tan(r/2)*1.25)));let o=!s&&!n&&i<1100,a=s?Pu():null,[c,l,h]=n?[.8,.55,.21]:s?[.5,.5,0]:o&&!n?[.6,.625,0]:[.76,.535,0];a&&(c=a.fill,l=a.cy);let d=nn.degToRad(It.fov),f=ut.h/c/2/Math.tan(d/2),p=nn.degToRad(7),g=ut.cy;Et={dist:f,el:p,cy:g,offY:(.5-l)*t,offX:-h*i,w:i,h:t,phone:s,land:n,bandTop:a?a.top:0},ux(),mx(),Ou();let _=ut.h/(2*f*Math.tan(d/2))*t*sn;on.uniforms.r.value=Fu=Math.max(1,_*.0021),So=Math.min(1,Math.max(.6,_*.00106)),ui(),Kt.lampPx=Math.round(_),Kt.dpr=sn,hl()}function hl(){if(L.sel&&L.T>.3&&Xt<3&&!gn&&!Lt)return ix();Bt.setRenderTarget(ki),It.layers.set(1),Bt.render(hi,It),Bt.setRenderTarget(null),It.layers.set(0),Bt.render(hi,It),Bt.autoClear=!1,Bt.render(al,cl),Bt.autoClear=!0}var Jc=!0;function be(){Jc=!0,!Ds&&Bt&&Xt<3&&ll&&!document.hidden&&(Ds=!0,Yc=performance.now(),requestAnimationFrame(Nu))}var Bc=0,zc=performance.now();function Nu(i){if(!Ds)return;let t=Math.min(.05,(i-Yc)/1e3);Yc=i;let e=i-Uu>2e4;if(ut&&fl(),!ll||document.hidden||Xt===3||ul&&!Jc&&!D_()&&(Lt||e||Ni||j.focus||L.E>.001)){Ds=!1;return}O_(t,i),Jc=!1,hl(),k_(),Bc++,i-zc>1e3&&(Kt.fps.push(Math.round(Bc*1e3/(i-zc))),Kt.fps.length>30&&Kt.fps.shift(),Bc=0,zc=i),requestAnimationFrame(Nu)}var ul=!1,Ni=!1,bo=[["head","08","Head: round lens + hex eye"],["neck","07","Neck: tilt + swivel"],["arm","06","Rigid arm, 2 joints"],["tent","05","Ball-chain tentacle"],["s3","04","J2 + shoulder tube"],["stub","03","Stub + pen cup"],["s2","02","J2 + port tube"],["s1","01","J1 + tube 1"],["base","","Base"]],Et=null,So=1,Fu=1.5,j={userRot:0,vel:0,lastTouch:-1e9,focus:null,fk:0,hover:null,headYaw:0,headTilt:0,aimX:0,aimY:0,hinted:!1},Bi=new I,ai=new I,D_=()=>Rs>.01||K_()||Cs&&Cs.isActive()||Math.abs(j.vel)>1e-4||ve.active||N_()||U_()||!j.focus&&Math.abs(j.userRot)>.001&&performance.now()-j.lastTouch>8e3,au=0,dl=()=>{clearTimeout(au),au=setTimeout(be,8100)},U_=()=>ut&&Object.values(ut.groups).some(i=>Math.abs((i.userData.target??i.userData.mat.opacity)-i.userData.mat.opacity)>.004),N_=()=>Math.abs(j.headYaw-j.aimX)>.002||Math.abs(j.headTilt-j.aimY)>.002;function F_(i,t){let e=zi(t)/zi(i);return e>=.6?.16:Math.max(.07,.16*e/.6)}function ui(){if(!ut)return;let i=j.focus||L.sel||j.hover;for(let[t,e]of Object.entries(ut.groups)){let n=!i||t===i;e.userData.target=So*(n?1:j.focus||L.sel?F_(t,j.focus||L.sel):.42),(e.userData.mat.opacity===void 0||!ul||Lt)&&(e.userData.mat.opacity=e.userData.target),n?e.userData.occ.layers.enable(1):e.userData.occ.layers.disable(1)}}function Gn(i){let t=ut.groups[i];return t.updateWorldMatrix(!0,!1),t.localToWorld(t.userData.anchor.clone())}function Kc(i){let t=ut.groups[i],e=t.userData.anchor.clone().multiply(t.scale).add(t.position),n=i==="head"?e.x+ut.pivot.position.x:e.x,s=i==="head"?e.y+ut.pivot.position.y:e.y;return Math.hypot(n,s)<45?Vi:Math.atan2(-s,n)+(s>0?.35:-.35)}function zi(i){let t=ut.groups[i],e=t.userData.occ.geometry;return e.boundingSphere||e.computeBoundingSphere(),e.boundingSphere.radius*t.scale.x}function Ou(){if(!Et)return;let{dist:i,el:t,cy:e,offY:n,w:s,h:r}=Et,o=j.fk,a=0,c=e,l=0,h=i;if(j.focus){let p=Gn(j.focus),g=zi(j.focus),_=nn.degToRad(It.fov),m=Math.max(g/Math.tan(_/2)/.42,i*.42),u=o*o*(3-2*o);a=p.x*u,c=e+(p.y-e)*u,l=p.z*u,h=i+(Math.min(m,i)-i)*u}let d=Et.offX+(Et.phone?0:-s*.06*j.fk),f=n*(1-j.fk*.6);if(L.E>0||L.a>.03){let p=L.Ec,g=nn.degToRad(It.fov),_=i*(ut.hx/ut.h)*(Et.phone?1.02:1.2),m=e+(ut.cyx-e)*p,u=0,R=m,S=0,M=_,T=Lt?0:L.T;if(T>0){let C=Gn(L.from),b=Gn(L.to),y=L.m,P=zi(L.from)+(zi(L.to)-zi(L.from))*y;ai.copy(C).lerp(b,y);let G=Math.max(P/Math.tan(g/2)/.46,i*(Et.phone?.5:.42));u=ai.x*T,R=m+(ai.y-m)*T,S=ai.z*T,M=_+(Math.min(G,_)-_)*T}a+=(u-a)*p,c+=(R-c)*p,l+=(S-l)*p,h+=(M-h)*p;let w=Et.phone?0:L.side*s*.11*T-s*.3*(1-T)*(1-(Lt?L.q>.02?1:0:Vt(0,.22,L.q))),A=Lt?p:Vt(.03,.5,L.a);Et.phone&&(h+=_*.6*(1-T)*p),d=d*(1-A)+w*A,f=f*(1-p)+(Et.phone?r*.06*T+r*.21*(1-T)*p:0)}if(L.camD=h,Di&&L.Pp>0){let p=L.Pp;a+=(0-a)*p,c+=(Di.ty-c)*p,l+=(Di.tz-l)*p,h+=(Di.d-h)*p,d+=(Di.ox-d)*p,f+=(Di.oy-f)*p}if(Ui&&L.Dp>0){let p=L.Dp;a+=(0-a)*p,c+=(Ui.ty-c)*p,l+=(Ui.tz-l)*p,h+=(Ui.d-h)*p,d+=(Ui.ox-d)*p,f+=(Ui.oy-f)*p}It.position.set(a+h*Math.cos(t),c+h*Math.sin(t),l),It.lookAt(a,c,l),It.setViewOffset(s,r,d,f,s,r),It.near=h*.3,It.far=h+i*1.6,It.updateProjectionMatrix(),on.uniforms.near.value=It.near,on.uniforms.far.value=It.far}function O_(i,t){if(!ve.active&&(!Lt&&Math.abs(j.vel)>1e-4&&(j.userRot+=j.vel*i,j.vel*=Math.pow(.04,i)),t-j.lastTouch>8e3&&!j.focus)){let a=Math.round(j.userRot/(Math.PI*2))*Math.PI*2;j.userRot+=(a-j.userRot)*Math.min(1,i*1.6),Math.abs(a-j.userRot)<.001&&(j.userRot=0)}!Lt&&!Ni&&!j.focus&&!ve.active&&t-j.lastTouch>8e3&&($c+=i),Q_(i),Rs>0&&(Rs=Math.max(0,Rs-i*4),on.uniforms.r.value=Fu*(1+.8*Rs*Rs));let n=Vi+.42*Math.sin($c/14*Math.PI*2)+j.userRot,s=L.E>0?n+(L.rot-n)*L.Ec:n,r=s+(Math.PI/2-s)*L.Pp;ut.lamp.rotation.y=r+(Vi-r)*L.Dp,L.E>.02&&(j.aimX=j.aimY=0);let o=Math.min(1,i*(Lt?30:4));j.headYaw+=(j.aimX-j.headYaw)*o,j.headTilt+=(j.aimY-j.headTilt)*o,ut.pivot.rotation.set(0,j.headTilt,j.headYaw);for(let a of Object.values(ut.groups)){let c=a.userData.mat,l=a.userData.target??c.opacity;c.opacity+=(l-c.opacity)*Math.min(1,i*11)}Ou()}var Sn=document.createElement("div");Sn.className="ov";Sn.setAttribute("aria-hidden","false");Sn.innerHTML=`<svg class="lead-l" aria-hidden="true"><line pathLength="1" stroke-dasharray="1 1"/><circle r="3.5"/></svg><div class="plabel" aria-hidden="true"><span class="mono num"></span><span class="nm"></span><button type="button" class="pback mono" tabindex="-1">Back</button></div>
<div class="parts" role="group" aria-label="Lamp parts. Enter to look closer, Escape to return."></div><p class="hint mono" aria-hidden="true"></p>`;li.appendChild(Sn);var ri=Sn.querySelector(".plabel"),B_=Sn.querySelector(".pback"),mo=Sn.querySelector(".lead-l"),z_=Sn.querySelector(".parts"),mn=Sn.querySelector(".hint"),jc=matchMedia("(pointer: coarse)").matches;B_.addEventListener("click",()=>dr(null,!0));mn.textContent=jc?"Drag to turn \xB7 tap a part":"Drag to turn \xB7 click a part";var Bu={};for(let[i,t,e]of bo){let n=document.createElement("button");n.type="button",n.className="pbtn",n.dataset.part=i,n.setAttribute("aria-label",`${t?t+", ":""}${e}`),n.addEventListener("click",()=>dr(j.focus===i?null:i,!0)),n.addEventListener("focus",()=>{j.hover=i,ui(),be()}),n.addEventListener("blur",()=>{j.hover===i&&(j.hover=null,ui(),be())}),z_.appendChild(n),Bu[i]=n}var Fi=i=>(Bi.copy(i).project(It),[(Bi.x*.5+.5)*Et.w,(-Bi.y*.5+.5)*Et.h,Bi.z]);function k_(){if(!(!Et||!ut)){Wu(),Is(),Ls();for(let[i]of bo){let[t,e]=Fi(Gn(i));Bu[i].style.transform=`translate(${t-22}px,${e-22}px)`}if(j.focus&&j.fk>.02){let[i,t]=Fi(Gn(j.focus)),e=zi(j.focus),n=Math.abs(Fi(Gn(j.focus).add(new I(0,e,0)))[1]-t),s=ri.offsetWidth,r=ri.offsetHeight,o=Et.phone?20:Math.max(84,(Et.w-1760)/2),a,c;if(Et.phone)a=Math.min(Math.max(o,i-s/2),Et.w-o-s),c=Math.min(t+n*.8+24,Et.h-150-r);else{let g=Fi(ai.set(0,Et.cy,0))[0],_=i>=g-4,m=At(".hero h1");a=_?Math.min(i+n*.9+40,Et.w-o-s):Math.max(o,i-n*.9-40-s);let u=_?120:m.offsetTop+m.offsetHeight+28;c=Math.min(Math.max(u,t-r/2),Et.h-110-r)}ri.style.transform=`translate(${a}px,${c}px)`;let l=Et.phone?a+s/2:a>i?a-8:a+s+8,h=Et.phone?c-8:c+r/2,d=mo.querySelector("line"),f=mo.querySelector("circle");d.setAttribute("x1",i),d.setAttribute("y1",t),d.setAttribute("x2",l),d.setAttribute("y2",h),f.setAttribute("cx",i),f.setAttribute("cy",t);let p=Math.min(1,j.fk*1.4);ri.style.opacity=p,mo.style.opacity=p,ri.style.pointerEvents=p>.9?"auto":"none",d.style.strokeDashoffset=1-p}else ri.style.opacity=0,mo.style.opacity=0;if(!j.hinted){let i=ut.groups.base,t=i.userData.occ.geometry;t.boundingBox||t.computeBoundingBox();let e=0;for(let n=0;n<8;n++)ai.set(n&1?t.boundingBox.max.x:t.boundingBox.min.x,n&2?t.boundingBox.max.y:t.boundingBox.min.y,n&4?t.boundingBox.max.z:t.boundingBox.min.z),i.localToWorld(ai),e=Math.max(e,Fi(ai)[1]);if(e-=22,Et.phone)mn.style.left="50%",mn.style.transform=`translate(-50%,${Et.bandTop-36}px)`;else if(Et.land){let n=At(".hero h1");mn.style.left=getComputedStyle(n).left,mn.style.transform=`translate(0,${n.offsetTop+n.offsetHeight+14}px)`}else mn.style.left="50%",mn.style.transform=`translate(-50%,${Math.min(e+40,Et.h-76)}px)`}}}var Cs=null;Kt.partXY=i=>Et&&ut?Fi(Gn(i)).slice(0,2).map(Math.round):null;Kt.ui=j;Kt.pick=(i,t)=>zu(i,t);Kt.x=()=>({a:+L.a.toFixed(3),p:+L.p.toFixed(3),tp:+L.tp.toFixed(3),E:+L.E.toFixed(3),T:+L.T.toFixed(3),sel:L.sel,q:+L.q.toFixed(3),tq:+L.tq.toFixed(3),dv:+L.dv.toFixed(3),tdv:+L.tdv.toFixed(3),running:Ds});function dr(i,t){if(!(i===j.focus&&i)){if(Cs&&Cs.kill(),i){j.focus=i;let[,e,n]=bo.find(a=>a[0]===i);if(ri.querySelector(".num").textContent=e?e+" / 08":"Base",ri.querySelector(".nm").textContent=n,At("#live").textContent=`${e?e+", ":""}${n}.`,ui(),wo(),t&&navigator.vibrate&&!Lt)try{navigator.vibrate(10)}catch{}let s=.42*Math.sin($c/14*Math.PI*2),o=Kc(i)-Vi-s;o+=Math.round((j.userRot-o)/(Math.PI*2))*Math.PI*2,j.vel=0,Cs=gsap.timeline({onUpdate:be}).to(j,{fk:1,duration:Lt?.01:.85,ease:"power2.inOut"},0).to(j,{userRot:o,duration:Lt?.01:.85,ease:"power2.inOut"},0)}else j.focus&&(Cs=gsap.to(j,{fk:0,duration:Lt?.01:.7,ease:"power2.inOut",onUpdate:be,onComplete:()=>{j.focus=null,ui(),be()}}),At("#live").textContent="Back to the whole lamp.");j.lastTouch=performance.now(),be(),dl()}}function wo(){j.hinted||(j.hinted=!0,gsap.to(mn,{opacity:0,duration:.4,onComplete:()=>mn.hidden=!0}))}function V_(){!j.hinted&&!Lt?gsap.fromTo(mn,{opacity:0},{opacity:1,duration:.6,delay:.8}):Lt&&!j.hinted&&gsap.set(mn,{opacity:1})}var cu=new ao,lu=new qt;function Qc(i,t){let e=ae.getBoundingClientRect();lu.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),cu.setFromCamera(lu,It);let n=null,s=1e9;for(let[r,o]of Object.entries(ut.groups)){let a=cu.intersectObject(o.userData.occ,!1)[0];a&&a.distance<s&&(s=a.distance,n=r)}return n}function zu(i,t,e){let n=Qc(i,t);if(n)return n;let s=e?[7,14]:[4];for(let r of s){let o={};for(let c=0;c<8;c++){let l=c/8*Math.PI*2,h=Qc(i+Math.cos(l)*r,t+Math.sin(l)*r);h&&(o[h]=(o[h]||0)+1)}let a=Object.entries(o).sort((c,l)=>l[1]-c[1])[0];if(a)return a[0]}return null}var ve={active:!1,id:null,x:0,y:0,t:0,moved:0,lx:0,lt:0};ae.addEventListener("pointerdown",i=>{!ut||Xt===3||i.button>0||L.a>.05||Object.assign(ve,{id:i.pointerId,x:i.clientX,y:i.clientY,lx:i.clientX,lt:performance.now(),moved:0,active:!1})});ae.addEventListener("pointermove",i=>{if(!(!ut||Xt===3)){if(ve.id===i.pointerId){let t=i.clientX-ve.x,e=i.clientY-ve.y;if(ve.moved=Math.max(ve.moved,Math.hypot(t,e)),!ve.active&&Math.abs(t)>8&&Math.abs(t)>Math.abs(e)*1.2&&(ve.active=!0,ae.setPointerCapture(i.pointerId),ae.classList.add("grabbing"),wo()),ve.active){let n=performance.now(),s=i.clientX-ve.lx,r=Math.PI*1.1/Math.max(Et.w,600);j.userRot+=s*r,j.vel=s*r/Math.max(.008,(n-ve.lt)/1e3),ve.lx=i.clientX,ve.lt=n,j.lastTouch=n,be()}}else!jc&&L.a<.05&&G_(i.clientX,i.clientY);if(!jc&&Et){let t=ae.getBoundingClientRect();j.aimX=nn.clamp(((i.clientX-t.left)/t.width-.5)*.36,-.17,.17),j.aimY=nn.clamp(((i.clientY-t.top)/t.height-.35)*.2,-.1,.1),be()}}});var ku=i=>{if(ve.id===i.pointerId){if(!ve.active&&ve.moved<8&&i.type==="pointerup"){let t=zu(i.clientX,i.clientY,i.pointerType!=="mouse");dr(t&&t!==j.focus?t:null,!0)}ve.active&&(ae.classList.remove("grabbing"),performance.now()-ve.lt>80&&(j.vel=0)),ve.active=!1,ve.id=null,j.lastTouch=performance.now(),be(),dl()}};ae.addEventListener("pointerup",ku);ae.addEventListener("pointercancel",ku);var hu=0,ir=null,H_=0,uu=0;function G_(i,t){let e=performance.now();if(e-hu<70)return;hu=e;let n=Qc(i,t);if(ae.style.cursor=n?"pointer":"grab",n===j.hover){ir=null;return}ir!==n&&(ir=n,H_=e),clearTimeout(uu),uu=setTimeout(()=>{ir===n&&(n&&Us("tick",!1),j.hover=n,ir=null,ui(),be())},n?120:250)}ae.addEventListener("pointerleave",()=>{j.hover&&(j.hover=null,ui(),be()),j.aimX=j.aimY=0,ae.style.cursor=""});ae.tabIndex=0;ae.addEventListener("keydown",i=>{(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(j.userRot+=(i.key==="ArrowLeft"?-1:1)*.26,j.lastTouch=performance.now(),wo(),be(),dl(),i.preventDefault())});addEventListener("keydown",i=>{i.key==="Escape"&&j.focus&&dr(null,!0)});var du=scrollY;addEventListener("scroll",()=>{j.focus&&Math.abs(scrollY-du)>60&&dr(null),j.focus||(du=scrollY)},{passive:!0});At("#spinbtn").addEventListener("click",i=>{Ni=!Ni,i.currentTarget.textContent=Ni?"Play turn":"Pause turn",i.currentTarget.setAttribute("aria-pressed",Ni),At("#live").textContent=Ni?"Turning paused.":"Turning.",be()});if(Lt){let i=At("#spinbtn");i.hidden=!0}function Vu(i,t){if(Lt){i.set(ae,{opacity:1},t).set("#ph",{opacity:0},t);return}i.set(ae,{opacity:1},t).add(()=>li.classList.add("wiping"),t).fromTo(li,{"--w":0},{"--w":100,duration:1.1,ease:"power2.inOut"},t).add(()=>{li.classList.remove("wiping"),gsap.set("#ph",{opacity:0})},t+1.1)}function Hu(){let i=gsap.timeline({onComplete:()=>{ul=!0}});Xt<3&&ut&&(ut.lamp.rotation.y=L_,ur.opacity,gsap.set(ae,{opacity:0}),Vu(i,.35),be()),i.from(".hud",{opacity:0,duration:Lt?.01:.5,ease:"power2.out"},.45)}var fr=At("#explode"),Hn=At(".xtag"),As=At(".xhw"),Gu=At(".xsub"),fu=At(".xprog"),Le=Object.assign(document.createElement("img"),{className:"xslice",alt:"",hidden:!0}),W_=At(".xkick"),X_=[...document.querySelectorAll(".hero h1,.hero .lead,.hero .hud")],q_={base:"Legs folded, worst pose: 25 mm to spare, simulated.",s1:"Holds 4.6 N\xB7m. The lamp at full reach needs 3.7.",s2:"A port wall failed the frame sim. The redone tubes pass at 1.14 and 1.30.",stub:"Hangs off a side port. Locks with a twist of the orange ring.",s3:"Now the weakest joint. Blocks 9 of 63 combinations.",tent:"Bendy. Hangs off a side tube.",arm:"Rated 100 g. A limit from the maths, not a test.",neck:"",head:"Two different eyes. On purpose."},oi=["base","s1","s2","stub","s3","tent","arm","neck","head"],vo=.5,yo=5/6,L={dv:0,tdv:0,Dp:0,drift:null,du:0,dal:0,camD:0,Ec:0,Pp:0,q:0,tq:0,a:0,p:0,ta:0,tp:0,E:0,T:0,from:"base",to:"base",m:0,sel:null,rot:Vi,side:1,cur:void 0},Ge=i=>Math.min(1,Math.max(0,i)),Vt=(i,t,e)=>{let n=Ge((e-i)/(t-i));return n*n*(3-2*n)};function Y_(i){let t=i.groups,e=t.base.c[2];for(let[s,r]of Object.entries(ut.groups)){let o=t[s].c,a=Math.hypot(o[0],o[1]),c=new I(0,0,(o[2]-e)*.55);a>=45&&c.add(new I(o[0]/a,o[1]/a,0).multiplyScalar(150)),r.userData.p0=r.position.clone(),r.userData.off=s==="head"?new I:c,s==="head"&&(ut.pivot.userData.p0=ut.pivot.position.clone(),ut.pivot.userData.off=c)}pu(1),ut.lamp.updateWorldMatrix(!0,!0);let n=new Mn().setFromObject(ut.lamp);ut.hx=n.max.y-n.min.y,ut.cyx=(n.max.y+n.min.y)/2,pu(0),ut.lamp.updateWorldMatrix(!0,!0)}function pu(i){for(let t of[...Object.values(ut.groups),ut.pivot])t.userData.p0&&t.position.copy(t.userData.p0).addScaledVector(t.userData.off,i)}var $_=["s1","s2","s3","neck"],Z_=.5236;function mu(i){let t=Math.max(0,oi.indexOf(i)),e=Lt?L.q>.02?1:0:Ge(L.q/.22);return i==="base"?1:Vt(t*.055,t*.055+.5,e)}function J_(){for(let[t,e]of Object.entries(ut.groups)){if(t==="head")continue;let n=mu(t),s=L.E*(1-n),r=$_.includes(t)?Z_*Vt(0,.3,n)*(1-Vt(.4,1,n)):0;if(e.position.copy(e.userData.p0).addScaledVector(e.userData.off,s),r){let a=Math.cos(r),c=Math.sin(r),l=e.position.x,h=e.position.y;e.position.x=l*a-h*c,e.position.y=l*c+h*a}e.rotation.z=r;let o=n>=.995&&L.E>.5;o&&!e.userData.seated&&t!=="base"&&Us("seat"),e.userData.seated=o}L.drift&&(ut.lamp.updateWorldMatrix(!0,!0),rx(L.drift,L.du));let i=ut.pivot;i.position.copy(i.userData.p0).addScaledVector(i.userData.off,L.E*(1-mu("head")))}function fl(){let i=fr.getBoundingClientRect(),t=innerHeight,e=Ge(-i.top/Math.max(1,i.height-t));L.ta=Ge(1-i.top/t),L.tp=Ge(e/vo),L.tq=Ge((e-vo)/(yo-vo)),L.tdv=Ge((e-yo)/(1-yo))}var K_=()=>Math.abs(L.ta-L.a)>1e-4||Math.abs(L.tp-L.p)>1e-4||Math.abs(L.tq-L.q)>1e-4||Math.abs(L.tdv-L.dv)>1e-4,j_=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e};function Q_(i){fl(),L.snapped||(L.snapped=!0,L.a=L.ta,L.p=L.tp,L.q=L.tq,L.dv=L.tdv);let t=Lt?1:Math.min(1,i*3.6);L.a+=(L.ta-L.a)*t,L.p+=(L.tp-L.p)*t,L.q+=(L.tq-L.q)*t,L.dv+=(L.tdv-L.dv)*t,Math.abs(L.tdv-L.dv)<1e-4&&(L.dv=L.tdv),Math.abs(L.tq-L.q)<1e-4&&(L.q=L.tq),Math.abs(L.ta-L.a)<1e-4&&(L.a=L.ta),Math.abs(L.tp-L.p)<1e-4&&(L.p=L.tp);let e=Lt?L.a>.5?1:0:Vt(.25,1,L.a),n=Vt(.04,.14,L.p)*(1-Vt(.92,.99,L.p)),s=Ge((L.p-.12)/.8)*(oi.length-1),r=Math.min(oi.length-2,Math.floor(s)),o=s-r,a=Lt?o>.5?1:0:Vt(.3,1,o);L.from=oi[r],L.to=oi[r+1],L.m=a;let c=Ge((o-.3)/.7),l=sx[r];L.drift=!Lt&&l&&n>.5&&c>.04&&c<.96&&L.q<.01?l:null,L.du=c,L.dal=Vt(0,.22,c)*(1-Vt(.78,1,c))*.9;let h=n>.3?a<.5?L.from:L.to:null;L.E=e,L.T=n,L.Ec=e*(1-(Lt?L.q>.02?1:0:Vt(0,.22,L.q))),L.Pp=Lt?L.q>.2?1:0:Vt(.12,.4,L.q),L.Dp=Lt?L.dv>.3?1:0:Vt(.12,.85,L.dv),J_(),fx();let d=f=>oi.indexOf(f)%2?-1:1;if(L.side=d(L.from)+(d(L.to)-d(L.from))*a,L.rot=Vi+(j_(Kc(L.from),Kc(L.to),a)-Vi)*n+(1-n)*L.p*.5,h!==L.sel&&(L.sel=h,ui()),L.sel&&n>.3)for(let[f,p]of Object.entries(ut.groups))p.userData.occ.visible=f===L.sel;else for(let f of Object.values(ut.groups))f.userData.occ.visible=!0}function Wu(){let i=L.a,t=L.T,e=innerHeight,n=Lt?.8:.66+.14*Vt(0,.8,i),s=n*(1-.62*t),r=As.offsetHeight,o=-r*.5,a=(Et.phone?80:96)-As.offsetTop;As.style.transform=`translate(0,${(o+(a-o)*t).toFixed(1)}px) scale(${s.toFixed(4)})`;let c=Ge(1-fr.getBoundingClientRect().bottom/e);As.style.opacity=((.15+.85*Vt(.2,.75,i))*(1-Vt(0,.3,c))*(1-Vt(0,.08,L.q))).toFixed(3),As.style.visibility=i<.002?"hidden":"",X_.forEach(f=>f.style.opacity=(1-Vt(.01,.11,i)).toFixed(3)),W_.style.opacity=(1-Vt(.1,.5,t)).toFixed(3),Gu.style.opacity=(Vt(.5,.9,i)*(1-Vt(0,.035,L.p))).toFixed(3);let l=L.sel||(t>.05?L.m<.5?L.from:L.to:null);if(l!==L.cur&&(L.cur=l,l&&t>.3&&Us("mod"),l)){let[,f,p]=bo.find(g=>g[0]===l);Hn.querySelector(".num").textContent=f?f+" / 08":"",Hn.querySelector(".num").hidden=!f,Hn.querySelector(".nm").textContent=p,Hn.querySelector(".nt").textContent=q_[l]||"",fu.textContent=`Module ${oi.indexOf(l)+1} of 9`}let h=1-Math.min(1,Math.abs(L.m-(L.m<.5?0:1))*2.5),d=l?Vt(.6,1,t)*h:0;if(Hn.style.opacity=d.toFixed(3),fu.style.opacity=(Vt(.6,1,t)*.9).toFixed(3),l&&d>.01&&Xt<3){let[f,p]=Fi(Gn(l)),g=Et.phone?20:Math.max(84,(Et.w-1760)/2),_=Hn.offsetWidth,m=Hn.offsetHeight,u,R;Et.phone?(u=g,R=Et.h-150-m):(u=f>Et.w/2?g:Et.w-g-_,R=Math.min(Math.max(Et.h*.42,p-m/2),Et.h-120-m)),Hn.style.transform=`translate(${u}px,${(R+(1-h)*10).toFixed(1)}px)`}}function Xu(){Le.parentNode||At(".xfront").prepend(Le);let i=(Lt?L.q>.2?1:0:Vt(.04,.2,L.q))*(1-(Lt?L.dv>.02?1:0:Vt(0,.1,L.dv)));if(Le.classList.toggle("pz",i>.01),i>.01){let t=Ps[ml(L.q).idx][0],e=`../../../assets/img/pogo/slice/S3_${t}.webp`;Le.src.endsWith(`S3_${t}.webp`)||(Le.src=e),Le.hidden=!1,Le.style.opacity=i}else Xt<3&&(Le.hidden=!0)}function tx(){if(Xt!==3)return;Le.parentNode||At(".xfront").prepend(Le),fl(),L.a=L.ta,L.p=L.tp,L.q=L.tq,L.dv=L.tdv;let i=Vt(.04,.14,L.p)*(1-Vt(.92,.99,L.p)),t=oi[Math.round(Ge((L.p-.12)/.8)*8)];if(L.T=i,L.E=1,L.sel=i>.3?t:null,L.from=L.to=t,L.m=0,Et||(Et={w:innerWidth,h:innerHeight,phone:matchMedia("(max-width: 767px)").matches}),Wu(),i>.3){let n=`../../../assets/img/pogo/slice/L_${t}.webp`;Le.src.endsWith(`L_${t}.webp`)||(Le.src=n),Le.hidden=!1,Le.style.opacity=i}else Le.hidden=!0;Xu(),Is(),Ls();let e=Et.phone?20:84;Hn.style.transform=`translate(${e}px,${innerHeight-(Et.phone?170:200)}px)`}var ex=At(".rest"),kc=document.querySelector(".nav .sheet");function pl(){if(!kc)return;let i=innerHeight*.5,t=1,e=fr.getBoundingClientRect();if(e.top<i&&e.bottom>i){let s=Ge(-e.top/Math.max(1,e.height-innerHeight));t=s<vo?2:s<yo?3:4}else if(e.bottom<=i){t=4;for(let[s,r]of[["renders",5],["build",6],["case",7]]){let o=document.getElementById(s);o&&o.getBoundingClientRect().top<i&&(t=r)}}!ut&&Xt!==3&&(As.style.opacity=Gu.style.opacity=t>2?"0":"");let n="Sheet 0"+t+" / 07";kc.textContent!==n&&(kc.textContent=n)}addEventListener("load",pl);pl();addEventListener("scroll",()=>{pl(),Xt===3&&tx(),scrollY>40&&wo(),document.body.classList.toggle("onrest",ex.getBoundingClientRect().top<60)},{passive:!0});var cr=new Ze({transparent:!0,depthTest:!1,depthWrite:!1,blending:yc,blendSrc:Mc,blendDst:$s,uniforms:{tex:{value:null},px:{value:new qt(1,1)},rad:{value:3},al:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`uniform sampler2D tex;uniform vec2 px;uniform float rad,al;varying vec2 vUv;
  void main(){vec4 s=texture2D(tex,vUv)*.2;float tw=.2;
   for(int i=0;i<16;i++){float a=float(i)*2.39996;float r=sqrt((float(i)+.5)/16.);vec2 o=vec2(cos(a),sin(a))*r*rad*px;s+=texture2D(tex,vUv+o);tw+=1.;}
   gl_FragColor=s/tw*al;}`}),qu=new Jt(new Ti(2,2),cr);qu.frustumCulled=!1;var Yu=new kn;Yu.add(qu);var Oi=null;function nx(){let i=Xt===1?.5:.34,t=Math.max(2,Math.round(_o*sn*i)),e=Math.max(2,Math.round(xo*sn*i));return Oi||(Oi=new Ye(t,e,{depthBuffer:!1})),(Oi.width!==t||Oi.height!==e)&&Oi.setSize(t,e),cr.uniforms.px.value.set(1/t,1/e),i}function $u(i){for(let[t,e]of Object.entries(ut.groups))e.visible=i(t)}function gu(i,t,e){$u(i),Bt.setRenderTarget(Oi),Bt.setClearColor(0,0),Bt.autoClear=!0,Bt.clear(),It.layers.set(0),Bt.render(hi,It),Bt.setRenderTarget(null),Bt.autoClear=!1,cr.uniforms.tex.value=Oi.texture,cr.uniforms.rad.value=t,cr.uniforms.al.value=e,Bt.render(Yu,cl)}function ix(){let i=L.sel,t=L.drift;nx();let e=Object.fromEntries(Object.entries(ut.groups).map(([n,s])=>[n,s.visible]));Bt.autoClear=!0,Bt.setRenderTarget(null),Bt.clear(),Bt.autoClear=!1,gu(n=>n!==i&&n!==t,2.2*Math.max(1,sn*.8),1),Bt.clearDepth(),$u(n=>n===i),Bt.autoClear=!0,Bt.setRenderTarget(ki),It.layers.set(1),Bt.render(hi,It),Bt.setRenderTarget(null),Bt.autoClear=!1,It.layers.set(0),Bt.render(hi,It),Bt.render(al,cl),t&&gu(n=>n===t,7*Math.max(1,sn*.8),L.dal);for(let[n,s]of Object.entries(ut.groups))s.visible=e[n];Bt.autoClear=!0}var sx={1:"tent",5:"s3"},Vc=new I,_u=new I,tl=new yn;function rx(i,t){let e=ut.groups[i],n=L.camD||Et.dist*.5;It.getWorldDirection(Vc),_u.crossVectors(Vc,It.up).normalize();let s=Gn(i),r=tl.identity()&&new I().copy(It.position).addScaledVector(Vc,n*.34);r.addScaledVector(_u,(.5-t)*n*.34*2.6*(It.aspect>1?1:1.3)).addScaledVector(It.up,(t-.5)*n*.1);let o=r.sub(s);ox(o),e.position.add(o)}function ox(i){return ut.cad.getWorldQuaternion(tl).invert(),i.applyQuaternion(tl)}var Ps=[["L01","Upright"],["L06","Reach"],["L03","Task light"],["L22","Lean"]],Oe={L01:{m:81.5,r:4.1,z:112.3},L06:{m:24.5,r:63.7,z:60.1},L03:{m:40.2,r:47.7,z:87},L22:{m:32.6,r:55.6,z:78.8}},xu=88,Di=null,si=null,ue=null,vu=!1,yu=!1,el="",rr=null,Mu=At(".zh"),bu=At(".zhud"),ax=At(".zpose"),cx=At(".zmargin"),Su=At(".zdot"),lx=At(".zcirc"),nl=(i,t,e)=>Array.isArray(i)?i.map((n,s)=>nl(n,t[s],e)):typeof i=="number"?i+(t-i)*e:i&&typeof i=="object"?Object.fromEntries(Object.keys(i).map(n=>[n,nl(i[n],t[n],e)])):i;function hx(){let i=1e9,t=-1e9,e=-1e9;for(let[n]of Ps)for(let s of Li(Es[n].config,ws))i=Math.min(i,s.M[3]),t=Math.max(t,s.M[3]),e=Math.max(e,s.M[11]);si={xl:i,xh:t,zh:e}}function ux(){if(!si||!Et)return;let{w:i,h:t,phone:e,land:n}=Et,s=2*Math.tan(nn.degToRad(It.fov)/2),r=si.xh-si.xl+150,o=si.zh+100,[a,c,l,h]=e?[.94,.44,.5,.5]:n?[.5,.8,.68,.52]:i<1100?[.9,.5,.5,.55]:[.54,.74,.65,.54];Di={d:Math.max(o/(c*s),r/(a*s*(i/t))),ty:(si.zh+60)/2,tz:-(si.xl+si.xh)/2,ox:-(l-.5)*i,oy:-(h-.5)*t}}var dx=async i=>i[0]===31&&i[1]===139?await new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer():i.buffer;async function Zu(){if(!(ue||vu||Xt>=3||!ut||gn)){vu=!0;try{let i=await(await fetch("types.json")).json(),t=await fetch("types.bin.gz");if(!t.ok)throw new Error("types "+t.status);let e=await dx(new Uint8Array(await t.arrayBuffer())),n=new He;n.rotation.x=-Math.PI/2,n.visible=!1,rr=ur.clone(),rr.clippingPlanes=[ci],rr.opacity=So;let s={};for(let[h,d]of Object.entries(i)){let f=new Ee;f.setAttribute("position",new Me(new Int16Array(e,d.lines[0],d.lines[1]),3,!0));let p=new Ee;p.setAttribute("position",new Me(new Int16Array(e,d.pos[0],d.pos[1]),3,!0)),p.setIndex(new Me(d.idx32?new Uint32Array(e,d.idx[0],d.idx[1]):new Uint16Array(e,d.idx[0],d.idx[1]),1)),s[h]={lp:f,op:p,t:d}}let r=[];for(let h of Li(Es.L01.config,ws)){let d=s[h.type];if(!d)continue;let f=new He;f.matrixAutoUpdate=!1;let p=new He;p.position.set(...d.t.c),p.scale.setScalar(d.t.s*32767);let g=new Jt(d.op,ol);g.layers.enable(1);let _=new tr(d.lp,rr);_.renderOrder=1,g.frustumCulled=_.frustumCulled=!1,p.add(g,_),f.add(p),n.add(f),r.push({name:h.name,type:h.type,g:f,occ:g,ln:_})}let o=new Jt(new no(5,16,12),new zn({color:ar,depthTest:!1,transparent:!0}));o.renderOrder=5;let a=new xs(new Ee().setFromPoints([new I,new I(0,0,-1)]),new Ai({color:ar,depthTest:!1,transparent:!0,opacity:.7}));a.renderOrder=5;let c=[];for(let h=0;h<97;h++)c.push(new I(Math.cos(h/96*6.2832)*xu,Math.sin(h/96*6.2832)*xu,.5));let l=new xs(new Ee().setFromPoints(c),new Ai({color:ar,transparent:!0,opacity:.55,depthTest:!1}));l.renderOrder=4,n.add(o,a,l),ut.lamp.add(n),ue={root:n,bodies:r,dot:o,dl:a,ring:l,cfg:null,com:null},el="",Kt.poseReady=!0,be(),setTimeout(()=>window.requestIdleCallback?requestIdleCallback(sl,{timeout:3e3}):sl(),1500)}catch(i){Kt.why.push("poses: "+i.message)}}}function ml(i){if(L.dv>0){let c=Lt?1:Vt(.03,.5,L.dv);return{i:3,bl:c,idx:c>.5?0:3,A:"L22",B:"L01",name:c>.5?"Upright":"Lean",m:Oe.L22.m+(Oe.L01.m-Oe.L22.m)*c,r:Oe.L22.r+(Oe.L01.r-Oe.L22.r)*c}}let t=Ge((i-.26)/.7)*3,e=Math.min(2,Math.floor(t)),n=t-e,s=Lt?n>.5?1:0:Vt(.55,1,n),r=Ps[e][0],o=Ps[e+1][0],a=s>.5?e+1:e;return{i:e,bl:s,idx:a,A:r,B:o,name:Ps[a][1],m:Oe[r].m+(Oe[o].m-Oe[r].m)*s,r:Oe[r].r+(Oe[o].r-Oe[r].r)*s}}var Hc=!1;function fx(){gx(),!ue&&L.q>.02&&Xt<3&&Zu(),ue&&!il&&Xt<3&&(L.q>.55||L.dv>0)&&sl();let i=!ue&&L.q>.215&&Xt<3&&!gn&&L.dv<.1;(i||Hc)&&(i!==Hc&&(Hc=i,ae.style.visibility=i?"hidden":"visible"),i?Xu():Xt<3&&(Le.hidden=!0,Le.classList.remove("pz")));let t=L.q,e=t>.215&&!!ue&&Xt<3;if(e!==yu){yu=e;for(let[o,a]of Object.entries(ut.groups))o!=="base"&&(a.visible=!e);ue&&(ue.root.visible=e)}if(!e)return;rr.opacity=So;let n=Lt?L.dv>.02?0:1:1-Vt(.01,.1,L.dv);ue.dot.material.opacity=n,ue.dl.material.opacity=.7*n,ue.ring.material.opacity=.55*n,ue.dot.visible=ue.dl.visible=ue.ring.visible=n>.01;let s=ml(t),r=s.A+s.B+s.bl.toFixed(4);if(r!==el){el=r;let o=nl(Es[s.A].config,Es[s.B].config,s.bl),a=Li(o,ws),c={};for(let h of a)c[h.name]=h.M;for(let h of ue.bodies)h.g.matrix.set(...c[h.name]),h.g.matrixWorldNeedsUpdate=!0;let l=Fc(o,ws,a).com;ue.com=l,ue.dot.position.set(l[0],l[1],l[2]),ue.dl.geometry.setFromPoints([new I(l[0],l[1],l[2]),new I(l[0],l[1],.5)])}}Kt.com=()=>{let i={};if(!ue)return null;for(let[t]of Ps){let e=Fc(Es[t].config,ws).com,n=Math.hypot(e[0],e[1]);i[t]={r:+n.toFixed(2),z:+e[2].toFixed(2),simR:Oe[t].r,simZ:Oe[t].z,dR:+(n-Oe[t].r).toFixed(2),dZ:+(e[2]-Oe[t].z).toFixed(2)}}return i};var wu="";function Is(){let i=L.q,t=(Lt?i>.2?1:0:Vt(.2,.34,i))*(1-(Lt?L.dv>.02?1:0:Vt(0,.1,L.dv)));if(Mu.style.opacity=t.toFixed(3),bu.style.opacity=t.toFixed(3),Mu.style.visibility=bu.style.visibility=t<.01?"hidden":"visible",Sn.style.display=i>.02?"none":"",t<.01)return;let e=ml(i),n=ue&&ue.com?[ue.com[0],ue.com[1]]:[e.r,0],s=Math.hypot(n[0],n[1]),r=Math.floor(e.m+.5),o=`${e.idx}|${r}|${Math.round(s)}`;Su.setAttribute("cx",n[0].toFixed(1)),Su.setAttribute("cy",(-n[1]).toFixed(1)),lx.setAttribute("r",s.toFixed(1)),o!==wu&&(wu=o,ax.textContent=`Pose ${e.idx+1} of 4 \xB7 ${e.name}`,cx.textContent=`${r} mm to spare, simulated.`,Is.once?L.dv<.02&&Us("pose"):Is.once=!0,Is.once===!0?Is.once=2:At("#live").textContent=`${e.name}. ${r} millimetres to spare, simulated.`)}var Gc={ring:15230492,joint_low:12095807,joint_sw:12095807,joint_hi:12095807,joint1_sw:12095807,joint1_hi:12095807,neck_low:12095807,neck_pan:12095807,m3screw:12095807},ci=new tn(new I(0,1,0),1e4),or=new tn(new I(0,-1,0),-1e4);ol.clippingPlanes=[ci];ur.clippingPlanes=[ci];var il=!1,Ui=null,Eu=null,go={x:.27,top:.3,hl:.72},px=At(".room"),Tu=At(".band"),Au=At(".dh"),sr=At(".stillh");function Ju(){let i=innerWidth,t=innerHeight,e=matchMedia("(max-width: 767px)").matches,n=e?20:Math.max(84,(i-1760)/2);if(e){let o=Math.min(i,t*.62),a=o*1.25;return{sx:(i-o)/2,sy:Math.max(64,(t-a)*.3),sw:o,sh:a}}let s=Math.min(t-100,(i-2*n)*.62*1.25),r=s*.8;return{sx:i-n-r,sy:72,sw:r,sh:s}}function mx(){if(!Et||!ut)return;let i=Ju(),{w:t,h:e}=Et,n=nn.degToRad(It.fov),s=go.hl*i.sh/e,r=i.sy+(go.top+go.hl/2)*i.sh,o=i.sx+go.x*i.sw;Ui={d:ut.h/s/2/Math.tan(n/2),ty:ut.cy,tz:0,ox:-(o-t/2),oy:-(r-e/2)}}async function sl(){if(il||!ue||!ut)return;il=!0;let i=()=>new Promise(l=>setTimeout(l,40)),t=Xt===1,e=new gs(Bt);Eu=e.fromScene(new po,.04).texture,e.dispose(),hi.environment=Eu,await i();let n={},s=l=>n[l]||(n[l]=new Ri({color:Gc[l]||1381656,metalness:Gc[l]?.85:.55,roughness:Gc[l]?.32:.42,clippingPlanes:[or],envMapIntensity:1.1,flatShading:!t})),r=l=>{let h=l.attributes.position,d=new Float32Array(h.count*3);for(let p=0;p<h.count;p++)d[p*3]=h.getX(p),d[p*3+1]=h.getY(p),d[p*3+2]=h.getZ(p);let f=new Ee;return f.setAttribute("position",new Me(d,3)),f.setIndex(l.index.clone()),ou(f.toNonIndexed(),.6)},o={};for(let l of ue.bodies)o[l.type]||(o[l.type]=t?r(l.occ.geometry):l.occ.geometry,t&&await i());for(let l of ue.bodies){let h=new Jt(o[l.type],s(l.type));h.frustumCulled=!1,l.g.children[0].add(h)}let a=ut.groups.base,c=t?r(a.userData.occ.geometry):a.userData.occ.geometry;t&&await i(),a.add(Object.assign(new Jt(c,s("base")),{frustumCulled:!1})),Kt.shaded=!0,be()}var Ku=()=>Lt?L.dv>.3?1e4:-1e4:-30+(ut?ut.h*1.08+60:700)*Vt(.1,.62,L.dv);function gx(){let i=L.dv,t=Ku();!Kt.shaded&&i>0?(ci.constant=1e4,or.constant=-1e4):i>0&&i<1?(ci.constant=-t,or.constant=t):i>=1?(ci.constant=-1e4,or.constant=1e4):(ci.constant=1e4,or.constant=-1e4)}function Ls(){let i=L.dv,t=Lt?i>.3?1:0:Vt(.3,.7,i);gt.on&&gt.drone&&gt.drone.set(t),i>.1&&Ls.pv<=.1&&Us("sweep",!1),i>.82&&Ls.pv<=.82&&Us("land",!1),Ls.pv=i,px.style.opacity=t.toFixed(3),document.body.classList.toggle("dark",t>.5);let e=Ku();Tu.style.opacity=(!Lt&&Xt<3&&Kt.shaded&&i>.06&&i<.64?Vt(.06,.14,i)*(1-Vt(.56,.64,i)):0).toFixed(3),Et&&Xt<3&&ut&&(Bi.set(0,e,0),Bi.project(It),Tu.style.transform=`translateY(${((-Bi.y*.5+.5)*Et.h).toFixed(1)}px)`),Au.style.opacity=(Lt?i>.6?1:0:Vt(.6,.82,i)).toFixed(3),Au.style.visibility=i>.55?"visible":"hidden";let n=0,s=Ju();if(Xt<3){let r=fr.getBoundingClientRect().bottom,o=innerHeight;ae.style.opacity=r<o?Ge((r-o*.82)/(o*.18)).toFixed(3):"1"}sr.style.opacity=n.toFixed(3),sr.hidden=!(n>.002),Object.assign(sr.style,{left:s.sx+"px",top:s.sy+"px",width:s.sw+"px",height:s.sh+"px"}),n>.002&&!sr.src.endsWith("still-hero.webp")&&(sr.src="../../../assets/img/pogo/still-hero.webp"),Xt<3&&ae.dataset.dv!==(n>.995?"1":"0")&&(ae.dataset.dv=n>.995?"1":"0",ae.style.visibility=n>.995?"hidden":"visible")}var _x=72,ju=60/_x,gt={on:!1,ctx:null,master:null,drone:null,timer:0,nextBeat:0,lastAcc:{}};function Qu(i,t){let e=i.createBuffer(1,Math.ceil(i.sampleRate*t),i.sampleRate),n=e.getChannelData(0),s=1;for(let r=0;r<n.length;r++)s=s*16807%2147483647,n[r]=s/2147483647*2-1;return e}function td(i,t,e,n,s,r){t.gain.cancelScheduledValues(e),t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+r)}function Vn(i,t,e,n,s,r,o,a,c="sine"){let l=i.createOscillator(),h=i.createGain();l.type=c,l.frequency.setValueAtTime(n,e),s!==n&&l.frequency.exponentialRampToValueAtTime(s,e+r+o),td(i,h,e,r,a,o),l.connect(h).connect(t),l.start(e),l.stop(e+r+o+.05)}function Ru(i,t,e,n,s,r,o){let a=i.createBufferSource();a.buffer=Qu(i,.2);let c=i.createBiquadFilter(),l=i.createGain();c.type="bandpass",c.frequency.value=n,c.Q.value=s,td(i,l,e,.002,o,r),a.connect(c).connect(l).connect(t),a.start(e),a.stop(e+r+.05)}var lr={seat:(i,t,e)=>{Ru(i,t,e,2400,5,.03,.5),Vn(i,t,e,190,80,.002,.09,.4),Vn(i,t,e+.045,95,70,.002,.07,.22)},mod:(i,t,e)=>{Vn(i,t,e,200,90,.003,.16,.34),Ru(i,t,e,900,1.2,.05,.12)},pose:(i,t,e)=>{Vn(i,t,e,660,660,.002,.07,.16),Vn(i,t,e+.07,440,440,.002,.1,.16)},tick:(i,t,e)=>{Vn(i,t,e,1800,1500,.001,.025,.1)},sweep:(i,t,e)=>{let n=i.createBufferSource();n.buffer=Qu(i,2.6);let s=i.createBiquadFilter(),r=i.createGain();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(260,e),s.frequency.exponentialRampToValueAtTime(3200,e+2.2),r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.28,e+1.6),r.gain.exponentialRampToValueAtTime(1e-4,e+2.4),n.connect(s).connect(r).connect(t),n.start(e),n.stop(e+2.6),Vn(i,t,e,110,440,.2,2,.08,"sawtooth")},land:(i,t,e)=>{[110,164.8,220,277.2].forEach((n,s)=>Vn(i,t,e+s*.03,n,n,.25,2.4,.11))},kick:(i,t,e)=>{Vn(i,t,e,70,42,.003,.18,.2)}};function ed(i,t){let e=i.createGain(),n=i.createBiquadFilter(),s=i.createOscillator(),r=i.createGain();return e.gain.value=.07,n.type="lowpass",n.frequency.value=380,n.Q.value=.7,[[55,"sine",0],[82.5,"sine",4],[110.2,"triangle",-5]].forEach(([o,a,c])=>{let l=i.createOscillator();l.type=a,l.frequency.value=o,l.detune.value=c,l.connect(n),l.start()}),s.frequency.value=.07,r.gain.value=120,s.connect(r).connect(n.frequency),s.start(),n.connect(e).connect(t),{set:o=>{n.frequency.setTargetAtTime(380+520*o,i.currentTime,.8),e.gain.setTargetAtTime(.07+.05*o,i.currentTime,.8)}}}function xx(){if(!gt.ctx){let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;gt.ctx=new i,gt.master=gt.ctx.createGain(),gt.master.gain.value=0;let t=gt.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,gt.master.connect(t).connect(gt.ctx.destination),gt.drone=ed(gt.ctx,gt.master)}return gt.ctx.resume(),gt.master.gain.cancelScheduledValues(gt.ctx.currentTime),gt.master.gain.setValueAtTime(gt.master.gain.value,gt.ctx.currentTime),gt.master.gain.linearRampToValueAtTime(.7,gt.ctx.currentTime+.6),gt.nextBeat=gt.ctx.currentTime+.3,clearInterval(gt.timer),gt.timer=setInterval(()=>{if(gt.on)for(;gt.nextBeat<gt.ctx.currentTime+.25;)lr.kick(gt.ctx,gt.master,gt.nextBeat),gt.nextBeat+=ju},100),!0}function vx(){gt.ctx&&(clearInterval(gt.timer),gt.master.gain.cancelScheduledValues(gt.ctx.currentTime),gt.master.gain.setValueAtTime(gt.master.gain.value,gt.ctx.currentTime),gt.master.gain.linearRampToValueAtTime(0,gt.ctx.currentTime+.25),setTimeout(()=>{!gt.on&&gt.ctx&&gt.ctx.suspend()},320))}var Rs=0;function Us(i,t=!0){let e=performance.now();e-(gt.lastAcc[i]||-1e9)<90||(gt.lastAcc[i]=e,gt.on&&gt.ctx&&gt.ctx.state==="running"&&lr[i](gt.ctx,gt.master,gt.ctx.currentTime+.005))}var hr=At("#sndbtn");function yx(){let i=!gt.on;if(i&&!xx()){At("#live").textContent="Sound is not available in this browser.";return}gt.on=i,i||vx(),hr.setAttribute("aria-pressed",i),hr.querySelector(".sndl").textContent=i?"Sound on":"Sound off",hr.setAttribute("aria-label",i?"Sound: on. Turn off":"Sound: off. Turn on"),document.body.classList.toggle("snd-on",i),At("#live").textContent=i?"Sound on.":"Sound off."}hr&&hr.addEventListener("click",yx);document.addEventListener("visibilitychange",()=>{gt.ctx&&(document.hidden?gt.ctx.suspend():gt.on&&gt.ctx.resume())});Kt.sndTest=async()=>{let t=new OfflineAudioContext(1,617400,44100),e=t.createGain();e.gain.value=.7;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,e.connect(n).connect(t.destination),ed(t,e).set(.5);let r={seat:2,mod:4,pose:6,tick:8,sweep:9,land:12};for(let g=.3;g<13;g+=ju)lr.kick(t,e,g);for(let[g,_]of Object.entries(r))lr[g](t,e,_);let o=await t.startRendering(),a=o.getChannelData(0),c=0,l=0;for(let g of a)c=Math.max(c,Math.abs(g)),l+=g*g;let h=new OfflineAudioContext(1,44100*14,44100),d=h.createGain();d.connect(h.destination);for(let[g,_]of Object.entries(r))lr[g](h,d,_);let f=(await h.startRendering()).getChannelData(0),p={};for(let[g,_]of Object.entries(r)){let m=-1;for(let u=Math.floor(_*44100);u<Math.floor((_+.3)*44100);u++)if(Math.abs(f[u])>.01){m=(u/44100-_)*1e3;break}p[g]=m<0?null:+m.toFixed(2)}return{peakDb:+(20*Math.log10(c)).toFixed(1),rmsDb:+(10*Math.log10(l/a.length)).toFixed(1),onsetMsAfterTrigger:p}};function Mx(){let i=+(rn.get("scale")||1),t=2400*i,e=1350*i,n=+(rn.get("tx")??-70),s=[1449.667012509265,172.60518066504113,312.04632780085734],r=[-175.26410126918418,-190.56661700458395,459.2868007453785],o=[r[0]+n,r[1],255],a=[0,1,2].map(l=>o[l]+(s[l]-o[l])*1.32);a[2]=330;let c=l=>new I(l[0],l[2],-l[1]);ae.style.cssText=`position:fixed;left:0;top:0;width:${t}px;height:${e}px;opacity:1;z-index:99;background:#fafafa`,Bt.setPixelRatio(1),Bt.setSize(t,e,!1),ki.setSize(t,e),on.uniforms.res.value.set(t,e),It.aspect=t/e,It.fov=nn.radToDeg(2*Math.atan(e/2/(50/36*t))),It.position.copy(c(a)),It.up.set(0,1,0),It.lookAt(c(o)),It.near=300,It.far=4e3,It.updateProjectionMatrix(),on.uniforms.near.value=It.near,on.uniforms.far.value=It.far,on.uniforms.r.value=+(rn.get("r")||2.3*i),rn.get("k")&&(on.uniforms.k.value=+rn.get("k")),ur.opacity=+(rn.get("op")||1),hl(),Kt.proof=!0}I_().catch(i=>{console.error(i),Mo(3,"boot: "+i.message),Kt.ready=!0,Iu(),Hu()});Ls.pv=0;
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
