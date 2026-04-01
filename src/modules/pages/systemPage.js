import { renderPageShell } from '../../views/pageShellView.js';
import { section } from '../../views/components/sectionView.js';
import { architectureDiagram } from '../../views/components/diagramView.js';
export function render(){
  return renderPageShell({title:'System Architecture',lead:'I2S microphone to anomaly decision and adaptive on-device updates, without raw audio upload.',body:`
    ${section('Signal Flow Diagram', architectureDiagram())}
    ${section('Hardware / Software Stack', '<ul><li>I2S MEMS microphone at 16 kHz</li><li>ESP32-S3 + FreeRTOS task orchestration</li><li>Feature extraction: MFCC or log-mel</li><li>Inference runtime: TensorFlow Lite for Microcontrollers (int8)</li><li>Local alerting: LED/buzzer/gateway metadata</li></ul>')}
    ${section('Privacy-by-Design', '<p>Raw audio remains on-device. Only alerts, timestamps, and optional compressed feature statistics may be shared.</p>')}
  `});
}
