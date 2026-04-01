import { heroView } from '../../views/components/heroView.js';
import { section } from '../../views/components/sectionView.js';
import { metricGrid } from '../../views/components/metricGridView.js';
import { architectureDiagram } from '../../views/components/diagramView.js';
import { renderPageShell } from '../../views/pageShellView.js';

export function render() {
  return renderPageShell({
    title: 'Home',
    lead: 'A privacy-preserving edge-AI proposal for adaptive motor sound anomaly monitoring on ESP32.',
    body: `${heroView()}${section('Research Impact', metricGrid([{k:'Privacy',v:'No raw audio cloud upload.'},{k:'Latency',v:'Immediate local anomaly alerting.'},{k:'Reliability',v:'Operates even under poor connectivity.'},{k:'Scalability',v:'Low-cost distributed edge agents.'}]))}${section('Architecture Preview', architectureDiagram())}`
  });
}
