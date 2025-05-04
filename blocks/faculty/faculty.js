
export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const para = col.querySelectorAll('P');
      if(para) {
       para[1].classList.add('department')
      }
    });
  })
}
