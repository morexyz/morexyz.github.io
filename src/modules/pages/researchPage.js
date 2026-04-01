import { section } from '../../views/components/sectionView.js';
import { card } from '../../views/components/cardView.js';
import { renderPageShell } from '../../views/pageShellView.js';
export function render(){
  return renderPageShell({title:'Research Overview',lead:'From inference-only TinyML to adaptive, privacy-first edge audio intelligence.',body:`
  ${section('Background', '<p>Edge AI and TinyML now enable microcontrollers to perform real-time audio inference. Mechanical faults often appear as acoustic deviations, making audio an effective sensing modality for machine health monitoring.</p>')}
  ${section('Core Problem', '<p>Offline-trained models degrade under domain shifts: background noise, placement changes, room acoustics, machine aging, and temporal drift. Cloud retraining can violate privacy and latency constraints.</p>')}
  <div class='grid cols-2'>
  ${card('Motivation', 'Privacy, low latency, reliability under intermittent internet, and scalable deployment of local ESP32 agents.')}
  ${card('Objective 1', 'Build an end-to-end ESP32 audio pipeline for abnormal motor noise detection in real time.')}
  ${card('Objective 2', 'Develop lightweight prototype-based on-device adaptation for drift robustness.')}
  ${card('Research Gaps', 'Limited ESP32 privacy-first deployments, adaptation under drift, and resource/false alarm reporting.')}
  </div>
  `});
}
