// Awareness Raising Alert
(function () {
    let myScript = () => {
        if (document.body.id != 'board' && (document.domain != 'graficarulez.forumfree.it' || document.domain == 'graficarulez.forumfree.it' && localStorage.getItem('limit-gr-ads') != 'true')) {
            let d = new Date();
            if (localStorage.getItem('awareness-raising-alert') != d.getDate() && localStorage.getItem('awareness-raising-alert') != d.getDate() - 1 && localStorage.getItem('awareness-raising-alert') != d.getDate() - 2) {
                let active_alerts = scriptInfo.settings.active_alerts;

                let awarenessRaisingAlert = document.createElement('div');
                awarenessRaisingAlert.className = 'awareness-raising-alert';

                let alert_title;
                let alert_text;
                let alert_image;

                let random_alert = window.RuleZFramework.utilities.randomFromArrays(active_alerts);

                if (random_alert) {
                    if (random_alert == 'Covid-19') {
                        if ([0, 1].random() == 0) {
                            alert_title = `NOI DI ${document.domain.replace('.forumfree.it', '')} CI TENIAMO ALLA TUA SALUTE!`;
                            alert_text = `In questi giorni i casi sono in crescita. Solo insieme potremo superare questo periodo difficile.<br>Usa sempre le mascherine e rispetta tutte le indicazioni.`;
                            alert_image = 'https://image.forumfree.it/7/2/5/5/3/1/7/1603645762.png';
                        } else {
                            alert_title = `VACCINARSI E' IMPORTANTE!`;
                            alert_text = `In questi giorni i casi sono in crescita. Solo insieme potremo superare questo periodo difficile. <br>Non sottovalutare l'importanza della Vaccinazione!`
                            alert_image = 'https://image.forumfree.it/7/2/5/5/3/1/7/1638182543.png';
                        }
                    } else if (random_alert == 'Rispetto delle Donne') {
                        alert_title = `RISPETTIAMO LE DONNE`;
                        alert_text = `Rispettiamo le donne, oggi ed ogni giorno della nostra vita. Aderisci all'<a href="https://graficarulez.forumfree.it/?t=77411226">iniziativa</a> sul circuito per sostenere la causa!`;
                        alert_image = 'https://upload.forumfree.net/i/ff7255317/women-rights.png';
                    } else if (random_alert == 'NO al Razzismo') {
                        alert_title = `NO AL RAZZISMO`;
                        alert_text = `Su questa Terra, noi umani, siamo tutti uguali. Rispettando il prossimo rispettiamo noi stessi e il senso stesso della nostra vita.`;
                        alert_image = 'https://upload.forumfree.net/i/ff7255317/no-racism.png';
                    } else if (random_alert == 'No al Bullismo e al Cyber Bullismo') {
                        alert_title = `NO AL BULLISMO E AL CYBER BULLISMO`;
                        alert_text = `Aderisci all'<a href="https://graficarulez.forumfree.it/?t=67337803">iniziativa</a> sul circuito per sostenere la causa!`;
                        alert_image = 'https://upload.forumfree.net/i/ff7255317/bullying.png';
                    } else if (random_alert == 'Supporto Comunità LGBTQ+') {
                        alert_title = `SUPPORTO COMUNITA' LGBTQ+`;
                        alert_text = `${document.domain.replace('.forumfree.it', '')} appoggia la Comunità LGBTQ+!`;
                        alert_image = 'https://upload.forumfree.net/i/ff7255317/rainbow-flag.png';
                    } else if (random_alert == 'Importanza del Voto') {
                        alert_title = `IMPORTANZA DEL VOTO`;
                        alert_text = `Sapevi che il tuo voto può fare la differenza? Esprimi i tuoi pensieri e le tue idee attraverso il voto!`;
                        alert_image = 'https://upload.forumfree.net/i/ff7255317/vote.png';
                    }
                } else {
                    alert_title = `OPS... SEMBRA CHE CI SIA UN PROBLEMA!`;
                    alert_text = `Contatta l'amministratore e invitalo ad aderire ad una delle Campagne di Sensibilizzazione proposte nella configurazione dello Script o alla rimozione di quest'ultimo. Scopri di più`;
                    alert_image = 'https://upload.forumfree.net/i/ff7255317/close.png';
                }

                awarenessRaisingAlert.innerHTML = `<b class="awareness-raising-alert-title">${alert_title}</b><br><div style="float: right; margin-left: 5px; margin-right: 5px"><img class="awareness-raising-alert-icon" src="${alert_image}"></div>${alert_text}`;

                document.body.appendChild(awarenessRaisingAlert);

                setTimeout(function () {
                    localStorage.setItem('awareness-raising-alert', d.getDate());
                    awarenessRaisingAlert.style.bottom = '2%';
                    window.RuleZFramework.animations.translations.bottomEnter(awarenessRaisingAlert, .65, 0);

                    setTimeout(() => {
                        window.RuleZFramework.animations.translations.bottomExit(awarenessRaisingAlert, .65, 0);
                        awarenessRaisingAlert.style.bottom = '-30%';
                    }, 4000);
                }, 300);

                let css = `
                    .awareness-raising-alert {background: #F8F8F8; position: fixed; bottom: -30%; right: 8%; text-align: left; padding: 15px; max-width: 38%; box-shadow: 0 0 15px #00000040; transition: .3s ease-out; font-size: 11pt; border: 3px solid #C85B71; z-index: 100}
                    .awareness-raising-alert-icon {width: 64px; height: 64px}
                    .awareness-raising-alert-title {color: #C85B71; font-size: 14pt; text-transform: uppercase}
                    .bodyalt .awareness-raising-alert {background: #272A30}
                    
                    @media screen and (max-width: 800px) {
                        .awareness-raising-alert {
                            max-width: 75%
                        }
                    }
                `;
                window.RuleZFramework.DOM.addStylesSheet('awareness-raising-alert-styles', css);
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
        topic: 78005737,
        name: 'Awareness Raising Alert'
    }, {
        id: 7255317,
        name: '•PiloZ'
    }, {
        id: 'GraficaRuleZ',
        name: 'Grafica RuleZ',
        link: 'https://graficarulez.forumfree.it/'
    });
})();