function showQRCode(e){var t=document.createElement("canvas"),r=t.getContext("2d");try{var a=new QRCode(15,QRErrorCorrectLevel.L);a.addData(e),a.make()}catch(e){var o=document.createElement("p"),n=document.createTextNode("QR Code FAIL! "+e);return o.appendChild(n),o}var d=a.getModuleCount();t.setAttribute("height",5*d+10),t.setAttribute("width",5*d+10);if(t.getContext)for(var l=0;l<d;l++)for(var c=0;c<d;c++)a.isDark(l,c)?r.fillStyle="rgb(0,0,0)":r.fillStyle="rgb(255,255,255)",r.fillRect(5*c+5,5*l+5,5,5);return t.toDataURL("image/png")}