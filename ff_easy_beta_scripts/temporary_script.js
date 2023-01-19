// LiveSubmit
(function () {
	let myScript = () => {
		let sender = document.querySelector('.fast.send .forminput');
		if (sender && (document.domain != 'graficarulez.forumfree.it' || (document.domain == 'graficarulez.forumfree.it' && localStorage.getItem('live-submit') == 'true'))) {
			sender.addEventListener('click', function (event) {
				event.preventDefault();

				if (document.REPLIER.enablesig.checked === false) {
					document.REPLIER.enablesig.value = 0;
				} else {
					document.REPLIER.enablesig.value = 1;
				}

				if (document.REPLIER.track_topic.checked === false) {
					document.REPLIER.track_topic.value = 0;
				} else {
					document.REPLIER.track_topic.value = 1;
				}

				let st = document.REPLIER.st.value;
				let act = document.REPLIER.act.value;
				let s = document.REPLIER.s.value;
				let f = document.REPLIER.f.value;
				let CODE = document.REPLIER.CODE.value;
				let t = document.REPLIER.t.value;
				let post = encodeURIComponent(document.querySelector('.fast.send textarea').value);
				let enablesig = document.REPLIER.enablesig.value;
				let track_topic = document.REPLIER.track_topic.value;
				let cnt = 'st=' + st + '&act=' + act + '&s=' + s + '&f=' + f + '&CODE=' + CODE + '&t=' + t + '&Post=' + post + '&ffm=1' + '&enablesig=' + enablesig + '&track_topic=' + track_topic;
				if (document.REPLIER.mod_options) {
					let mod_options = document.REPLIER.mod_options.value;
					let TopicTime = document.REPLIER.TopicTime.value;
					cnt += '&mod_options=' + mod_options + '&TopicTime=' + TopicTime;
				}

				if (post.length === 0) {
					window.RuleZFramework.components.progressBar('Pubblicazione in corso...', 'Devi inserire un messaggio per poterlo inviare! ❌', 0, 10, () => {
						// do something...
					});
				}

				if (post.length !== 0 && post.length < 2) {
					window.RuleZFramework.components.progressBar('Pubblicazione in corso...', "Devi inserire almeno due caratteri per inviare un messaggio! ❌", 0, 10, () => {
						// do something...
					});
				}

				window.RuleZFramework.requests.postData('POST', 'document', 'https://' + document.domain + '/', cnt, function (res) {
					liveSubmitCall(res);
				});

				let current_topic_id = new URLSearchParams(window.location.search);
				localStorage.removeItem('t' + current_topic_id.get('t'));
			});

			function liveSubmitCall(res) {
				let doc_post = document.querySelector('.post:last-child');
				let doc_author = doc_post.querySelector('.nick').textContent;
				let doc_content = document.querySelector('.post:last-child .right tr:nth-child(2) td').innerHTML;

				let new_post = res.querySelector('.mainbg li:last-child');
				new_post.classList.toggle('submit-post');
				let newContent = res.querySelector('.post:last-child .right tr:nth-child(2) td').innerHTML;

				if (new_post.id !== doc_post.id || new_post.id === doc_post.id && Commons.user.nickname === doc_author) {
					if (doc_content !== newContent) {
						window.RuleZFramework.components.progressBar('Pubblicazione in corso...', 'Pubblicazione avvenuta con successo! ✔️', 0, 5, () => {
							let lcn = document.querySelector('.mainbg');

							let title = document.createElement('div');
							title.className = 'mtitle';
							title.innerHTML = "<span class='ttl'>Pubblicato Adesso</span>";
							title.style.animation = 'fadeIn 1s linear';
							lcn.appendChild(title);

							// info per l'utente
							let titleInfo = document.querySelector('.ttl');
							titleInfo.addEventListener('click', function () {
								window.RuleZFramework.components.modalCreateFrom('Live Submit - Informazioni', 'live-submit-modal', 1, 0, "Questo script velocizza e rende più fluido l'invio dei commenti.\n Per visualizzare i bottoni 'Modifca/Citazione Rapida' premi f5 ❌");
							});

							new_post.style.animation = 'fadeIn 1s linear';
							lcn.appendChild(new_post);

							new_post.scrollIntoView({ block: 'end', behavior: 'smooth' });
							document.querySelector('.fast.send textarea').value = '';
						});
					} else {
						window.RuleZFramework.components.progressBar("Pubblicazione in corso...", "Il contenuto del post non dovrebbe essere identico al precedente! ❌", 0, 10, () => { });
					}
				} else if (new_post.id === doc_post.id && Commons.user.nickname !== doc_author) {
					window.RuleZFramework.components.progressBar("Pubblicazione in corso...", "Devi attendere alcuni secondi tra l'invio di un messaggio e l'altro. Riprova tra 20 secondi! ❌", 0, 10, () => {
						// do something...
					});
				} else {
					let res_color = new_post.querySelector('.color');
					doc_post.querySelector('.color').innerHTML = res_color.innerHTML;
				}

				// importa gli stili se non già presenti
				let css = `
					.submit-post {list-style: none; border-bottom: 5px solid #C85B71; margin-top: 0 !important}
					.submit-post .mini_buttons.rt a:nth-child(2):before {display: none}
					.ttl:before {content: '\\f05a'; font-family: fontawesome; font-size: 15pt; float: right; cursor: pointer}
					#blog .submit-post .left {display: none}
				`;
				window.RuleZFramework.DOM.addStylesSheet('live-submit-styles', css);
			}
		}
	}

	// Import RuleZFramework
	if (window.RuleZFramework) {
		myScript();
	} else {
		const framework = document.getElementById('RuleZ-Framework');
		if (!framework) {
			const script = document.createElement('SCRIPT');
			script.id = 'RuleZ-Framework';
			script.src = 'https://ffb.forumfree.net:4999/piloz/PrivateScripts/RuleZFramework.js';
			script.type = 'text/javascript';
			script.addEventListener('load', myScript);
			document.head.appendChild(script);
		} else {
			framework.addEventListener('load', myScript);
		}
	}

	/* Crediti */
	const addCredits = window.Commons.utilities.addScriptCredits;
	addCredits({
		topic: 78011480,
		name: 'Live Submit'
	}, {
		id: 7255317,
		name: '•PiloZ'
	}, {
		id: 'GraficaRuleZ',
		name: 'Grafica RuleZ',
		link: 'https://graficarulez.forumfree.it/'
	});

})();