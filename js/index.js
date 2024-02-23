const form = document.getElementById('github-form');
const input = document.getElementById('search');
const ul = document.getElementById('user-list');
const li = document.createElement('li');
ul.appendChild(li);


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    handleQuery(e.target.search.value)
    form.reset();
})

function handleQuery(query){
    fetch(`https://api.github.com/users/${query}`)
        .then(res=> res.json())
        .then(data => {
            li.innerHTML =` <a href = "https://github.com/${data.login}" ><img src = "${data.avatar_url}">${data.login}</a>`
        })
        .catch(error => li.innerHTML = error.message)
}