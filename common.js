
const STORAGE_KEY = "pedido_servicios_abg_v1";
const SESSION_KEY = "pedido_servicios_abg_session";

function loadDB(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw) return JSON.parse(raw);
  const db = {
    orders: [],
    responsables: APP_DATA.services.map(s=>({service:s,principal:"",email:"",substitute:"",substituteEmail:"",active:true})),
    periods: APP_DATA.periods,
    mailConfig: APP_DATA.emailDefaults
  };
  saveDB(db);
  return db;
}
function saveDB(db){ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
function getSession(){ const s = sessionStorage.getItem(SESSION_KEY); return s?JSON.parse(s):null; }
function setSession(u){ sessionStorage.setItem(SESSION_KEY, JSON.stringify(u)); }
function logout(){ sessionStorage.removeItem(SESSION_KEY); location.href="index.html"; }

function requireRole(role){
  const s=getSession();
  if(!s){ location.href="index.html"; return null; }
  if(role && s.role!==role){ location.href=s.role==="pharmacy"?"farmacia.html":"pedido.html"; return null; }
  return s;
}
function nowCL(){
  return new Date().toLocaleString("es-CL");
}
function todayISO(){
  const d=new Date(); return d.toISOString().slice(0,10);
}
function getCurrentPeriod(){
  const today = todayISO();
  let p = APP_DATA.periods.find(x=>today<=x.close);
  return p || APP_DATA.periods[APP_DATA.periods.length-1];
}
function orderId(service, periodLabel){
  const slug=service.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"").toUpperCase();
  return "PED-"+periodLabel.replace(/\D/g,"").slice(-4)+"-"+slug;
}
function esc(s){
  return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
