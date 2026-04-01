import { renderPageShell } from '../../views/pageShellView.js';
import { proposalMeta } from '../../models/contentModel.js';
export function render(){return renderPageShell({title:'About / Proposal Information',lead:'Academic metadata for the research proposal.',body:`<section class='panel'><div class='grid cols-2'>
<div><h2>Institution</h2><p><strong>${proposalMeta.university}</strong><br/>${proposalMeta.faculty}<br/>${proposalMeta.degree}</p></div>
<div><h2>People</h2><p><strong>Student:</strong> ${proposalMeta.student}<br/><strong>Supervisor:</strong> ${proposalMeta.supervisor}<br/><strong>Co-Supervisor:</strong> ${proposalMeta.coSupervisor}</p></div>
<div><h2>Proposal</h2><p><strong>${proposalMeta.title}</strong><br/><strong>Submission:</strong> ${proposalMeta.submissionDate}</p></div>
<div><h2>Research Focus</h2><p>ESP32-based acoustic anomaly detection with privacy-first operation and adaptive resilience to real-world drift.</p></div>
</div></section>`});}
