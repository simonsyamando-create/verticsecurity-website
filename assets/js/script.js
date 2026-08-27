const button=document.querySelector('.menu-toggle');const menu=document.querySelector('.menu');if(button){button.addEventListener('click',()=>{menu.classList.toggle('open');button.setAttribute('aria-expanded',menu.classList.contains('open'))})}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Website enquiry: '+(d.get('service')||'General'));const body=encodeURIComponent(`Name: ${d.get('name')}
Company: ${d.get('company')}
Email: ${d.get('email')}
Phone: ${d.get('phone')}
Service: ${d.get('service')}

Project details:
${d.get('message')}`);window.location.href=`mailto:info@verticsecurity.com.au?subject=${subject}&body=${body}`})}