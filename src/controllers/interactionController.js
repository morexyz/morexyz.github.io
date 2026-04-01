export function createInteractionController(){
  return { init(root){
    root.addEventListener('mouseover', (e)=>{ if(e.target.closest('.btn,.card,.nav-link')) e.target.closest('.btn,.card,.nav-link')?.classList.add('is-hover'); });
    root.addEventListener('mouseout', (e)=>{ e.target.closest('.is-hover')?.classList.remove('is-hover'); });
  }};
}
