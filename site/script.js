// Gallery images, tabs, navigation, and contact email draft.
document.getElementById('year').textContent = new Date().getFullYear();
    const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-button');
    const updateNav=()=>nav.classList.toggle('scrolled',window.scrollY>35);
    updateNav();window.addEventListener('scroll',updateNav,{passive:true});
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
    document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');}));
    const galleries={
      living:{title:'Living spaces',images:[
        ['assets/living.webp','Warm living room with fireplace, pale seating and broad windows'],
        ['assets/living-2.webp','Living room with travertine fireplace and garden views'],
        ['assets/living-3.webp','Oak paneled reading corner with sculptural seating'],
        ['assets/living-4.webp','Open plan family room with a stone fireplace'],
        ['assets/living-5.webp','Evening living room with walnut cabinetry and stone hearth'],
        ['assets/living-classic.webp','Classic living room with paneled walls and traditional fireplace','Classic']
      ]},
      kitchens:{title:'Kitchens',images:[
        ['assets/kitchen.webp','Kitchen with oak cabinetry and a pale stone island'],
        ['assets/kitchen-2.webp','Walnut kitchen with marble island and bronze details'],
        ['assets/kitchen-3.webp','Bright kitchen with skylight and limestone island'],
        ['assets/kitchen-4.webp','Architectural kitchen with charcoal cabinetry and oak island'],
        ['assets/kitchen-5.webp','Country modern kitchen with handmade tile and garden view'],
        ['assets/kitchen-classic.webp','Classic kitchen with inset cabinets and marble island','Classic']
      ]},
      bedrooms:{title:'Bedrooms',images:[
        ['assets/bedroom.webp','Calm bedroom with oak detailing and natural light'],
        ['assets/bedroom-2.webp','Bedroom with walnut headboard and soft lamps'],
        ['assets/bedroom-3.webp','Light bedroom with limewash walls and linen bed'],
        ['assets/bedroom-4.webp','Guest bedroom with custom oak cabinetry'],
        ['assets/bedroom-5.webp','Evening bedroom with timber joinery and charcoal wall'],
        ['assets/bedroom-classic.webp','Classic bedroom with wall moldings and upholstered headboard','Classic']
      ]},
      bathrooms:{title:'Bathrooms',images:[
        ['assets/bath-modern.webp','Modern bathroom with limestone, oak vanity and freestanding tub'],
        ['assets/bath-classic.webp','Classic bathroom with marble, paneled vanity and polished fixtures','Classic']
      ]},
      dining:{title:'Dining areas',images:[
        ['assets/dining-modern.webp','Modern dining room with oak table and tall garden doors'],
        ['assets/dining-classic.webp','Classic dining room with wall paneling and brass chandelier','Classic']
      ]},
      kids:{title:'Kids’ rooms',images:[
        ['assets/kids-modern.webp','Contemporary children’s room with oak storage and twin beds'],
        ['assets/kids-classic.webp','Classic children’s room with shelves and soft blue paneling','Classic']
      ]},
      exteriors:{title:'Exteriors',images:[
        ['assets/residence.webp','Modern dark timber and stone home overlooking a landscape'],
        ['assets/framing.webp','Timber structure during construction of a home'],
        ['assets/exterior-modern.webp','Contemporary renovated home exterior with stone and timber'],
        ['assets/exterior-classic.webp','Restored classic home exterior with front porch and mature trees','Classic']
      ]}
    };
    let category='living',selectedImage=0;
    const tabs=[...document.querySelectorAll('.space-tab')],panel=document.getElementById('space-panel'),mainImage=document.getElementById('gallery-main'),thumbs=document.getElementById('gallery-thumbs');
    function renderGallery(){
      const gallery=galleries[category];
      mainImage.src=gallery.images[selectedImage][0];
      mainImage.alt='Illustrative '+gallery.images[selectedImage][1].toLowerCase();
      document.getElementById('gallery-title').textContent=gallery.title;
      document.getElementById('gallery-index').textContent=String(selectedImage+1).padStart(2,'0')+' / '+String(gallery.images.length).padStart(2,'0');
      document.getElementById('gallery-style').textContent=(gallery.images[selectedImage][2]||'Modern')+' concept';
      thumbs.setAttribute('aria-label','More '+gallery.title.toLowerCase()+' images');
      thumbs.replaceChildren();
      gallery.images.forEach(([src,alt],index)=>{
        if(index===selectedImage)return;
        const button=document.createElement('button'),img=document.createElement('img'),number=document.createElement('span');
        button.className='space-thumb';button.type='button';button.setAttribute('aria-label','View '+gallery.title+' image '+(index+1)+': '+alt);
        img.src=src;img.alt='';img.loading='lazy';number.textContent=String(index+1).padStart(2,'0');
        button.append(img,number);button.addEventListener('click',()=>{selectedImage=index;renderGallery();});thumbs.append(button);
      });
    }
    function selectCategory(next,focus=false){
      category=next;selectedImage=0;
      tabs.forEach(tab=>{const active=tab.dataset.category===next;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;if(active){panel.setAttribute('aria-labelledby',tab.id);if(focus)tab.focus();}});
      renderGallery();
    }
    tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectCategory(tab.dataset.category));tab.addEventListener('keydown',event=>{if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight'&&event.key!=='Home'&&event.key!=='End')return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectCategory(tabs[next].dataset.category,true);});});
    renderGallery();
    const projectForm=document.getElementById('project-form');
    projectForm.addEventListener('submit',event=>{
      event.preventDefault();
      const details=new FormData(projectForm);
      const subject='HPG project inquiry — '+details.get('location');
      const body=['Name: '+details.get('name'),'Email: '+details.get('email'),'Location: '+details.get('location'),'Project type: '+details.get('type'),'','Project details:',''+details.get('message')].join('\n');
      document.getElementById('form-status').textContent='Your email app should open with a draft. Nothing has been sent yet.';
      window.location.href='mailto:info@hpgdesignbuild.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
