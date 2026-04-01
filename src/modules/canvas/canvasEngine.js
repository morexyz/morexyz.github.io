export function initCanvasEngine(container){
  const c = document.createElement('canvas'); c.width = 320; c.height = 120; container.append(c);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1a2a4f'; ctx.fillRect(0,0,c.width,c.height); ctx.fillStyle='#7f87ff'; ctx.fillRect(20,50,280,2);
}
