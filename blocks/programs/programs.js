
export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const heading = col.querySelector('h3');
      const htmlArr = heading.innerHTML.split('<br>');
      heading.innerHTML = `<span>${htmlArr[0]}</span>${htmlArr[1]}`
    });
  })
}
