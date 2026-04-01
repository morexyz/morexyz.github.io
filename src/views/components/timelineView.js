export function gantt(items) {
  return `<div class="panel">${items.map((i)=>`<div class="gantt-row" data-reveal><strong>${i.label}</strong><div class="gantt-track"><div class="gantt-bar" style="left:${(i.start-1)/12*100}%;width:${(i.end-i.start+1)/12*100}%"></div></div></div>`).join('')}</div>`;
}
