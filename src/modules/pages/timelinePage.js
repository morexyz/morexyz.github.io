import { renderPageShell } from '../../views/pageShellView.js';
import { gantt } from '../../views/components/timelineView.js';
const items=[
{label:'Literature & proposal',start:1,end:2},
{label:'Hardware + pipeline',start:1,end:3},
{label:'Dataset preparation',start:1,end:4},
{label:'Baseline + quantization',start:2,end:4},
{label:'TFLM deployment',start:3,end:6},
{label:'Adaptive module',start:5,end:8},
{label:'Evaluation + ablation',start:7,end:10},
{label:'Thesis writing',start:10,end:12}
];
export function render(){return renderPageShell({title:'12-Month Timeline',lead:'Responsive Gantt-like schedule for technical execution and reporting.',body:gantt(items)});}
