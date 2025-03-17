
document.getElementById('date').innerHTML = new Date().toDateString();


const table = document.querySelector('table')
const button = document.querySelector('button')

function createLi(){
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');


    
    const tr = document.createElement('tr');
    const Aut = document.createElement('input');
    Aut.textContent = '';
    const Tit = document.createElement('input');
    Tit.textContent = '';
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    const a = document.createElement('text');
    const t = document.createElement('text');


    td1.appendChild(a);
    td2.appendChild(t);
    


    td1.appendChild(Aut);
    td2.appendChild(Tit);
    td3.appendChild(removeBtn);
    td3.appendChild(saveBtn);
    table.appendChild(tr);

    a.setAttribute('hidden', 0);
    t.setAttribute('hidden', 0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);


    function removeLi(){
        table.removeChild(tr)
    }

    removeBtn.addEventListener('click', removeLi);

    function saveLi(){
        if(saveBtn.textContent == 'Save'){
            a.textContent = Aut.value;
            t.textContent = Tit.value;
            Aut.setAttribute('hidden', 0);
            Tit.setAttribute('hidden', 0);
            a.removeAttribute('hidden', 0);
            t.removeAttribute('hidden', 0);

            // tr.removeChild(Aut);
            // tr.removeChild(Tit);

            saveBtn.textContent = 'Edit';
        }
        

        else{
        Aut.textContent = a.value;
        Tit.textContent = t.value;
        Aut.removeAttribute('hidden', 0);
        Tit.removeAttribute('hidden', 0);
        a.setAttribute('hidden', 0);
        t.setAttribute('hidden', 0);
        saveBtn.textContent = 'Save';
        };
    }

    saveBtn.addEventListener('click', saveLi);


}

button.addEventListener('click', createLi);


// tabela do listy



