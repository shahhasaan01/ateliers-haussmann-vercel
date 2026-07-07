'use client';
import { useState } from 'react';
import { trackLead, getMetaCookies } from '@/lib/analytics';

const SERVICES_LIST = [
  'Pompe à chaleur',
  'Ballon thermodynamique',
  'Système solaire combiné',
  'Climatisation',
];

export default function QuoteForm({ variant = 'dark', service = '' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [data, setData] = useState({ prenom: '', nom: '', telephone: '', email: '', codePostal: '', service: service, message: '' });

  const handleChange = e => setData(d => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          sourcePage: window.location.pathname,
        }),
      });
      if (res.ok) {
        setStatus('done');
        const eventId = crypto.randomUUID();
        const service = data.service || 'General';

        trackLead(service, eventId);

        const { fbp, fbc } = getMetaCookies();
        fetch('/api/meta-conversion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventId,
            ...data,
            eventSourceUrl: window.location.href,
            fbp,
            fbc,
          }),
        }).catch(() => {});
      } else {
        setStatus('error');
      }
    } catch { setStatus('error'); }
  };

  const dark = variant === 'dark';
  const inp = dark ? 'form-input-dark' : 'form-input';

  if (status === 'done') return (
    <div style={{textAlign:'center',padding:'2.5rem 1.5rem'}}>
      <div style={{width:48,height:48,margin:'0 auto 1rem',background:'rgba(184,92,56,.15)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--terracotta-light)'}}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.25rem',fontWeight:600,color:dark?'white':'var(--forest)',marginBottom:'.65rem'}}>Demande envoyée</h3>
      <p style={{color:dark?'rgba(255,255,255,.55)':'var(--text-muted)',lineHeight:1.7,fontSize:'.9rem'}}>
        Nous vous recontactons sous 24 h.<br/>
        Urgence : <a href="tel:0180892458" style={{color:'var(--terracotta)',fontWeight:600}}>01 80 89 24 58</a>
      </p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label">Prénom *</label>
          <input required name="prenom" value={data.prenom} onChange={handleChange} placeholder="Jean" className={inp} />
        </div>
        <div className="form-field">
          <label className="form-label">Nom *</label>
          <input required name="nom" value={data.nom} onChange={handleChange} placeholder="Dupont" className={inp} />
        </div>
        <div className="form-field">
          <label className="form-label">Téléphone *</label>
          <input required name="telephone" value={data.telephone} onChange={handleChange} placeholder="06 XX XX XX XX" className={inp} type="tel" />
        </div>
        <div className="form-field">
          <label className="form-label">Code postal *</label>
          <input required name="codePostal" value={data.codePostal} onChange={handleChange} placeholder="75001" className={inp} />
        </div>
        <div className="form-field full">
          <label className="form-label">Email</label>
          <input name="email" value={data.email} onChange={handleChange} placeholder="jean.dupont@email.com" className={inp} type="email" />
        </div>
        <div className="form-field full">
          <label className="form-label">Service souhaité *</label>
          <select required name="service" value={data.service} onChange={handleChange} className={inp}>
            <option value="">Sélectionnez un service…</option>
            {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-field full">
          <label className="form-label">Message (optionnel)</label>
          <textarea name="message" value={data.message} onChange={handleChange} placeholder="Décrivez votre projet…" className={inp} rows={3} style={{resize:'vertical'}} />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{width:'100%',justifyContent:'center',marginTop:'1rem',opacity:status==='sending'?.7:1}}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      {status === 'error' && <p style={{color:'#e07070',textAlign:'center',marginTop:'.65rem',fontSize:'.84rem'}}>Erreur — appelez-nous : 01 80 89 24 58</p>}
      <p className="form-privacy">Vos données restent confidentielles. Aucun spam.</p>
    </form>
  );
}
