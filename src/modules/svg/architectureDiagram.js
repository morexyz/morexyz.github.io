import { node } from './svgPresets.js';
export function architectureDiagramSVG() {
  return `<svg viewBox="0 0 980 340" role="img" aria-labelledby="arch-title arch-desc"><title id="arch-title">ESP32 on-device audio architecture</title><desc id="arch-desc">I2S mic to ESP32 tasks to local alert and adaptive learning, with privacy-by-design and no raw audio upload.</desc>
  ${node(20,40,110,48,'I2S MEMS Mic')}
  ${node(160,40,120,48,'ESP32 / FreeRTOS')}
  ${node(310,40,120,48,'Capture+Framing')}
  ${node(460,40,140,48,'MFCC / log-mel')}
  ${node(630,40,120,48,'TFLM int8 CNN')}
  ${node(780,40,110,48,'Anomaly Score')}
  ${node(780,118,110,48,'Local Alert')}
  ${node(620,210,180,62,'On-device Adaptation')}
  ${node(820,210,130,62,'Gateway / Dashboard')}
  ${node(420,210,170,62,'microSD Features Only')}
  <g stroke="#4bc0ff" stroke-width="2" fill="none">
    <path data-stroke d="M130 64H160"/><path data-stroke d="M280 64H310"/><path data-stroke d="M430 64H460"/><path data-stroke d="M600 64H630"/><path data-stroke d="M750 64H780"/>
    <path data-stroke d="M835 88V118"/><path data-stroke d="M835 166V210H800"/><path data-stroke d="M950 241H800"/><path data-stroke d="M620 241H590"/>
  </g>
  <text x="20" y="320" fill="#50d89a" font-size="13">Privacy-by-design: no raw audio upload; alerts/metadata only.</text>
  </svg>`;
}
