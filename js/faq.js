let coviddata = '';

fetch('https://nepalcorona.info/api/v1/faqs')
    .then(response => {
        return response.json()
    })
    .then(covid => {
        console.log(covid);


        var faq = covid.data;
        for (var i = 0; i < faq.length; i++) {

            //For News Question in English
            let question = document.createElement('h1');
            question.innerHTML = faq[i].question;
            question.style.paddingRight = '8px';
            question.style.fontSize = '22px';

            //For News Question in Nepali
            let question_np = document.createElement('h1')
            question_np.innerHTML =faq[i].question_np
            question_np.style.fontSize = '22px'

            //Display Answer in English
            var answer = document.createElement('p')
            answer.innerHTML = 'Answer: <br> '+ faq[i].answer;

            //For News Answer in Nepali
            let answer_np = document.createElement('a')
            answer_np.innerHTML = ' उत्तर: <br>'+ faq[i].answer_np

            //For Category
            let category = document.createElement('div')
            category.innerHTML = ' Category: '+faq[i].category;

            //Merge usersData
            var merge = document.createElement('div')
            merge.appendChild(question);
            merge.appendChild(question_np);
            merge.appendChild(category);
            merge.appendChild(answer);
            merge.appendChild(answer_np);
            merge.style.padding = '10px';
            merge.style.alignItems = 'center';
            merge.style.borderRadius = '3%';
            merge.style.width = '800px';
            merge.style.margin = '5px auto';
            merge.style.backgroundColor = '#faf4ff'
            document.body.appendChild(merge);
        }
    })