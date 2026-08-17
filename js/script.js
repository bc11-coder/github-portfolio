// Basic interactivity: mobile nav toggle, smooth scroll, reveal on scroll with IntersectionObserver
(function(){
	'use strict';

	// Year in footer
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('primary-navigation');
	if(navToggle && nav){
		navToggle.addEventListener('click', ()=>{
			const visible = nav.getAttribute('data-visible') === 'true';
			nav.setAttribute('data-visible', String(!visible));
			navToggle.setAttribute('aria-expanded', String(!visible));
		});
	}

	// Smooth scroll for internal links
	document.addEventListener('click', (e)=>{
		const a = e.target.closest('a');
		if(!a) return;
		const href = a.getAttribute('href');
		if(href && href.startsWith('#')){
			const id = href.slice(1);
			const target = document.getElementById(id);
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
				if(window.innerWidth <= 540 && nav){nav.setAttribute('data-visible','false');navToggle.setAttribute('aria-expanded','false');}
			}
		}
	});

	// SCROLL REVEAL SETUP
	document.addEventListener('DOMContentLoaded', ()=>{
		const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

		// selectors to reveal
		const selectors = [
			'.hero-left h1',
			'.hero-left .hero-sub',
			'.hero-ctas .btn',
			'.section-header h2',
			'.section-sub',
			'.about-card',
			'.skill-card',
			'.project-card',
			'.contact-card'
		];

		// gather elements and mark initial state
		let revealElems = [];
		selectors.forEach(sel=>{
			document.querySelectorAll(sel).forEach((el)=>{
				// add base class so CSS hides them initially
				el.classList.add('reveal');
				revealElems.push(el);
			});
		});

		// assign ordering for groups for stagger (project cards use data-index if present)
		document.querySelectorAll('.skill-card').forEach((el,i)=>el.dataset.order = String(i));
		document.querySelectorAll('.contact-card').forEach((el,i)=>el.dataset.order = String(i));
		document.querySelectorAll('.project-card').forEach((el,i)=>{ if(!el.dataset.index) el.dataset.index = String(i+1); });

		if(prefersReduced){
			// make everything visible immediately
			revealElems.forEach(el=>{ el.classList.add('visible'); el.style.transitionDelay = '' });
			return;
		}

		const io = new IntersectionObserver((entries, obs)=>{
			entries.forEach(entry=>{
				if(!entry.isIntersecting) return;
				const el = entry.target;
				// compute delay
				let delay = 0;
				if(el.classList.contains('project-card')){
					const idx = Number(el.dataset.index || 0) - 1; // data-index starts at 1
					delay = Math.max(0, idx) * 120;
				} else if(el.dataset.order){
					delay = Number(el.dataset.order) * 100;
				}
				el.style.transitionDelay = `${delay}ms`;
				el.classList.add('visible');
				obs.unobserve(el);
				// clear delay after animation completes to avoid side-effects
				setTimeout(()=>{ el.style.transitionDelay = ''; }, 1200 + delay);
			});
		}, {threshold: 0.12});

		revealElems.forEach(el => io.observe(el));
	});

	// Enhance keyboard accessibility for project cards (make whole card focusable)
	document.querySelectorAll('.project-card').forEach(card=>{
		card.setAttribute('tabindex','0');
		card.addEventListener('keydown', (ev)=>{
			if(ev.key==='Enter' || ev.key===' '){
				const link = card.getAttribute('href');
				if(link) location.href = link;
			}
		});
	});

})();
