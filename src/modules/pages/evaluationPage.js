import { renderPageShell } from '../../views/pageShellView.js';
export function render(){
return renderPageShell({title:'Evaluation',lead:'Compare static vs stabilization-only vs adaptive learning under realistic drift and noise.',body:`
<section class='panel'><h2>Configurations</h2><div class='matrix'><article class='card'><h3>Static</h3><p>No adaptation after deployment.</p></article><article class='card'><h3>Stabilization-only</h3><p>Normalization, gating, threshold stabilization only.</p></article><article class='card'><h3>Adaptive</h3><p>Prototype learning with confidence gating, drift monitor, rollback.</p></article></div></section>
<section class='panel' data-reveal><h2>Datasets & Conditions</h2><p>MIMII, ToyADMOS, DCASE Task 2 ASD, plus self-collected BLDC fan recordings across varied environments, placement shifts, abrupt changes, and gradual drift.</p></section>
<section class='panel' data-reveal><h2>Metrics</h2><p>AUROC, FPR/AUC ASD metrics, false alarms/hour, latency (ms), RAM/Flash footprint, convergence time after shifts, and energy per inference/adaptation cycle.</p><p class='inline-code'>Ablations: mel bins 24 vs 32 · frames 64 vs 96 · FFT 256 vs 512 · sample rate 8 kHz vs 16 kHz.</p></section>
`});
}
