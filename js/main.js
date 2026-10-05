// ===== EDITE AQUI: número do WhatsApp com DDI + DDD (somente dígitos) =====
const WHATSAPP_NUMBER = "5521974566253";
const WHATSAPP_MSG = "Olá! Vim pelo site da MATC e gostaria de um orçamento.";
document.querySelectorAll("a.wa").forEach(a=>a.href="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(WHATSAPP_MSG));

const svc=[
["Fotos e Impressões","Fotos, revelações, polaroid, impressão colorida e P&B, xerox e plastificação.","M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6","#0795A0"],
["Personalizados","Canecas, copos, azulejos, almofadas, chaveiros, quadros, brindes e muito mais.","M4 9h16v4H4zM6 13v8h12v-8M12 9v12M12 9c-3 0-4-4-1-4s1 4 1 4zm0 0c3 0 4-4 1-4","#F58220"],
["Camisas e Vestuário","Camisetas personalizadas, camisas esportivas, polo, cropped, baby look, regatas, bermudas, bonés e mais.","M8 3l-6 3 2 5 3-1v11h10V10l3 1 2-5-6-3c-1 2-3 3-4 3S9 5 8 3z","#062D43"],
["DTF e Sublimação","Impressão DTF, transfer e sublimação em diversos produtos.","M6 9V3h12v6M6 18H4v-8h16v8h-2M6 14h12v7H6z","#F58220"],
["Artigos para Festas","Sacolinha personalizada, toppers, adesivos, tags, convites e lembrancinhas.","M5 21l4-12 7 7zM14 4v2M19 8h2M17 12l2-1M9 4l1 2","#0795A0"],
["Papelaria Personalizada","Agendas, cadernos, blocos, adesivos, canetas, ímãs, planners e muito mais.","M6 3h12v18H6zM9 7h6M9 11h6M3 6h3M3 10h3M3 14h3","#062D43"],
["Adesivos e Etiquetas","Adesivos personalizados para produtos, embalagens, eventos e muito mais.","M4 4h10l6 6v10H4zM14 4v6h6","#0795A0"],
["Encadernação","Encadernação de trabalhos, apostilas e materiais personalizados.","M5 3h13v18H5zM5 7H2M5 12H2M5 17H2M9 8h6","#F58220"],
["Brindes Corporativos","Brindes personalizados para sua empresa, eventos e ações promocionais.","M12 3l2.500 5 5.500.8-4 3.900.9 5.500-4.900-2.600-4.900 2.600.9-5.500-4-3.900 5.500-.8z","#062D43"],
["Comunicação Visual","Banners, faixas, placas, adesivos, ímãs e materiais de divulgação.","M3 4h18v12H3zM8 20h8M12 16v4","#0795A0"]];
const acc=[
["Abertura de Empresa","Formalização e regularização.","M6 3h9l4 4v14H6zM9 12h7M9 16h7"],
["Folha de Pagamento","Cálculo e gestão.","M9 8a3 3 0 100-.1M3 20c0-4 3-6 6-6s6 2 6 6M16 6a3 3 0 010 6M18 14c2 .5 3 2.500 3 6"],
["Emissão de Guias","INSS, DAS e outros.","M12 3a9 9 0 109 9h-9zM15 3a9 9 0 016 6h-6z"],
["Impostos","Orientação e declaração.","M4 21V12h4v9M10 21V6h4v15M16 21V9h4v12"],
["Consultoria Contábil","Para empresas e autônomos.","M6 3h12v18H6zM9 6h6v3H9zM9 13h1M12 13h1M15 13h1M9 17h1M12 17h1M15 17h1"],
["Atendimento Personalizado","Soluções de acordo com a sua necessidade.","M4 5h16v11H9l-5 4zM9 10h.01M12 10h.01M15 10h.01"]];
const ico=(d,c)=>`<svg class="${c}" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
cards.innerHTML=svc.map(s=>`<article class="card fade"><div class="thumb" style="background:${s[3]}">${ico(s[2],"")}</div><div><h3>${s[0]}</h3><p>${s[1]}</p></div></article>`).join("");
document.getElementById("acc").innerHTML=acc.map(a=>`<div>${ico(a[2],"ic")}<h3>${a[0]}</h3><p>${a[1]}</p></div>`).join("");
document.getElementById("y").textContent=new Date().getFullYear();
const nav=document.getElementById("nav"),mb=document.getElementById("menu");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>{nav.classList.remove("open");mb.setAttribute("aria-expanded",false)});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll(".fade").forEach(el=>io.observe(el));
