import { renderPageShell } from '../../views/pageShellView.js';
import { section } from '../../views/components/sectionView.js';
export function render(){return renderPageShell({title:'Methodology / Adaptation',lead:'Two-layer adaptation strategy for robust anomaly monitoring on MCU-class hardware.',body:`
${section('Offline Training', '<p>Train a lightweight embedding model offline using machine-sound data, then quantize to int8 and deploy to ESP32. Input baseline: compact log-mel patch (e.g., 32 mel bins × ~96 frames at 10 ms hop).</p>')}
${section('On-device Inference', '<p>Capture → framing → MFCC/log-mel extraction → frozen feature extractor → one-class anomaly distance score.</p>')}
${section('Stabilization (Non-learning)', '<ul><li>VAD gating</li><li>running normalization</li><li>conservative threshold stabilization</li><li>skip updates during silence/heavy noise</li></ul>')}
${section('On-device Learning', '<p>Maintain a prototype in embedding space. Update only with high-confidence normal samples using EMA. Use dual thresholds (alarm threshold + stricter learning threshold) with drift monitoring and rollback.</p>')}
`});}
