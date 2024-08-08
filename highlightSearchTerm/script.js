const $box = document.getElementById('box_1')
const $search = document.getElementById('search')

$search.addEventListener('input', (event) => {
  console.log(event.target.value)
  const searchText = event.target.value
  const regex = new RegExp(searchText, 'gi')

  let text = $box.innerHTML
  text = text.replace(/(<mark class="highlighted">|<\/mark>)/gim, '')

  const newText = text.replace(regex, '<mark class="highlighted">$&</mark>')
  $box.innerHTML = newText
})

function highlightSearchTerm() {
  console.log('highlight')

  let text = $box.innerHTML
  const searchTerm = 'Java'
  const regex = new RegExp(searchTerm, 'gi')
  const markTag = '<mark class="highlighted">$&</mark>'

  // remove previous highlights
  text = text.replace(/(<mark class="highlighted">|<\/mark>)/gim, '')

  // add new highlights
  const newText = text.replace(regex, markTag)
  $box.innerHTML = newText
}
