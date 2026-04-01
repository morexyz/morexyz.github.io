export function metricGrid(items){
  return `<div class="impact-strip">${items.map((i)=>`<div class="card"><div class="kv"><strong>${i.k}</strong>${i.v}</div></div>`).join('')}</div>`;
}
